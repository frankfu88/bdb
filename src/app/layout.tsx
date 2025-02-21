'use client';

import { ReactNode } from "react";
import "@/styles/globals.css";
import Footer from "@/components/footer"; // ✅ 引入 Footer 組件

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <header className="bg-gray-900 text-white shadow-md p-6">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">寶的寶有限公司</h1>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li><a href="/" className="hover:text-blue-400">首頁</a></li>
                <li><a href="/products" className="hover:text-blue-400">產品介紹</a></li>
                <li><a href="/applications" className="hover:text-blue-400">產品應用</a></li>
                <li><a href="/contact" className="hover:text-blue-400">聯絡我們</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="mt-12 container mx-auto px-4">{children}</main>

        {/* ✅ Footer 現在是獨立的組件 */}
        <Footer />
      </body>
    </html>
  );
}
