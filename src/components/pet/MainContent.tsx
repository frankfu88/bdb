'use client';

export default function MainContent() {
  /** ===== 產品優勢 ===== */
  const items = [
    { title: '多層抽屜式設計', desc: '支援多隻寵物同時使用，可獨立進出，操作便利。' },
    { title: '高效氧艙', desc: '最高可承受 2.0 ATA，氧濃度最高達 96%。' },
    { title: '雙洩壓閥', desc: '專利防爆雙洩壓系統，運行更安全穩定。' },
    { title: '紫外線滅菌', desc: 'UV 與負離子淨化，抗菌除味，保持艙內環境清新。' },
    { title: '光療系統', desc: '藍光、紅光、紅外光療結合，促進放鬆與細胞修復。' },
    { title: '恆溫控溫', desc: '20℃～35℃ 可調，恆溫環境更貼心舒適。' },
  ];

  /** ===== 適用情況 ===== */
  const indications: { title: string; items: string[] }[] = [
    { title: '傷口與癒合', items: ['不易癒合/慢性傷口、燒燙傷', '皮膚移植後的恢復支持'] },
    { title: '術後恢復', items: ['骨科或軟組織手術後之癒合支持'] },
    { title: '感染相關', items: ['深部膿瘍、壞疽/壞死性軟組織感染', '骨髓炎、蜂窩性組織炎等'] },
    { title: '神經系統', items: ['中風、癲癇、腦炎/腦膜炎', '其他神經系統疾病之恢復期支持'] },
    { title: '心血管', items: ['心臟病、腦栓塞等循環相關問題'] },
    { title: '外傷與創傷', items: ['擠壓傷、車禍或跌落造成之挫傷', '頭部與脊髓損傷之輔助照護'] },
    { title: '牙科/口腔', items: ['牙齦發炎、牙周病之恢復期支持'] },
    { title: '腫瘤治療後', items: ['放療後可能出現的組織壞死之輔助處置'] },
    { title: '呼吸與吸入傷害', items: ['肺炎、煙霧/一氧化碳吸入', '溺水後缺氧所致之支持'] },
    { title: '老年照護', items: ['老年症候群、退化性疾病之日常維護'] },
  ];

  /** ===== 波長 Bar 設定 ===== */
  const WL_MIN = 450;
  const WL_MAX = 1100;

  const bands = [
    { key: 'blue', name: '藍光', start: 450, end: 495, gradient: 'from-sky-400 to-sky-600' },
    { key: 'red', name: '紅光', start: 630, end: 700, gradient: 'from-rose-400 to-rose-600' },
    { key: 'nir', name: '近紅外光', start: 700, end: 1100, gradient: 'from-amber-400 to-amber-700' },
  ] as const;

  const pct = (nm: number) => ((nm - WL_MIN) / (WL_MAX - WL_MIN)) * 100;

  /** ===== 三種光療說明 ===== */
  const therapies = [
    {
      id: 'blue',
      title: '藍光（450–495 nm）',
      points: [
        '晝夜節律：影響視網膜內固有感光神經節細胞（ipRGCs），參與褪黑素節律調控；日間曝露有助維持清醒與專注。',
        '情緒與認知：適量日間照明與環境設計，與專注力與反應速度提升相關；夜間過量可能干擾入睡。',
        '應用建議：作為白天/工作時段的警覺輔助照明；夜間避免強藍光直視與長時間曝露。',
      ],
    },
    {
      id: 'red',
      title: '紅光（630–700 nm）',
      points: [
        '能量代謝：與細胞色素 c 氧化酶吸收帶契合，提升線粒體 ATP 生成與細胞能量利用。',
        '組織修復：促進微循環與膠原生成，支持皮膚與軟組織的修復流程。',
        '舒適非侵入：熱負荷低、體感溫和，常與近紅外光合併使用。',
      ],
    },
    {
      id: 'nir',
      title: '近紅外光（700–1,100 nm）',
      points: [
        '深層穿透：波段較長，穿透可達皮下與部分肌肉組織，強化局部微循環與氧合。',
        '訊號調節：涉及 ROS/NO 訊號，與舒緩僵硬、支持恢復相關（一般性科普）。',
        '安全注意：避免直視光源、依指引設定能量密度與時間；合併紅光常見於恢復型方案。',
      ],
    },
  ];

  return (
    <section className="mt-10 md:mt-16 mb-12 md:mb-16">
      {/* ===== 產品優勢 ===== */}
      <h2 className="text-2xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-3 md:mb-6">
        產品優勢
      </h2>
      <p className="text-center text-gray-500 text-sm md:text-base max-w-3xl mx-auto mb-6 md:mb-10 px-4">
        高壓氧艙採用多層抽屜設計與光療技術，穩定供氧並結合紫外線、負離子、藍／紅光等多重淨化與放鬆功能。
      </p>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-4 sm:p-5 bg-gray-50 shadow-sm hover:shadow transition rounded-lg">
            <h3 className="text-lg md:text-2xl font-serif font-semibold text-green-900 mb-2">{it.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{it.desc}</p>
          </div>
        ))}
      </div>

      {/* ===== 光療波長示意圖 ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 md:mt-16">
        <h3 className="text-2xl md:text-4xl font-serif font-semibold text-green-900 text-center mb-2 md:mb-3">
          光療波長示意圖
        </h3>
        <p className="text-center text-gray-500 text-sm md:text-base mb-4">
          450–1100 nm 範圍內常見的三種光療波段。
        </p>

        {/* --- 超小/手機（<640px）：垂直版 --- */}
