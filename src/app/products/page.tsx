'use client';

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

// Hover 互動變色效果
const lightEffects = [
  { name: "紅光", color: "bg-red-100", desc: "促進膠原蛋白，改善皮膚 & 傷口癒合" },
  { name: "近紅外光", color: "bg-red-200", desc: "深入肌肉層，促進組織修復與消炎" },
  { name: "藍光", color: "bg-blue-100", desc: "調節生物鐘，幫助睡眠，減少痤瘡細菌" },
];

export default function ProductsPage() {
  const [hoverEffect, setHoverEffect] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* 🔹 Hero 區塊 */}
      <section className="text-center py-16 bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold leading-snug">
          高壓氧艙 + 光療技術  
        </h1>
        <p>
  先進的 <strong>高壓氧艙技術</strong>，結合 <strong>紅光 & 藍光療法</strong>，打造最佳健康解決方案。
</p>
      </section>

              {/* 🔹 初生動物高壓氧艙的作用 */}
<section className="py-16 bg-gradient-to-b from-gray-100 to-gray-50">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">初生動物高壓氧艙的作用</h2>
  <div className="max-w-4xl mx-auto text-gray-700">
    <p className="text-lg text-center mb-8 leading-relaxed">
      高壓氧艙技術在初生動物的健康管理中發揮關鍵作用，能夠提升存活率並促進成長發育。
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-white rounded-lg shadow-md flex items-start">
        <span className="text-green-600 text-3xl font-bold mr-4">1</span>
        <p>
          <strong>提升母體受孕率</strong>：懷孕前進行高壓氧及光療調理，每日一次（60 分鐘），可增強母體健康，提高受孕機率。
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md flex items-start">
        <span className="text-green-600 text-3xl font-bold mr-4">2</span>
        <p>
          <strong>改善胚胎發育</strong>：懷孕期間每日吸氧及光療 60 分鐘，有助於胎兒健康發展，增強母體與胎兒免疫力。
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md flex items-start">
        <span className="text-green-600 text-3xl font-bold mr-4">3</span>
        <p>
          <strong>降低幼獸夭折率</strong>：初生動物出生後 10-15 天內每日吸氧 60 分鐘，之後每 3 天一次，可增強成長與免疫力，顯著減少幼獸夭折率。
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md flex items-start">
        <span className="text-green-600 text-3xl font-bold mr-4">4</span>
        <p>
          <strong>促進產後恢復</strong>：母體產後持續吸氧及光療 7 天，加速傷口癒合並促進身體恢復，減少修護期與藥物需求。
        </p>
      </div>
    </div>
  </div>
</section>


{/* 🔹 特點介紹 */}
<section className="bg-gradient-to-b from-white to-gray-100 p-12 rounded-lg shadow-lg mb-16">
  <h3 className="text-4xl font-bold text-center text-gray-900 mb-10">特點介紹</h3>
  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
    高壓氧艙搭載多層設計與先進光療技術，提升動物健康與治療效果。結合藍光、紅光與高壓氧供應，打造最佳恢復環境。
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">提升存活率</h4>
      <p className="text-gray-600">可改善動物或寵物天折率超過 50%。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">多層抽屜式設計</h4>
      <p className="text-gray-600">可容納 100 只動物或 10 只受孕母體，方便管理。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">高效氧艙</h4>
      <p className="text-gray-600">艙內可達 2.0 ATA，氧濃度 40%，出氧濃度 96%。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">雙泄壓閥</h4>
      <p className="text-gray-600">高安全性防爆系統，確保穩定運行。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">紫外線滅菌</h4>
      <p className="text-gray-600">結合負離子淨化，有效抗菌除味，維持環境清潔。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">光療系統</h4>
      <p className="text-gray-600">藍光穩定情緒，紅光與紅外光促進生長與免疫力。</p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition duration-300">
      <h4 className="text-xl font-semibold mb-2">恆溫空調</h4>
      <p className="text-gray-600">溫度可設定 20℃ ~ 35℃，適應各種需求。</p>
    </div>
  </div>
</section>
    
     {/* 🔹 光療技術原理 */}
