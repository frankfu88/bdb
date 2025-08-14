import type { Transporter } from 'nodemailer';
import * as nodemailer from 'nodemailer';

export type SendResult =
  | { ok: true; provider: 'smtp' }
  | { ok: false; provider: 'smtp'; errorCode?: string; errorMessage?: string };

function normalizeError(e: unknown): { name: string; message: string } {
  if (e instanceof Error) return { name: e.name, message: e.message };
  return { name: 'Error', message: String(e) };
}

function buildSmtpTransporter(): Transporter | null {
  const host = process.env.MAIL_HOST;
  const portStr = process.env.MAIL_PORT;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  if (!host || !portStr || !user || !pass) return null;

  const port = Number(portStr);
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(port === 587 ? { requireTLS: true } : {}),
    connectionTimeout: 15000,
    socketTimeout: 20000,
  });
}

export async function sendMail(opts: {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const transporter = buildSmtpTransporter();
  if (!transporter) {
    return {
      ok: false,
      provider: 'smtp',
      errorCode: 'SMTP_CONFIG_MISSING',
      errorMessage: '缺少 SMTP 設定',
    };
  }

  try {
    const login = process.env.MAIL_USER || opts.from;
    await transporter.sendMail({
      from: opts.from,
      sender: login,
      envelope: { from: login, to: Array.isArray(opts.to) ? opts.to : [opts.to] },
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    });

    return { ok: true, provider: 'smtp' };
  } catch (e: unknown) {
    const { name, message } = normalizeError(e);
    return { ok: false, provider: 'smtp', errorCode: name, errorMessage: message };
  }
}
