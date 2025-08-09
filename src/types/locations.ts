// src/types/locations.ts

/** 單一合作夥伴項目 */
export type PartnerItem = {
  name: string;
  url: string; // 允許空字串代表沒有網站
};

/** 合作夥伴區域 */
export type PartnerRegion = {
  region: string;
  items: PartnerItem[];
};

/** 醫院資料（攤平成單一清單時使用） */
export type Hospital = {
  name: string;
  url?: string; // 如果原本是空字串則轉成 undefined
  region: string;
};
