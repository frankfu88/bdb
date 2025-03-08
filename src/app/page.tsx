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

      {/* 🔹 品牌介紹 */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center mb-10">關於我們</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-2xl font-bold text-gray-900">專業研發，領先技術</h3>
      <p className="text-gray-700 leading-relaxed mt-4">
        我們擁有 <strong>專業研發團隊</strong>，專注於 <strong>高壓氧技術與光療系統</strong> 的創新應用。
        透過持續改良與測試，我們開發出 <strong>適用於醫療</strong>、<strong>運動恢復與寵物醫療</strong> 的高效氧艙技術。
      </p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>✅ 全球先進的高壓氧艙技術</li>
        <li>✅ 專利氣壓控制系統，安全穩定</li>
        <li>✅ 結合紅光 & 藍光，促進細胞修復</li>
      </ul>
    </div>
    <Image 
      src="/brand-tech.png" 
      alt="品牌技術展示" 
      width={500} 
      height={300} 
      className="rounded-lg shadow-md"
    />
  </div>
</section>


      
{/* 🔹 人用微壓氧艙 */}
<section className="py-16">
  <h2 className="text-3xl font-semibold text-center mb-10">人用微壓氧艙</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <Image 
      src="/human-oxygen-chamber.png" 
      alt="人用微壓氧艙" 
      width={500} 
      height={300} 
      className="rounded-lg shadow-md"
    />
    <div>
      <h3 className="text-2xl font-bold text-gray-900">專為人體設計，舒適安全</h3>
      <p className="text-gray-700 leading-relaxed mt-4">
        我們的微壓氧艙適用於 <strong>健康管理、運動恢復與睡眠改善</strong>。
        透過 <strong>1.3-1.5 ATA 微壓技術</strong>，提升血氧供應，幫助細胞修復與增強免疫力。
      </p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>🌿 改善慢性疲勞，提高專注力</li>
        <li>💪 適合運動員使用，加速恢復</li>
        <li>😴 促進深層睡眠，緩解壓力</li>
      </ul>
    </div>
  </div>
</section>

{/* 🔹 寵物高壓氧艙 */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center mb-10">寵物高壓氧艙</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-2xl font-bold text-gray-900">專業動物醫療氧艙</h3>
      <p className="text-gray-700 leading-relaxed mt-4">
        高壓氧技術已廣泛應用於<strong>寵物醫療</strong>，幫助加速傷口癒合、改善心肺功能與增強免疫力。
        透過 <strong>2.0 ATA 高壓系統</strong>，提供最適合寵物康復的環境。
      </p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>🐶 皮膚病 & 慢性發炎治療</li>
        <li>🐾 術後恢復，加快傷口癒合</li>
        <li>🐕 幫助年長寵物改善關節問題</li>
      </ul>
    </div>
    <Image 
      src="/pet-oxygen-chamber.png" 
      alt="寵物高壓氧艙" 
      width={500} 
      height={300} 
      className="rounded-lg shadow-md"
    />
  </div>
</section>


{/* 🔹 合作夥伴 (簡約現代風格) */}
<section className="py-16">
  <h2 className="text-3xl font-semibold text-center mb-10">合作夥伴</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {["東南動物醫院", "羅大宇動物醫院", "亞幸動物醫院", "登羣動物醫院", "文志動物醫院"].map((partner, index) => (
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
