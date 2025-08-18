// src/data/gyms.ts
export type Gym = {
  name: string;
  address?: string;
  hours?: string;
  phone?: string;
  mapUrl?: string;  // 若未填，頁面會用 address 自動組出 Google Maps 連結
  siteUrl?: string; // 官方頁或你們站內頁
  tags?: string[];  // 例：['自由重量', '團課', '預約制']
};

export const gyms: Gym[] = [
  {
    name: "Second Wind GYM 青埔形象館",
    address: "320桃園市中壢區青昇路237號",
    hours: "週一至週日 06:00-00:00",
    phone: "03-287-3496",
    siteUrl: "https://www.facebook.com/swg.tw68/?locale=zh_TW",
    tags: ["自主訓練", "私人教練", "預約制"],
  },
  {
    name: "耕重健身工作室 Cultivate",
    address: "220新北市板橋區三民路一段56號B1",
    hours: "",
    phone: "0915-322-788",
    siteUrl: "https://www.instagram.com/cultivate.fit/",
    tags: ["採全預約制"],
  },
];
