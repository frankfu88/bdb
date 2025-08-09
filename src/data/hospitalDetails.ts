// src/data/hospitalDetails.ts
export const hospitalDetails: Record<
  string,
  {
    address?: string;
    hours?: string;
    phone?: string;
    mapUrl?: string;
    siteUrl?: string;
    tags?: string[];
  }
> = {
  // ===== 中部 =====
  東南動物醫院: {
    address: '406台中市北屯區崇德路二段30號',
    hours: '週一至週日 09:30–12:30, 14:00–17:00, 18:00–21:00',
    phone: '04-2296-0753',
    mapUrl: 'https://maps.google.com/?q=台中市北屯區崇德路二段30號',
    siteUrl: 'https://www.dongnan.bdb.com.tw',
    tags: ['犬貓', '預約制'],
    },
  毛貓寵動物醫院: {
    address: '408台中市南屯區文心路一段372號',
    hours: '週一至週日 09:00–21:00',
    phone: '04-2328-6789',
    mapUrl: 'https://maps.google.com/?q=台中市南屯區文心路一段372號',
    siteUrl: 'https://www.maomeowpet.bdb.com.tw',
    tags: ['犬貓', '預約制'],
  },
  鈞懋動物醫院: {
  address: '406台中市北屯區軍福十六路283號',
  hours: '週二至週五 10:00–12:30, 14:30–17:30, 18:30–21:00；週六、週日、週一 休息',
  phone: '04-2435-1283',
  mapUrl: 'https://maps.google.com/?q=台中市北屯區軍福十六路283號',
  siteUrl: 'https://www.junmao.bdb.com.tw',
  tags: ['犬貓', '預約制'],
},

  羅大宇動物醫院: {
  address: '403台中市西區存中街153號',
  hours: '週一至週六 09:30–12:00, 13:00–17:00, 18:00–21:30；週日 09:30–12:00, 13:00–17:00, 18:00–22:00',
  phone: '04-2372-8378',
  mapUrl: 'https://maps.google.com/?q=台中市西區存中街153號',
  siteUrl: 'https://www.luodayu.bdb.com.tw',
  tags: ['犬貓', '預約制'],
},
文志動物醫院: {
  address: '640雲林縣斗六市文化路344號',
  hours: '週一至週五 09:00–11:30, 14:00–17:30, 19:00–20:00；週六 09:00–11:30；週日 休息',
  phone: '05-532-2735',
  mapUrl: 'https://maps.google.com/?q=雲林縣斗六市文化路344號',
  siteUrl: 'https://www.wenzhi.bdb.com.tw',
  tags: ['犬貓', '預約制'],
},

  人人動物醫院: {
    address: '403台中市西區公正路146號',
    hours: '週一至週六 17:00–18:00, 18:30–21:00；週日休息',
    phone: '04-2302-8848',
    mapUrl: 'https://maps.google.com/?q=台中市西區公正路146號',
    siteUrl: 'https://www.renren.bdb.com.tw',
    tags: ['犬貓', '預約制'],
  },
  仁心動物醫院: {
    address: '358苗栗縣苑裡鎮世界路一段118-1號',
    hours: '週一至週六 09:00–12:30, 14:00–16:30, 17:00–20:00；週日休息',
    phone: '03-786-1318',
    mapUrl: 'https://maps.google.com/?q=苗栗縣苑裡鎮世界路一段118-1號',
    siteUrl: '',
    tags: ['犬貓', '預約制'],
  },

  // ===== 南部 =====
    名仁動物醫院: {
    address: '900屏東縣屏東市仁愛路7號',
    hours: '週一至週六 09:00-12:00, 14:00-18:00, 19:00-23:00；週三 09:00-12:00, 14:00-16:00；週日 09:00–12:00, 14:00–16:00, 21:00–23:00',
    phone: '08-751-2022',
    mapUrl: 'https://maps.google.com/?q=屏東縣屏東市仁愛路7號',
    siteUrl: 'https://www.mingren.bdb.com.tw',
    tags: ['犬貓', '預約制'],
  },

  佰成動物醫院: {
    address: '831高雄市大寮區鳳林三路674號',
    hours: '週一至週五 09:00–12:30, 15:00–18:00, 18:30–21:00；週六 09:00–12:30, 15:00–18:00；週日休息',
    phone: '07-786-7568',
    mapUrl: 'https://maps.google.com/?q=高雄市大寮區鳳林三路674號',
    siteUrl: 'https://www.baicheng.bdb.com.tw',
    tags: ['犬貓', '預約制'],
  },
  宏愛動物醫院: {
  address: '701台南市東區東寧路331號',
  hours: '週一至週六 10:30–20:00；週日休息',
  phone: '06-238-5816',
  mapUrl: 'https://maps.google.com/?q=台南市東區東寧路331號',
  siteUrl: 'https://www.hongai.bdb.com.tw',
  tags: ['犬貓', '預約制'],
},

  亞幸動物醫院: {
    address: '802高雄市苓雅區光華一路12-1號',
    hours: '週一至週五 10:00–12:00, 13:00–21:00；週六 10:00–12:00, 14:00–19:00；週日休息',
    phone: '07-726-5577',
    mapUrl: 'https://maps.google.com/?q=高雄市苓雅區光華一路12-1號',
    siteUrl: '',
    tags: ['犬貓', '預約制'],
  },
  登羣動物醫院: {
    address: '806高雄市前鎮區瑞隆路228號',
    hours: '週一至週六 09:00–13:00, 15:00–20:00；週日 09:00–13:00, 15:00–18:00',
    phone: '07-727-6739',
    mapUrl: 'https://maps.google.com/?q=高雄市前鎮區瑞隆路228號',
    siteUrl: '',
    tags: ['犬貓', '預約制'],
  },
  史密斯動物醫院: {
    address: '800高雄市新興區民生一路199號',
    hours: '週一至週日 14:00–18:00, 19:00–22:00',
    phone: '07-222-6565',
    mapUrl: 'https://maps.google.com/?q=高雄市新興區民生一路199號',
    siteUrl: '',
    tags: ['犬貓', '預約制'],
  },

  // ===== 北部（目前無資料，可後續補） =====
};
