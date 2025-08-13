'use client';

import { faqGroups } from '@/data/faqs';
import FAQGroup from '@/components/faq/FAQGroup';
import Contraindications from '@/components/Contraindications';
import Certificates from '@/components/Certificates';
import ContactSection from '@/components/ContactSection';

export default function CustomerServicePage() {
  const certs = [
    { src: '/images/certs/coc.jpg', alt: '醫療器材許可證 1' },
    { src: '/images/certs/cqc.jpg', alt: '醫療器材許可證 2' },
  ];

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-semibold text-green-900">客戶服務</h1>
          <h3 className="mt-1 text-lg tracking-widest uppercase text-indigo-200">CUSTOMER SERVICE</h3>
        </div>
      </section>

      {/* FAQ 標題 */}
      <section className="bg-white pt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold text-green-900">常見問題</h2>
          <h3 className="mt-1 text-xl tracking-widest uppercase text-indigo-200">FAQ</h3>
        </div>
      </section>

      {/* FAQ 群組 */}
      <section className="bg-white pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {faqGroups.map((g, i) => (
            <FAQGroup key={g.title + i} group={g} />
          ))}
          <p className="mt-6 text-sm text-[#6b7280]">
            ※ 以上資訊僅供參考，實際適用性與療程請由專業醫療人員/獸醫師評估。
          </p>
        </div>
      </section>

      {/* 禁忌症與注意事項 */}
      <Contraindications />

      {/* 證照 */}
      <Certificates certs={certs} />

      {/* 共用表單 */}
      <ContactSection />
    </main>
  );
}
