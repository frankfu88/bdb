'use client';

import { useState } from 'react';
import Image from 'next/image';

type ApiResp = { ok: boolean; message: string; code?: string; spam?: boolean };

export default function CustomerServicePage() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  const certs = [
    { src: '/images/certs/coc.jpg', alt: '醫療器材許可證 1' },
    { src: '/images/certs/cqc.jpg', alt: '醫療器材許可證 2' },
  ];

    // ✅ 簡單穩定版送出：延長逾時 + 更精準錯誤判斷
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setOk(null);

    const formEl = e.currentTarget as HTMLFormElement;

    const form = new FormData(formEl);
    const website = String(form.get('website') || '').trim();
    const name = String(form.get('name') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();

    // 這兩個旗標用來在 finally 之後顯示訊息與是否清表單
    let finalMsg: string | null = null;
    let shouldReset = false;

    // 共用：單次請求（30s 逾時）
    const requestOnce = async (): Promise<"success" | { error: "TIMEOUT" | "NETWORK" | "API"; msg?: string }> => {
      const ac = new AbortController();
      const timeoutMs = 30000;
      const t = setTimeout(() => ac.abort(), timeoutMs);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, email, message, website }),
          signal: ac.signal,
        });
        try {
          const data = await res.json();
          if (res.ok && data?.ok) return "success";
          return { error: "API", msg: data?.message || '送出失敗，請稍後再試。' };
        } catch {
          if (res.ok) return "success"; // 非 JSON 但 2xx 視為成功
          return { error: "API", msg: '送出失敗，請稍後再試。' };
        }
      } catch (err: any) {
        if (err?.name === 'AbortError') return { error: 'TIMEOUT' };
        return { error: 'NETWORK', msg: err?.message };
      } finally {
        clearTimeout(t);
      }
    };

    try {
      // 蜜罐：視為成功
      if (website) {
        finalMsg = '已送出，我們會盡快與您聯繫。';
        shouldReset = true;
        return;
      }

      // 本地驗證
      if (!name || !phone || !email || !message) {
        finalMsg = '請完整填寫必填欄位。';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        finalMsg = '電子信箱格式不正確。';
        return;
      }

      // 第一次請求
      const first = await requestOnce();
      if (first === 'success') {
        finalMsg = '已送出，我們會盡快與您聯繫。';
        shouldReset = true;
        return;
      }

      // 網路錯誤重試一次
      if (first.error === 'NETWORK') {
        await new Promise(r => setTimeout(r, 1000));
        const second = await requestOnce();
        if (second === 'success') {
          finalMsg = '已送出，我們會盡快與您聯繫。';
          shouldReset = true;
          return;
        }
        finalMsg =
          second.error === 'TIMEOUT' ? '連線逾時，請稍後再試。' :
          second.error === 'NETWORK' ? '網路異常，請檢查連線後重試。' :
          (second.msg || '送出失敗，請稍後再試。');
        return;
      }

      // 非網路錯誤（逾時或 API 訊息）
      finalMsg = first.error === 'TIMEOUT'
        ? '連線逾時，請稍後再試。'
        : (first.msg || '送出失敗，請稍後再試。');

    } finally {
      // 🚀 無論任何結果，一律回到「填完送出 →」
      setSending(false);

      if (shouldReset) formEl.reset();
      if (finalMsg) setOk(finalMsg);
    }
  }

  return (
    <main className="w-full">
      {/* ===== Hero ===== */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-semibold text-green-900">客戶服務</h1>
          <h3 className="mt-1 text-lg tracking-widest uppercase text-indigo-200">CUSTOMER SERVICE</h3>
        </div>
      </section>

      {/* ===== FAQ 標題 ===== */}
      <section className="bg-white pt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold text-green-900">常見問題</h2>
          <h3 className="mt-1 text-xl tracking-widest uppercase text-indigo-200">FAQ</h3>
        </div>
      </section>

      {/* ===== FAQ 清單 ===== */}
      <section className="bg-white pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Q1 */}
          <div className="py-8 border-b border-[#e5e7eb]">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f6ee] text-[#1e5e2e] text-xl font-bold select-none">
                ？
              </span>
              <div className="flex-1">
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">高壓氧有什麼好處？</h3>
                <p className="mt-4 text-[#374151] leading-8">
                  置身於高壓氧艙內，由於壓力增加使得身體含氧量提高，
                  可以達到促進新陳代謝、活化組織、加速傷口修復，刺激皮膚膠原蛋白生成，
                  提高白血球吞噬細菌能力。
                </p>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="py-8 border-b border-[#e5e7eb]">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f6ee] text-[#1e5e2e] text-xl font-bold select-none">
                ？
              </span>
              <div className="flex-1">
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">我適合做高壓氧治療嗎？</h3>
                <p className="mt-4 text-[#374151] leading-8">
                  大部分的人都適合進行高壓氧的治療或是保養，但以下狀況不適合做高壓氧療程，
                  包含裝有心律調節器、未被治療的氣胸、氣喘、慢性阻塞性肺氣腫、
                  開放性肺結核、未控制的高血壓、未控制內出血、病毒感染、癲癇、
                  幽閉恐懼症、耳部疾病或重建者、懷孕，或其他經醫師評估不適合者。
                </p>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="py-8 border-b border-[#e5e7eb]">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f6ee] text-[#1e5e2e] text-xl font-bold select-none">
                ？
              </span>
              <div className="flex-1">
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">高壓氧治療中需要注意事項？</h3>
                <p className="mt-4 text-[#374151] leading-8">
                  艙內壓力變化可能造成耳內不適，可透過捏鼻輕輕用力呼氣、吞嚥或打呵欠來平衡壓力；
                  如仍不適，請立即告知現場操作人員協助。
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#6b7280]">※ 以上資訊僅供參考，是否適合請先與專業醫療人員評估。</p>
        </div>
      </section>

      {/* 業界肯定 / 證書 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-green-900 text-4xl sm:text-4xl">業界肯定</h2>
          <p className="mt-4 text-gray-600">專業服務結合多年經驗，為每一位客戶帶來卓越體驗</p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {certs.map(({ src, alt }, idx) => (
            <div key={idx} className="relative w-full h-0 pb-[125%] shadow-lg overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 聯絡我們（滿版 + 白字 + 黑框欄位） */}
      <section
        className="
          relative
          w-screen
          left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          py-16 md:py-20
          overflow-hidden
        "
      >
        {/* 背景圖 */}
        <Image
          src="/images/customer-service/city.png"
          alt="城市背景"
          fill
          className="object-cover object-center"
          priority
        />

        {/* 深色半透明遮罩：加強白字可讀性 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 標題區 */}
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif font-semibold text-4xl sm:text-4xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            聯絡我們
          </h2>
          <p className="mt-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            我們重視您的聲音，提供即時且專業的協助，歡迎聯繫寶的寶！
          </p>
        </div>

        {/* 表單區 */}
        <div className="relative mt-10 max-w-4xl mx-auto px-6">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* 蜜罐防機器人欄位 */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* 兩欄 RWD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-md font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  姓名 <span className="text-red-300">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="請輸入您的姓名"
                  autoComplete="name"
                  className="mt-2 w-full bg-black/30 text-white placeholder-white/80
                            border border-black rounded-md px-4 py-3 caret-white
                            backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  電話 <span className="text-red-300">*</span>
                </label>
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="^[0-9\\-+\\s()]{6,}$"
                  placeholder="請輸入您的電話"
                  className="mt-2 w-full bg-black/30 text-white placeholder-white/80
                            border border-black rounded-md px-4 py-3 caret-white
                            backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                電子信箱 <span className="text-red-300">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="請輸入您的電子信箱"
                className="mt-2 w-full bg-black/30 text-white placeholder-white/80
                            border border-black rounded-md px-4 py-3 caret-white
                            backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label className="block text-md font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                內容 <span className="text-red-300">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="請輸入您的洽詢內容"
                className="mt-2 w-full bg-black/30 text-white placeholder-white/80
                            border border-black rounded-md px-4 py-3 caret-white
                            backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={sending}
                className="inline-block min-w-[220px] border-2 border-black text-white
                            bg-black/40 hover:bg-white hover:text-green-900
                            px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold
                            tracking-wide rounded-md transition disabled:opacity-60"
              >
                {sending ? '送出中…' : '填完送出 →'}
              </button>
              {ok && (
                <p className="mt-3 text-green-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {ok}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
