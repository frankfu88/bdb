'use client';
import React from 'react';

export default function Contraindications() {
  return (
    <section className="max-w-6xl mx-auto mb-16 px-6">
      <h2 className="text-4xl font-serif font-bold text-center text-green-900 mb-8">
        禁忌症與注意項
      </h2>

      {/* Mobile */}
      <div className="md:hidden font-serif text-green-900">
        <div className="grid grid-cols-2 bg-green-900 text-white overflow-hidden">
          <div className="px-4 py-2 text-sm text-center border-r border-white/20">絕對禁忌症</div>
          <div className="px-4 py-2 text-sm text-center">相對禁忌症</div>
        </div>

        <div className="border border-gray-300 border-t-0 overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="p-4 border-r border-gray-300">
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>氣胸（Pneumothorax）</li>
                <li>未受控的嚴重哮喘或 COPD</li>
                <li>肺炎等急性肺部感染</li>
                <li>未控制的癲癇或嚴重神經疾病</li>
                <li>嚴重心臟衰竭</li>
                <li>近期眼部手術</li>
                <li>耳部損傷或耳咽管功能異常</li>
              </ul>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                <li>血糖控制不佳的糖尿病</li>
                <li>嚴重焦慮或幽閉恐懼症</li>
                <li>懷孕</li>
                <li>未控制的高體溫（發燒）</li>
                <li>高血壓未穩定者</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 px-4 py-3 text-center text-gray-600 text-sm">
            若有上述狀況，請先與醫師或獸醫師討論，評估是否適合高壓氧治療。
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto font-serif">
        <table className="w-full border-collapse border border-gray-300 text-green-900 text-base">
          <thead>
            <tr className="bg-green-900 text-white">
              <th className="p-4 border border-gray-300 text-center w-1/2">絕對禁忌症</th>
              <th className="p-4 border border-gray-300 text-center w-1/2">相對禁忌症</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              <td className="p-4 border border-gray-300">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>氣胸（Pneumothorax）</li>
                  <li>未受控的嚴重哮喘或 COPD</li>
                  <li>肺炎等急性肺部感染</li>
                  <li>未控制的癲癇或嚴重神經疾病</li>
                  <li>嚴重心臟衰竭</li>
                  <li>近期眼部手術</li>
                  <li>耳部損傷或耳咽管功能異常</li>
                </ul>
              </td>
              <td className="p-4 border border-gray-300">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>血糖控制不佳的糖尿病</li>
                  <li>嚴重焦慮或幽閉恐懼症</li>
                  <li>懷孕</li>
                  <li>未控制的高體溫（發燒）</li>
                  <li>高血壓未穩定者</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="p-4 text-center text-gray-600 border-t-0"
                style={{ borderTop: 'none' }}
              >
                若有上述狀況，請先與醫師或獸醫師討論，評估是否適合高壓氧治療。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
