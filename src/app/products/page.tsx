'use client';

import Banner from "@/components/banner";

export default function ProductsPage() {

  return (
    <div className="w-full">
      <div className="w-full">
        {/* 🔹 使用共用 Banner */}
        <Banner 
          title="產品介紹"
          description="牠們不只是動物，而是我們心中最珍貴的存在"
          imageSrc="/images/banner/product.jpg"
        />
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
            高壓氧艙採用多層設計與先進光照技術，提供穩定氧氣供應，
            結合藍光、紅光與高壓氧功能，打造適合動物放鬆與舒適休憩的環境。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "多層抽屜式設計", desc: "支持多隻寵物同時使用及進出，方便操作" },
            { title: "高效氧艙", desc: "艙體內可提供高壓至2.0ATA（最大可承受8ATA)，氧濃度最大達40%，出氧濃度達96%" },
            { title: "雙泄壓閥", desc: "專利高安全性雙泄壓閥防爆系統，確保穩定運行" },
            { title: "紫外線滅菌", desc: "紫外線滅菌燈及負離子空氣淨化裝置，抗菌去味，維持環境清潔" },
            { title: "光照系統", desc: "提供藍光照射幫助動物放鬆，搭配紅光及紅外光技術，支援動物日常照護" },
            { title: "恆溫空調", desc: "可提供恆溫環境，依使用需求可設定溫度範圍為20℃～35℃" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl shadow-md text-center">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 初生動物高壓氧艙的應用 */}
      <section className="mt-16 py-16 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">初生動物高壓氧艙的應用</h2>
        <div className="max-w-4xl mx-auto text-gray-700">
          <p className="text-lg text-center mb-8 leading-relaxed">
            高壓氧艙可提供穩定的氧氣與光照環境，支援母體與幼獸在不同階段的生理適應，協助維持良好的狀態。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: "1", title: "母體健康管理", desc: "懷孕前可每日進行 60 分鐘的氧氣與光照適應，幫助母體維持良好的生理環境。" },
              { num: "2", title: "支持胎兒發育", desc: "懷孕期間每日 60 分鐘的氧氣與光照環境，可穩定母體狀態，支援胎兒的健康發展。" },
              { num: "3", title: "幼獸成長適應", desc: "初生幼獸出生後 10-15 天內可每日進行 60 分鐘的氧氣環境適應，之後每 3 天一次，幫助適應外界環境。" },
              { num: "4", title: "產後恢復支援", desc: "母體產後可持續 7 天，每日 60 分鐘的氧氣與光照調節，協助穩定體力與環境適應。" },
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
                ["主機尺寸", "L115 × W75 × H165 CM"],
                ["電源", "220V AC"],
                ["功率", "最高 2000W，正常使用 1200W"],
                ["艙體壓力", "1.2 ~ 2.0 ATA（可設定）"],
                ["ICU 系統", "溫度 & 氧氣 控制系統"],
                ["製氧方式", "鋰離子製氧分離篩"],
                ["出氧濃度 / 艙內氧濃度", "96% / ≤40%"],
                ["光療系統", "藍光、紅光、紅外光療"],
                ["溫控系統", "艙內溫度可製冷 & 製暖"],
                ["殺菌系統", "負離子、紫外線抗菌除味"],
                ["應急系統", "快速洩壓鈕"],
                ["下艙附滑軌拉板", "方便進出艙"],
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
