import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "寶的寶有限公司",
  description:
    "寶的寶有限公司專營高壓氧艙與光療技術，提供專業且安全的醫療與健康解決方案。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-white text-gray-900 antialiased">
        {/* 固定在頂端的導覽列 */}
        <Header />

        {/* 頁面主內容：預留導覽列高度（約 140px） */}
        <main className="container mx-auto px-4 sm:px-6 pt-[140px]">
          {children}
        </main>

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}