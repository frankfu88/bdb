'use client';
import React from 'react';
import FAQItem from './FAQItem';
import type { FAQGroup as FAQGroupType } from '@/data/faqs';

export default function FAQGroup({ group }: { group: FAQGroupType }) {
  return (
    <section className="mb-6">
      <h4 className="text-green-900 font-serif text-2xl font-bold mb-2">{group.title}</h4>
      {group.items.map((it, i) => (
        <FAQItem key={`${group.title}-${i}`} q={it.q} a={it.a} />
      ))}
    </section>
  );
}
