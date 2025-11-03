// app/products/chip-series/pet/page.tsx
// import Link from "next/link";

export const metadata = {
  title: "寵物芯片｜BDB International 智能識別方案",
  description:
    "用於寵物與畜牧管理的 RFID 晶片與讀寫設備。支援主流規範，適用寵物醫療、登記註冊、追蹤與資料管理情境。",
};

export default function PetChipPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <h1 className="font-serif text-4xl text-green-900 text-center font-semibold tracking-wide">
          寵物芯片
        </h1>
        <p className="text-gray-600 text-center mt-3">
          以 RFID 為核心的動物身分識別方案，結合高穩定封裝與高感度讀寫技術，
          支援寵物醫療、登記註冊、追蹤與資料管理，亦可延伸至畜牧管理。
        </p>

        {/* 特性標籤 */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["FDX-B/HDX 相容", "低功耗・高靈敏度", "讀寫整合・資料串接"].map((t) => (
            <span
              key={t}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 產品與規格 */}
        <div className="py-10 sm:py-12">
          <h2 className="font-serif text-2xl text-green-900 font-semibold">產品與規格</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Pet ID 微型晶片",
                desc:
                  "玻璃封裝、動物友善尺寸，支援全球主流頻段規範，具防滑移與長期穩定性。",
                spec: ["頻段：LF（FDX-B/HDX）", "封裝：玻璃/生醫級膠", "防護：依型號"],
              },
              {
                name: "手持式讀卡機",
                desc:
                  "高感度讀取、低功耗續航，支援藍牙/USB 上傳到院內 HIS 或雲端後台。",
                spec: ["介面：Bluetooth / USB", "續航：依型號", "相容：FDX-B/HDX"],
              },
              {
                name: "資料收集模組",
                desc:
                  "可嵌入門診/收容系統，支援批量登錄、歷史紀錄與稽核報表匯出。",
                spec: ["API：REST/CSV", "權限：角色控管", "日誌：稽核可追溯"],
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

        {/* 應用情境 */}
        <div className="py-10 sm:py-12 border-t border-gray-100">
          <h2 className="font-serif text-2xl text-green-900 font-semibold">應用情境</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 leading-relaxed">
            <li>● 寵物醫院：掛號/病例綁定、疫苗與晶片註冊</li>
            <li>● 公部門/收容：身分登錄、領養追蹤、稽核報表</li>
            <li>● 連鎖診所：跨據點資料同步、異地查詢</li>
            <li>● 畜牧管理：群體識別、健康紀錄與追溯</li>
          </ul>
        </div>

        {/* CTA */}
        {/* <div className="py-10 sm:py-12">
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="font-serif text-xl text-green-900 font-semibold">
              需要客製整合？
            </h3>
            <p className="text-gray-700 mt-2">
              我們可協助與院所系統或自有雲端平台串接，建立完整的晶片註冊與追蹤流程。
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/contact?topic=pet-chip"
                className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-green-900 text-white hover:opacity-90"
              >
                取得方案建議
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
