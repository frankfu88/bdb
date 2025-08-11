'use client';

import Image from "next/image";
import Banner from "@/components/banner";
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
       {/*  
        這裡讓 Banner 滿版 (full-bleed)
        去掉父層 container 的左右 padding/內邊距
      */}
      <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen">
        <Banner
          imageSrc="/images/banner/home.jpg"
          mobileImageSrc="/images/products/drawer-chamber.png"
        />
      </div>
      
      {/* 🔹 內容區域恢復最大寬度 */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 關於諾亞高壓氧艙 */}
        <section className="mt-20 px-6 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900">產品列表</h2>
          <p className="mt-2 text-center text-gray-600">引領未來，創新無限</p>

          {/* 高壓氧艙種類展示：改為圖片底部藍色遮罩樣式 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { title: "寵物用高壓氧艙（單體艙）", img: "/images/products/single-chamber.png", link: "/products/pet" },
              { title: "寵物用高壓氧艙（抽屜式艙體）", img: "/images/products/drawer-chamber.png", link: "/products/pet" },
              { title: "人用微壓氧艙", img: "/images/products/human-oxygen-chamber.jpg", link: "/products/human" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative block group overflow-hidden shadow-md"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                />
                <div className="font-serif absolute bottom-0 left-0 w-full bg-green-900/80 text-white text-center py-4 px-2">
                  <span className="text-lg font-bold">{item.title}</span>
                  <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 🔹 什麼是高壓氧 */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900 mb-4">
            什麼是高壓氧？
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            高壓氧 Hyperbaric Oxygen (HBO) 是一種透過增加氧氣濃度來支持身體健康的方式。當寵物進入專門設計的高壓氧艙內，壓力的提升能幫助氧氣更有效地進入體內，使血液中的含氧量增加 40%~50%，有助於維持良好的生理機能。
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            高氧環境能促進血液循環、維持生理平衡，減少不適與腫脹，讓活動更輕鬆自在，
            適合作為日常健康管理的一環。
          </p>

          {/* 功能卡片 */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "維持肌膚健康", desc: "提供充足氧氣，支持日常活動的舒適度。" },
              { title: "調節身體狀態", desc: "幫助適應不同環境變化，日常活動更輕鬆。" },
              { title: "支持自然防禦力", desc: "維持身體機能，保持良好活力。" },
              { title: "促進日常恢復", desc: "運動後獲得舒適的放鬆體驗。" },
              { title: "維持靈活度", desc: "支持循環，維持穩定與靈活。" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 p-4 hover:shadow-md transition">
                <h3 className="font-serif font-bold text-[#1B5B49] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* 🔹 高壓氧艙原理說明 */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900 mb-10">
            高壓氧艙原理說明
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "提升溶解度",
                desc: "壓力提升可增加氧氣在血液中的溶解度，加速輸送至全身。"
              },
              {
                title: "提高血氧",
                desc: "穩定的高氧環境讓氧氣更易進入血液並傳至全身，維持日常能量。"
              },
              {
                title: "補充細胞能量",
                desc: "促進ATP合成，提供細胞運作所需能量，支持穩定狀態。"
              },
              {
                title: "穩定循環代謝",
                desc: "支持正常循環與代謝，幫助排除廢物並維持自然運作。"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 hover:shadow-md transition">
                <h3 className="text-xl font-serif font-bold text-[#1B5B49] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ 共用表單：用元件引入 */}
        <ContactSection />
      </div>
    </div>
  );
}