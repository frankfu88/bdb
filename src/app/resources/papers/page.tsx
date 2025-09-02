// /src/app/resources/papers/page.tsx
'use client';

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

type Paper = {
  title: string;
  authors?: string;
  journal?: string;
  year?: number;
  url?: string; // 可放 DOI / PubMed / 出版社連結
};

const disclaimerLines: string[] = [
  '高壓氧對多種疾病和症狀改善作用有充分的臨床證據和良好的潛在原理！',
  '高壓氧具足夠的臨床證明和完善的潛在機制對各種疾病以及症狀產生革命性的影響',
  '在誘導更好的身心靈情緒、減輕壓力和改善睡眠品質方面，高壓氧也有利於我們的整體健康',
  '高壓氧可用作於預防、修復及治療，以改善健康。',
  '在幾項臨床研究中，高壓氧更得到可以增強人體與生俱來的修復和再生能力，並產生多種正向的生理、生化和細胞修復效應的證明。',
];

const disclaimerNote =
  '註：台灣在高壓氧方面的學術文獻沒有國外充足，本站點由於衛教性質為目的於此分享其他國家關於高壓氧用於其他適應症的醫學文獻作為您的參考價值。若有下列提到的適應症，請盡速前往醫院尋求治療。';

const papers: Paper[] = [
  {
    title: '高壓氧治療對慢性傷口之影響與臨床療效綜述',
    authors: "Thackham J; McElwain D; Long R.",
    journal: "Wound Repair and Regeneration",
    year: 2008,
    url: "https://doi.org/10.1111/j.1524-475X.2008.00372.x",
  },
  {
    title: '高壓氧與腦中風後神經可塑性：機轉與臨床證據',
    authors: 'American Friends of Tel Aviv University',
    journal: 'ScienceDaily',
    year: 2013,
    url: 'https://www.sciencedaily.com/releases/2013/01/130123144218.htm',
  },
  {
    title: '長新冠（腦霧、疲倦）與高壓氧治療之初步研究',
     authors: "Zilberman-Itskovich, S.; Catalogna, M.; Sasson, E.; et al.",
    journal: "Scientific Reports",
    year: 2022,
    url: "https://doi.org/10.1038/s41598-022-15565-0",
  },
  {
    title: '高壓氧對認知功能與阿茲海默症樣變化的潛在效益',
    authors: "Chen J; Zhang F; Zhao L; et al.",
    journal: "Alzheimer's & Dementia: Translational Research & Clinical Interventions",
    year: 2020,
    url: "https://doi.org/10.1002/trc2.12030",
  },
  {
    title: '高壓氧誘發之幹細胞動員與組織再生關聯性',
    authors: "Lindenmann J; Kamolz L; Graier W; Smolle J; Smolle-Juettner F.",
    journal: "Biomedicines",
    year: 2022,
    url: "https://doi.org/10.3390/biomedicines10123145",
  },
  {
    title: '睡眠品質與高壓氧：臨床觀察與機制探討',
    authors: "Sun B; He J; Chen H; et al.",
    journal: "Travel Medicine and Infectious Disease",
    year: 2025,
    url: "https://doi.org/10.1016/j.tmaid.2025.102834",
  },
];

export default function PapersPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* 頁面標題（與 News 保持一致） */}
        <section className="bg-white pt-16 md:pt-24">
          <PageHeader title="醫學文獻" subtitle="Medical Literature" />
        </section>

        {/* 衛教性質說明區 */}
        <section className="mt-12 md:mt-16 mb-10">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-8 text-center">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-500 mb-6">
              – 本內容為衛教性質 –
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              {disclaimerLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 leading-relaxed">{disclaimerNote}</p>
          </div>
        </section>

        {/* 文獻列表 */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-green-900 mb-6">
            精選文獻
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {papers.map((p, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg md:text-xl font-medium text-green-800">
                  {p.url ? (
                    <Link
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-green-900"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h4>

                <div className="mt-2 text-sm text-gray-600 space-x-2">
                  {p.authors && <span>{p.authors}</span>}
                  {p.year && <span>· {p.year}</span>}
                  {p.journal && <span>· {p.journal}</span>}
                </div>

                {!p.url && (
                  <p className="mt-3 text-[13px] text-gray-500">
                    （待補連結）可填入 DOI、PubMed 或出版社頁面 URL。
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
