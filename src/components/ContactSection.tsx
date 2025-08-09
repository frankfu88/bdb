'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MSG, isEmail, fetchJsonWithTimeout } from '@/lib/contact';

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setOk(null);

    const el = e.currentTarget;
    const fd = new FormData(el);
    const website = String(fd.get('website') ?? '').trim();
    const name = String(fd.get('name') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    // ✅ 關鍵修正：明確標註為 string，避免被推斷成字面量型別
    let msg: string = MSG.fail;
    let reset = false;

    try {
      if (website) { msg = MSG.ok; reset = true; return; }
      if (!name || !phone || !email || !message) { msg = MSG.fill; return; }
      if (!isEmail(email)) { msg = MSG.email; return; }

      const payload = { name, phone, email, message, website };
      const first = await fetchJsonWithTimeout('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (first === 'success') { msg = MSG.ok; reset = true; return; }

      if (first.error === 'NETWORK') {
        await new Promise(r => setTimeout(r, 1000));
        const second = await fetchJsonWithTimeout('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (second === 'success') { msg = MSG.ok; reset = true; return; }
        msg = second.error === 'TIMEOUT'
          ? MSG.timeout
          : second.error === 'NETWORK'
          ? MSG.net
          : second.msg || MSG.fail;
        return;
      }

      msg = first.error === 'TIMEOUT' ? MSG.timeout : first.msg || MSG.fail;
    } finally {
      if (reset) el.reset();
      setOk(msg);
      setSending(false); // 按鈕一律回復原文
    }
  }

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-20 overflow-hidden">
      <Image src="/images/customer-service/city.png" alt="城市背景" fill className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif font-semibold text-4xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">聯絡我們</h2>
        <p className="mt-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">我們重視您的聲音，提供即時且專業的協助！</p>
      </div>

      <div className="relative mt-10 max-w-4xl mx-auto px-6">
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          {/* 蜜罐欄位 */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-md font-medium text-white">
                姓名 <span className="text-red-300">*</span>
              </label>
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="請輸入您的姓名"
                className="mt-2 w-full bg-black/30 text-white placeholder-white/80 border border-black rounded-md px-4 py-3 caret-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-white">
                電話 <span className="text-red-300">*</span>
              </label>
              <input
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="^[0-9\\-+\\s()]{6,}$"
                placeholder="請輸入您的電話"
                className="mt-2 w-full bg-black/30 text-white placeholder-white/80 border border-black rounded-md px-4 py-3 caret-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-md font-medium text-white">
              電子信箱 <span className="text-red-300">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="請輸入您的電子信箱"
              className="mt-2 w-full bg-black/30 text-white placeholder-white/80 border border-black rounded-md px-4 py-3 caret-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-white">
              內容 <span className="text-red-300">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="請輸入您的洽詢內容"
              className="mt-2 w-full bg-black/30 text-white placeholder-white/80 border border-black rounded-md px-4 py-3 caret-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={sending}
              className="inline-block min-w-[220px] border-2 border-black text-white bg-black/40 hover:bg-white hover:text-green-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide rounded-md transition disabled:opacity-60"
              aria-busy={sending}
            >
              {sending ? '送出中…' : '填完送出 →'}
            </button>
            {ok && (
              <p className="mt-3 text-green-100" role="status" aria-live="polite">
                {ok}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
