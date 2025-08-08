'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

/** 合作夥伴區域資料 */
const partnerRegions = [
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
      { name: "苑裡仁心動物醫院 ", url: "" },
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRegionOpen, setMobileRegionOpen] = useState<{ [key: string]: boolean }>({});

  // ✅ 新增：當關閉選單時自動 reset dropdown 開啟狀態
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileRegionOpen({});
    }
  }, [mobileMenuOpen]);

  const toggleRegion = (region: string) => {
    setMobileRegionOpen((prev) => ({ ...prev, [region]: !prev[region] }));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200 font-serif font-semibold">
      {/* 頂部藍色資訊列 */}
      <TopBar />

      {/* Logo + 桌機/手機導覽 */}
      <div className="h-[100px] flex items-center justify-between px-4 sm:px-10 max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center" aria-label="首頁">
          <Image
            src="/images/logo_removebg.png"
            alt="寶的寶有限公司 Logo"
            width={400}
            height={400}
            className="w-[220px] sm:w-[300px] h-[176px] sm:h-[240px] object-contain"
          />
        </Link>

        {/* 桌機版導覽 */}
        <DesktopNav partnerRegions={partnerRegions} />

        {/* 手機漢堡按鈕 */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="切換選單"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* 手機版選單 */}
      {mobileMenuOpen && (
        <MobileNav
          partnerRegions={partnerRegions}
          toggleRegion={toggleRegion}
          mobileRegionOpen={mobileRegionOpen}
          closeMenu={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
