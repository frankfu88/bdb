'use client';

import PageHeader from '@/components/pet/PageHeader';
import Features from '@/components/pet/Features';
import SpecsTable from '@/components/pet/SpecsTable';
import ContactSection from '@/components/ContactSection';

export default function ProductsPage() {
  return (
    <div className="w-full">
      <PageHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Features />
        <SpecsTable />
      </div>
      <ContactSection />
    </div>
  );
}
