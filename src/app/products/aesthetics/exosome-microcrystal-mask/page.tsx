// /src/app/products/aesthetics/exosome-microcrystal-mask/page.tsx
// 'use client';
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "外泌體微晶貼膜｜產品介紹",
  description:
    "結合外泌體再生科技與可溶性玻尿酸微晶，非侵入式將活性成分直達真皮層，快速修復、緊緻與抗老。可搭配高壓氧艙形成協同方案。",
};

type Stat = { label: string; value: string; sub?: string };
type Feature = { title: string; desc: string };
type Variant = { name: string; target: string; notes: string[] };
type Step = { idx: string; title: string; detail: string };

const stats: Stat[] = [
  { label: "快速觀察時間", value: "15 分鐘", sub: "即貼即效、無修復期" },
  { label: "眼袋改善率", value: "61.7%", sub: "皺紋面積/深度下降" },
  { label: "持續使用", value: "約 3 個月", sub: "具中長期維持潛力" },
];

const tech: Feature[] = [
  {
    title: "外泌體再生科技",
    desc:
      "外泌體為 30–200 nm 奈米囊泡，承載蛋白質、RNA 與脂質等活性物，具訊息傳遞、誘導修復、活化膠原與抑制衰老相關基因表現等潛力。",
  },
  {
    title: "可溶性玻尿酸微晶",
    desc:
      "每片約 800 支微晶針，長度約 0.28 mm，以垂直且密集排列穿透約 0.1 mm 角質層，直達真皮層以提升滲透效率。",
  },
  {
    title: "活性穩定與載入",
    desc:
      "透過高壓導入、微結構包覆與穩定化製程，降低活性流失、提升保存性，並轉化為高相容性貼敷型態。",
  },
];

const variants: Variant[] = [
  {
    name: "眼周款",
    target: "眼袋、細紋、乾紋",
    notes: ["貼合眼下弧度", "改善紋理與緊緻度"],
  },
  {
    name: "法令紋款",
    target: "法令紋、鬆弛",
    notes: ["針對笑紋區域", "強化彈性與支撐"],
  },
  {
    name: "川字紋款",
    target: "眉間細紋",
    notes: ["局部精準貼敷", "細節紋路平滑"],
  },
];

const steps: Step[] = [
  {
    idx: "01",
    title: "清潔與乾燥",
    detail: "溫和清潔並拭乾目標部位，避免油脂影響貼合。",
  },
  {
    idx: "02",
    title: "撕膜定位",
    detail: "撕開保護膜，將微晶面對準紋路，輕壓定位。",
  },
  {
    idx: "03",
    title: "均勻加壓",
    detail: "以指腹由中心向外輕壓 10–20 秒，幫助微晶完整貼合。",
  },
  {
    idx: "04",
    title: "靜置吸收",
    detail: "貼敷約 15 分鐘；取下後可依需求加強保養。",
  },
];

const extras: Feature[] = [
  {
    title: "八大零添加",
    desc:
      "無香精、無酒精、無礦物油等常見爭議添加物；敏感肌與術後修護者亦可使用（視個人膚況適量/斟酌）。",
  },
  {
    title: "延伸應用（毛囊照護）",
    desc:
      "研究顯示外泌體可活化毛囊幹細胞、提升毛囊細胞活性（提升幅度可達約 45%），持續 3 個月平均新生髮量增加 20–30%（作法與場景不同，結果因人而異）。",
  },
  {
    title: "協同方案：高壓氧艙",
    desc:
      "於高含氧微環境下，細胞通透性與組織含氧量提升（可達約 5 倍），組合療程的吸收率可望增加約 70–85%。",
  },
];

export default function Page() {
  return (
    <main className="w-full">
      {/* Hero（色彩對齊 qi-blood-essence） */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-semibold text-green-900">
            外泌體微晶貼膜
          </h1>
          <h3 className="mt-2 text-lg tracking-widest uppercase text-gray-400">
            EXOSOME MICROCRYSTAL MASK
          </h3>
        </div>
      </section>

      {/* 關鍵數據（灰底區，同色系文字） */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-900">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-gray-600">{s.label}</div>
                {s.sub && (
                  <div className="mt-1 text-xs text-gray-500">{s.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 產品敘述（白底區） */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] w-full rounded-3xl bg-gray-100">
            <Image
              src="/images/products/exosome-mask/hero.jpg"
              alt="外泌體微晶貼膜"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold text-green-900">
              非侵入式微結構直送真皮層
            </h2>
            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              結合外泌體再生科技與可溶性玻尿酸微晶，透過垂直、尖細且密集排列之微晶陣列穿透角質層，將活性成分直達真皮層，快速修復、緊緻與抗老。
            </p>
          </div>
        </div>
      </section>

      {/* 技術機制（灰底區） */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900 text-center">
            技術機制與設計
          </h2>
          <p className="mt-4 text-center text-gray-700">
            以「導入、加載、穩定、轉化」四步製程，將外泌體高效載入可溶性微晶結構，確保貼敷時穩定釋放與深層滲透。
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tech.map((t) => (
              <article
                key={t.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-green-800">
                  {t.title}
                </h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{t.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-gray-600">微晶支數（每片）</dt>
                <dd className="text-xl font-semibold text-green-900">約 800 支</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">微晶長度</dt>
                <dd className="text-xl font-semibold text-green-900">約 0.28 mm</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">穿透層位</dt>
                <dd className="text-xl font-semibold text-green-900">
                  角質層（約 0.1 mm）
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 款式與應用部位（白底區） */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            款式與應用部位
          </h2>
          <p className="mt-3 text-gray-700">
            依臉部紋路型態設計三款專屬貼形，搭配保護膠貼，貼合度高、使用簡便。
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {variants.map((v) => (
              <article
                key={v.name}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-green-800">{v.name}</h3>
                <p className="mt-1 text-gray-600">目標：{v.target}</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {v.notes.map((n, i) => (
                    <li key={i} className="leading-relaxed">
                      {n}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 使用方式（灰底區） */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            使用方式（建議）
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="text-sm font-mono text-gray-500">{s.idx}</div>
                <h3 className="mt-1 text-lg font-semibold text-green-800">{s.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-4 text-sm text-gray-600">
            建議頻率：依個人膚況每週 2–3 次；若搭配其他保養步驟，請先進行貼敷再疊加精華或乳霜。
          </div>
        </div>
      </section>

      {/* 延伸特色與協同方案（白底區） */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            延伸特色與協同方案
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {extras.map((e) => (
              <article
                key={e.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-green-800">{e.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{e.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-green-800">與高壓氧艙的可能效益</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>吸收率可望增加約 70–85%</li>
                <li>細胞膜通透性提升，外泌體更易進入細胞</li>
                <li>高含氧微環境：組織含氧量提升可達約 5 倍</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-green-800">注意事項</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>僅供外用；使用前請保持皮膚乾燥、完整無破損。</li>
                <li>首次使用建議於小範圍測試；若有不適請停止使用並諮詢專業人士。</li>
                <li>可作為日常保養與術後修護之輔助（依個人膚況與專業建議調整）。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
