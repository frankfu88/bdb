// src/pages/api/smtp-test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 簡易權杖保護（避免被隨便打爆）
  const token = req.headers['x-smtp-test-token'] || req.query.token;
  if (!process.env.SMTP_TEST_TOKEN) {
    return res.status(503).json({ ok: false, message: 'SMTP test disabled: missing SMTP_TEST_TOKEN' });
  }
  if (token !== process.env.SMTP_TEST_TOKEN) {
    return res.status(401).json({ ok: false, message: 'Unauthorized' });
  }

  const port = Number(process.env.MAIL_PORT || 465);
  const secure = port === 465; // 465 => SSL, 587 => STARTTLS

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port,
    secure,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // 先驗證連線/認證
    await transporter.verify();

    // 若是 POST，順便寄一封測試信
    if (req.method === 'POST') {
      const { to } = (req.body ?? {}) as { to?: string };
      const toAddr = to || process.env.SMTP_TEST_TO || process.env.MAIL_USER;

      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.MAIL_USER,
        to: toAddr,
        subject: '✅ SMTP 測試信 (BDB 官網)',
        text: '這是一封由 smtp-test API 寄出的測試信件。',
      });

      return res.status(200).json({ ok: true, mode: 'send', message: `已寄出測試信到 ${toAddr}` });
    }

    // GET 只做 verify
    return res.status(200).json({ ok: true, mode: 'verify', message: 'SMTP 連線與認證成功' });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('SMTP 測試失敗:', msg);
    return res.status(500).json({ ok: false, message: 'SMTP 測試失敗', error: msg });
  }

}
