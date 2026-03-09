// /src/components/human/SpecsTable.tsx
type Row = {
  label: string;
  v: string[];
};

const HEADERS = [
  '規格參數',
  '躺椅式柔性氧艙',
  '雙人主機',
  '單人主機',
  '單人豪華版硬殼氧艙',
  '雙人豪華版硬殼氧艙',
  '豪華版主機',
];

const ROWS: Row[] = [
  {
    label: '尺寸',
    v: [
      'L 178 × W 100 × H 140 cm',
      'W 47 × D 52 × H 88 cm',
      'W 44 × D 48 × H 81 cm',
      'L 2000 × W 1200 × H 1900 mm',
      'L 2000 × W 1800 × H 1900 mm',
      'W 47 × D 52 × H 88 cm',
    ],
  },
  {
    label: '電源/功率',
    v: [
      '－',
      '220V AC / 1000W\n或 110V AC / 2000W',
      '220V AC / 800W\n或 110V AC / 1600W',
      '－',
      '－',
      '220V AC / 1000W\n或 110V AC / 2000W',
    ],
  },
  {
    label: '保壓',
    v: [
      '最大保壓 15 kPa，可設定',
      '－',
      '－',
      '最大保壓 30 kPa，可設定',
      '最大保壓 30 kPa，可設定',
      '－',
    ],
  },
  {
    label: '標準艙內工作壓力',
    v: [
      '建議 10 kPa 或 1.20 ATA 以下，可設定',
      '－',
      '－',
      '建議 10 kPa 或 1.20 ATA 以下，可設定',
      '建議 10 kPa 或 1.20 ATA 以下，可設定',
      '－',
    ],
  },
  {
    label: '制氧分子篩',
    v: [
      '－',
      '10L 兩組，可輕鬆更換',
      '10L 一組，可輕鬆更換',
      '－',
      '－',
      '10L 兩組，可輕鬆更換',
    ],
  },
  {
    label: '氧濃度',
    v: [
      '艙內氧濃度 ≤ 30%，\n或依客戶要求設定（50% 以下）',
      '制氧濃度 ≤ 95.6%',
      '制氧濃度 ≤ 95.6%',
      '艙內氧濃度 ≤ 30%，\n或依客戶要求設定（50% 以下）',
      '艙內氧濃度 ≤ 30%，\n或依客戶要求設定（50% 以下）',
      '制氧濃度 ≤ 95.6%',
    ],
  },
  {
    label: '空調',
    v: [
      '25°C 以下（艙內溫度）',
      '專利冷凍液制冷',
      '專利冷凍液制冷',
      '25°C 以下（艙內溫度可調控）',
      '25°C 以下（艙內溫度可調控）',
      '專利冷凍液制冷',
    ],
  },
  {
    label: '護智燈系統',
    v: [
      '選配',
      '－',
      '－',
      '－',
      '－',
      '－',
    ],
  },
  {
    label: '照明及護智燈系統',
    v: [
      '－',
      '－',
      '－',
      '白光',
      '白光',
      '－',
    ],
  },
  {
    label: '抗菌自潔',
    v: [
      '負離子及 UV 紫外線滅菌',
      '－',
      '－',
      '負離子及 UV 紫外線滅菌',
      '負離子及 UV 紫外線滅菌',
      '－',
    ],
  },
  {
    label: '光療系統',
    v: [
      '石墨烯遠紅外線光療，可遙控控制',
      '－',
      '－',
      '石墨烯遠紅外線光療，可遙控開關',
      '石墨烯遠紅外線光療，可遙控開關',
      '－',
    ],
  },
  {
    label: '應急系統',
    v: [
      '內部緊急按鈕',
      '觸摸屏緊急按鈕',
      '觸摸屏緊急按鈕',
      '內部緊急按鈕及對講機',
      '內部緊急按鈕及對講機',
      '觸摸屏緊急按鈕',
    ],
  },
  {
    label: '配件',
    v: [
      '內置單人沙發（可更換椅套）',
      '－',
      '－',
      '內置沙發（可更換椅套）',
      '內置沙發（可更換椅套）',
      '－',
    ],
  },
];

export default function SpecsTable() {
  const modelIndexes = Array.from({ length: HEADERS.length - 1 }, (_, i) => i + 1);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-6 md:mb-8">
        規格說明
      </h2>

      {/* 手機版：每個型號一張卡 */}
      <div className="md:hidden space-y-5">
        {modelIndexes.map((colIdx) => (
          <section
            key={colIdx}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="bg-green-900/90 text-white text-center py-3 px-4 font-serif font-semibold leading-relaxed">
              {HEADERS[colIdx]}
            </div>

            <table className="w-full border-collapse">
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <th className="w-32 align-top text-left px-3 py-2 text-green-900 font-semibold border-t border-gray-200">
                      {row.label}
                    </th>
                    <td className="px-3 py-2 border-t border-gray-200 text-gray-800 leading-relaxed break-words whitespace-pre-line">
                      {row.v[colIdx - 1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      {/* 桌機版：可橫向捲動避免欄位太擠 */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-[1200px] w-full text-green-900 border-collapse border border-gray-200 font-serif text-sm md:text-base table-auto">
          <thead>
            <tr className="bg-green-900 text-white">
              {HEADERS.map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROWS.map(({ label, v }, rowIdx) => (
              <tr key={label} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center font-semibold whitespace-nowrap">
                  {label}
                </td>

                {v.map((cell, i) => (
                  <td
                    key={i}
                    className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-pre-line leading-relaxed align-middle"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}