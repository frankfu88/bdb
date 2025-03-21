'use client';

import Image from "next/image";


export default function ProductsPage() {

  return (
    <div className="w-full">
      
      {/* 🔹 頂部 Banner */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image 
          src="/images/banner/product.jpg"
          alt="關於我們"
          width={1920}
          height={400} 
          className="w-full h-full object-cover"
          priority
        />
        {/* 🔹 右側文字區塊 */}
        <div className="absolute inset-y-0 right-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">產品介紹</h2>
          <p className="text-lg text-gray-700 mt-2">
          牠們不只是動物，而是我們心中最珍貴的存在
          </p>
        </div>
      </div>

      <section className="mt-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-800 text-center tracking-wide">
          應用範圍
          <span className="block h-[2px] w-16 bg-blue-500 mx-auto mt-2"></span>
        </h2>

        {/* 🔹 高壓氧治療 HBOT */}
        <div className="bg-[#F5F1ED] shadow-md rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">高壓氧應用</h2>
          <p className="text-lg text-center text-gray-700 mt-2">
            透過氧氣與壓力的調節，提升血液中的含氧量，幫助身體適應環境變化，維持穩定狀態，並提供良好的循環支持。
          </p>

          {/* 🔹 主要應用範圍 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { category: "皮膚與組織調節", conditions: ["受損組織適應", "穩定外部環境影響", "術後恢復調整", "保養支持"] },
              { category: "循環與代謝支持", conditions: ["維持循環穩定", "提升氧氣供應", "環境壓力適應"] },
              { category: "神經與活動力", conditions: ["支持神經系統適應", "促進四肢靈活度", "穩定身體適應狀態"] },
              { category: "口腔與牙齒", conditions: ["維持口腔健康", "適應口腔環境變化"] },
              { category: "消化與營養", conditions: ["幫助消化系統平衡", "維持良好代謝機能"] },
              { category: "肌肉與骨骼", conditions: ["運動後調適", "穩定肌肉與骨骼支持"] },
              { category: "體內環境平衡", conditions: ["幫助內部穩定", "支持體內循環"] },
              { category: "年齡相關調整", conditions: ["維持身體活力", "幫助日常適應"] },
              { category: "身體修復支持", conditions: ["適應變化環境", "提供穩定支持"] }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-lg">
                <h3 className="text-xl font-bold text-[#2266AA]">{item.category}</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  {item.conditions.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* 🔹 禁忌症與相對禁忌症 */}
        <div className="bg-[#2266AA] text-white shadow-lg rounded-3xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center">禁忌症與注意事項</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* ✅ 絕對禁忌症 */}
            <div>
              <h3 className="text-xl font-bold text-yellow-300">🚫 絕對禁忌症（不建議使用）</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>
                  <span className="font-semibold">氣胸（Pneumothorax）</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能導致肺部破裂，引發張力性氣胸，危及生命。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">未受控的氣道疾病</span>（如嚴重哮喘、肺氣腫 COPD）
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>增加肺部過度膨脹的風險，影響氣體交換。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">上呼吸道肺部感染</span>（如肺炎）
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能加重感染或造成肺部損傷。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">癲癇或未受控的神經系統疾病</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>高氧氣可能誘發癲癇發作。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">嚴重心臟疾病</span>（如充血性心衰竭）
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能增加心臟負擔，引發心律不整或心臟衰竭惡化。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">近期接受眼部手術</span>（如視網膜剝離修復）
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能影響眼內壓，影響術後恢復。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">耳損傷或耳咽管功能異常</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能因壓力變化造成耳損傷、疼痛或導致耳損傷。</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* ✅ 相對禁忌症 */}
            <div>
              <h3 className="text-xl font-bold text-yellow-400">⚠️ 相對禁忌症（需謹慎評估）</h3>
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>
                  <span className="font-semibold">血糖控制不佳的糖尿病</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能影響胰島素代謝，需密切監測血糖。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">嚴重焦慮或幽閉恐懼症</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>可能無法適應高壓氧環境，需額外鎮靜處理。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">懷孕</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>目前研究對懷孕影響有限，建議與獸醫師討論後再決定是否使用。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">發燒</span>（未控制的高體溫）
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>需先治療後再使用高壓氧。</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">高血壓</span>
                  <ul className="list-disc pl-5 mt-1 text-base">
                    <li>在治療前需監測血壓，確保穩定後再進入高壓氧艙。</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ 注意事項 */}
          <p className="text-lg text-center mt-6">
            如寵物有上述狀況，請與獸醫師討論風險，並確認是否適合接受高壓氧治療。
          </p>
        </div>

      </section>

    </div>
  );
}
