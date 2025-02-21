'use client';

import { ReactNode } from "react";
import Link from "next/link";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop"; // ✅ 確保「回到頂部」功能

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <title>寶的寶有限公司 - 高壓氧艙 & 光療技術</title>
        <meta name="description" content="寶的寶有限公司專營高壓氧艙與光療技術，提供專業且安全的醫療與健康解決方案。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* 🔹 Navbar */}
        <header className="bg-gray-900 text-white shadow-md p-6">
          <div className="container mx-auto flex justify-between items-center px-8">
            {/* ✅ 確保沒有 Hover 效果 */}
            <Link href="/" className="text-2xl font-bold">
              寶的寶有限公司
            </Link>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li><Link href="/" className="hover:text-blue-400">首頁</Link></li>
                <li><Link href="/products" className="hover:text-blue-400">產品介紹</Link></li>
                <li><Link href="/applications" className="hover:text-blue-400">產品應用</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">聯絡我們</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 🔹 主要內容區域 */}
        <main className="mt-12 container mx-auto px-6">{children}</main>

        {/* ✅ 回到頂部按鈕 */}
        <BackToTop />

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
