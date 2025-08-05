'use client';

import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 🔹 使用共用 Banner */}
        <Banner 
          title="公司介紹"
          // description="牠們不只是動物，而是我們心中最珍貴的存在"
          imageSrc="/images/banner/home.jpg"
          mobileImageSrc="/images/banner/mobile.jpg"
        />
      
      {/* 🔹 內容區域恢復最大寬度 */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 關於諾亞高壓氧艙 */}
        <section className="mt-20 px-6 max-w-7xl mx-auto">
          {/* <h2 className="text-3xl text-gray-800 text-center tracking-wide">
            關於寶的寶高壓氧艙
            <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
          </h2> */}

          {/* 文字說明 */}
          {/* <div className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              寶的寶有限公司專注於微壓與動物高壓氧艙的研發與製造，提供安全、可靠的氧療設備，促進人類與動物健康。所有產品均與上海睿通機器人自動化股份有限公司共同開發，並通過CNAS、CMA、CE等國際認證，品質與安全皆達國際標準。
            </p>
          </div> */}

          <h2 className="font-serif text-3xl text-center font-semibold text-green-900">產品列表</h2>
          <p className="mt-2 text-center text-gray-600">嶄新的技術、無與倫比的工藝設計</p>

          {/* 高壓氧艙種類展示：改為圖片底部藍色遮罩樣式 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { title: "寵物用高壓氧艙（單體艙）", img: "/images/products/single-chamber.png", link: "#" },
              { title: "寵物用高壓氧艙（抽屜式艙體）", img: "/images/products/drawer-chamber.png", link: "#" },
              { title: "人用微壓氧艙", img: "/images/products/human-oxygen-chamber.jpg", link: "#" }
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
                  // className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
          <h2 className="font-serif text-3xl text-center font-semibold text-green-900 mb-4">
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
          <h2 className="font-serif text-3xl text-center font-semibold text-green-900 mb-10">
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


        {/* 🔹 我家貓狗適合高壓氧艙嗎？ */}
        {/* <section className="mt-12 bg-[#F9F9F9] text-gray-900 py-16 px-6 rounded-3xl max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#2266AA]">我家貓狗適合高壓氧艙嗎？</h2>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            如果家裡的寵物有以下狀況，高壓氧環境或許能提供額外支持，協助維持良好的身體狀態與活力。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
            {[
              { title: "皮膚與傷口修復", description: "適用於不易恢復的皮膚狀況、燒燙傷及術後修復過程。" },
              { title: "術後調理", description: "骨科或軟組織手術後，幫助維持穩定狀態，減少不適感。" },
              { title: "環境適應力支持", description: "適用於需要更多環境調適支持的寵物，例如對氣候變化較敏感者。" },
              { title: "神經系統健康", description: "適用於需要額外支持神經系統運作的寵物，幫助維持良好的日常表現。" },
              { title: "心血管調適", description: "適合希望透過氧氣供應維持穩定心血管循環的寵物。" },
              { title: "外力影響調適", description: "可提供額外支持，協助調適突發狀況，例如碰撞或跌倒後的恢復期。" },
              { title: "口腔健康", description: "適用於牙齦健康需求較高的寵物，幫助維持口腔環境穩定。" },
              { title: "細胞健康管理", description: "適用於有特殊細胞健康需求的寵物，幫助維持良好狀態。" },
              { title: "呼吸環境適應", description: "適用於需要調適呼吸環境的寵物，如空氣品質變化較敏感者。" },
              { title: "運動後恢復", description: "適合喜愛運動的寵物，幫助放鬆與調整身體狀態。" },
              { title: "熟齡寵物支持", description: "適用於熟齡寵物，提供更穩定的支持，幫助維持活力。" }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#2266AA]">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* 🔹 底部空間 */}
        <div className="h-16"></div>
      </div>

      {/* 🔹 CTA 區塊 – 深綠底三欄＋置中外框按鈕＋版權 */}
        <section 
          className="
            relative 
            left-1/2 
            w-screen 
            -translate-x-1/2 
            bg-[#0F4D2F] 
            text-white 
            py-16
          "
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* ── 第一欄：公司資訊 ── */}
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-2">
                <Image
                  src="/images/logo.png"
                  alt="公司 Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="font-serif font-semibold text-lg">寶的寶有限公司</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Image src="/images/icons/telephone.png" alt="" width={20} height={20} />
                  <span className="ml-2">服務電話 03-2871723</span>
                </li>
                <li className="flex items-start">
                  <Image src="/images/icons/clock.png" alt="" width={20} height={20} />
                  <span className="ml-2">服務時間 週一至週五 09:00 – 17:00（例假日休）</span>
                </li>
                <li className="flex items-start">
                  <Image src="/images/icons/location.png" alt="" width={20} height={20} />
                  <span className="ml-2">所在位置 桃園市中壢區青商路59號2樓</span>
                </li>
                <li className="flex items-start">
                  <Image src="/images/icons/mail.png" alt="" width={20} height={20} />
                  <span className="ml-2">電子信箱 frank.fu@bdb.com.tw</span>
                </li>
              </ul>
            </div>

            {/* ── 第二欄：快速導覽 ── */}
            <div>
              <h3 className="font-serif font-semibold mb-4">快速導覽</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "一 關於寶的寶", href: "/about" },
                  { label: "一 最新消息", href: "/news" },
                  { label: "一 產品介紹", href: "/products" },
                  { label: "一 相關網站", href: "/links" },
                  { label: "一 客戶服務", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-green-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── 第三欄：產品連結 ── */}
            <div>
              <h3 className="font-serif font-semibold mb-4">產品連結</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products/o2-prime" className="hover:text-green-200">
                    — 高壓氧艙
                  </Link>
                </li>
                {/* 依需求再新增更多 */}
              </ul>
            </div>
          </div>

          {/* ── 大按鈕：立即預約洽詢 ── */}
          <div className="mt-12 text-center">
            <Link
              href="https://line.me/ti/p/@464hptwo"
              target="_blank"
              className="inline-flex items-center justify-center
                        w-full max-w-xs md:max-w-md lg:max-w-lg
                        px-6 py-4
                        border border-white text-base font-medium tracking-wide
                        hover:bg-white hover:text-[#0F4D2F]
                        transition-colors"
            >
              <span>立即預約洽詢</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

    </div>
  );
}