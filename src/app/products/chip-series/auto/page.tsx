// app/products/chip-series/auto/page.tsx
// import Link from "next/link";

export const metadata = {
  title: "汽車芯片｜點火・RKE・智能鑰匙",
  description:
    "涵蓋單模/多模點火芯片、RKE 遙控器芯片與 3D 全相智能鑰匙；支援多代加密與 RFID 識別，適用多品牌車型與售後體系。",
};

export default function AutoChipPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <h1 className="font-serif text-4xl text-green-900 text-center font-semibold tracking-wide">
          汽車芯片
        </h1>
        <p className="text-gray-600 text-center mt-3">
          涵蓋點火、RKE 遙控與智能鑰匙核心晶片，具多模相容與多代加密能力，
          可對應售後市場之可拷貝鑰匙需求，並支援 RFID 防盜整合。
        </p>

        {/* 特性標籤 */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["多模相容", "多代加密演進", "RKE/智能鑰匙"].map((t) => (
            <span
              key={t}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 產品系列 */}
        <div className="py-10 sm:py-12">
          <h2 className="font-serif text-2xl text-green-900 font-semibold">產品系列</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "單模/多模點火芯片",
                desc:
                  "支援主流車型協定，提供維修市場之鑰匙匹配與更換；多模設計降低備貨複雜度。",
                spec: ["加密：依車型代別", "相容：多品牌多年代", "配套：拷貝設備對應"],
              },
              {
                name: "RKE 遙控器芯片",
                desc:
                  "適用多車系遙控，覆蓋折疊鑰匙、直柄鑰匙等外型，具低功耗穩定發射特性。",
                spec: ["支援多頻段", "低功耗", "多外觀殼體可選"],
              },
              {
                name: "3D 全相智能鑰匙芯片",
                desc:
                  "支援近距離智慧解鎖與防盜識別，整合 RFID/射頻通訊，提升安全等級。",
                spec: ["防盜：RFID/Fob", "通訊：依車型", "可支援客製天線"],
              },
            ].map((p) => (
              <article key={p.name} className="border border-gray-200 p-5 bg-white hover:shadow-md transition rounded-2xl">
                <h3 className="font-serif text-lg text-green-900 font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{p.desc}</p>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {p.spec.map((s) => (
                    <li key={s}>‧ {s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* 應用與服務 */}
        <div className="py-10 sm:py-12 border-t border-gray-100">
          <h2 className="font-serif text-2xl text-green-900 font-semibold">應用與服務</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 leading-relaxed">
            <li>● 售後維修：鑰匙遺失/備份、點火系統替換</li>
            <li>● 車隊管理：防盜識別與授權啟動</li>
            <li>● 通路商：多模庫存管理、代工客製外觀/天線</li>
            <li>● 讀寫測試：提供測試平台與工裝夾具</li>
          </ul>
        </div>

        {/* CTA */}
        {/* <div className="py-10 sm:py-12">
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="font-serif text-xl text-green-900 font-semibold">
              需求評估與相容清單
            </h3>
            <p className="text-gray-700 mt-2">
              我們可依車型代別提供對應加密方案與相容型錄，支援小量打樣到量產。
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/contact?topic=auto-chip"
                className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-green-900 text-white hover:opacity-90"
              >
                索取相容清單
              </Link>
              <Link
                href="/products/chip-series"
                className="inline-flex justify-center items-center px-5 py-3 rounded-xl border border-gray-200 text-green-900 hover:bg-green-50"
              >
                回到芯片系列
              </Link>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
