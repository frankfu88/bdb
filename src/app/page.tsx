'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* 🔹 Hero 區塊 */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          寶的寶有限公司 — 專業氧艙技術，領先業界
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          提供最先進的高壓氧與光療技術，適用於 <strong>人體健康、運動恢復、寵物醫療</strong>。
        </p>
        <Link href="/products">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700">
            了解產品
          </button>
        </Link>
      </section>

      {/* 🔹 產品特色 */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">產品特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/oxygen-increase.png" alt="提升血氧" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">提升血氧</h3>
            <p className="text-gray-600 mt-2">增強細胞活力，促進新陳代謝與組織修復。</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/light-therapy.png" alt="光療技術" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">結合光療</h3>
            <p className="text-gray-600 mt-2">紅光 & 藍光促進細胞修復，減少發炎反應。</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/medical-certification.png" alt="醫療級技術" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">醫療級技術</h3>
            <p className="text-gray-600 mt-2">符合國際標準，安全有效，獲專家推薦。</p>
          </div>
        </div>
      </section>

      {/* 🔹 產品應用場景 */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">產品應用場景</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Image src="/athlete-recovery.png" alt="運動員恢復" width={250} height={150} className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mt-4">運動員恢復</h3>
            <p className="text-gray-600 mt-2">減少乳酸堆積，加速肌肉修復，提升運動表現。</p>
          </div>
          <div className="p-6">
            <Image src="/medical-recovery.png" alt="醫療應用" width={250} height={150} className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mt-4">醫療應用</h3>
            <p className="text-gray-600 mt-2">幫助術後修復、血循改善、慢性病管理。</p>
          </div>
          <div className="p-6">
            <Image src="/pet-therapy.png" alt="寵物醫療" width={250} height={150} className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mt-4">寵物醫療</h3>
            <p className="text-gray-600 mt-2">加速術後恢復、改善皮膚病、幫助關節健康。</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/applications">
            <button className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700">
              了解更多應用
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 合作夥伴 */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">合作夥伴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 text-center">
          <div className="border p-4 shadow-md rounded">東南動物醫院</div>
          <div className="border p-4 shadow-md rounded">羅大宇動物醫院</div>
          <div className="border p-4 shadow-md rounded">亞幸動物醫院</div>
          <div className="border p-4 shadow-md rounded">登羣動物醫院</div>
        </div>
      </section>

      {/* 🔹 行動召喚 (CTA) */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-200">
            聯絡我們
          </button>
        </Link>
      </section>
    </div>
  );
}
