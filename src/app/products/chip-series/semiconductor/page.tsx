// app/products/chip-series/semiconductor/page.tsx
// import Link from "next/link";

export const metadata = {
  title: "半導體晶圓管理芯片與設備｜RFID 追溯・封裝測試整合",
  description:
    "提供晶圓管理芯片（MPT 系列）與讀寫檢測、封裝測試、自動繞線等配套設備；並提供 SiC 表面改性與減薄流程的整合服務。",
};

export default function SemiChipPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <h1 className="font-serif text-4xl text-green-900 text-center font-semibold tracking-wide">
          半導體晶圓管理芯片與設備
        </h1>
        <p className="text-gray-600 text-center mt-3">
          建立從晶圓到封裝測試的全流程 RFID 追溯體系，結合 AOI/影像檢測、
          讀寫檢測與封裝測試工站，亦提供 SiC 表面改性與減薄製程整合。
        </p>

        {/* 標籤 */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["MPT 晶圓管理", "讀寫/封測工站", "SiC 表面處理"].map((t) => (
            <span
              key={t}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 解決方案模組 */}
        <div className="py-10 sm:py-12">
          <h2 className="font-serif text-2xl text-green-900 font-semibold">解決方案模組</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                name: "MPT 晶圓管理芯片",
                desc:
                  "支援晶圓載具/卡匣識別與在製品追蹤，串接 MES/倉儲系統，打造全流程追溯。",
                spec: ["資料區段可客製", "安全權限控管", "可擴充場內讀寫點"],
              },
              {
                name: "晶片讀寫檢測設備",
                desc:
                  "提供在線/離線讀寫與一致性檢測，支援工站追溯與良率彙整。",
                spec: ["整合條碼/工單", "自動化傳輸", "測試報表匯出"],
              },
              {
                name: "封裝測試與自動繞線",
                desc:
                  "封裝測試、AOI 影像與自動繞線一體化設計，縮短節拍、穩定品質。",
                spec: ["夾具/模具客製", "工裝設計", "與產線 MES 對接"],
              },
              {
                name: "SiC 表面改性與減薄流程",
                desc:
                  "優化研磨節拍與良率：在既有製程上縮時並降低損耗，提升整體效率。",
                spec: ["白光干涉量測", "臭氧清洗", "FQC 彙整"],
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

          {/* 性能亮點（文字敘述，避免明確數值承諾） */}
          <div className="mt-10 border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="font-serif text-xl text-green-900 font-semibold">性能亮點</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 leading-relaxed">
              <li>● 晶圓至封測全流程 RFID 追溯，MES 可視化</li>
              <li>● 支援 AOI/影像與 CP/FT 測試資料併軌</li>
              <li>● SiC 研磨流程節拍優化（依現場條件評估）</li>
              <li>● 導入前提供 PoC 與產線評估報告</li>
            </ul>
            {/* <p className="text-xs text-gray-500 mt-2">
              ※ 實際節拍與良率提升幅度依各廠產線條件而異。
            </p> */}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="py-10 sm:py-12">
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="font-serif text-xl text-green-900 font-semibold">
              與現有 MES/倉儲串接
            </h3>
            <p className="text-gray-700 mt-2">
              需要與既有工站或資料庫整合？我們可提供 PoC 測試、工站改造與資料模型設計。
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/contact?topic=semi-chip"
                className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-green-900 text-white hover:opacity-90"
              >
                預約技術評估
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
