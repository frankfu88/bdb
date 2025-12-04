// /src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '@/lib/mailer';

type ApiResp = {
  ok: boolean;
  message: string;
  provider?: 'smtp';
  mailId?: string;
  code?: string;
};

function escapeHtml(input: string) {
  return String(input)
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#039;');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResp>) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ ok: false, message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' });
  }

  const { name, phone, email, message, website } = (req.body ?? {}) as {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  // 這裡會在 Terminal 打一行簡單的 API log
  console.log('[API /api/contact] 收到表單', {
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    name,
    phone,
    email,
    website,
    messageLength: message?.length ?? 0,
  });

  const isSpam = !!website;
  if (!isSpam) {
    if (!name || !phone || !email || !message) {
      console.log('[API /api/contact] ❌ 缺少必填欄位');
      return res
        .status(400)
        .json({ ok: false, message: '請完整填寫必填欄位', code: 'BAD_REQUEST' });
    }
  }

  // 蜜罐命中：假裝成功
  if (isSpam) {
    console.log('[API /api/contact] 蜜罐命中，視為 spam，直接回成功');
    return res.status(201).json({ ok: true, message: '已收到', provider: undefined });
  }

  const html = `
    <h3>新的客服表單</h3>
    <p><strong>姓名：</strong> ${escapeHtml(name!)} </p>
    <p><strong>電話：</strong> ${escapeHtml(phone!)} </p>
    <p><strong>Email：</strong> ${escapeHtml(email!)} </p>
    <p><strong>內容：</strong></p>
    <p>${escapeHtml(message!).replace(/\n/g, '<br>')}</p>
    <hr />
    <small>此信由官網表單自動發送</small>
  `;

  const to = process.env.MAIL_TO || 'frank.fu@bdb.com.tw';

  console.log('[API /api/contact] 呼叫 sendMail', {
    to,
    subjectPreview: `客服表單 - ${String(name).slice(0, 20)}`,
  });

  const result = await sendMail({
    to,
    subject: `📩 客服表單 - ${String(name).slice(0, 60)}`,
    html,
    replyTo: `${name} <${email}>`,
    from: `BDB 官網表單 <${process.env.MAIL_USER}>`,
  });

  if (result.ok) {
    console.log('[API /api/contact] ✅ sendMail 成功');
    return res.status(201).json({
      ok: true,
      message: '信件已成功送出',
      provider: result.provider,
    });
  }

  console.error(
    '[API /api/contact] ❌ sendMail 失敗',
    result.errorCode,
    result.errorMessage
  );

  return res.status(502).json({
    ok: false,
    message: '寄信失敗，請稍後再試',
    code: result.errorCode,
  });
}
