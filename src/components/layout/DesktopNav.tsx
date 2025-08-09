'use client';

import Link from "next/link";

type Region = { region: string; items: { name: string; url: string }[] };

export default function DesktopNav({ }: { partnerRegions: Region[] }) {
  return (
    <nav className="hidden sm:flex flex-1 justify-end font-serif font-semibold">
      <ul className="flex items-center text-base text-green-900 divide-x divide-green-700">

        {/* 首頁 */}
        <li className="px-5">
          <Link href="/">首頁</Link>
        </li>

        {/* 關於我們 */}
        <li className="px-5">
          <Link href="/about">關於寶的寶</Link>
        </li>

        {/* 產品介紹 */}
        <li className="relative px-5 group">
          <span className="cursor-pointer">產品介紹</span>
          {/* 橋接區，避免滑鼠經過間隙時關閉 */}
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            "
          >
            <Link href="/products/pet" className="block px-4 py-2 text-gray-600">
              寵物高壓氧艙
            </Link>
            <Link href="/products/human" className="block px-4 py-2 text-gray-600">
              人用微壓氧艙
            </Link>
          </div>
        </li>

        {/* 服務據點 */}
        <li className="relative px-5 group">
          <span className="cursor-pointer">服務據點</span>
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            "
          >
            {/* 分類捷徑 */}
            <div className="py-2">
              <Link href="/locations/pet-hospitals" className="block px-4 py-2 text-gray-600">寵物醫院</Link>
              <Link href="/locations/gyms" className="block px-4 py-2 text-gray-600">健身房</Link>
            </div>
          </div>
        </li>


        {/* 客戶服務 */}
        <li className="px-5">
          <Link href="/customer-service">客戶服務</Link>
        </li>

        {/* 聯絡我們 */}
        <li className="px-5">
          <a
            href="https://line.me/ti/p/@464hptwo"
            target="_blank"
            rel="noopener noreferrer"
          >
            聯絡我們
          </a>
        </li>
      </ul>
    </nav>
  );
}
