// DesktopNav.tsx
'use client';
import Link from "next/link";

type Region = { region: string; items: { name: string; url: string }[] };

export default function DesktopNav({}: { partnerRegions: Region[] }) {
  return (
    // ✅ 640px(=sm) 以上就顯示，iPad 不會消失
    <nav className="hidden sm:flex flex-1 justify-end font-serif font-semibold">
      <ul className="flex items-center text-[13px] sm:text-sm md:text-[15px] lg:text-base text-green-900 divide-x divide-green-700">
        <li className="px-2 sm:px-2.5 md:px-3 lg:px-5 whitespace-nowrap">
          <Link href="/">首頁</Link>
        </li>
        <li className="px-2 sm:px-2.5 md:px-3 lg:px-5 whitespace-nowrap">
          <Link href="/about">關於寶的寶</Link>
        </li>

        <li className="relative px-2 sm:px-2.5 md:px-3 lg:px-5 group whitespace-nowrap">
          <span className="cursor-pointer">產品介紹</span>
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2
              w-52 md:w-56
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            ">
            <Link href="/products/pet" className="block px-4 py-2 text-gray-600">寵物高壓氧艙</Link>
            <Link href="/products/human" className="block px-4 py-2 text-gray-600">人用微壓氧艙</Link>
          </div>
        </li>

        <li className="relative px-2 sm:px-2.5 md:px-3 lg:px-5 group whitespace-nowrap">
          <span className="cursor-pointer">服務據點</span>
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2
              w-60 md:w-64
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            ">
            <div className="py-2">
              <Link href="/locations/pet-hospitals" className="block px-4 py-2 text-gray-600">寵物醫院</Link>
              <Link href="/locations/gyms" className="block px-4 py-2 text-gray-600">健身房</Link>
            </div>
          </div>
        </li>

        <li className="px-2 sm:px-2.5 md:px-3 lg:px-5 whitespace-nowrap">
          <Link href="/customer-service">客戶服務</Link>
        </li>
        <li className="px-2 sm:px-2.5 md:px-3 lg:px-5 whitespace-nowrap">
          <a href="https://line.me/ti/p/@464hptwo" target="_blank" rel="noopener noreferrer">聯絡我們</a>
        </li>
      </ul>
    </nav>
  );
}
