'use client';

import Image from "next/image";
import Banner from "@/components/banner";

export default function AboutPage() {
  return (
    <div className="w-full">

      <div className="w-full">
        {/* 🔹 使用共用 Banner */}
        <Banner 
          title="關於我們"
          description="牠們不只是動物，而是我們心中最珍貴的存在"
          imageSrc="/images/banner/about.jpg"
        />
      </div>

      {/* 🔹 公司介紹 (無圖片) */}
      <section className="mt-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-800 text-center tracking-wide">
          認識我們
          <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed text-center">
          寶的寶有限公司專注於微壓氧艙與動物高壓氧艙的研發、製造與銷售，致力於提供更好的氧環境支持，幫助人類與動物維持良好狀態。
          我們的所有氧艙設備皆與上海睿通機器人自動化股份有限公司共同研發與製造，並經過嚴格的市場適用性評估與安全測試。
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed text-center">
          微壓氧艙產品獲得
          <span className="text-[#2266AA] font-semibold"> CNAS、CMA及CE</span> 國際認證，
          適用於日常健康管理與環境調適。
          動物高壓氧艙則專為獸醫院應用設計，提供單艙體與抽屜式艙體等選擇，其中抽屜式艙體可同時供多隻寵物使用，
          有助於提升動物醫院的使用效率。
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
                <span className="text-[#2266AA] font-semibold"> 求變創新、持續改進、卓越品質、超越期待</span> 的理念，不斷優化產品與服務，推動微壓與高壓氧艙技術的應用與發展。
              </p>
            </div>
          </div>

          {/* 零成本合作模式 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center flex-1 flex items-center">
            <div>
              <h3 className="text-2xl text-[#2266AA] font-semibold">零成本合作模式</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                為協助動物醫院引入高壓氧艙設備，我們推出
                <span className="text-[#2266AA] font-semibold"> 零成本合作模式</span>，免押金、免設備購置費，
                並提供
                <span className="text-[#2266AA] font-semibold"> 長期設備維護、專業應用指導及行銷輔導</span>，讓更多動物醫院能夠輕鬆擴展服務應用。
              </p>
            </div>
          </div>

          {/* 攜手專業團隊 */}
          <div className="bg-[#F5F9FF] p-8 rounded-3xl shadow-lg text-center flex-1 flex items-center">
            <div>
              <h3 className="text-2xl text-[#2266AA] font-semibold">攜手專業團隊，共創健康未來</h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                我們將持續攜手
                <span className="text-[#2266AA] font-semibold"> 相關專業團隊</span>，致力於人類與動物的良好照護，讓每一次氧氣應用都能助益
                <span className="text-[#2266AA] font-semibold"> 生活品質提升</span>。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🔹 CTA 區塊 - 調整為連結到 LINE 官方帳號 */}
      <section className="mt-16 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
        <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
        <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
            加入官方 LINE
          </button>
        </a>
      </section>

      {/* 🔹 底部空間 */}
      <div className="h-16"></div>
    </div>
  );
}
