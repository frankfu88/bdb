// /src/app/products/aesthetics/qi-blood-essence/page.tsx
'use client';

export default function BloodEssencePage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-semibold text-green-900">氣血提升精華</h1>
          <h3 className="mt-2 text-lg tracking-widest uppercase text-gray-400">
            QI & BLOOD ESSENCE
          </h3>
        </div>
      </section>

      {/* 背景與需求 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">背景與需求</h2>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            人體約有 <span className="font-semibold">45 億個細胞</span>，能量主要來自於葡萄糖與氨基酸在細胞粒線體與氧氣結合產生 ATP。
            自 <span className="font-semibold">30 歲以後</span>，人體攝氧能力每年下降約 <span className="font-semibold">2%–2.5%</span>，
            導致血氧濃度下降、細胞能量不足，常見於體能下降、疲勞與免疫力衰退。
          </p>
        </div>
      </section>

      {/* 核心機轉 */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-serif font-semibold text-green-900 text-center">核心機轉</h2>
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              <strong>氣血提升精華</strong> 由多肽靈芝、紅景天等植物成分低溫小分子萃取製成，具備以下作用：
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>低溫多肽萃取技術：</strong> 保留天然活性，小分子結構快速通過細胞膜，提高吸收率。
              </li>
              <li>
                <strong>呼吸系統作用：</strong> 雾化吸入後擴張氣管與肺泡，提升肺部換氣效率。
              </li>
              <li>
                <strong>血液作用：</strong> 增強紅血球結合氧氣的能力，提高血氧飽和度與循環效率。
              </li>
              <li>
                <strong>免疫調控：</strong> 靈芝多糖與紅景天多酚具抗氧化與免疫調節作用。
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 功效特點 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900 text-center">功效特點</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: '快速見效',
                desc: '霧化吸入後 60 分鐘內即可提升血氧含量與體能表現。',
              },
              {
                title: '體能改善',
                desc: '強化能量供應，緩解慢性疲勞，提升耐力與活力。',
              },
              {
                title: '睡眠支持',
                desc: '改善血氧不足引起的睡眠障礙。',
              },
              {
                title: '免疫增強',
                desc: '提升免疫細胞功能，增強整體健康防護力。',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-left hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-green-800">{item.title}</h4>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 臨床應用與流程 */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-serif font-semibold text-green-900">臨床應用與流程</h2>
          <ul className="mt-6 list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li>
              <strong>使用方式：</strong> 建議霧化吸入 2–3 分鐘，作為療程前置步驟；需冷藏保存並於使用前取出以確保活性。
            </li>
            <li>
              <strong>毛囊復甦療程：</strong> 先行內部氣血啟動，再搭配外部修復（外泌體、靈芝多肽、微針），形成內外協同方案。
            </li>
            <li>
              <strong>氧艙療程：</strong> 進入微高壓氧艙前吸入，可在富氧加壓狀態下快速增強血氧含量，提升修復效果。
            </li>
            <li>
              <strong>日常調理：</strong> 適合亞健康族群，用於改善疲勞、睡眠與免疫力不足。
            </li>
          </ul>
        </div>
      </section>

      {/* 專業優勢 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-semibold text-green-900">專業優勢</h2>
          <ul className="mt-10 space-y-4 text-left text-base text-gray-700 leading-relaxed list-disc list-inside">
            <li>科學驗證：動物與人體試驗顯示可促進毛囊再生並改善頭髮密度。</li>
            <li>快速起效：透過霧化直接吸收，藥效迅速且穩定。</li>
            <li>品質安全：全程符合 GMP 生產規範，確保產品安全穩定。</li>
            <li>臨床導向：結合再生醫學與醫美療程設計，具有實際應用價值。</li>
          </ul>
        </div>
      </section>

      {/* 協同作用 */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-green-900">與其他產品的協同</h2>
          <ul className="mt-6 list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li>
              <strong>外泌體凍乾粉：</strong> 形成「修復 × 滲透」雙重作用，顯著促進毛囊活化。
            </li>
            <li>
              <strong>靈芝多肽生髮液：</strong> 提供深層養分，強化毛囊基底，提升再生效果。
            </li>
            <li>
              <strong>氧艙療程：</strong> 將內部血氧提升與外部富氧環境結合，效果加倍。
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
