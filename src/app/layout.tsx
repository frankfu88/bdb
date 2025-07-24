'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

// 🔹 合作夥伴區域資料
const partnerRegions = [
  {
    region: "北部",
    items: [],
  },
  {
    region: "中部",
    items: [
      { name: "東南動物醫院", url: "https://www.dongnan.bdb.com.tw" },
      { name: "毛貓寵動物醫院", url: "https://www.maomeowpet.bdb.com.tw" },
      { name: "鈞懋動物醫院", url: "https://www.junmao.bdb.com.tw" },
      { name: "羅大宇動物醫院", url: "https://www.luodayu.bdb.com.tw" },
      { name: "文志動物醫院", url: "https://www.wenzhi.bdb.com.tw" },
      { name: "人人動物醫院", url: "" },
      { name: "苑裡仁心動物醫院 ", url: "" }
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(140);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRegionOpen, setMobileRegionOpen] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setIsClient(true);
    const header = document.querySelector("header");
    if (header) {
      const height = header.getBoundingClientRect().height;
      setNavbarHeight(height);
    }
  }, []);

  const toggleRegion = (region: string) => {
    setMobileRegionOpen((prev) => ({ ...prev, [region]: !prev[region] }));
  };

  return (
    <html lang="zh-TW">
      <head>
        <title>寶的寶有限公司</title>
        <meta name="description" content="寶的寶有限公司專營高壓氧艙與光療技術，提供專業且安全的醫療與健康解決方案。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="bg-white text-gray-900 font-sans antialiased">
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
          {/* 🔹頂部資訊列 */}
          <div className="bg-[#2266AA] text-white text-xs flex items-center w-full">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <div className="flex items-center justify-center sm:justify-start space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61574549074092" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/facebook.png" alt="Facebook" width={20} height={20} />
                  </a>
                  <a href="https://www.instagram.com/baodebaotw" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/instagram.png" alt="Instagram" width={20} height={20} />
                  </a>
                  <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/icons/line.png" alt="LINE" width={20} height={20} />
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-2 text-[10px] sm:text-xs">
                  <div className="flex items-center space-x-1">
                    <Image src="/images/icons/telephone.png" alt="電話" width={16} height={16} />
                    <span>03-2871723</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image src="/images/icons/location.png" alt="地址" width={16} height={16} />
                    <span>桃園市中壢區青商路59號2號</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹Logo + 導航 */}
          <div className="h-[100px] flex items-center justify-between px-4 sm:px-10 max-w-[1200px] mx-auto">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="寶的寶有限公司 Logo" width={120} height={50} className="w-[100px] sm:w-[140px] h-[80px] sm:h-[100px] object-contain" />
            </Link>

            {/* 📱手機漢堡 */}
            <button className="sm:hidden flex items-center justify-center w-10 h-10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* 💻桌機版 */}
            <nav className="hidden sm:flex flex-1 justify-end">
              <ul className="flex space-x-6 text-base font-normal text-gray-500">
                <li><Link href="/" className="hover:text-blue-600">首頁</Link></li>
                <li><Link href="/about" className="hover:text-blue-600">關於我們</Link></li>

                <li className="relative" onMouseEnter={() => setProductDropdownOpen(true)} onMouseLeave={() => setProductDropdownOpen(false)}>
                  <Link href="/products" className="hover:text-blue-600">產品介紹</Link>
                  {isClient && (
                    <div className={`absolute left-0 top-full w-48 bg-white shadow-lg border rounded-lg z-10 transition-opacity duration-200 ${productDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                      <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">特點介紹</Link>
                      <Link href="/applications" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">應用範圍</Link>
                    </div>
                  )}
                </li>

                <li className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <span className="cursor-pointer hover:text-blue-600">合作夥伴</span>
                  {isClient && (
                    <div className={`absolute left-0 top-full w-56 bg-white shadow-lg border rounded-lg z-10 transition-opacity duration-200 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                      {partnerRegions.map((region) => (
                        <div key={region.region} className="border-b last:border-b-0">
                          <div className="px-4 py-2 font-semibold text-gray-800 bg-gray-50">{region.region}</div>
                          {region.items.map((p) => (
                            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block px-6 py-2 text-gray-700 hover:bg-blue-100">
                              {p.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li>
                  <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    聯絡我們
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* 📱手機版選單 */}
          {mobileMenuOpen && (
            <nav className="sm:hidden bg-white border-t">
              <ul className="flex flex-col items-start p-4 space-y-4 text-base text-gray-500">
                <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">首頁</Link></li>
                <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">關於我們</Link></li>

                <li className="w-full">
                  <button onClick={() => setProductDropdownOpen(!productDropdownOpen)} className="hover:text-blue-600 w-full text-left">
                    產品介紹
                  </button>
                  {productDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">特點介紹</Link>
                      <Link href="/applications" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">應用範圍</Link>
                    </div>
                  )}
                </li>

                <li className="w-full">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-blue-600 w-full text-left">
                    合作夥伴
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 w-full">
                      {partnerRegions.map((region) => (
                        <div key={region.region} className="mb-2">
                          <button onClick={() => toggleRegion(region.region)} className="w-full text-left font-semibold text-gray-800 bg-gray-50 px-3 py-2">
                            {region.region}
                          </button>
                          {mobileRegionOpen[region.region] && (
                            <div className="pl-4 mt-1 space-y-1">
                              {region.items.map((p) => (
                                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">
                                  {p.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li>
                  <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">
                    聯絡我們
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="container mx-auto px-4 sm:px-6" style={{ marginTop: `${navbarHeight}px` }}>
          {children}
        </main>

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
