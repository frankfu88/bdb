'use client';

import Image from "next/image";
import Banner from "@/components/banner";
import ContactSection from '@/components/ContactSection';

type CompareRow = [string, string, string];

const COMPARISON: CompareRow[] = [
  ['艙內壓力', '≥ 1.5 ATA', '1.2–1.5 ATA'],
  ['氧輸送機制重點', '血紅素攜氧 + 血漿溶氧顯著↑', '血紅素攜氧 + 血漿溶氧小幅↑'],
  ['體感特徵', '加壓感較明顯，需適應耳壓變化', '壓力溫和，舒適度高'],
  ['使用模式', '時段較集中、依場域安排', '可較高頻率、規律融入日常'],
  ['場域導入', '艙體規格完整、配套較多', '門檻較低、配置彈性高'],
  ['操作複雜度', '流程較完整、管理較嚴謹', '流程簡化、操作友善'],
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ===== Full-bleed Banner ===== */}
      <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen">
        <Banner
          imageSrc="/images/banner/home.jpg"
          mobileImageSrc="/images/products/human.jpg"
        />
      </div>

      {/* ===== Main Container（放大寬度） ===== */}
      <div className="max-w-[1400px] xl:max-w-[1500px] 2xl:max-w-[1660px] mx-auto px-6">
        {/* ===== 產品列表（維持比例，等比例放大） ===== */}
        <section className="mt-20 mx-auto">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900">產品列表</h2>
          <p className="mt-2 text-center text-gray-600">引領未來，創新無限</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { title: "寵物用高壓氧艙", img: "/images/products/pet.jpg", link: "/products/oxy-series/pet" },
              { title: "人用微壓氧艙", img: "/images/products/human.jpg", link: "/products/oxy-series/human" },
              { title: "豪華高壓氧艙", img: "/images/products/lux.jpg", link: "/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group block overflow-hidden rounded-lg shadow-md"
              >
                {/* 手機：5/4；桌機：4/3；圖片不變形 */}
                <div className="relative w-full aspect-[5/4] md:aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1660px) 520px, (min-width:1500px) 480px, (min-width:1280px) 450px, (min-width:768px) 44vw, 100vw"
                    priority={index === 0}
                  />
                </div>

                <div className="font-serif bg-green-900/80 text-white text-center px-2 py-2.5 md:py-3 leading-tight">
                  <span className="text-base md:text-lg font-bold align-middle">{item.title}</span>
                  <span className="ml-1.5 inline-block align-middle transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ===== 什麼是高壓氧 ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900 mb-4">
            什麼是高壓氧？
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            高壓氧（HBO）是在高於大氣壓的環境提供較高濃度氧氣；壓力上升使艙內氧分壓提高，依亨利定律（氣體在液體中的溶解度與分壓成正比，C∝P），更多氧直接溶解於血漿，而不僅依賴血紅素攜氧。血漿溶氧增加使組織氧分壓（PtO₂）與擴散梯度上升，氧可更有效進入微循環與相對缺氧區域；實際壓力與時間設定應依設備與場域規範。
          </p>
        </section>

        {/* ===== 高壓氧艙原理（文字版） ===== */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl font-semibold text-green-900 text-center mb-6">高壓氧艙原理說明</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            高壓氧艙在高於大氣壓的環境下，使氧氣在血漿中的溶解度大幅提升，能更有效輸送至全身組織，短時間內達到強化供氧與加速擴散的效果。
          </p>
          <ol className="list-decimal ml-5 text-gray-800 space-y-3">
            <li><span className="font-semibold text-green-900">壓力提升（P↑）</span>：艙內壓力高於 1 ATA，空氣被壓縮。</li>
            <li><span className="font-semibold text-green-900">溶解氧增加</span>：依亨利定律，壓力越高，氧在血漿中的溶解量越多，<span className="whitespace-nowrap">不僅依賴血紅素</span> 攜氧。</li>
            <li><span className="font-semibold text-green-900">組織氧分壓上升</span>：血液中的溶氧↑ → 組織氧分壓↑ → 氧氣擴散更有效率。</li>
            <li><span className="font-semibold text-green-900">短時強化供氧</span>：在符合規範的時間與壓力下，達到較明顯的加壓與供氧效果。</li>
          </ol>

          <div className="mt-5 border border-gray-100 bg-gray-50/40 p-4 text-md text-green-900">
            <div className="font-serif font-semibold mb-2">作用流程</div>
            <div>加壓（P↑） → 血漿溶氧（O₂↑） → 組織氧分壓（PtO₂↑） → 氧擴散效率↑</div>
          </div>
        </section>

        {/* ===== 什麼是微壓氧 ===== */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-center font-semibold text-green-900 mb-4">
            什麼是微壓氧？
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            微壓氧（mHBO）是在略高於大氣壓（約 1.2–1.5 ATA）的環境中吸入較高濃度氧氣。壓力與氧分壓的提升，依據菲克擴散定律，會增加肺泡與血液間的氧氣擴散速率，使更多氧氣進入血漿並輸送至全身組織。由於加壓幅度溫和，減少了氣壓相關不適，適合長期、規律地作為日常氧補充與代謝支持。
          </p>
        </section>

        {/* ===== 微壓氧艙原理（文字版） ===== */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl font-semibold text-green-900 text-center mb-6">微壓氧艙原理說明</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            微壓氧以「輕度加壓 + 較高氧濃度」為主，強調舒適穩定的補氧體驗。
          </p>
          <ol className="list-decimal ml-5 text-gray-800 space-y-3">
            <li><span className="font-semibold text-green-900">輕度加壓</span>：在 1.2–1.5 ATA 範圍內，溶氧小幅提升。</li>
            <li><span className="font-semibold text-green-900">穩定補氧</span>：在舒適的壓力條件下維持較高氧分壓，帶來漸進式的氧供應。</li>
            <li><span className="font-semibold text-green-900">可持續性</span>：體感溫和、門檻低，便於較高頻率或規律性的使用安排。</li>
            <li><span className="font-semibold text-green-900">導入彈性</span>：艙體與場域需求較簡化，配置彈性高。</li>
          </ol>

          <div className="mt-5 border border-gray-100 bg-gray-50/40 p-4 text-md text-green-900">
            <div className="font-serif font-semibold mb-2">作用流程</div>
            <div>輕度加壓（P↗） + 較高氧濃度 → 血漿溶氧（小幅↑） → 組織氧分壓（穩定↑）</div>
          </div>
        </section>

        {/* ===== 高壓氧 vs 微壓氧｜規格表風格（依你提供的設計） ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto font-serif">
          <h2 className="text-4xl font-semibold text-center text-green-900 mb-6">
            高壓氧 vs 微壓氧
          </h2>

          {/* 手機版卡片表格 */}
          <div className="md:hidden text-green-900">
            <ul className="space-y-4">
              {COMPARISON.map(([label, hbo, mhbo]) => (
                <li key={label} className="bg-white p-4">
                  <div className="font-serif font-semibold text-base mb-3">{label}</div>

                  <div className="border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 text-center text-s bg-gray-50">
                      <div className="py-2 font-medium border-b min-[360px]:border-b-0 min-[360px]:border-r border-gray-200">
                        高壓氧（HBO）
                      </div>
                      <div className="py-2 font-medium border-b min-[360px]:border-b-0 border-gray-200">
                        微壓氧（mHBO）
                      </div>
                    </div>

                    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 text-center">
                      <div className="min-w-0 p-3 text-sm text-gray-800 leading-relaxed break-words
                                      min-[360px]:border-t min-[360px]:border-r border-gray-200">
                        {hbo}
                      </div>
                      <div className="min-w-0 p-3 text-sm text-gray-800 leading-relaxed break-words
                                      border-t border-gray-200">
                        {mhbo}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 桌機版表格 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto text-green-900 border-collapse border border-gray-200 text-base">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="p-4 border border-gray-200 text-center">比較參數</th>
                  <th className="p-4 border border-gray-200 text-center">高壓氧（HBO）</th>
                  <th className="p-4 border border-gray-200 text-center">微壓氧（mHBO）</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([k, h, m]) => (
                  <tr key={k} className="odd:bg-gray-50">
                    <td className="p-4 border border-gray-200 text-center font-semibold whitespace-nowrap">{k}</td>
                    <td className="p-4 border border-gray-200 text-center whitespace-pre-line">{h}</td>
                    <td className="p-4 border border-gray-200 text-center whitespace-pre-line">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            以上內容為一般性比較與示意，實際操作請依設備型號與場域規範。
          </p>
        </section>

        {/* ===== 共用表單 ===== */}
        <ContactSection />
      </div>
    </div>
  );
}
