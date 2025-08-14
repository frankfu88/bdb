import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';
import { ensureSchema, insertContact } from '@/lib/db';

type ApiResp = {
  ok: boolean;
  message: string;
  code?: string;  // MAIL_FAIL / MAIL_DISABLED / ...
  id?: string;
  spam?: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResp>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const { name, phone, email, message, website } = req.body || {};

  // 蜜罐：直接回 201，前端會顯示成功（但不做任何事）
  if (website) {
    return res.status(201).json({ ok: true, message: 'OK', spam: true });
  }

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields' });
  }

  try {
    // 1) 確保 schema 存在
    await ensureSchema();

    // 2) 先落地資料（確保不丟單）
    const meta = {
      ip: (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
          || req.socket?.remoteAddress
          || null,
      user_agent: (req.headers['user-agent'] as string) ?? null,
      referer: (req.headers['referer'] as string) ?? null,
    };
    const row = await insertContact({ name, phone, email, message, website, ...meta });

    // 3) 再嘗試寄信（若沒設 SMTP，視為跳過）
    const mailed = await trySendMail({ name, phone, email, message });

    if (mailed) {
      // 成功：201 + ok:true
      return res.status(201).json({ ok: true, message: '信件已成功送出', id: String(row.id) });
    }

    // 已落地，但通知信失敗或未設定 SMTP：
    // 回 202 + ok:false → 你的前端會顯示這段 message，不會誤判為成功
    return res.status(202).json({
      ok: false,
      code: 'MAIL_FAIL',
      message: '我們已收到表單，但系統通知信暫時未寄出；我們會儘快處理，您也可改用電話或 Email 聯繫。',
      id: String(row.id),
    });

  } catch (err) {
    console.error('Contact API error', err);
    return res.status(500).json({ ok: false, message: '伺服器忙碌，請稍後再試。' });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#039;');
}

async function trySendMail(payload: { name: string; phone: string; email: string; message: string }) {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_FROM } = process.env;

  // 沒設定 SMTP：視為跳過（不擋整體流程）
  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS) {
    console.warn('Mail disabled: missing SMTP env (MAIL_HOST/USER/PASS).');
    return false;
  }

  const port = Number(MAIL_PORT || 465);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port,
    secure,
    auth: { user: MAIL_USER, pass: MAIL_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
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

  try {
    await transporter.sendMail({
      from: MAIL_FROM || MAIL_USER,
      to: 'frank.fu@bdb.com.tw',
      subject: `📩 客服表單 - ${payload.name.slice(0, 60)}`,
      replyTo: `${payload.name} <${payload.email}>`,
      html,
    });
    return true;
  } catch (err) {
    console.error('Mail send failed:', err);
    return false;
  }
}
