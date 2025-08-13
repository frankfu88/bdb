type Row = {
  label: string;
  v: string[];
  wrap?: boolean;
};

const HEADERS = [
  '規格參數',
  '膠囊式柔性氧艙',
  '躺椅式柔性氧艙',
  '單人主機',
  '雙人主機',
  '豪華版氧艙',
];

const ROWS: Row[] = [
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
  { label: '電源', v: ['－', '－', '110V AC', '110V AC', '110V AC'] },
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
    v: ['≤ 30%', '≤ 30%', '製氧濃度 95.6%', '製氧濃度 95.6%', '≤ 30%'],
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
    wrap: true,
    v: [
      '內部緊急按鈕<br />手機 App 應急控制',
      '內部緊急按鈕<br />手機 App 應急控制',
      '觸控螢幕緊急按鈕<br />手機 App 應急控制',
      '觸控螢幕緊急按鈕<br />手機 App 應急控制',
      '內外緊急按鈕<br />手機 App 應急控制',
    ],
  },
];

export default function SpecsTable() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-6 md:mb-8">
        規格說明
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-[1500px] w-full max-w-6xl mx-auto text-green-900 border-collapse border border-gray-200 font-serif text-sm md:text-base table-auto">
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
            {ROWS.map(({ label, v, wrap }, rowIdx) => (
              <tr key={label} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center font-semibold whitespace-nowrap">
                  {label}
                </td>

                {v.map((cell, i) =>
                  wrap ? (
                    <td
                      key={i}
                      className="px-4 py-3 md:px-5 md:py-4 border border-gray-200 text-center whitespace-normal break-words leading-relaxed"
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
    </>
  );
}
