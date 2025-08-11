'use client';

import PageHeader from '@/components/PageHeader';
import Features from '@/components/human/Features';
import SpecsTable from '@/components/human/SpecsTable';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* 頁面標題 */}
        <section className="bg-white pt-16 md:pt-24">
          <PageHeader
            title="人用微壓氧艙"
            subtitle="Human Mild Hyperbaric Oxygen Chamber"
          />
        </section>

        {/* 特點說明 */}
        <section className="mt-16 mb-16">
          <Features />
        </section>

        {/* 規格說明 */}
        <section className="mb-14 md:mb-16">
          <SpecsTable />
        </section>

        {/* 共用表單 */}
        <ContactSection />
      </div>
    </div>
  );
}
