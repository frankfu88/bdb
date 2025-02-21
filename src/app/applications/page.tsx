'use client';

import Image from "next/image";
import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* 🔹 Hero 區塊 */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          高壓氧艙 & 光療技術應用
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          透過 <strong>東南動物醫院</strong> 等醫療夥伴的臨床應用，高壓氧艙與光療技術已成功幫助
          <strong>寵物康復、運動員恢復、醫療術後修復</strong>，提供高效、安全的解決方案。
        </p>
      </section>

      {/* 🔹 東南動物醫院應用案例 */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">東南動物醫院應用案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/southeast-animal-hospital.png" alt="東南動物醫院" width={500} height={300} className="rounded-lg shadow-md" />
          <div>
            <h3 className="text-xl font-semibold mb-4">東南動物醫院：高壓氧艙應用</h3>
            <p className="text-gray-700 leading-relaxed">
              東南動物醫院率先導入 **高壓氧艙技術**，幫助寵物快速康復：
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
              <li>🐶 **術後恢復**：幫助傷口癒合，減少發炎</li>
              <li>🐱 **慢性病治療**：改善動物呼吸困難、關節炎</li>
              <li>🐾 **神經系統修復**：用於脊髓受損 & 神經功能恢復</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 其他動物醫院應用 */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">其他動物醫院應用</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">羅大宇動物醫院</h3>
            <p className="text-gray-700">🐾 治療高齡犬的慢性病、皮膚病</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">亞幸動物醫院</h3>
            <p className="text-gray-700">🐾 幫助術後動物減少疼痛，提升氧氣循環</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">登羣動物醫院</h3>
            <p className="text-gray-700">🐾 提供高壓氧治療，增強呼吸功能</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">其他合作夥伴</h3>
            <p className="text-gray-700">🐾 持續擴展中，讓更多動物受惠！</p>
          </div>
        </div>
      </section>

      {/* 🔹 氧艙技術影片 */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">高壓氧艙應用影片</h2>
        <div className="flex justify-center">
          <iframe 
            width="800" 
            height="450" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="高壓氧艙應用影片"
            className="rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-gray-600 mt-4">🎥 了解氧艙如何幫助動物 & 人類恢復健康！</p>
      </section>

      {/* 🔹 CTA (行動召喚) */}
      <section className="py-16 text-center bg-green-600 text-white rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold">想了解更多應用案例？</h2>
        <p className="mt-4 text-lg">立即聯繫我們，獲取專業建議！</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-green-600 text-lg font-medium rounded-lg hover:bg-gray-200">
            聯絡我們
          </button>
        </Link>
      </section>

    </div>
  );
}
