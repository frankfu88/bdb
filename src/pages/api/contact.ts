// /src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

type ApiResp = { ok: boolean; message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResp>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const { name, phone, email, message, website } = (req.body ?? {}) as Record<string, unknown>;

  // 蜜罐：有填就當成功處理（不回錯）
  if (typeof website === 'string' && website.trim()) {
    return res.status(200).json({ ok: true, message: '已收到資料' });
  }

  // 基本欄位檢查（訪客仍回 200，不外露細節）
  const requiredOk = [name, phone, email, message].every(v => typeof v === 'string' && v.trim());
  if (!requiredOk) {
    return res.status(200).json({ ok: true, message: '已收到資料' });
  }

  // ---- SMTP 設定檢查 ----
  const host = process.env.MAIL_HOST ?? '';
  const port = Number(process.env.MAIL_PORT ?? 465);
  const user = process.env.MAIL_USER ?? '';
  const pass = process.env.MAIL_PASS ?? '';
  const from = (process.env.MAIL_FROM ?? '').trim();
  const to = (process.env.MAIL_TO ?? 'frank.fu@bdb.com.tw').trim();

  if (!host || !port || !user || !pass || !from) {
    console.error('SMTP 未完整設定', { host: !!host, port, user: !!user, pass: !!pass, from: !!from });
    return res.status(200).json({ ok: true, message: '已收到資料' });
  }

  // 465=SSL secure、587=STARTTLS（secure: false）
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // 若供應商需要，可視情況加上：
    // requireTLS: !secure,
    // tls: { ciphers: 'TLSv1.2' },
  });

  const html = renderHtml({
    name: String(name),
    phone: String(phone),
    email: String(email),
    message: String(message),
  });

  try {
    // 可選：連線驗證（較慢，但能先把帳密/連線錯誤在 logs 抓出來）
    await transporter.verify();

    await transporter.sendMail({
      from,
      to,
      subject: `📩 客服表單 - ${String(name).slice(0, 60)}`,
      replyTo: `${name} <${email}>`,
      html,
    });

    return res.status(200).json({ ok: true, message: '信件已成功送出' });
  } catch (e) {
    const code = readCode(e);
    const msg = readMsg(e);
    console.error('SMTP 寄信失敗：', { code, msg });
    // 訪客仍回 200，避免壞體驗
    return res.status(200).json({ ok: true, message: '已收到資料' });
  }
}

function renderHtml(p: { name: string; phone: string; email: string; message: string }) {
  const esc = (s: string) =>
    String(s)
      .replaceAll(/&/g, '&amp;')
      .replaceAll(/</g, '&lt;')
      .replaceAll(/>/g, '&gt;')
      .replaceAll(/"/g, '&quot;')
      .replaceAll(/'/g, '&#039;');
  return `
    <h3>新的客服表單</h3>
    <p><strong>姓名：</strong> ${esc(p.name)}</p>
    <p><strong>電話：</strong> ${esc(p.phone)}</p>
    <p><strong>Email：</strong> ${esc(p.email)}</p>
    <p><strong>內容：</strong></p>
    <p>${esc(p.message).replace(/\n/g, '<br>')}</p>
    <hr />
    <small>此信由官網表單自動發送</small>
  `;
}

function readCode(e: unknown, fallback = 'MAIL_ERROR'): string {
  if (typeof e === 'object' && e && 'code' in e) return String((e as { code?: unknown }).code ?? fallback);
  if (e instanceof Error) return e.name || fallback;
  return fallback;
}
function readMsg(e: unknown): string {
  return e instanceof Error ? e.message : typeof e === 'string' ? e : '';
}
