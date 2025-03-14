'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* 🔹 Navbar 下方留空間，並顯示全寬 Banner 與公司介紹 */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image
          src="/images/banner/menu.jpg"
          alt="網站橫幅"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        {/* 🔹 右側文字區塊 */}
        <div className="absolute inset-y-0 right-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">公司介紹</h2>
          <p className="text-lg text-gray-700 mt-2">
          牠們不只是動物，而是我們心中最珍貴的存在
          </p>
        </div>
      </div>

      {/* 🔹 內容區域恢復最大寬度 */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔹 關於諾亞高壓氧艙 */}
        <section className="mt-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-800 text-center tracking-wide">
            關於諾亞高壓氧艙
            <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
          </h2>

          {/* 文字說明 */}
          <div className="text-center max-w-3xl mx-auto mt-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              寶的寶有限公司引進中國
              <span className="text-gray-700">上海睿通机器人自动化股份有限公司</span>
              的高壓氧設備，專為人用與寵物用設計。所有產品皆通過
              <span className="text-gray-700">CNAS、CMA、CE</span> 認證，讓使用者更加放心。
            </p>
          </div>

          {/* 高壓氧艙種類展示 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "人用高壓氧艙", img: "/images/products/human-oxygen-chamber.jpg", description: "適用於健康管理、運動恢復與睡眠改善，提供穩定的 1.3-1.5 ATA 微壓技術。" },
              { title: "寵物用高壓氧艙（單體艙）", img: "/images/products/pet-single-chamber.png", description: "提供獨立氧氣治療空間，幫助術後康復、減少發炎並增強免疫力。" },
              { title: "寵物用高壓氧艙（抽屜式艙體）", img: "/images/products/pet-drawer-chamber.png", description: "多艙體設計，可同時治療多隻寵物，提升動物醫院治療效率。" }
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
            高壓氧治療 <span className="text-[#2266AA]">Hyperbaric Oxygen Therapy (HBOT)</span>，
            是醫學上利用高壓氧作為治療方式。透過將毛孩置於寵物專用的
            高壓氧醫療艙內，藉由壓力提高含氧量，使血管內氧氣含量提升
            <span className="font-semibold text-[#2266AA]"> 40%~50%</span>。
          </p>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            寵物高壓氧治療可促進血液循環，提高毛孩的自癒能力與白血球的殺菌力，
            並有效減少水腫與組織腫脹。此治療方式可單獨使用或與常規醫療合併，
            能縮短病程、提高治癒率，特別適用於治療難癒合的傷口、
            疾病恢復及術後照護，幫助消腫止痛，提供更全面的舒緩治療。
          </p>
          
          {/* 🔹 高壓氧的主要功效 */}
          <div className="mt-12 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "加速傷口癒合", description: "透過增加受損組織的氧氣供應來促進傷口、燒傷和皮膚移植的快速癒合，促進膠原蛋白的生成與新血管形成。" },
                { title: "減少發炎", description: "氧氣水平升高有助於減少發炎和腫脹，從而最大限度地減少寵物的疼痛和不適。" },
                { title: "增強免疫反應", description: "改善免疫系統的功能，使其更有效地抵抗感染和促進康復。" },
                { title: "手術恢復更快", description: "手術後，HBOT 可以幫助加快癒合並減少術後併發症，提高寵物的康復效率。" },
                { title: "神經支持", description: "研究表明，HBOT 可以幫助改善患有脊髓損傷、腦外傷和其他神經系統疾病的寵物的神經功能。" }
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
                在高壓氧艙內，當環境壓力上升至 1.3~1.5 大氣壓時，血液能攜帶的氧氣量顯著增加。  
                這意味著即使血紅素攜氧能力已飽和，血液中的溶解氧（Dissolved Oxygen）仍能大幅提升，  
                使氧氣更快地擴散到全身組織。
              </li>
              <li>
                <strong>增強血氧含量與細胞能量</strong>  
                在高壓環境下，氧氣分子變得更小，能更輕易穿透血管壁，進入組織細胞。  
                血液中的氧氣提高 30% 以上，即使微血管受損或阻塞，身體仍能獲取足夠的氧氣供應，  
                進一步促進組織修復、減少缺氧導致的細胞壞死。
              </li>
              <li>
                <strong>增強組織修復與抗發炎作用</strong>  
                高壓氧環境能啟動粒線體（Mitochondria），促進 ATP（三磷酸腺苷）的生成，  
                ATP 是細胞的主要能量來源，能加速細胞修復、組織生長，並減少發炎反應。  
                - 抑制發炎：降低發炎因子，減少腫脹與疼痛。  
                - 促進傷口癒合：幫助燒燙傷、傷口、術後恢復。  
                - 增強免疫力：提高白血球活性，幫助抵抗感染。
              </li>
              <li>
                <strong>增強微循環與排毒效果</strong>  
                高壓氧可促進血管新生（Angiogenesis），即新微血管的生長，有助於受損或老化組織的恢復。  
                透過增加氧氣供應，還能加速體內毒素與代謝廢物的排除，如：  
                - 減少乳酸堆積（運動後疲勞恢復）  
                - 加速酒精代謝（醒酒、解宿醉）  
                - 促進肝臟解毒（幫助代謝廢物排除）
              </li>
            </ul>
          </div>
        </section>

        {/* 🔹 我家貓狗適合寵物高壓氧療程嗎？ */}
        <section className="mt-12 bg-[#F9F9F9] text-gray-900 py-16 px-6 rounded-3xl max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#2266AA]">我家貓狗適合寵物高壓氧療程嗎？</h2>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            如果家裡毛孩有以下症狀，高壓氧治療（HBOT）可能提供額外的幫助，促進康復與提升生活品質。
          </p>

          {/* 主要適應症 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
            {[
              { title: "傷口癒合", description: "適用於不易癒合的傷口、燒燙傷及皮膚移植後的修復。" },
              { title: "術後恢復", description: "骨科及軟組織手術後，可加速癒合並減少術後發炎反應。" },
              { title: "感染控制", description: "適用於深部膿瘍、膿皮症、骨髓炎等細菌感染問題。" },
              { title: "神經系統疾病", description: "中風、癱瘓、腦炎、腦膜炎等，幫助神經修復與康復。" },
              { title: "心血管疾病", description: "適用於心臟病、腦栓塞，提高血氧濃度，改善血管修復能力。" },
              { title: "創傷性損傷", description: "擠壓傷、頭部創傷、脊髓損傷，可減少組織壞死並加速修復。" },
              { title: "牙齒疾病", description: "可應用於牙齦發炎、牙周病等口腔健康問題。" },
              { title: "癌症治療輔助", description: "放射性治療後可協助組織修復，減少治療引起的組織壞死。" },
              { title: "呼吸系統疾病", description: "肺炎、吸入性損傷（如煙霧或瀕臨溺水），改善低氧狀態。" },
              { title: "運動損傷", description: "車禍或運動造成的扭傷、肌腱損傷等，減少發炎並加速恢復。" },
              { title: "老年疾病", description: "適用於老年症候群、退化性疾病，幫助延緩衰老並提升活動力。" }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#2266AA]">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 CTA 區塊 */}
        <section className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg mt-12 transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-semibold">想了解更多？立即聯絡我們！</h2>
          <p className="mt-4 text-lg">提供最專業的產品建議與合作洽談。</p>
          <Link href="/contact">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-200 shadow-md">
              聯絡我們
            </button>
          </Link>
        </section>

        {/* 🔹 底部空間 */}
        <div className="h-16"></div>
      </div>
    </div>
  );
}