// /src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResp = { ok: boolean; message: string; code?: string; spam?: boolean };

// ===== 可選：Upstash Redis 速率限制 =====
const RL_MAX = Number(process.env.CONTACT_RL_MAX ?? 20); // 每小時最大次數
const RL_WINDOW = 60 * 60; // 秒

async function rateLimit(ip: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { allowed: true, remaining: RL_MAX }; // 未設定則不啟用

  const key = `rl:contact:${ip}`;
  const resp = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, RL_WINDOW],
      ['GET', key],
    ]),
  });

  if (!resp.ok) return { allowed: true, remaining: RL_MAX };
  const data = (await resp.json()) as { result: [number, number, string] };
  const count = Number(data?.result?.[2] ?? '1');
  return { allowed: count <= RL_MAX, remaining: Math.max(RL_MAX - count, 0) };
}

// ===== 取得 IP（相容反代） =====
function getIp(req: NextApiRequest) {
  const xf = req.headers['x-forwarded-for'];
  if (typeof xf === 'string') return xf.split(',')[0].trim();
  if (Array.isArray(xf)) return xf[0];
  return req.socket.remoteAddress || '0.0.0.0';
}

// ===== 安全轉義 =====
function escapeHtml(input: string) {
  return String(input)
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#039;');
}

// 小工具：從 unknown 取錯誤代碼
function getErrorCode(e: unknown): string {
  if (typeof e === 'object' && e !== null && 'code' in e) {
    const c = (e as { code?: unknown }).code;
    return typeof c === 'string' ? c : '';
  }
  return '';
}

// ===== 寄信：SMTP（Nodemailer） =====
async function sendViaSMTP(payload: {
  name: string; phone: string; email: string; message: string;
}) {
  const host = process.env.MAIL_HOST;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const port = Number(process.env.MAIL_PORT || 465);
  if (!host || !user || !pass) {
    throw Object.assign(new Error('SMTP not configured'), { code: 'SMTP_CONFIG_MISSING' });
  }

  // 動態 import，型別使用模組型別
  let nodemailer: typeof import('nodemailer') | undefined;
  try {
    nodemailer = await import('nodemailer');
  } catch {
    throw Object.assign(new Error('nodemailer not installed'), { code: 'SMTP_LIB_MISSING' });
  }

  const secure = port === 465;
  const transporter = nodemailer.createTransport({
    host, port, secure,
    auth: { user, pass },
  });

  const html = `
    <h3>新的客服表單</h3>
    <p><strong>姓名：</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>電話：</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email：</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>內容：</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
    <hr />
    <small>此信由官網表單自動發送</small>
  `;

  await transporter.sendMail({
    from: process.env.MAIL_FROM || user,
    to: process.env.MAIL_TO || 'frank.fu@bdb.com.tw',
    subject: `📩 客服表單 - ${String(payload.name).slice(0, 60)}`,
    replyTo: `${payload.name} <${payload.email}>`,
    html,
  });
}

// ===== 寄信：SendGrid HTTP API（回退或主供應商） =====
async function sendViaSendGrid(payload: {
  name: string; phone: string; email: string; message: string;
}) {
  const key = process.env.SENDGRID_API_KEY;
  const from = process.env.SENDGRID_FROM || process.env.MAIL_FROM;
  const to = process.env.SENDGRID_TO || process.env.MAIL_TO || 'frank.fu@bdb.com.tw';
  if (!key || !from) {
    throw Object.assign(new Error('SendGrid not configured'), { code: 'SG_CONFIG_MISSING' });
  }

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject: `📩 客服表單 - ${String(payload.name).slice(0, 60)}`,
    reply_to: { email: payload.email, name: payload.name },
    content: [
      {
        type: 'text/html',
        value: `
          <h3>新的客服表單</h3>
          <p><strong>姓名：</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>電話：</strong> ${escapeHtml(payload.phone)}</p>
          <p><strong>Email：</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>內容：</strong></p>
          <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
          <hr />
          <small>此信由官網表單自動發送（SendGrid）</small>
        `,
      },
    ],
  };

  const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (resp.status !== 202) {
    const txt = await resp.text().catch(() => '');
    throw Object.assign(new Error(`SendGrid error ${resp.status}: ${txt}`), { code: 'SG_SEND_FAILED' });
  }
}

// ===== 主處理 =====
export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResp>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' });
  }

  const { name, phone, email, message, website } = req.body || {};

  // 蜜罐命中：直接成功（不打擾使用者）
  if (website) {
    return res.status(200).json({ ok: true, message: 'OK', spam: true });
  }

  // 欄位檢查
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields', code: 'BAD_REQUEST' });
  }

  // 速率限制（若有設 Upstash）
  try {
    const ip = getIp(req);
    const rl = await rateLimit(ip);
    if (!rl.allowed) {
      return res
        .status(429)
        .json({ ok: false, message: '送出太頻繁，請稍後再試。', code: 'RATE_LIMIT' });
    }
  } catch {
    // 速率限制故障時不擋流
  }

  // 寄信優先順序（預設 SMTP → SendGrid）
  const order = (process.env.MAIL_PRIORITY || 'SMTP,SENDGRID')
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);

  let lastErr: unknown = null;

  for (const provider of order) {
    try {
      if (provider === 'SMTP') {
        await sendViaSMTP({ name, phone, email, message });
        return res.status(200).json({ ok: true, message: '信件已成功送出' });
      }
      if (provider === 'SENDGRID') {
        await sendViaSendGrid({ name, phone, email, message });
        return res.status(200).json({ ok: true, message: '信件已成功送出' });
      }
    } catch (err: unknown) {
      lastErr = err; // 紀錄並嘗試下一個供應商
    }
  }

  const code = getErrorCode(lastErr) || (lastErr instanceof Error ? lastErr.name : 'MAIL_ERROR');

  console.error('寄信失敗（所有供應商皆失敗）:', {
    code,
    msg: lastErr instanceof Error ? lastErr.message : String(lastErr),
  });

  return res.status(502).json({
    ok: false,
    code,
    message: '寄信服務暫時不可用，請稍後再試或改用電話/信箱聯繫。',
  });
}
