// src/app/customer-service/page.tsx
'use client';

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
          <h3 className="mt-1 text-lg tracking-widest uppercase text-indigo-200">
            CUSTOMER SERVICE
          </h3>
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
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">
                  高壓氧有什麼好處？
                </h3>
                <p className="mt-4 text-[#374151] leading-8">
                  提高血液含氧量，促進新陳代謝、活化組織、加速傷口癒合，
                  並有助於減少腫脹與提升免疫力。
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
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">
                  誰適合做高壓氧治療？
                </h3>
                <p className="mt-4 text-[#374151] leading-8">
                  多數人與寵物都可接受高壓氧，但有嚴重心肺疾病、氣胸、
                  未控制的癲癇或高血壓、近期眼部手術等情況者須避免。
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
                <h3 className="text-[#1e5e2e] text-[22px] md:text-[24px] font-bold">
                  治療中需要注意什麼？
                </h3>
                <p className="mt-4 text-[#374151] leading-8">
                  可能出現耳壓不適，可透過吞嚥、打呵欠、捏鼻呼氣來平衡。
                  如感到不適，請立即告知現場人員。
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-[#6b7280]">
            ※ 以上資訊僅供參考，實際狀況請由專業醫療人員評估。
          </p>
        </div>
      </section>

      {/* ===== 禁忌症與注意事項（表格風格，RWD） ===== */}
      <section className="max-w-6xl mx-auto mb-16 px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-green-900 mb-8">
          禁忌症與注意事項
        </h2>

        {/* 手機版：表頭 + 兩欄卡片 + 跨欄備註 */}
        <div className="md:hidden font-serif text-green-900">
          {/* 表頭 */}
          <div className="grid grid-cols-2 bg-green-900 text-white overflow-hidden">
            <div className="px-4 py-2 text-sm text-center border-r border-white/20">絕對禁忌症</div>
            <div className="px-4 py-2 text-sm text-center">相對禁忌症</div>
          </div>

          {/* 內容（兩欄） */}
          <div className="border border-gray-300 border-t-0 overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="p-4 border-r border-gray-300">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>氣胸（Pneumothorax）</li>
                  <li>未受控的嚴重哮喘或 COPD</li>
                  <li>肺炎等急性肺部感染</li>
                  <li>未控制的癲癇或嚴重神經疾病</li>
                  <li>嚴重心臟衰竭</li>
                  <li>近期眼部手術</li>
                  <li>耳部損傷或耳咽管功能異常</li>
                </ul>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>血糖控制不佳的糖尿病</li>
                  <li>嚴重焦慮或幽閉恐懼症</li>
                  <li>懷孕</li>
                  <li>未控制的高體溫（發燒）</li>
                  <li>高血壓未穩定者</li>
                </ul>
              </div>
            </div>

            {/* 備註（跨兩欄） */}
            <div className="border-t border-gray-300 px-4 py-3 text-center text-gray-600 text-sm">
              若有上述狀況，請先與醫師或獸醫師討論，評估是否適合高壓氧治療。
            </div>
          </div>
        </div>

        {/* 桌機版：正式表格 + 跨欄備註 */}
        <div className="hidden md:block overflow-x-auto font-serif">
          <table className="w-full border-collapse border border-gray-300 text-green-900 text-base">
            <thead>
              <tr className="bg-green-900 text-white">
                <th className="p-4 border border-gray-300 text-center w-1/2">絕對禁忌症</th>
                <th className="p-4 border border-gray-300 text-center w-1/2">相對禁忌症</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="p-4 border border-gray-300">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                    <li>氣胸（Pneumothorax）</li>
                    <li>未受控的嚴重哮喘或 COPD</li>
                    <li>肺炎等急性肺部感染</li>
                    <li>未控制的癲癇或嚴重神經疾病</li>
                    <li>嚴重心臟衰竭</li>
                    <li>近期眼部手術</li>
                    <li>耳部損傷或耳咽管功能異常</li>
                  </ul>
                </td>
                <td className="p-4 border border-gray-300">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                    <li>血糖控制不佳的糖尿病</li>
                    <li>嚴重焦慮或幽閉恐懼症</li>
                    <li>懷孕</li>
                    <li>未控制的高體溫（發燒）</li>
                    <li>高血壓未穩定者</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="p-4 text-center text-gray-600 border-t-0"
                  style={{ borderTop: 'none' }}
                >
                  若有上述狀況，請先與醫師或獸醫師討論，評估是否適合高壓氧治療。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 證書 ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-green-900 text-4xl sm:text-4xl">
            業界肯定
          </h2>
          <p className="mt-4 text-gray-500">
            專業服務結合多年經驗，為每一位客戶帶來卓越體驗
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {certs.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="relative w-full h-0 pb-[125%] shadow-lg overflow-hidden"
            >
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

      {/* 共用表單 */}
      <ContactSection />
    </main>
  );
}
