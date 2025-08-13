'use client';

type Feature = {
  title: string;
  desc: string;
  bullets?: string[]; // 可選：卡片內的小重點（用橘色菱形顯示）
};

const FEATURES: Feature[] = [
  {
    title: '高安全性與核心模組監控',
    desc:
      '電控與壓力雙監測，艙體配置雙洩壓閥與艙內緊急按鈕；採核心模組設計，運轉參數與異常狀態可即時監控，強化整體安全。',
  },
  {
    title: '主機與艙體分離式設計',
    desc:
      '主機與艙體分離，搬運、維護與安裝更靈活；可依場域彈性配置，不受空間限制。',
  },
  {
    title: '取件維護友善',
    desc:
      '模組化／抽取式設計，耗材與零組件更換快速；日常清潔路徑清楚，維護成本更低。',
  },
  {
    title: '智慧控制系統',
    desc:
      '以人性化面板與安全邏輯穩定管理各項運轉參數，維持一致體驗。',
    bullets: ['壓力控制', '氣體（氧濃/流量）控制', '氣冷/溫度控制'],
  },
  {
    title: '抗菌自潔',
    desc:
      '艙體材料具抗菌處理，搭配負離子淨化與UV消毒等技術，抑菌除味更安心。',
  },
  {
    title: '專利水冷空調系統',
    desc:
      '個人艙採水冷式專利空調設計，長時間使用仍能維持舒適穩定的低溫環境。',
  },
  {
    title: '護眼養生光・提升睡眠',
    desc:
      '內建護眼養生燈，放鬆身心、協助睡眠品質提升，兼顧日常保養與舒緩。',
  },
];

export default function Features() {
  return (
    <>
      <h2 className="text-4xl font-serif font-semibold text-center text-green-900 mb-6">
        產品優勢
      </h2>

      <p className="text-center text-gray-500 max-w-3xl mx-auto mb-12">
        優異品質搭配完善售後服務，即是最佳採購策略
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map(({ title, desc, bullets }) => (
          <div
            key={title}
            className="p-6 bg-gray-50 shadow hover:shadow-lg transition rounded-xl"
          >
            <h3 className="text-2xl font-serif font-semibold text-green-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{desc}</p>

            {/* 有子項目時，用橘色菱形列出（對應圖片風格） */}
            {bullets?.length ? (
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start text-gray-800">
                    <span
                      aria-hidden
                      className="mt-2 mr-2 inline-block h-2 w-2 rotate-45 rounded-[2px] bg-orange-500"
                    />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
