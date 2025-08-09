import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

type ApiResp = {
  ok: boolean;
  message: string;
  code?: string;
  spam?: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResp>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' });
  }

  const { name, phone, email, message, website } = req.body || {};

  // 蜜罐命中：直接回成功，但標示 spam，避免前端顯示錯誤
  if (website) {
    return res.status(200).json({ ok: true, message: 'OK', spam: true });
  }

  // 欄位檢查
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields', code: 'BAD_REQUEST' });
  }

  try {
    // 依 port 自動判斷加密
    const port = Number(process.env.MAIL_PORT || 465);
    const secure = port === 465; // 465=SSL, 587=STARTTLS

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port,
      secure,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const html = `
      <h3>新的客服表單</h3>
      <p><strong>姓名：</strong> ${escapeHtml(name)}</p>
      <p><strong>電話：</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email：</strong> ${escapeHtml(email)}</p>
      <p><strong>內容：</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <hr />
      <small>此信由官網表單自動發送</small>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: 'frank.fu@bdb.com.tw', // 主要收件人
    //   cc: 'zoe.ou@bdb.com.tw',    // 副本
      subject: `📩 客服表單 - ${String(name).slice(0, 60)}`,
      replyTo: `${name} <${email}>`,
      html,
    });

    return res.status(200).json({ ok: true, message: '信件已成功送出' });
  } catch (err: any) {
    // 轉換 nodemailer 常見錯誤碼，提供前端更明確訊息
    const raw = String(err?.code || err?.name || '');
    const code =
      raw.includes('EAUTH') ? 'EAUTH' :
      raw.includes('ECONNREFUSED') ? 'ECONNREFUSED' :
      raw.includes('ETIMEDOUT') ? 'ETIMEDOUT' :
      raw.includes('ESOCKET') ? 'ESOCKET' :
      raw.includes('ENOTFOUND') ? 'ENOTFOUND' :
      'MAIL_ERROR';

    console.error('寄信失敗:', { code, raw, msg: err?.message });

    // 一律回 200，避免前端因狀態碼誤判，但 ok=false 讓前端顯示錯誤
    return res.status(200).json({
      ok: false,
      code,
      message:
        code === 'EAUTH' ? 'SMTP 驗證失敗，請檢查帳密或寄件權限' :
        code === 'ECONNREFUSED' ? '無法連線到郵件伺服器（連線被拒）' :
        code === 'ETIMEDOUT' ? '連線逾時，請稍後再試' :
        code === 'ENOTFOUND' ? '找不到郵件伺服器主機名稱' :
        '寄信失敗，請稍後再試',
    });
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
