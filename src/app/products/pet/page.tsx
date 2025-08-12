'use client';

import PageHeader from '@/components/PageHeader';
import MainContent from '@/components/pet/MainContent';
import SpecsTable from '@/components/pet/SpecsTable';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* 頁面標題 */}
        <section className="bg-white pt-16 md:pt-24">
          <PageHeader
            title="寵物高壓氧艙"
            subtitle="Pet Hyperbaric Oxygen Chamber"
          />
        </section>

        {/* 主要資訊 */}
        <section className="mt-16 mb-16">
          <MainContent />
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
