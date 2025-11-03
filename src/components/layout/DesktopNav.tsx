// /src/components/DesktopNav.tsx
'use client';
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

type Region = { region: string; items: { name: string; url: string }[] };

// 註：目前未使用 partnerRegions，但先保留型別介面
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

        {/* 產品介紹（改為：氧艙系列＋醫美產品） */}
        <li className="relative px-2 sm:px-2.5 md:px-3 lg:px-5 group whitespace-nowrap">
          <span className="cursor-pointer inline-flex items-center gap-1">
            產品介紹
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" aria-hidden />
          </span>

          {/* 提高可滑入區域，避免移出後閃爍 */}
          <span className="absolute left-0 right-0 top-full h-2 block" />

          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2
              w-[280px] md:w-[320px]
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            "
            role="menu"
            aria-label="產品介紹選單"
          >
            <div className="py-1">
              <div className="px-4 pt-3 pb-1 font-bold text-green-800/80 tracking-wider">氧艙系列</div>
              <Link href="/products/oxy-series/human" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                人用微壓氧艙
              </Link>
              <Link href="/products/oxy-series/pet" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                寵物高壓氧艙
              </Link>

              <div className="px-4 pt-3 pb-1 font-bold text-green-800/80 tracking-wider">芯片系列</div>
              <Link href="/products/chip-series/pet" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                寵物芯片
              </Link>
              <Link href="/products/chip-series/auto" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                汽車芯片
              </Link>
              <Link href="/products/chip-series/semiconductor" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                半導體芯片
              </Link>

              {/* <div className="px-4 pt-4 pb-1 text-s font-bold text-green-800/80 tracking-wider border-t border-gray-100 mt-1">保養系列</div>
              <Link href="/products/aesthetics/exosome-microcrystal-mask" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                外泌體微晶貼膜
              </Link>
              <Link href="/products/aesthetics/hair-serum" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                靈芝多肽生髮液
              </Link>
              <Link href="/products/aesthetics/qi-blood-essence" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" role="menuitem">
                氣血提升精華
              </Link> */}
            </div>
          </div>
        </li>

        {/* 服務據點（維持原設計） */}
        <li className="relative px-2 sm:px-2.5 md:px-3 lg:px-5 group whitespace-nowrap">
          <span className="cursor-pointer inline-flex items-center gap-1">
            服務據點
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" aria-hidden />
          </span>
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2
              w-60 md:w-64
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            "
            role="menu"
            aria-label="服務據點選單"
          >
            <div className="py-2">
              <Link href="/locations/pet-hospitals" className="block px-4 py-2 text-gray-600 hover:bg-gray-50" role="menuitem">
                寵物醫院
              </Link>
              <Link href="/locations/gyms" className="block px-4 py-2 text-gray-600 hover:bg-gray-50" role="menuitem">
                健身房
              </Link>
            </div>
          </div>
        </li>

        {/* 相關資訊（維持原設計） */}
        <li className="relative px-2 sm:px-2.5 md:px-3 lg:px-5 group whitespace-nowrap">
          <span className="cursor-pointer inline-flex items-center gap-1">
            相關資訊
            <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" aria-hidden />
          </span>
          <span className="absolute left-0 right-0 top-full h-2 block" />
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2
              w-56 md:w-60
              bg-white shadow-lg border border-gray-100 z-10
              opacity-0 invisible transition-opacity duration-200
              group-hover:opacity-100 group-hover:visible
            "
            role="menu"
            aria-label="相關資訊選單"
          >
            <Link href="/resources/papers" className="block px-4 py-2 text-gray-600 hover:bg-gray-50" role="menuitem">
              醫學文獻
            </Link>
            <Link href="/resources/news" className="block px-4 py-2 text-gray-600 hover:bg-gray-50" role="menuitem">
              新聞報導
            </Link>
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
