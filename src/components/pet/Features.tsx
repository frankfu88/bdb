'use client';

export default function Features() {
  const items = [
    { title: '多層抽屜式設計', desc: '支援多隻寵物同時使用，可獨立進出，操作便利。' },
    { title: '高效氧艙', desc: '最高可承受 2.0 ATA，氧濃度最高達 96%。' },
    { title: '雙洩壓閥', desc: '專利防爆雙洩壓系統，運行更安全穩定。' },
    { title: '紫外線滅菌', desc: 'UV 與負離子淨化，抗菌除味，保持艙內環境清新。' },
    { title: '光照系統', desc: '藍光、紅光、紅外光療結合，促進放鬆與細胞修復。' },
    { title: '恆溫控溫', desc: '20℃～35℃ 可調，恆溫環境更貼心舒適。' },
  ];

  return (
    <section className="mt-12 md:mt-16 mb-14 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-4 md:mb-6">
        特點說明
      </h2>
      <p className="text-center text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-8 md:mb-12">
        高壓氧艙採用多層抽屜設計與光療技術，穩定供氧並結合紫外線、負離子、藍／紅光等多重淨化與放鬆功能。
      </p>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-4 sm:p-5 md:p-6 bg-gray-50 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-green-900 mb-2.5 md:mb-3">{it.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
