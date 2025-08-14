'use client';
import React from 'react';

export default function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group py-6 border-b border-gray-200">
      <summary className="flex items-start gap-4 cursor-pointer list-none">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f6ee] text-[#1e5e2e] text-xl font-bold select-none">
          ？
        </span>
        <h3 className="flex-1 text-[#1e5e2e] text-[20px] md:text-[22px] font-bold leading-snug">
          {q}
        </h3>
        <span className="ml-2 text-[#1e5e2e] transition-transform duration-300 group-open:rotate-45 text-2xl leading-none select-none">
          ＋
        </span>
      </summary>
      <div className="mt-4 ml-14 text-[#374151] leading-8">{a}</div>
    </details>
  );
}