'use client';

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

type NewsItem = {
  title: string;
  url: string;
};

const newsList: NewsItem[] = [
  {
    title: "醫療科技再升級! 錢薇娟、江宏傑力挺 \"預防醫學\" - Yahoo 新聞",
    url: "https://tw.news.yahoo.com/%E9%86%AB%E7%99%82%E7%A7%91%E6%8A%80%E5%86%8D%E5%8D%87%E7%B4%9A-%E9%8C%A2%E8%96%87%E5%A8%9F-%E6%B1%9F%E5%AE%8F%E5%82%91%E5%8A%9B%E6%8C%BA-%E9%A0%90%E9%98%B2%E9%86%AB%E5%AD%B8-101618751.html",
  },
  {
    title: "女力「逆天」發威！ 頂尖「逆齡」抗老技術，讓女人連年齡也能自己做主 - 商周",
    url: "https://www.businessweekly.com.tw/style/indep/1004282",
  },
  {
    title: "腦中風、腦霧、突發性失聰⋯都適用 吸純氧就能抗老回春？高壓氧治療解密 - 今周刊",
    url: "https://www.businesstoday.com.tw/article/category/183029/post/202401240048/",
  },
  {
    title: "確診後腦霧好不了 高壓氧治療協助改善 - 自由健康網",
    url: "https://health.ltn.com.tw/article/breakingnews/4305390",
  },
  {
    title: "中風後只能歪嘴坐輪椅嗎？可以在缺氧的腦內打「高壓氧」治療 - Heho 健康",
    url: "https://heho.com.tw/archives/26901",
  },
  {
    title: "高壓氧能治療「慢性傷口」嗎？什麼情況使用、治療狀況一次明白 - Heho 健康",
    url: "https://heho.com.tw/archives/213369",
  },
  {
    title: "物理治療師腦出血左癱 高壓氧治療讓他可以「讚」起來 - Heho 健康",
    url: "https://heho.com.tw/archives/236313",
  },
  {
    title: "C 羅花 55 萬台幣購入高科技治療艙！為膝蓋舊疾砸錢、友人爆料：全是為了賽場上最佳體態！- JUKSY",
    url: "https://www.juksy.com/article/113233",
  },
  {
    title: "高壓氧治療手 意外戒掉菸癮 - 華視新聞",
    url: "https://www.youtube.com/watch?v=RecVbQAL1T4&list=PLAXce9Vv6F9IBq__Kc-ltLLFqnsTGM_WP",
  },
  {
    title: "傷口潰爛20年 高壓氧治療助痊癒 - 健康 2.0",
    url: "https://health.tvbs.com.tw/medical/310138",
  },
  {
    title: "缺氧易衰老？ 淺談高壓氧 - 健康醫療網",
    url: "https://www.healthnews.com.tw/article/35416",
  },
  {
    title: "【腦退化症】高壓氧 (HBOT) 治療認知障礙症．腦退化症．阿茲海默症 | 大腦健康 | Dr.SAM 心理教室",
    url: "https://www.youtube.com/watch?v=EsZtmpFDk5A&ab_channel=Dr.SamBrain%26Psychology%E5%A4%A7%E8%85%A6%E5%8F%8A%E5%BF%83%E7%90%86%E6%95%99%E5%AE%A4",
  },
  {
    title: "靠高壓氧逆轉失智症　減緩「老番顛」症頭 - 健康醫療網",
    url: "https://www.healthnews.com.tw/article/54880",
  },
  {
    title: "研究：高壓氧減少腦部致病斑塊 有助減緩、逆轉失智症 - 自由時報",
    url: "https://news.ltn.com.tw/news/world/breakingnews/3668125",
  },
  {
    title: "高壓氧吸 3 個月，細胞年輕 25 歲！科學家首次在人體試驗中「逆轉衰老」- Heho健康",
    url: "https://heho.com.tw/archives/148869",
  },
  {
    title: "名人瘋高壓氧、光療，抗老回春 - 台視樂活",
    url: "https://www.ttv.com.tw/lohas/view/27814/554",
  },
  {
    title: "新冠後遺症「腦霧」增多 醫師：高壓氧治療協助舒緩｜十點不一樣 20220608",
    url: "https://www.youtube.com/watch?v=rg5MYX5bQ58&t=2s&ab_channel=TVBSNEWS",
  },
  {
    title: "詹姆士高壓氧艙內自拍 網友：要變身超級賽亞人了嗎？ - S-team·Yahoo奇摩運動特約作家",
    url: "https://tw.stock.yahoo.com/news/%E8%A9%B9%E5%A7%86%E5%A3%AB%E9%AB%98%E5%A3%93%E6%B0%A7%E8%89%99%E5%85%A7%E8%87%AA%E6%8B%8D-%E7%B6%B2%E5%8F%8B%EF%BC%9A%E8%A6%81%E8%AE%8A%E8%BA%AB%E8%B6%85%E7%B4%9A%E8%B3%BD%E4%BA%9E%E4%BA%BA%E4%BA%86-022553934.html",
  },
  {
    title: "長新冠疲倦、失眠怎麼辦︖ 高壓氧成治療新解方之一 - Heho健康",
    url: "https://heho.com.tw/archives/247400",
  },
];

export default function NewsPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* 頁面標題 */}
        <section className="bg-white pt-16 md:pt-24">
          <PageHeader
            title="新聞報導"
            subtitle="News"
          />
        </section>

        {/* 新聞清單 */}
        <section className="mt-16 mb-16">
          <ul className="space-y-6">
            {newsList.map((news, idx) => (
              <li key={idx}>
                <Link
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg md:text-xl font-medium text-yellow-700 underline"
                >
                  {news.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