<div className="block sm:hidden">
  <div className="mx-auto w-full max-w-[360px] rounded-xl bg-white p-3">
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100">
      {bands.map((b) => (
        <div key={b.key} className={`h-16 flex items-center justify-center bg-gradient-to-r ${b.gradient}`}>
          <div className="text-white font-semibold leading-tight text-[11px] text-center">
            <div className="whitespace-nowrap">{b.name}</div>
            <div className="opacity-95 whitespace-nowrap tabular-nums text-[10px]">
              {b.start}–{b.end}
            </div>
            <div className="opacity-90 text-[10px]">nm</div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-2 text-center text-xs text-gray-500">波長 Wavelength (nm)</div>
  </div>
</div>

        {/* --- 平板/桌機（≥640px）：水平版 --- */}
<div className="hidden sm:block overflow-x-auto">
  <div className="relative sm:min-w-[720px] md:min-w-[880px] w-full max-w-6xl mx-auto rounded-xl md:rounded-2xl bg-white p-4 md:p-8">
    {/* 軸底色 */}
    <div className="relative h-16 md:h-24 rounded-lg bg-gray-100 overflow-hidden">
      {bands.map((b) => {
        const left = pct(b.start);
        const width = pct(b.end) - pct(b.start);
        return (
          <div key={b.key} className="absolute top-0 h-full select-none" style={{ left: `${left}%`, width: `${width}%` }}>
            <div className={`h-full w-full bg-gradient-to-r ${b.gradient} opacity-90`} />
            <div className="absolute inset-0 flex items-center justify-center px-1">
              <div className="leading-tight tracking-tight text-center text-white font-semibold text-[11px] md:text-sm">
                <div className="whitespace-nowrap">{b.name}</div>
                <div className="opacity-95 whitespace-nowrap tabular-nums text-[10px] md:text-xs">
                  {b.start}–{b.end}
                </div>
                <div className="opacity-90 text-[10px] md:text-xs">nm</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* 刻度：sm 顯示簡版，md 起顯示完整；單位置中 */}
    <div className="mt-3 md:mt-4 relative h-12 md:h-14">
      <div className="block md:hidden">
        {[450, 700, 1100].map((t) => (
          <div key={`m-${t}`} className="absolute -translate-x-1/2" style={{ left: `${pct(t)}%` }}>
            <div className="w-px h-4 bg-gray-300 mx-auto" />
            <div className="text-[12px] text-gray-600 mt-1 text-center">{t}</div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        {[450, 500, 600, 700, 900, 1100].map((t) => (
          <div key={`d-${t}`} className="absolute -translate-x-1/2" style={{ left: `${pct(t)}%` }}>
            <div className="w-px h-4 bg-gray-300 mx-auto" />
            <div className="text-sm text-gray-600 mt-1 text-center">{t}</div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 -bottom-2 md:-bottom-3 -translate-x-1/2 text-[12px] md:text-sm text-gray-500 text-center pointer-events-none">
        波長 Wavelength (nm)
      </div>
    </div>
  </div>
</div>

      </div>

      {/* ===== 三種光療說明 ===== */}
      {/* 手機：Accordion */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 md:mt-10 md:hidden">
        {therapies.map((t) => (
          <details key={t.id} className="group border border-gray-200 rounded-lg bg-white mb-3 p-4">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="font-serif text-green-900 font-semibold text-base">{t.title}</span>
              <svg
                className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-gray-700 text-sm">
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* 桌機：並列卡片 */}
      <div className="hidden md:grid max-w-6xl mx-auto px-4 sm:px-6 mt-10 grid-cols-3 gap-6">
        {therapies.map((t) => (
          <section key={t.id} className="bg-white border border-gray-200 p-5 rounded-xl">
            <h4 className="font-serif text-xl font-semibold text-green-900 mb-2">{t.title}</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* ===== 適用情況 ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 md:mt-16">
        <h3 className="text-2xl md:text-4xl font-serif font-semibold text-green-900 text-center mb-3 md:mb-6">
          我家貓狗適合寵物高壓氧療程嗎？
        </h3>
        <p className="text-center text-gray-500 text-sm md:text-base mb-5 md:mb-6 px-4">
          若家裡毛孩有以下狀況，可與獸醫師討論是否評估高壓氧治療：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {indications.map((group) => (
            <div key={group.title} className="bg-white border border-gray-200 p-4 md:p-5 rounded-lg">
              <h4 className="font-serif text-base md:text-xl font-semibold text-green-900 mb-2">
                {group.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base">
                {group.items.map((txt, idx) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs md:text-sm text-gray-500 mt-4 text-center px-4">
          本資訊為一般性說明，非醫療建議；是否適用須由合格獸醫師依臨床評估決定。
        </p>
      </div>
    </section>
  );
}
