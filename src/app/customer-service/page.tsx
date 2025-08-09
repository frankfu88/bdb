// src/app/customer-service/page.tsx
import Image from 'next/image';
import ContactSection from '@/components/ContactSection'; /* 共用表單元件 */

export default function CustomerServicePage() {
  const certs = [
    { src: '/images/certs/coc.jpg', alt: '醫療器材許可證 1' },
    { src: '/images/certs/cqc.jpg', alt: '醫療器材許可證 2' },
  ];

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

      {/* ✅ 共用表單：用元件引入 */}
      <ContactSection />
    </main>
  );
}
