'use client';

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
        <div className="absolute inset-y-0 right-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">產品介紹</h2>
          <p className="text-lg text-gray-700 mt-2">
          牠們不只是動物，而是我們心中最珍貴的存在
          </p>
        </div>
      </div>

      {/* 🔹 特點介紹 */}
      <section className="mt-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl text-gray-800 text-center tracking-wide">
          特點說明
          <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
          高壓氧艙搭載多層設計與先進光療技術，提升動物健康與治療效果。結合藍光、紅光與高壓氧供應，打造最佳恢復環境。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "多層抽屜式設計", desc: "支持多隻寵物同時使用及進出，方便操作" },
            { title: "高效氧艙", desc: "艙體內可提供高壓至2.0ATA（最大可承受8ATA)，氧濃度最大達40%，出氧濃度達96%" },
            { title: "雙泄壓閥", desc: "專利高安全性雙泄壓閥防爆系統，確保穩定運行" },
            { title: "紫外線滅菌", desc: "紫外線滅菌燈及負離子空氣淨化裝置，抗菌去味，維持環境清潔" },
            { title: "光療系統", desc: "提供藍光照射可穩定動物的情緒，結合紅光及紅外光的光療系統，可促進動物生長發育及增強免疫力等功能" },
            { title: "恆溫空調", desc: "可提供恒溫環境，依使用需要可設定溫度範圍為20℃～35℃" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl shadow-md text-center transform hover:shadow-xl hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 初生動物高壓氧艙的作用 */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-md">
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
    
     {/* 🔹 光療技術原理 */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">光療技術原理</h2>

        {/* 🔹 紅光 & 紅外光理療原理 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image src="/images/red-light-therapy.png" alt="紅光 & 紅外光理療" width={500} height={300} className="rounded-lg shadow-md" />
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">紅光 & 紅外光理療原理</h3>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
            <li>
              <strong>安全且非侵入性的理療技術：</strong>紅光 & 紅外光理療是一種安全且非侵入性的理療技術，通過紅光和近紅外光照射、滲透皮膚組織，能夠啟動細胞粒線體，修復破損的皮膚及肌肉組織，促進身體的自我修復能力。
            </li>
            <li>
              <strong>紅光與近紅外光的有效波長：</strong>紅光治療主要使用
              <span className="text-red-500 font-semibold"> 630 nm - 700 nm</span> 紅光波長，
              以及 <span className="text-red-500 font-semibold"> 700 nm - 1,100 nm</span> 近紅外光。
              這些光波能夠深入皮膚與肌肉層，幫助傷口癒合、減少發炎、提升組織修復能力。
            </li>
            <li>
              <strong>紅光對皮膚無害：</strong>與紫外線不同，紅光對皮膚無害，不會造成曬黑或色斑等問題。
              它是一種安全的光療技術，適合長期使用。
            </li>
            <li>
              <strong>粒線體與細胞能量：</strong>粒線體是細胞的 "發電機"，對紅光特別敏感。
              紅光可以刺激粒線體產生更多的細胞能量（ATP），加速細胞修復、增強代謝，提升細胞活性。
            </li>
            <li>
              <strong>促進細胞修復與再生：</strong>在紅光照射下，紅光會進入皮膚深層組織，刺激細胞中的粒線體，
              提高細胞能量（ATP）、活性氧（ROS）及一氧化氮（NO）的產生，
              進一步增強細胞功能與自我修復能力。這有助於傷口癒合、肌肉修復、減少發炎與疼痛，並促進整體健康。
            </li>
          </ul>
        </div>
      </div>


      {/* 🔹 藍光的益處 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">藍光的益處</h3>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
            <li>
              <strong>波長範圍：</strong>
              藍光波長為 <span className="text-blue-500 font-semibold">450-495 nm</span>，屬於冷色光，對身心具有放鬆作用。
            </li>
            <li>
              <strong>影響清醒狀態與專注力：</strong>
              藍光影響我們的清醒程度、專注力、工作效率與整體活力，如同紫外線影響維生素生成。
              在明亮光線下，藍光調節荷爾蒙分泌，幫助穩定情緒與生理時鐘。
            </li>
            <li>
              <strong>調節生物節律：</strong>
              白天藍光較高，夜晚則顯著減少。當環境變亮時，身體會釋放 <span className="text-blue-500 font-semibold">血清素</span> 和 <span className="text-blue-500 font-semibold">皮質醇</span>，
              這兩種荷爾蒙幫助保持清醒與提升活力，而夜晚藍光減少時，則促進 <span className="text-blue-500 font-semibold">褪黑激素</span> 分泌，幫助入睡。
            </li>
            <li>
              <strong>穩定情緒與提升記憶力：</strong>
              藍光可以調節神經遞質，幫助穩定情緒、減少焦慮，同時增強認知能力與記憶力，使思考更加清晰。
            </li>
            <li>
              <strong>促進視力發展與屈光發育：</strong>
              適量的藍光有助於視力發展，並對屈光發育產生影響，兒童與青少年適當接觸藍光可降低近視風險。
            </li>
          </ul>
        </div>
        
      </div>


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
      <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-md mt-16">
        <h2 className="text-3xl font-semibold">想深入了解產品？立即聯繫我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg flex items-center mx-auto hover:bg-gray-200 transition-all">
            聯絡我們 <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </section>

    </div>
  );
}
