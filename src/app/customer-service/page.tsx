'use client';

import { useState, useRef, FormEvent } from 'react';

export default function CustomerServicePage() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // 取得錯誤訊息
  function getErrorMessage(e: unknown): string {
    if (e instanceof Error) return e.message;
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  }

  // 判斷是否為逾時錯誤
  function isAbortError(e: unknown): boolean {
    return (
      (e instanceof DOMException && e.name === 'AbortError') ||
      (typeof e === 'object' &&
        e !== null &&
        'name' in e &&
        (e as { name?: string }).name === 'AbortError')
    );
  }

  // 包裝 fetch + timeout
  async function requestOnce(url: string, options: RequestInit) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 30000); // 30秒逾時

    try {
      const res = await fetch(url, { ...options, signal: ctrl.signal });
      if (!res.ok) return { error: 'SERVER', msg: `HTTP ${res.status}` };
      return await res.json();
    } catch (err: unknown) {
      if (isAbortError(err)) return { error: 'TIMEOUT' };
      return { error: 'NETWORK', msg: getErrorMessage(err) };
    } finally {
      clearTimeout(t);
    }
  }

  // 處理送出
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setOk(null);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const result = await requestOnce('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result || result.error) {
      if (result?.error === 'TIMEOUT') {
        setOk('連線逾時，請稍後再試。');
      } else if (result?.error === 'NETWORK') {
        setOk('網路異常，請檢查連線後重試。');
      } else {
        setOk('送出失敗，請稍後再試。');
      }
    } else if (result.ok) {
      setOk('已送出，我們會盡快與您聯繫。');
      formRef.current?.reset();
    } else {
      setOk(result.message || '送出失敗，請稍後再試。');
    }

    setSending(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">聯絡我們</h1>
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
        <input name="name" placeholder="姓名 *" required className="w-full p-2 border" />
        <input name="phone" placeholder="電話 *" required className="w-full p-2 border" />
        <input
          type="email"
          name="email"
          placeholder="電子信箱 *"
          required
          className="w-full p-2 border"
        />
        <textarea
          name="message"
          placeholder="內容 *"
          required
          className="w-full p-2 border h-32"
        ></textarea>
        <button
          type="submit"
          disabled={sending}
          className="bg-green-700 text-white px-6 py-2 rounded"
        >
          {sending ? '送出中…' : '填完送出 →'}
        </button>
      </form>
      {ok && <p className="text-center mt-4 text-green-600">{ok}</p>}
    </div>
  );
}
