export const MSG = {
  ok: '已送出，我們會盡快與您聯繫。',
  fill: '請完整填寫必填欄位。',
  email: '電子信箱格式不正確。',
  timeout: '連線逾時，請稍後再試。',
  net: '網路異常，請檢查連線後重試。',
  fail: '送出失敗，請稍後再試。',
} as const;

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export type ApiResp = { ok: boolean; message?: string };

const isAbort = (e: unknown) =>
  (e instanceof DOMException && e.name === 'AbortError') ||
  (typeof e === 'object' && e !== null && 'name' in e && (e as { name?: string }).name === 'AbortError');

/** 非 JSON 但 2xx 也視為成功 */
export async function fetchJsonWithTimeout(
  url: string,
  init: RequestInit,
  ms = 30000
): Promise<'success' | { error: 'TIMEOUT' | 'NETWORK' | 'API'; msg?: string }> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);
  try {
    const res = await fetch(url, { ...init, signal: ac.signal });
    try {
      const data = (await res.json()) as ApiResp;
      return res.ok && data?.ok ? 'success' : { error: 'API', msg: data?.message };
    } catch {
      return res.ok ? 'success' : { error: 'API' };
    }
  } catch (e: unknown) {
    return isAbort(e) ? { error: 'TIMEOUT' } : { error: 'NETWORK' };
  } finally {
    clearTimeout(t);
  }
}
