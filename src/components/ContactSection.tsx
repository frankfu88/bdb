// /src/components/ContactSection.tsx
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { MSG, fetchJsonWithTimeout } from '@/lib/contact';

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const clearNoteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 統一顯示訊息（可自動清除）
  function showNote(msg: string, autoClearMs = 5000) {
    setNote(msg);
    if (clearNoteTimer.current) {
      clearTimeout(clearNoteTimer.current);
      clearNoteTimer.current = null;
    }
    if (autoClearMs > 0) {
      clearNoteTimer.current = setTimeout(() => {
        setNote(null);
        clearNoteTimer.current = null;
      }, autoClearMs);
    }
  }

  // 任一輸入時清掉下方提示文字
  function handleAnyInput() {
    if (note) {
      setNote(null);
      if (clearNoteTimer.current) {
        clearTimeout(clearNoteTimer.current);
        clearNoteTimer.current = null;
      }
    }
  }

  // 卸載時清理計時器
  useEffect(() => {
    return () => {
      if (clearNoteTimer.current) {
        clearTimeout(clearNoteTimer.current);
        clearNoteTimer.current = null;
      }
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 表單通過原生驗證後才會進到這裡
    if (sending) return;

    setSending(true);
    setNote(null);

    const el = e.currentTarget;
    const fd = new FormData(el);

    const website = String(fd.get('website') ?? '').trim(); // 蜜罐
    const name = String(fd.get('name') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    try {
      // 若是 bot（填了蜜罐），直接當成功處理
      if (website) {
        el.reset();
        showNote(MSG.ok);
        return;
      }

      // 這裡不再檢查必填與 email 格式，交給瀏覽器原生驗證
      const payload = { name, phone, email, message, website };

      const r = await fetchJsonWithTimeout(
        '/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
        30000
      );

      if (r === 'success') {
        el.reset();
        showNote(MSG.ok);
      } else {
        if (r?.error === 'TIMEOUT') showNote(MSG.timeout);
        else if (r?.error === 'NETWORK') showNote(MSG.net);
        else showNote(MSG.fail);
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-20 overflow-hidden">
      <Image
        src="/images/customer-service/city.png"
        alt="城市背景"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif font-semibold text-4xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          聯絡我們
        </h2>
        <p className="mt-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          我們重視您的聲音，提供即時且專業的協助！
        </p>
      </div>

      <div className="relative mt-10 max-w-4xl mx-auto px-6">
        {/* ⚠️ 移除 noValidate，啟用瀏覽器原生驗證泡泡 */}
        <form onSubmit={onSubmit} onInput={handleAnyInput} className="space-y-5">
          {/* 蜜罐欄位（請勿移除） */}
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
                title="請輸入有效的電話號碼"
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

            {/* 送出後的狀態訊息（與原生必填泡泡互不衝突） */}
            {note && (
              <p className="mt-3 text-green-100" role="status" aria-live="polite">
                {note}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}