<section className="py-16">
  <h2 className="text-3xl font-semibold text-center mb-10">光療技術原理</h2>

  {/* 🔹 紅光 & 紅外光理療原理 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <Image src="/red-light-therapy.png" alt="紅光 & 紅外光理療" width={500} height={300} className="rounded-lg shadow-md" />
    <div>
      <h3 className="text-xl font-semibold mb-4 text-red-500">紅光 & 紅外光理療原理</h3>
      <p className="text-gray-700 leading-relaxed">
        <strong className="text-red-500">紅光 & 紅外光</strong> 是一種安全且非侵入性的理療技術，
        透過光波滲透皮膚與深層肌肉，刺激 <strong>粒線體</strong>，促進細胞修復與生長。
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
        <li><strong>紅光 (630-700nm)</strong>：促進膠原蛋白生成，幫助皮膚修復與抗老化。</li>
        <li><strong>近紅外光 (700-1100nm)</strong>：深入肌肉層，加速傷口癒合，減少發炎與疼痛。</li>
        <li><strong>提高 ATP (細胞能量)</strong>，有助於加快代謝與組織修復。</li>
      </ul>
    </div>
  </div>

  {/* 🔹 藍光的益處 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-500">藍光的益處</h3>
      <p className="text-gray-700 leading-relaxed">
        <strong className="text-blue-500">藍光</strong> 主要影響生物節律與皮膚健康。
        它能調節 <strong>褪黑激素 (睡眠荷爾蒙)</strong>，幫助提升專注力與改善睡眠：
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
        <li><strong>日間</strong>：提升 <strong>血清素 & 皮質醇</strong>，保持清醒與專注力。</li>
        <li><strong>夜間</strong>：減少藍光暴露，促進 <strong>褪黑激素</strong> 釋放，幫助改善睡眠品質。</li>
        <li><strong>皮膚治療</strong>：抑制痤瘡細菌生長，減少粉刺與青春痘。</li>
      </ul>
    </div>
    <Image src="/blue-light-benefits.png" alt="藍光的益處" width={500} height={300} className="rounded-lg shadow-md" />
  </div>
</section>

      
      {/* 🔹 光療技術比較 (Hover 互動變色效果) */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">光療技術比較</h2>
        <table className="w-full border-collapse border border-gray-300 text-gray-800">
          <thead>
            <tr className="bg-gradient-to-r from-red-500 to-blue-500 text-white">
              <th className="p-3 border">技術</th>
              <th className="p-3 border">主要波長</th>
              <th className="p-3 border">主要功效</th>
            </tr>
          </thead>
          <tbody>
            {lightEffects.map((item, index) => (
              <tr
                key={index}
                className={`transition-all ${
                  hoverEffect === item.name ? item.color : "hover:bg-gray-100"
                }`}
                onMouseEnter={() => setHoverEffect(item.name)}
                onMouseLeave={() => setHoverEffect("")}
              >
                <td className="p-3 border font-semibold">{item.name}</td>
                <td className="p-3 border">{item.name === "紅光" ? "630-700 nm" : item.name === "近紅外光" ? "700-1100 nm" : "450-495 nm"}</td>
                <td className="p-3 border">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
        



    {/* 🔹 規格說明 */}
    <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">規格說明</h2>
        <table className="w-full border-collapse border border-gray-300 text-gray-800">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3 border">規格參數</th>
              <th className="p-3 border">高壓氧艙</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border font-semibold">艙體尺寸</td><td className="p-3 border">110(L) * 70(W) * 110(H) cm</td></tr>
            <tr><td className="p-3 border font-semibold">電源</td><td className="p-3 border">220V AC</td></tr>
            <tr><td className="p-3 border font-semibold">功率</td><td className="p-3 border">1000 W</td></tr>
            <tr><td className="p-3 border font-semibold">艙體保壓</td><td className="p-3 border">最大保壓 8 ATA</td></tr>
            <tr><td className="p-3 border font-semibold">艙體壓力</td><td className="p-3 border">1.1~2.0 ATA (可設定)</td></tr>
            <tr><td className="p-3 border font-semibold">制氧方式 / 出氧濃度</td><td className="p-3 border">鉛離子制氧分離篩，10L / 96%</td></tr>
            <tr><td className="p-3 border font-semibold">艙體內氧濃度</td><td className="p-3 border">≤ 40%</td></tr>
            <tr><td className="p-3 border font-semibold">光療系統</td><td className="p-3 border">藍光、紅光、紅外線</td></tr>
            <tr><td className="p-3 border font-semibold">恆溫空調系統</td><td className="p-3 border">20~35°C (艙內溫度，可設定)</td></tr>
            <tr><td className="p-3 border font-semibold">抗菌自潔</td><td className="p-3 border">負離子、紫外線滅菌</td></tr>
            <tr><td className="p-3 border font-semibold">自動清洗系統</td><td className="p-3 border">廢棄物承接盤、自動噴淋系統、排放閥門</td></tr>
            <tr><td className="p-3 border font-semibold">應急系統</td><td className="p-3 border">主機上緊急按鈕</td></tr>
          </tbody>
        </table>
      </section>

      {/* 🔹 CTA 行動召喚 */}
      <section className="py-16 text-center bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold">想深入了解產品？立即聯繫我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-green-600 text-lg font-medium rounded-lg flex items-center mx-auto hover:bg-gray-200 transition-all">
            聯絡我們 <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </section>

    </div>
  );
}
