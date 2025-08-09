'use client';

import ContactSection from '@/components/ContactSection'; /* 共用表單元件 */

export default function ProductsPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* 頁面標題 */}
        <section className="bg-white pt-16 md:pt-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-serif font-semibold text-green-900">人用微壓氧艙</h1>
            <h3 className="mt-1 text-lg tracking-widest uppercase text-indigo-200">Human Mild Hyperbaric Oxygen Chamber</h3>
            </div>
        </section>

        {/* 特點說明 */}
        <section className="mt-16 mb-16">
        <h2 className="text-4xl font-serif font-semibold text-center text-green-900 mb-6">
            特點說明
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            人用微壓氧艙結合安全、抑菌與舒適設計，提供穩定氧療體驗並兼顧日常保養放鬆。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                title: '高安全性',
                desc:
                '除電控系統與壓力感測外，艙體加設 2 個機械式洩壓閥，確保壓力不會超過設定值；艙內亦配置緊急按鈕，強化使用安全。'
            },
            {
                title: '抗菌自潔',
                desc:
                '艙體材料通過國際認證之抗菌處理，搭配艙內負離子淨化與消毒棒等除菌除味技術，使用更安心。'
            },
            {
                title: '專利水冷空調系統',
                desc:
                '個人艙採水冷式專利空調設計，提供艙內舒適、穩定的低溫環境，長時間使用更舒適。'
            },
            {
                title: '分離式艙體設計',
                desc:
                '可攜易收納、好清潔；大面積透明窗設計，艙內視野明亮，可坐可臥，使用更彈性。'
            },
            {
                title: '護眼養生光‧提升睡眠',
                desc:
                '艙內配置護眼養生燈系統，放鬆身心，有助提升睡眠品質。'
            }
            ].map(({ title, desc }) => (
            <div key={title} className="p-6 bg-gray-50 shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-serif font-semibold text-green-900 mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
            ))}
        </div>
        </section>


        {/* 規格說明 */}
        <section className="mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-6 md:mb-8">
            規格說明
          </h2>

          <div className="overflow-x-auto">
            {/* 單行呈現（手機橫滑）；僅「應急系統」允許分行 */}
            <table className="min-w-[1500px] w-full max-w-6xl mx-auto text-green-900 border-collapse border border-gray-200 font-serif text-sm md:text-base table-auto">
              <thead>
                <tr className="bg-green-900 text-white">
                  {['規格參數', '膠囊式柔性氧艙', '躺椅式柔性氧艙', '單人主機', '雙人主機', '豪華版氧艙'].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-nowrap"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    label: '尺寸',
                    v: [
                      'L 180 × W 70 × H 65 cm',
                      'L 168 × W 100 × H 140 cm',
                      'W 42 × D 46 × H 75 cm',
                      'W 47 × D 51 × H 84 cm',
                      'L 230 × W 126 × H 160 cm',
                    ],
                  },
                  { label: '電源', v: ['－', '－', '220V AC', '220V AC', '220V AC'] },
                  { label: '功率', v: ['－', '－', '800W', '1000W', '1000W'] },
                  {
                    label: '保壓',
                    v: ['最大保壓 8 kPa，可設定', '最大保壓 8 kPa，可設定', '－', '－', '最大保壓 15 kPa，可設定'],
                  },
                  {
                    label: '標準工作壓力',
                    v: ['1.3～2.0 kPa，可設定', '1.3～2.0 kPa，可設定', '－', '－', '1.3～2.5 kPa，可設定'],
                  },
                  {
                    label: '氧濃度',
                    v: ['≤ 30%，依國家規定', '≤ 30%，依國家規定', '製氧濃度 95.6%', '製氧濃度 95.6%', '≤ 30%，依國家規定'],
                  },
                  {
                    label: '空調',
                    v: ['25℃ 以下（艙內溫度）', '25℃ 以下（艙內溫度）', '－', '－', '25℃ 以下（艙內溫度可設定）'],
                  },
                  { label: '抗菌自潔', v: ['負離子', '負離子', '－', '－', '負離子、紫外線滅菌'] },
                  { label: '光源', v: ['外部光源', '外部光源', '－', '－', '白光、RGB、紅外光 LED 燈'] },
                  { label: '護理系統', v: ['－', '－', '－', '－', '內置'] },
                  {
                    label: '應急系統',
                    wrap: true, // 只有這列可分行
                    v: [
                      '內部緊急按鈕<br />手機 App 應急控制',
                      '內部緊急按鈕<br />手機 App 應急控制',
                      '觸控螢幕緊急按鈕<br />手機 App 應急控制',
                      '觸控螢幕緊急按鈕<br />手機 App 應急控制',
                      '內外緊急按鈕<br />手機 App 應急控制',
                    ],
                  },
                ].map(({ label, v, wrap }, rowIdx) => (
                  <tr key={label} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center font-semibold whitespace-nowrap">
                      {label}
                    </td>

                    {v.map((cell, i) =>
                      wrap ? (
                        <td
                          key={i}
                          className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-normal break-words leading-relaxed"
                          // 只在「應急系統」這列插入手動分行
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ) : (
                        <td
                          key={i}
                          className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-nowrap"
                        >
                          {cell}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ✅ 共用表單：用元件引入 */}
        <ContactSection />
      </div>
    </div>
  );
}
