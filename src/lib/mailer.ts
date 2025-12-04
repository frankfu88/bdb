// /src/lib/mailer.ts
import type { Transporter } from 'nodemailer';
import * as nodemailer from 'nodemailer';

export type SendResult =
  | { ok: true; provider: 'smtp' }
  | { ok: false; provider: 'smtp'; errorCode?: string; errorMessage?: string };

// 小工具：不要把密碼 log 出來
function mask(str: string | undefined | null, keep = 3) {
  if (!str) return '';
  if (str.length <= keep) return '*'.repeat(str.length);
  return str.slice(0, keep) + '*'.repeat(str.length - keep);
}

// 統一的 log 標籤，方便在 macOS Terminal 搜尋
function logSmtp(...args: unknown[]): void {
  // 會長這樣：
  // 2025-12-04T06:50:00.123Z [SMTP] ...
  console.log(new Date().toISOString(), '[SMTP]', ...args);
}

type NormalizedError = {
  name: string;
  message: string;
  code?: string;
  response?: string;
};

function normalizeError(e: unknown): NormalizedError {
  if (e && typeof e === 'object') {
    const obj = e as Record<string, unknown>;

    const name = typeof obj.name === 'string' ? obj.name : 'Error';
    const message =
      typeof obj.message === 'string'
        ? obj.message
        : JSON.stringify(obj);

    const code = typeof obj.code === 'string' ? obj.code : undefined;
    const response =
      typeof obj.response === 'string' ? obj.response : undefined;

    return { name, message, code, response };
  }

  return { name: 'Error', message: String(e) };
}

function buildSmtpTransporter(): Transporter | null {
  const host = process.env.MAIL_HOST;
  const portStr = process.env.MAIL_PORT;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  // 先把目前抓到的設定 log 出來（密碼打星號）
  logSmtp('環境變數檢查', {
    MAIL_HOST: host,
    MAIL_PORT: portStr,
    MAIL_USER: user,
    MAIL_PASS: mask(pass),
  });

  if (!host || !portStr || !user || !pass) {
    logSmtp('❌ SMTP_CONFIG_MISSING：缺少 host/port/user/pass 其中之一');
    return null;
  }

  const port = Number(portStr);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(port === 587 ? { requireTLS: true } : {}),
    connectionTimeout: 15000,
    socketTimeout: 20000,

    // Nodemailer 內建的 debug（會直接印到 terminal）
    logger: true,
    debug: true,
  });

  logSmtp('建立 Transporter', { host, port, secure, user });

  return transporter;
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

  const login = process.env.MAIL_USER || opts.from;
  const toList = Array.isArray(opts.to) ? opts.to : [opts.to];

  // 寄信前先 log 一次
  logSmtp('準備寄信', {
    envelopeFrom: login,
    headerFrom: opts.from,
    to: toList,
    replyTo: opts.replyTo,
    subject: opts.subject,
  });

  try {
    // 可選：先 verify 一次登入（debug 期間很好用，上線可拿掉）
    try {
      logSmtp('執行 transporter.verify() 測試登入中...');
      await transporter.verify();
      logSmtp('✅ transporter.verify() 成功，SMTP 登入正常');
    } catch (verifyErr) {
      const ve = normalizeError(verifyErr);
      logSmtp('⚠️ transporter.verify() 失敗，但仍嘗試 sendMail', ve);
    }

    await transporter.sendMail({
      from: opts.from,
      sender: login,
      envelope: { from: login, to: toList },
      to: toList,
      subject: opts.subject,
      html: opts.html,
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    });

    logSmtp('✅ 寄信成功', { to: toList, subject: opts.subject });

    return { ok: true, provider: 'smtp' };
  } catch (e: unknown) {
    const { name, message, code, response } = normalizeError(e);
    logSmtp('❌ 寄信失敗', {
      name,
      code,          // e.g. 'EAUTH'
      message,       // e.g. 'Invalid login: 535 authorization failed (#5.7.0)'
      response,      // 有些郵件伺服器會把 535 訊息放在這
    });

    return {
      ok: false,
      provider: 'smtp',
      errorCode: code || name,
      errorMessage: message,
    };
  }
}
