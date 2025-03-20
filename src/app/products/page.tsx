'use client';

import Image from "next/image";

export default function ProductsPage() {

  return (
    <div className="w-full">
      
      {/* 🔹 頂部 Banner */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image 
          src="/images/banner/product.jpg"
          alt="關於我們"
          width={1920}
          height={400} 
          className="w-full h-full object-cover"
          priority
        />
        {/* 🔹 右側文字區塊 */}
        <div className="absolute inset-y-0 right-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">產品介紹</h2>
          <p className="text-lg text-gray-700 mt-2">
            牠們不只是動物，而是我們心中最珍貴的存在
          </p>
        </div>
      </div>

      {/* 🔹 特點介紹 */}
      <section className="mt-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-800 text-center tracking-wide">
          特點說明
          <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        {/* 文字說明 */}
        <div className="text-center max-w-3xl mx-auto mt-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            高壓氧艙搭載多層設計與先進光療技術，提升動物健康與治療效果。
            結合藍光、紅光與高壓氧供應，打造最佳恢復環境。
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "多層抽屜式設計", desc: "支持多隻寵物同時使用及進出，方便操作" },
            { title: "高效氧艙", desc: "艙體內可提供高壓至2.0ATA（最大可承受8ATA)，氧濃度最大達40%，出氧濃度達96%" },
            { title: "雙泄壓閥", desc: "專利高安全性雙泄壓閥防爆系統，確保穩定運行" },
            { title: "紫外線滅菌", desc: "紫外線滅菌燈及負離子空氣淨化裝置，抗菌去味，維持環境清潔" },
            { title: "光療系統", desc: "提供藍光照射可穩定動物的情緒，結合紅光及紅外光的光療系統，可促進動物生長發育及增強免疫力等功能" },
            { title: "恆溫空調", desc: "可提供恒溫環境，依使用需要可設定溫度範圍為20℃～35℃" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl shadow-md text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 初生動物高壓氧艙的作用 */}
      <section className="mt-16 py-16 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">初生動物高壓氧艙的作用</h2>
        <div className="max-w-4xl mx-auto text-gray-700">
          <p className="text-lg text-center mb-8 leading-relaxed">
            高壓氧艙技術在初生動物的健康管理中發揮關鍵作用，能夠提升存活率並促進成長發育。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "1", title: "提升母體受孕率", desc: "懷孕前進行高壓氧及光療調理，每日一次（60 分鐘），可增強母體健康，提高受孕機率。" },
              { num: "2", title: "改善胚胎發育", desc: "懷孕期間每日吸氧及光療 60 分鐘，有助於胎兒健康發展，增強母體與胎兒免疫力。" },
              { num: "3", title: "降低幼獸夭折率", desc: "初生動物出生後 10-15 天內每日吸氧 60 分鐘，之後每 3 天一次，可增強成長與免疫力，顯著減少幼獸夭折率。" },
              { num: "4", title: "促進產後恢復", desc: "母體產後持續吸氧及光療 7 天，加速傷口癒合並促進身體恢復，減少修護期與藥物需求。" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md flex items-start">
                <span className="text-green-600 text-3xl font-bold mr-4">{item.num}</span>
                <p><strong>{item.title}</strong>：{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 規格說明 */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">規格說明</h2>
        <div className="w-full flex justify-center">
          <table className="w-full max-w-6xl border-collapse border border-gray-300 text-gray-800 text-center">
            <thead>
              <tr className="bg-green-700 text-white border border-gray-300">
                <th className="p-3 border border-gray-300 text-center">規格參數</th>
                <th className="p-3 border border-gray-300 text-center">高壓氧艙</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["艙體尺寸", "110(L) * 70(W) * 110(H) cm"],
                ["電源", "220V AC"],
                ["功率", "1000 W"],
                ["艙體保壓", "最大保壓 8 ATA"],
                ["艙體壓力", "1.1~2.0 ATA (可設定)"],
                ["制氧方式 / 出氧濃度", "鉛離子制氧分離篩，10L / 96%"],
                ["艙體內氧濃度", "≤ 40%"],
                ["光療系統", "藍光、紅光、紅外線"],
                ["恆溫空調系統", "20~35°C (可設定)"],
                ["抗菌自潔", "負離子、紫外線滅菌"],
                ["自動清洗系統", "廢棄物承接盤、自動噴淋系統、排放閥門"],
                ["應急系統", "主機上緊急按鈕"]
              ].map(([param, value], index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="p-4 font-semibold text-center border border-gray-300">{param}</td>
                  <td className="p-4 text-center border border-gray-300">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* 🔹 CTA 區塊 */}
      <section className="mt-16 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
            加入官方 LINE
          </button>
        </a>
      </section>

    </div>
  );
}
