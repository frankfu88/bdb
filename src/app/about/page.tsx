'use client';

import Image from "next/image";
import {
  DocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const certs = [
  { src: "/images/certs/coc.jpg", alt: "醫療器材許可證 1" },
  { src: "/images/certs/cqc.jpg", alt: "醫療器材許可證 2" },
  // { src: "/images/certs/cert3.jpg", alt: "醫療器材許可證 3" },
  // { src: "/images/certs/cert4.jpg", alt: "醫療器材許可證 4" },
];

export default function AboutPage() {
  const advantages = [
    {
      icon: <DocumentCheckIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '嚴謹把關',
      desc: ['從原物料進口到後加工', '均由寶的寶親自把關'],
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '專業諮詢',
      desc: ['由專業客服為您解惑', '以及原廠技術諮詢服務'],
    },
    {
      icon: <ClockIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '即時迅速',
      desc: ['本地團隊及生產維護', '給您最即時迅速的支援'],
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '品質保證',
      desc: ['衛福部認可證書與原廠保證', '給您最安心的產品品質'],
    },
    {
      icon: <HandThumbUpIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '售後服務',
      desc: ['即時業務諮詢', '與在地團隊售後保證'],
    },
    {
      icon: <LightBulbIcon className="w-12 h-12 mx-auto text-blue-800" />,
      title: '永續信念',
      desc: ['堅持醫療器材品質', '並為環境永續綠能努力'],
    },
  ];

  return (
    <div className="w-full">

      {/* ── 第一區：關於寶的寶 + 兩張示意圖 ── */}
      <section className="mt-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* 左側文字 */}
        <div className="md:w-1/3">
          <h2 className="text-5xl font-serif font-semibold text-green-900">關於寶的寶</h2>
          <h3 className="mt-1 text-xl tracking-widest uppercase text-indigo-200">ABOUT</h3>

          <div className="mt-6 space-y-2 text-gray-700 leading-relaxed">
            <p>成立於 2025 年，專注人用微壓氧與寵物高壓氧</p>
            <p>推廣人寵共享，讓照護更近、更安心</p>
            <p>結合國際認證設備與智慧管理系統</p>
            <p>堅持安全、舒適與高品質服務</p>
          </div>
        </div>

        {/* 右側圖片：等比例放大，不裁切 */}
        <div className="md:w-2/3 flex flex-col sm:flex-row gap-6">
          <div className="w-full">
            <Image
              src="/images/about/seed.png"
              alt="種子"
              width={1600}         // 換成你的原始圖比例（示例值）
              height={1067}        // 16:10 或依實際圖檔
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </section>

      {/* ── 第二區：滿版背景＋浮動卡片（貼齊左邊） ── */}
      <section className="relative mt-16 h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <Image
          src="/images/about/cooperation.png"
          alt="合作"
          fill
          priority
          className="object-cover scale-150"
          style={{ objectPosition: 'left center' }}
        />

        <div className="absolute inset-0 flex items-center justify-end pr-6">
          <div className="bg-white p-10 shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-2xl">
            <h2 className="text-4xl font-serif font-semibold text-green-900">嚴謹踏實，專業為本</h2>
            <h3 className="mt-1 text-xl tracking-widest uppercase text-indigo-200">QUALITY</h3>
            <div className="mt-6 space-y-2 text-gray-700 leading-relaxed">
              <p>秉持嚴謹的製程管理與精確的品質控制</p>
              <p>從原物料挑選、技術研發到產品製造，層層把關</p>
              <p>憑藉多年專業經驗，提供安全、可靠的氧療設備</p>
              <p>符合國際標準，讓客戶安心使用</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── 第三區：滿版背景＋浮動卡片（文字在左） ── */}
      <section className="relative mt-16 h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <Image
          src="/images/about/research.png"
          alt="醫療科技"
          fill
          priority
          className="object-cover scale-150"
          style={{ objectPosition: 'center center' }}
        />

        <div className="absolute inset-0 flex items-center justify-start pl-6">
          <div className="bg-white p-10 shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-2xl">
            <h2 className="text-4xl font-serif font-semibold text-green-900">研發製造，使命前行</h2>
            <h3 className="mt-1 text-xl tracking-widest uppercase text-indigo-200">INNOVATION</h3>
            <div className="mt-6 space-y-2 text-gray-700 leading-relaxed">
              <p>專注於氧療設備的研發與製造</p>
              <p>從技術創新到品質把關，追求卓越</p>
              <p>推廣大健康氧氣理念，服務人與寵物</p>
              <p>提供安全、有效、可持續的氧療照護</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── 寶的寶優勢 ── */}
      <section className="relative mt-24 overflow-hidden h-[90vh]">
        {/* 1. 背景圖容器：絕對定位、寬度 100vw、水平置中 */}
        <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 h-full">
          <Image
            src="/images/about/skyline.png"
            alt="advantages background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. 半透明遮罩：絕對佔滿 */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

        {/* 3. 內容層：相對定位、置中 */}
        <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-serif font-bold text-white text-center">
            寶的寶優勢
          </h2>
          <p className="mt-4 text-lg text-white text-center">
            精益求精，超出客戶想像與要求
          </p>

          {/* 4. 卡片區塊 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-300 bg-white bg-opacity-90 shadow-lg">
            {advantages.map((item, idx) => (
              <div key={idx} className="p-8 flex flex-col items-center text-center">
                {item.icon}
                <h3 className="mt-4 font-semibold text-blue-900">{item.title}</h3>
                <div className="mt-2 h-[1px] w-8 bg-gray-300" />
                <ul className="mt-2 space-y-1 text-gray-700">
                  {item.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 證書區 ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-green-900">
            相關技術證書
          </h2>
          <p className="mt-2 text-gray-600">
            產品經 CQC 與 CNAS 認證檢測，符合國際品質與安全標準，安心選用
          </p>
        </div>

        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certs.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="relative w-full h-0 pb-[125%] shadow-lg overflow-hidden "
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
