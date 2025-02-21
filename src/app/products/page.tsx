'use client';

import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* 🔹 Hero 區塊 */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          高壓氧艙 + 光療技術：全面提升健康與修復力
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          先進的 **高壓氧艙技術**，結合 **紅光 & 藍光療法**，針對 <strong>運動恢復、醫療保健、寵物醫療</strong> 提供最佳解決方案。
        </p>
      </section>

      {/* 🔹 為什麼選擇高壓氧艙？ */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">為什麼選擇高壓氧艙？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/oxygen-boost.png" alt="提升血氧" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">血氧濃度提升 30%</h3>
            <p className="text-gray-600 mt-2">增加氧氣供應，加速細胞修復，促進新陳代謝。</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/cell-repair.png" alt="細胞修復" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">細胞修復加速 2 倍</h3>
            <p className="text-gray-600 mt-2">結合光療技術，激活粒線體，提高 ATP 產生。</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <Image src="/anti-inflammation.png" alt="消炎抗氧化" width={100} height={100} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-4">消炎 & 抗氧化</h3>
            <p className="text-gray-600 mt-2">減少自由基傷害，提升免疫系統。</p>
          </div>
        </div>
      </section>

      {/* 🔹 產品功能解析 */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center mb-10">產品功能解析</h2>

  {/* 🔹 高壓氧艙技術 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <Image src="/hyperbaric-chamber.png" alt="高壓氧艙技術" width={500} height={300} className="rounded-lg shadow-md" />
    <div>
      <h3 className="text-xl font-semibold mb-4">高壓氧艙技術</h3>
      <p className="text-gray-700 leading-relaxed">
        高壓氧技術透過 <strong>提高環境氣壓</strong>，使氧氣更容易溶解到血液中，
        <strong>增強血氧供應</strong>，促進細胞修復與組織生長。這項技術被廣泛應用於：
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
        <li>運動員加速恢復，減少乳酸堆積</li>
        <li>術後傷口修復，提高免疫力</li>
        <li>慢性病管理，改善血液循環</li>
        <li>動物醫療，例如皮膚病與關節炎治療</li>
      </ul>
    </div>
  </div>

  {/* 🔹 紅光 & 紅外光理療技術 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
    <div>
      <h3 className="text-xl font-semibold mb-4">紅光 & 紅外光理療</h3>
      <p className="text-gray-700 leading-relaxed">
        <strong className="text-red-600">紅光 & 紅外光</strong> 是一種安全且非侵入性的理療技術，
        能夠深入滲透 <strong>皮膚組織與肌肉</strong>，促進細胞修復與新生。研究顯示：
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
        <li>紅光 (<strong>630-700nm</strong>) 可 <strong>促進膠原蛋白生成</strong>，改善皮膚健康</li>
        <li>近紅外光 (<strong>700-1100nm</strong>) 可深入肌肉層，<strong>加速傷口癒合</strong></li>
        <li>刺激細胞粒線體，<strong>提升 ATP (細胞能量)</strong>，提高修復效率</li>
        <li>減少發炎反應，<strong>舒緩關節疼痛</strong></li>
      </ul>
    </div>
    <Image src="/red-light-therapy.png" alt="紅光 & 紅外光理療技術" width={500} height={300} className="rounded-lg shadow-md" />
  </div>

  {/* 🔹 藍光的益處 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
    <Image src="/blue-light-benefits.png" alt="藍光的益處" width={500} height={300} className="rounded-lg shadow-md" />
    <div>
      <h3 className="text-xl font-semibold mb-4">藍光的益處</h3>
      <p className="text-gray-700 leading-relaxed">
        <strong className="text-blue-600">藍光</strong> 主要影響生物節律與皮膚健康。
        在人體內，藍光會影響 **褪黑激素 (睡眠荷爾蒙) 的分泌**，調節清醒程度：
      </p>
      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-3">
        <li>日間，藍光提升 <strong>血清素 & 皮質醇</strong>，幫助保持清醒與專注</li>
        <li>夜間減少藍光暴露，可促進 **褪黑激素** 釋放，幫助睡眠</li>
        <li>皮膚治療：**抑制痤瘡細菌生長**，減少青春痘</li>
      </ul>
    </div>
  </div>

  {/* 🔹 技術比較表 */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-center mb-6">光療技術比較</h3>
    <table className="w-full border-collapse border border-gray-300 text-gray-800">
      <thead>
        <tr className="bg-gray-700 text-white">
          <th className="p-3 border">技術</th>
          <th className="p-3 border">主要波長</th>
          <th className="p-3 border">主要功效</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-red-100">
          <td className="p-3 border font-semibold">紅光</td>
          <td className="p-3 border">630-700 nm</td>
          <td className="p-3 border">促進膠原蛋白，改善皮膚 & 傷口癒合</td>
        </tr>
        <tr className="bg-red-200">
          <td className="p-3 border font-semibold">近紅外光</td>
          <td className="p-3 border">700-1100 nm</td>
          <td className="p-3 border">深入肌肉層，促進組織修復與消炎</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="p-3 border font-semibold">藍光</td>
          <td className="p-3 border">450-495 nm</td>
          <td className="p-3 border">調節生物鐘，幫助睡眠，減少痤瘡細菌</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      {/* 🔹 產品規格 & 參數 */}
      <section className="py-16">
  <h2 className="text-3xl font-semibold text-center mb-10">產品規格</h2>
  
  <table className="w-full border-collapse border border-gray-300 text-gray-800">
    <thead>
      <tr className="bg-green-700 text-white">
        <th className="p-3 border">規格類別</th>
        <th className="p-3 border">參數</th>
        <th className="p-3 border">高壓氧艙</th>
      </tr>
    </thead>
    <tbody>

      {/* 🔹 結構 & 電源 */}
      <tr className="bg-gray-200 font-semibold"><td className="p-3 border" colSpan={3}>結構 & 電源</td></tr>
      <tr><td className="p-3 border">艙體尺寸</td><td className="p-3 border">長寬高</td><td className="p-3 border">110(L) * 70(W) * 110(H) cm</td></tr>
      <tr><td className="p-3 border">電源</td><td className="p-3 border">電壓</td><td className="p-3 border">220V AC</td></tr>
      <tr><td className="p-3 border">功率</td><td className="p-3 border">耗電量</td><td className="p-3 border">1000W</td></tr>
      
      {/* 🔹 環境控制 */}
      <tr className="bg-gray-200 font-semibold"><td className="p-3 border" colSpan={3}>環境控制</td></tr>
      <tr><td className="p-3 border">恒溫空調</td><td className="p-3 border">艙內溫度</td><td className="p-3 border">20~35°C（可設定）</td></tr>
      <tr><td className="p-3 border">抗菌自潔</td><td className="p-3 border">消毒方式</td><td className="p-3 border">負離子、紫外線滅菌</td></tr>

      {/* 🔹 氣體系統 */}
      <tr className="bg-gray-200 font-semibold"><td className="p-3 border" colSpan={3}>氣體系統</td></tr>
      <tr><td className="p-3 border">艙體保壓</td><td className="p-3 border">最大壓力</td><td className="p-3 border">8 ATA</td></tr>
      <tr><td className="p-3 border">艙體壓力</td><td className="p-3 border">可設定範圍</td><td className="p-3 border">1.1~2.0 ATA</td></tr>
      <tr><td className="p-3 border">制氧方式</td><td className="p-3 border">氣體純度</td><td className="p-3 border">鉛離子制氧分離篩，10L / 96%</td></tr>
      <tr><td className="p-3 border">艙內氧濃度</td><td className="p-3 border">安全範圍</td><td className="p-3 border">≤ 40%</td></tr>

      {/* 🔹 光療系統 */}
      <tr className="bg-gray-200 font-semibold"><td className="p-3 border" colSpan={3}>光療系統</td></tr>
      <tr><td className="p-3 border">內建光療</td><td className="p-3 border">光波範圍</td><td className="p-3 border">藍光、紅光、紅外線</td></tr>

      {/* 🔹 安全機制 */}
      <tr className="bg-gray-200 font-semibold"><td className="p-3 border" colSpan={3}>安全機制</td></tr>
      <tr><td className="p-3 border">自動清潔</td><td className="p-3 border">清潔系統</td><td className="p-3 border">廢棄物承接盤，自動噴淋，排放閥門</td></tr>
      <tr><td className="p-3 border">應急系統</td><td className="p-3 border">緊急控制</td><td className="p-3 border">主機緊急按鈕</td></tr>

    </tbody>
  </table>
</section>


      {/* 🔹 CTA 行動召喚 */}
      <section className="py-16 text-center bg-green-600 text-white rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold">想深入了解產品？立即聯繫我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-green-600 text-lg font-medium rounded-lg hover:bg-gray-200">
            聯絡我們
          </button>
        </Link>
      </section>

    </div>
  );
}
