const FEATURES: { title: string; desc: string }[] = [
  {
    title: '高安全性',
    desc:
      '除電控系統與壓力感測外，艙體加設 2 個機械式洩壓閥，確保壓力不會超過設定值；艙內亦配置緊急按鈕，強化使用安全。',
  },
  {
    title: '抗菌自潔',
    desc:
      '艙體材料通過國際認證之抗菌處理，搭配艙內負離子淨化與消毒棒等除菌除味技術，使用更安心。',
  },
  {
    title: '專利水冷空調系統',
    desc:
      '個人艙採水冷式專利空調設計，提供艙內舒適、穩定的低溫環境，長時間使用更舒適。',
  },
  {
    title: '分離式艙體設計',
    desc:
      '可攜易收納、好清潔；大面積透明窗設計，艙內視野明亮，可坐可臥，使用更彈性。',
  },
  {
    title: '護眼養生光‧提升睡眠',
    desc:
      '艙內配置護眼養生燈系統，放鬆身心，有助提升睡眠品質。',
  },
];

export default function Features() {
  return (
    <>
      <h2 className="text-4xl font-serif font-semibold text-center text-green-900 mb-6">
        特點說明
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        人用微壓氧艙結合安全、抑菌與舒適設計，提供穩定氧療體驗並兼顧日常保養放鬆。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map(({ title, desc }) => (
          <div
            key={title}
            className="p-6 bg-gray-50 shadow hover:shadow-lg transition rounded-xl"
          >
            <h3 className="text-2xl font-serif font-semibold text-green-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
