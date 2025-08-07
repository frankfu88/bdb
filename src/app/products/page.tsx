'use client';

export default function ProductsPage() {
  return (
    <div className="w-full">

      {/* 🔹 內容區域回正 */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 特點說明 */}
        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center text-green-900">
            特點說明
          </h2>
          <span className="block h-1 w-16 bg-green-900 mx-auto mt-2 mb-8"></span>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            高壓氧艙採用多層抽屜設計與光療技術，穩定供氧並結合紫外線、負離子、藍／紅光
            等多重淨化與放鬆功能，為寵物打造舒適安全的氧療空間。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "多層抽屜式設計", desc: "支援多隻寵物同時使用，可獨立進出，操作便利。" },
              { title: "高效氧艙", desc: "最高可承受 2.0 ATA，氧濃度最高達 96%。" },
              { title: "雙洩壓閥", desc: "專利防爆雙洩壓系統，運行更安全穩定。" },
              { title: "紫外線滅菌", desc: "UV 與負離子淨化，抗菌除味，保持艙內環境清新。" },
              { title: "光照系統", desc: "藍光、紅光、紅外光療結合，促進放鬆與細胞修復。" },
              { title: "恆溫控溫", desc: "20℃～35℃ 可調，恆溫環境更貼心舒適。" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-serif font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 初生動物應用 */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center text-green-900">
            初生動物高壓氧艙的應用
          </h2>
          <span className="block h-1 w-16 bg-green-900 mx-auto mt-2 mb-8"></span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "1",
                title: "母體健康管理",
                desc: "懷孕前每日 60 分鐘，穩定體質，促進母體健康。",
              },
              {
                num: "2",
                title: "支持胎兒發育",
                desc: "懷孕期間每日 60 分鐘，穩定氧療與光療，支援胎兒發育。",
              },
              {
                num: "3",
                title: "幼獸成長適應",
                desc: "出生後 10–15 天內每日 60 分鐘，再逐漸拉長間隔。",
              },
              {
                num: "4",
                title: "產後恢復支援",
                desc: "產後 7 天每日 60 分鐘，補氧調理，協助恢復體力。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow flex items-start"
              >
                <div className="text-green-900 text-3xl font-serif font-bold mr-4">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 規格說明 */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center text-green-900">
            規格說明
          </h2>
          <span className="block h-1 w-16 bg-green-900 mx-auto mt-2 mb-8"></span>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto text-gray-800 border-collapse">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="p-3 border">規格參數</th>
                  <th className="p-3 border">高壓氧艙</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主機尺寸", "L115 × W75 × H165 CM"],
                  ["電源", "220V AC"],
                  ["功率", "最高 2000W，正常 1200W"],
                  ["壓力範圍", "1.2 ~ 2.0 ATA"],
                  ["製氧方式", "鋰離子製氧分離篩"],
                  ["氧濃度", "≤96%"],
                  ["溫控系統", "20℃～35℃"],
                  ["殺菌系統", "UV + 負離子"],
                  ["應急系統", "快速洩壓鈕"],
                  ["下艙滑軌", "方便進出抽屜"],  
                ].map(([key, val], i) => (
                  <tr key={i} className="odd:bg-green-50">
                    <td className="p-4 border text-center font-medium">{key}</td>
                    <td className="p-4 border text-center">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
