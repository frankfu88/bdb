'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(140); // 預設 navbar 高度

  useEffect(() => {
    setIsClient(true);
    // 動態計算 navbar 高度
    const header = document.querySelector('header');
    if (header) {
      const height = header.getBoundingClientRect().height;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <html lang="zh-TW">
      <head>
        <title>寶的寶有限公司</title>
        <meta name="description" content="寶的寶有限公司專營高壓氧艙與光療技術，提供專業且安全的醫療與健康解決方案。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* ✅ 正確的 Favicon 設定 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* 🔹 Navbar 固定在頂部 */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
          {/* 🔹 上方 (深藍色區塊) */}
          <div className="bg-[#2266AA] text-white text-xs h-[40px] flex items-center w-full">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center px-10 h-full">
              
              {/* 🔗 社群連結 */}
              <div className="flex items-center space-x-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer" title="LINE">
                  <Image src="/images/line.png" alt="LINE" width={24} height={24} />
                </a>
              </div>

              {/* 📞 聯絡資訊 */}
              <div className="flex items-center space-x-3">
                <Image src="/images/telephone.png" alt="電話" width={18} height={18} />
                <span>03-2871723</span>
                <Image src="/images/location.png" alt="地址" width={18} height={18} />
                <span>桃園市中壢區青商路59號2號</span>
              </div>
            </div>
          </div>

          {/* 🔹 下方 (白色區塊) - Logo & 導航列 */}
          <div className="h-[100px] flex items-center justify-between px-10 max-w-[1200px] mx-auto">
            <Link href="/" className="flex-1 flex justify-start">
              <Image 
                src="/images/logo.png" 
                alt="寶的寶有限公司 Logo" 
                width={160} 
                height={60} 
                className="w-[140px] h-[100px] object-contain" 
              />
            </Link>

            {/* ✅ Navbar Links - 靠近內部 */}
            <nav className="flex-1 flex justify-end">
              <ul className="flex space-x-6 text-base font-normal text-gray-500">
                <li><Link href="/" className="hover:text-blue-600">首頁</Link></li>
                <li><Link href="/about" className="hover:text-blue-600">關於我們</Link></li>
                
                {/* 產品介紹 (有下拉選單) */}
                <li 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link href="/products" className="hover:text-blue-600">
                    產品介紹
                  </Link>
                  {isClient && (
                    <div 
                      className={`absolute left-0 top-full w-48 bg-white shadow-lg border rounded-lg z-10 transition-opacity duration-200 ${
                        dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                        特點介紹
                      </Link>
                      <Link href="/applications" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                        應用範圍
                      </Link>
                    </div>
                  )}
                </li>

                {/* 🔗 聯絡我們 - 直接跳轉 LINE */}
                <li>
                  <a 
                    href="https://line.me/ti/p/@464hptwo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-600"
                  >
                    聯絡我們
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* 🔹 主要內容區域 - 動態調整頂部間距 */}
        <main className={`mt-[${navbarHeight}px] container mx-auto px-6`} style={{ marginTop: `${navbarHeight}px` }}>
          {children}
        </main>

        {/* ✅ 回到頂部按鈕 */}
        <BackToTop />

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}