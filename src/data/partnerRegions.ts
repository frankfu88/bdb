// src/data/partnerRegions.ts
import type { PartnerRegion } from "@/types/locations";

export const partnerRegions: PartnerRegion[] = [
  { region: "北部", items: [] },
  {
    region: "中部",
    items: [
      { name: "東南動物醫院", url: "https://www.dongnan.bdb.com.tw" },
      { name: "毛貓寵動物醫院", url: "https://www.maomeowpet.bdb.com.tw" },
      { name: "鈞懋動物醫院", url: "https://www.junmao.bdb.com.tw" },
      { name: "羅大宇動物醫院", url: "https://www.luodayu.bdb.com.tw" },
      { name: "文志動物醫院", url: "https://www.wenzhi.bdb.com.tw" },
      { name: "人人動物醫院", url: "" },
      { name: "仁心動物醫院", url: "" },
    ],
  },
  {
    region: "南部",
    items: [
      { name: "名仁動物醫院", url: "https://www.mingren.bdb.com.tw" },
      { name: "佰成動物醫院", url: "https://www.baicheng.bdb.com.tw" },
      { name: "宏愛動物醫院", url: "https://www.hongai.bdb.com.tw" },
      { name: "亞幸動物醫院", url: "" },
      { name: "登羣動物醫院", url: "" },
      { name: "史密斯動物醫院", url: "" },
    ],
  },
];
