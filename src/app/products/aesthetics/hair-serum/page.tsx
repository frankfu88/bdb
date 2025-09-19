// /src/app/products/aesthetics/lingzhi-polypeptide-hair/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "靈芝多肽生髮精華液｜產品介紹",
  description:
    "靈芝多肽小分子搭配豐富營養與微量元素，深入毛囊基底，強化營養並激活毛囊環境。具備超強滲透力與外泌體協同作用，適合頭皮日常護理與保養。",
};

export default function Page() {
  return (
    <main className="w-full">
      {/* Hero 區 */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-semibold text-green-900">
            靈芝多肽生髮精華液
          </h1>
          <h3 className="mt-2 text-lg tracking-widest uppercase text-gray-400">
            LINGZHI POLYPEPTIDE HAIR SERUM
          </h3>
        </div>
      </section>

      {/* 高效活性 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            高效活性
          </h2>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            靈芝多肽小分子搭配富含
            <span className="font-semibold text-green-800"> 多醣、三萜類、氨基酸與微量元素 </span>
            的營養群，深入頭皮毛囊環境，強化基底營養供應，營造適合毛囊保養的條件。
          </p>
        </div>
      </section>

      {/* 超強滲透 */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            超強滲透
          </h2>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            多肽小分子結構滲透率相較水分子可高出
            <span className="font-semibold text-green-800"> 1000 倍 </span>
            ，能有效傳遞至毛囊核心作用區，協助養分直達深層，提升頭皮的吸收效率。
          </p>
        </div>
      </section>

      {/* 協同加乘 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            協同加乘
          </h2>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            與
            <span className="font-semibold text-green-800"> 外泌體 </span>
            搭配，可形成「修復 × 滲透」雙重方案，進一步提升頭皮環境調理的完整性。
          </p>
        </div>
      </section>

      {/* 功效特點（四宮格卡片） */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900 text-center">
            功效特點
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "強化營養",
                desc: "多肽與靈芝多醣協助提供毛囊日常所需的營養基礎。",
              },
              {
                title: "滲透效率",
                desc: "小分子結構有助於養分深入頭皮層，提升保養效果。",
              },
              {
                title: "協同作用",
                desc: "可與外泌體或其他頭皮護理產品搭配，形成多重支持。",
              },
              {
                title: "安全配方",
                desc: "配方溫和，避免常見爭議性成分，適合長期頭皮護理。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 text-left hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-green-800">{item.title}</h4>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 適用情境 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            適用情境
          </h2>
          <ul className="mt-6 list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li>日常頭皮護理：維持毛囊基底的健康狀態。</li>
            <li>染燙或造型後：補充營養，減少頭皮環境壓力。</li>
            <li>搭配其他護理：可與外泌體、氧艙或多肽相關產品結合，增強整體調理效果。</li>
            <li>長期保養：溫和配方適合定期使用，作為頭皮日常養護方案之一。</li>
          </ul>
        </div>
      </section>

      {/* 專業優勢 */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold text-green-900">
            專業優勢
          </h2>
          <ul className="mt-10 space-y-4 text-left text-base text-gray-700 leading-relaxed list-disc list-inside">
            <li>研發基礎：結合再生醫學觀點與多肽營養學。</li>
            <li>配方中性：避免過度刺激，強調安全與穩定性。</li>
            <li>臨床導向：設計思路符合頭皮護理與美容保養的實際需求。</li>
            <li>延展性高：可作為多種頭皮養護療程的前置或輔助方案。</li>
          </ul>
        </div>
      </section>

      {/* 免責聲明 */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-green-800">免責聲明</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              本頁面資訊僅供產品特性與頭皮護理參考，不構成醫療建議或療效保證。實際體驗因個人頭皮狀態、生活作息與保養方式不同而有所差異，建議使用前可諮詢專業人士。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
