'use client';

import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="w-full">
        {/* 🔹 使用共用 Banner */}
        <Banner 
          title="公司介紹"
          description="牠們不只是動物，而是我們心中最珍貴的存在"
          imageSrc="/images/banner/banner.jpg"
        />
      </div>

      {/* 🔹 內容區域恢復最大寬度 */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 關於諾亞高壓氧艙 */}
        <section className="mt-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-800 text-center tracking-wide">
            關於寶的寶高壓氧艙
            <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
          </h2>

          {/* 文字說明 */}
          <div className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              寶的寶有限公司專注於微壓與動物高壓氧艙的研發與製造，提供安全、可靠的氧療設備，促進人類與動物健康。所有產品均與上海睿通機器人自動化股份有限公司共同開發，並通過CNAS、CMA、CE等國際認證，品質與安全皆達國際標準。
            </p>
          </div>

          {/* 高壓氧艙種類展示 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "寵物用高壓氧艙（單體艙）", img: "/images/products/single-chamber.png", description: "提供獨立的高氧環境，支持術後恢復、維持身體平衡，幫助寵物保持最佳狀態。" },
              { title: "寵物用高壓氧艙（抽屜式艙體）", img: "/images/products/drawer-chamber.png", description: "多艙體設計，可同時照護多隻寵物，提升動物醫院的使用便利性。" },
              { title: "人用高壓氧艙", img: "/images/products/human-oxygen-chamber.jpg", description: "適用於健康管理、運動恢復與睡眠改善，提供穩定的 1.3-1.5 ATA 微壓技術。" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image 
                  src={item.img} 
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover mx-auto"
                />
                <h3 className="text-lg text-gray-800 mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 什麼是高壓氧 */}
        <section className="mt-12 bg-[#E6F0FA] text-gray-900 py-16 px-6 rounded-3xl max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#2266AA]">什麼是高壓氧？</h2>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            高壓氧 <span className="text-[#2266AA]">Hyperbaric Oxygen (HBO)</span> 
            是一種透過增加氧氣濃度來支持身體健康的方式。當寵物進入專門設計的高壓氧艙內，壓力的提升能夠幫助氧氣更有效地進入體內，使血液中的含氧量
            <span className="font-semibold text-[#2266AA]">增加 40%~50%</span>，有助於維持良好的生理機能。
          </p>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            透過提供充足的氧氣，高壓氧艙有助於促進血液循環，維持寵物的生理平衡，讓身體能夠更順利適應各種狀況。此外，高氧環境也有助於舒緩身體不適，減少局部腫脹，使寵物的活動更為輕鬆自在，適合作為日常健康管理的一環。
          </p>
          
          <div className="mt-12 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "維持肌膚健康", description: "提供充足氧氣，有助於肌膚維持良好狀態，支持寵物日常活動的舒適度。" },
                { title: "調節身體狀態", description: "高氧環境有助於維持身體平衡，幫助寵物適應不同環境變化，讓日常活動更加輕鬆。" },
                { title: "支持自然防禦力", description: "提供穩定氧氣補充，幫助維持身體機能，保持良好的活力與適應力。" },
                { title: "促進日常恢復", description: "適合日常保養，可幫助寵物在運動或高強度活動後獲得舒適的放鬆體驗。" },
                { title: "維持靈活度", description: "高氧環境支持身體循環，讓寵物能夠更自在地活動，維持靈活與穩定狀態。" }
              ].map((item, index) => (
                <div key={index} className="bg-[#4b7ad1] text-white p-6 shadow-lg rounded-lg hover:bg-[#1B5B99] transition-all">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔹 高壓氧艙原理說明 */}
        <section className="mt-12 bg-[#E6F0FA] text-gray-900 py-16 px-6 rounded-3xl max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#2266AA]">高壓氧艙原理說明</h2>
          <div className="mt-8 max-w-4xl mx-auto">
            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed space-y-4">
              <li>
                <strong>亨利法則 - 壓力提升，氧氣溶解度增加</strong>  
                根據亨利法則（Henry’s Law），氣體在液體中的溶解度會隨著壓力的增加而提升。  
                在高氧環境下，當壓力提高至 1.3~1.5 大氣壓時，氧氣可進一步溶解於血液，  
                幫助氧氣更快速且廣泛地分佈至身體各處，維持整體良好狀態。
              </li>
              <li>
                <strong>提升血氧含量，幫助維持良好循環</strong>  
                在穩定的高氧環境下，氧氣可更容易進入血液並傳遞至身體各部位。  
                當氧氣供應穩定，身體能維持更良好的循環狀態，支持日常活動所需的能量。
              </li>
              <li>
                <strong>提供細胞充足能量，維持活力</strong>  
                高氧環境有助於細胞的能量代謝，促進ATP（三磷酸腺苷）的合成，  
                ATP是細胞運作所需的重要能量來源，可幫助維持穩定狀態。  
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>促進日常適應力：幫助身體適應環境變化，維持穩定的內在狀態。</li>
                  <li>支持日常循環：有助於維持身體機能與適應力，使寵物日常活動更順暢。</li>
                  <li>提供穩定氧氣補充，支持整體平衡。</li>
                </ul>
              </li>
              <li>
                <strong>支持身體循環，維持穩定代謝</strong>  
                高氧環境有助於循環調節，幫助維持良好的狀態。  
                透過穩定的氧氣補充，可支持身體維持日常代謝機能，如：  
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>調節運動後的不適感，幫助放鬆</li>
                  <li>支持體內廢物的正常代謝與排除</li>
                  <li>維持身體機能的自然運作</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* 🔹 我家貓狗適合高壓氧艙嗎？ */}
        <section className="mt-12 bg-[#F9F9F9] text-gray-900 py-16 px-6 rounded-3xl max-w-7xl mx-auto">
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
        </section>

        {/* 🔹 CTA 區塊 - 點擊後導向 LINE 官方帳號 */}
        <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg mt-12">
          <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
          <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
          <Link href="https://line.me/ti/p/@464hptwo" target="_blank">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
              加入官方 LINE
            </button>
          </Link>
        </section>
        
        {/* 🔹 底部空間 */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}