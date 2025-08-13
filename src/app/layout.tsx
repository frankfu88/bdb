import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer';
import BackToTop from '@/components/BackToTop';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';

// 載入並綁定到 CSS 變數，供 Tailwind 的 fontFamily 使用
const notoSans = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],          // Next 要求帶 subsets；CJK 仍可用
  variable: '--font-sans',
  display: 'swap',
});
const notoSerif = Noto_Serif_TC({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '寶的寶有限公司',
  description:
    '寶的寶有限公司專營高壓氧艙與光療技術，提供專業且安全的醫療與健康解決方案。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} bg-white text-gray-900 antialiased font-sans`}
      >
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
