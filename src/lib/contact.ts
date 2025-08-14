export const MSG = {
  ok: '已送出，我們會盡快與您聯繫。',
  fill: '請完整填寫必填欄位。',
  email: '請輸入正確的 Email 格式。',
  timeout: '連線逾時，請稍後再試。',
  net: '網路異常，請檢查連線後重試。',
  fail: '送出失敗，請稍後再試。',
} as const;

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export type ApiResp = { ok: boolean; message?: string };

export type FetchResult =
  | 'success'
  | { error: 'TIMEOUT' | 'NETWORK' | 'API'; msg?: string };

function isAbortError(e: unknown): boolean {
  return e instanceof DOMException && e.name === 'AbortError';
}

function isApiResp(v: unknown): v is ApiResp {
  return !!v && typeof v === 'object' && 'ok' in v;
}

export async function fetchJsonWithTimeout(
  url: string,
  init: RequestInit,
  ms = 15000
): Promise<FetchResult> {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), ms);

  try {
    const res = await fetch(url, { ...init, signal: ac.signal });

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      // ignore invalid JSON
    }

    if (res.ok) {
      return isApiResp(data) ? (data.ok ? 'success' : { error: 'API', msg: data.message }) : 'success';
    }

    return isApiResp(data)
      ? { error: 'API', msg: data.message }
      : { error: 'API' };
  } catch (e) {
    return isAbortError(e)
      ? { error: 'TIMEOUT' }
      : { error: 'NETWORK' };
  } finally {
    clearTimeout(timer);
  }
}
