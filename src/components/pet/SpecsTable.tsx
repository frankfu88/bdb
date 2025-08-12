'use client';

type Row = [string, string];

const SPECS: Row[] = [
  ['主機尺寸', 'L 110 × W 70 × H 110 cm'],
  ['電源', '110V AC'],
  ['功率', '最高 2000W，正常 1200W'],
  ['艙體保壓', '最大保壓 8 ATA'],
  ['艙體壓力', '1.1 ~ 2.0 ATA（可設定）'],
  ['製氧方式 / 出氧濃度', '鋰離子製氧分離篩，10L / 96%'],
  ['艙體內氧濃度', '≤40%'],
  ['光療系統', '藍光、紅光、紅外線光療'],
  ['恆溫空調系統', '20℃～35℃（艙內溫度，可設定）'],
  ['抗菌自潔', '負離子，紫外線滅菌'],
  ['自動清洗系統', '廢棄物承接盤，自動噴淋系統，排放閥門'],
  ['應急系統', '主機上緊急按鈕'],
  ['下艙滑軌', '方便進出抽屜'],
];

export default function SpecsTable() {
  return (
    <section className="mb-14 md:mb-16">
      <h2 className="text-xl md:text-4xl font-serif font-semibold text-center text-green-900 mb-6 md:mb-8">
        規格說明
      </h2>

      {/* ===== 手機版：加上表頭列 + 卡片式兩欄 ===== */}
      <div className="md:hidden font-serif text-green-900">
        {/* 手機表頭 */}
        <div className="grid grid-cols-[9rem,1fr] bg-green-900 text-white overflow-hidden">
          <div className="px-4 py-2 text-sm text-center border-r border-white/20">規格參數</div>
          <div className="px-4 py-2 text-sm text-center">高壓氧艙</div>
        </div>

        {/* 內容卡片 */}
        <div className="divide-y divide-gray-200 border border-gray-200 overflow-hidden">
          {SPECS.map(([k, v], i) => (
            <div key={k} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              <div className="grid grid-cols-[9rem,1fr] gap-3 px-4 py-3">
                <div className="text-sm font-semibold text-green-900">{k}</div>
                <div className="text-sm text-green-900 break-words">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 桌機版：維持現有表格樣式 ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full max-w-6xl mx-auto text-green-900 border-collapse border border-gray-200 font-serif text-base">
          <thead>
            <tr className="bg-green-900 text-white">
              <th className="p-4 border border-gray-200 text-center">規格參數</th>
              <th className="p-4 border border-gray-200 text-center">高壓氧艙</th>
            </tr>
          </thead>
          <tbody>
            {SPECS.map(([k, v]) => (
              <tr key={k} className="odd:bg-gray-50">
                <td className="p-4 border border-gray-200 text-center font-semibold whitespace-nowrap">{k}</td>
                <td className="p-4 border border-gray-200 text-center whitespace-pre-line">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
