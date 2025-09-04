// /src/app/statement/page.tsx
export default function StatementPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-12 leading-relaxed space-y-6">
        <h1 className="text-4xl font-serif font-semibold text-green-900 mb-6">
          特別聲明
        </h1>

        <p>
          本公司所有生產的高壓氧艙，艙體內均嚴格遵守以下標準：
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>壓力低於 1.5 ATA</li>
          <li>氧氣濃度低於 40%</li>
        </ul>
        <p>
          上述規範係基於國際安全資料與醫療設施規範（如 NASA 與
          NFPA-99 標準），確保使用安全。
        </p>

        <h2 className="text-2xl font-bold text-green-800 mt-10">氧氣濃度與風險等級</h2>
        <p>在常壓環境下，可依氧氣濃度區分風險：</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>正常空氣 (20.9%)</strong>：燃點與燃燒速率皆以此為基準。
          </li>
          <li>
            <strong>富氧環境 (23% – 40%)</strong>：火災風險顯著上升，靜電即可點燃，燃燒速率加快，部分原本不易燃物質變得可燃。
          </li>
          <li>
            <strong>高氧環境 (&gt;40%)</strong>：極度危險，可能發生自發燃燒，金屬亦可燃，任何靜電皆構成重大威脅。
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-green-800 mt-10">高壓環境的特殊情況</h2>
        <p>
          在高壓密閉環境（如潛水艙或高壓氧艙），即使氧濃度維持 21%，因總壓力上升，氧分壓同樣提高。例如在 5
          個大氣壓下，21% 的氧氣相當於常壓下 105% 的氧濃度，其火災風險極高。因此，任何高壓環境都需實施最高等級的防火管控。
        </p>

        <h2 className="text-2xl font-bold text-green-800 mt-10">結論</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>超過 23–25% 氧氣濃度，即可能因靜電或微小火花引發燃燒。</li>
          <li>濃度越高，風險指數級上升；超過 40% 屬極危險區，甚至可能自燃。</li>
          <li>燃燒風險取決於氧分壓，而非單純濃度。</li>
          <li>任何可能出現富氧的密閉空間，必須嚴格管控火源與可燃物。</li>
        </ul>

        <p className="text-red-700 font-semibold mt-6">
          本公司所有艙體設計，皆以「安全有效」為最高原則，確保氧氣濃度與壓力範圍均在國際認可的安全界限內。
        </p>
      </section>
    </main>
  );
}
