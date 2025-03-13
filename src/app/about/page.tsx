'use client';

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      
      {/* 🔹 頂部 Banner */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image 
          src="/images/banner/about.jpg"
          alt="關於我們"
          width={1920}
          height={400} 
          className="w-full h-full object-cover"
          priority
        />
        {/* 🔹 右側文字區塊 */}
        <div className="absolute inset-y-0 right-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">關於我們</h2>
          <p className="text-lg text-gray-700 mt-2">
          牠們不只是動物，而是我們心中最珍貴的存在
          </p>
        </div>
      </div>

      {/* 🔹 公司介紹 (無圖片) */}
      <section className="mt-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-800 text-center tracking-wide">
          認識我們
          <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed text-center">
          寶的寶有限公司專注於微壓氧艙與動物高壓氧艙的研發、製造與銷售，致力於提升人類與動物的健康照護。
          我們的所有氧艙設備皆與
          <span className="text-[#2266AA] font-semibold"> 上海睿通機器人自動化股份有限公司</span> 共同研發與製造，
          並經過嚴格的市場適用性評估與安全測試。
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed text-center">
          微壓氧艙產品獲得
          <span className="text-[#2266AA] font-semibold"> CNAS、CMA及CE</span> 國際認證，
          適用於人體健康管理與恢復療程。
          動物高壓氧艙則專為
          <span className="text-[#2266AA] font-semibold"> 獸醫臨床需求</span> 設計，
          提供
          <span className="text-[#2266AA] font-semibold"> 單艙體</span> 與
          <span className="text-[#2266AA] font-semibold"> 抽屜式艙體</span> 兩種選擇，
          其中抽屜式艙體可同時治療多隻寵物，
          有效提升動物醫院的治療效率。
        </p>
      </section>

      {/* 🔹 三大區塊 (左側加圖片) */}
      <section className="mt-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        
        {/* ✅ 左側單一圖片 - 高度與右側同步 */}
        <div className="w-full md:w-1/3 flex items-stretch">
          <div className="relative w-full h-auto md:h-full flex items-center">
            <Image
              src="/images/about.png"
              alt="寶的寶高壓氧艙"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto md:h-full"
            />
          </div>
        </div>

        {/* ✅ 右側三個區塊 - `items-stretch` 讓內容等高 */}
        <div className="w-full md:w-2/3 flex flex-col justify-between space-y-6">
          
          {/* 我們的理念 */}
          <div className="bg-[#F5F9FF] p-8 rounded-3xl shadow-lg text-center flex-1 flex items-center">
            <div>
              <h3 className="text-2xl text-[#2266AA] font-semibold">我們的理念</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                寶的寶秉持
                <span className="text-[#2266AA] font-semibold"> 求變創新、持續改進、卓越品質、超越期待</span> 的理念，
                不斷優化產品與服務，推動微壓與高壓氧療法的應用與發展。
              </p>
            </div>
          </div>

          {/* 零成本合作模式 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center flex-1 flex items-center">
            <div>
              <h3 className="text-2xl text-[#2266AA] font-semibold">零成本合作模式</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                為協助獸醫院導入高壓氧技術，我們推出
                <span className="text-[#2266AA] font-semibold"> 零成本合作模式</span>，免押金、免設備購置費，
                並提供
                <span className="text-[#2266AA] font-semibold"> 終身免費維護、專業培訓及行銷輔導</span>，
                讓更多動物醫療機構無憂升級診療技術。
              </p>
            </div>
          </div>

          {/* 攜手專業團隊 */}
          <div className="bg-[#F5F9FF] p-8 rounded-3xl shadow-lg text-center flex-1 flex items-center">
            <div>
              <h3 className="text-2xl text-[#2266AA] font-semibold">攜手專業團隊，共創健康未來</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                我們將持續攜手
                <span className="text-[#2266AA] font-semibold"> 醫療與獸醫專業團隊</span>，
                致力於人類與動物健康照護，讓每一次氧療都成為
                <span className="text-[#2266AA] font-semibold"> 生命品質提升</span> 的關鍵。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🔹 CTA 區塊 */}
      <section className="mt-16 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <a href="/contact">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
            聯絡我們
          </button>
        </a>
      </section>

      {/* 🔹 底部空間 */}
      <div className="h-16"></div>
    </div>
  );
}
