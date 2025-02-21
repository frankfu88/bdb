'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* 🔹 Hero 區塊 */}
      <section className="text-center py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold leading-snug">
          寶的寶有限公司 — 專業氧艙技術，領先業界
        </h1>
        <p className="mt-4 text-lg">
          提供最先進的高壓氧與光療技術，適用於 <strong>人體健康、運動恢復、寵物醫療</strong>。
        </p>
        <Link href="/products">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
            了解產品
          </button>
        </Link>
      </section>

      {/* 🔹 產品特色 */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">產品特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { src: "/oxygen-increase.png", title: "提升血氧", desc: "增強細胞活力，促進新陳代謝與組織修復。" },
            { src: "/light-therapy.png", title: "結合光療", desc: "紅光 & 藍光促進細胞修復，減少發炎反應。" },
            { src: "/medical-certification.png", title: "醫療級技術", desc: "符合國際標準，安全有效，獲專家推薦。" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <Image src={item.src} alt={item.title} width={100} height={100} className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

{/* 🔹 合作夥伴 (簡約現代風格) */}
<section className="py-16">
  <h2 className="text-3xl font-semibold text-center mb-10">合作夥伴</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {["東南動物醫院", "羅大宇動物醫院", "亞幸動物醫院", "登羣動物醫院"].map((partner, index) => (
      <div 
        key={index} 
        className="bg-white p-6 rounded-lg shadow-md text-center text-lg font-semibold text-gray-700 transition-all duration-300 hover:shadow-xl"
      >
        {partner}
      </div>
    ))}
  </div>
</section>



      {/* 🔹 CTA 區塊 */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg mt-12 transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
            聯絡我們
          </button>
        </Link>
      </section>

      {/* 🔹 底部空間 */}
      <div className="h-16"></div>

      
    </div>
  );
}
