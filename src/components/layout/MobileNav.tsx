// /src/components/MobileNav.tsx
'use client';

import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

type Region = { region: string; items: { name: string; url: string }[] };

export default function MobileNav({
  partnerRegions,
  toggleRegion,
  mobileRegionOpen,
  closeMenu,
}: {
  partnerRegions: Region[];
  toggleRegion: (region: string) => void;
  mobileRegionOpen: Record<string, boolean>;
  closeMenu: () => void;
}) {
  const isProductsOpen = !!mobileRegionOpen['產品介紹'];
  const isLocationsOpen = !!mobileRegionOpen['服務據點'];
  const isResourcesOpen = !!mobileRegionOpen['相關資訊'];

  const caretCls = (open: boolean) =>
    `shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`;

  return (
    <nav className="sm:hidden bg-white border-t font-serif font-semibold">
      <ul className="flex flex-col items-start p-4 space-y-4 text-base text-green-900">
        <li>
          <Link href="/" onClick={closeMenu} className="hover:text-green-700">
            首頁
          </Link>
        </li>

        <li>
          <Link href="/about" onClick={closeMenu} className="hover:text-green-700">
            關於寶的寶
          </Link>
        </li>

        {/* 產品介紹 */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion('產品介紹')}
            className="w-full flex items-center justify-between hover:text-green-700"
            aria-expanded={isProductsOpen}
            aria-controls="mobile-products-panel"
          >
            <span>產品介紹</span>
            <FaChevronDown className={caretCls(isProductsOpen)} aria-hidden />
          </button>

          {isProductsOpen && (
            <div id="mobile-products-panel" className="pl-4 mt-2 space-y-2">
              <Link
                href="/products/pet"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                寵物高壓氧艙
              </Link>
              <Link
                href="/products/human"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                人用微壓氧艙
              </Link>
            </div>
          )}
        </li>

        {/* 服務據點 */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion('服務據點')}
            className="w-full flex items-center justify-between hover:text-green-700"
            aria-expanded={isLocationsOpen}
            aria-controls="mobile-locations-panel"
          >
            <span>服務據點</span>
            <FaChevronDown className={caretCls(isLocationsOpen)} aria-hidden />
          </button>

          {isLocationsOpen && (
            <div id="mobile-locations-panel" className="pl-4 mt-2 space-y-2">
              {/* 分類捷徑 */}
              <Link
                href="/locations/pet-hospitals"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                寵物醫院
              </Link>
              <Link
                href="/locations/gyms"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                健身房
              </Link>

              {/* 分隔線（需要就留） */}
              {partnerRegions.length > 0 && (
                <div className="my-2">
                  <hr className="border-green-100" />
                </div>
              )}
              {/* 若未來要列出區域性夥伴，可在此渲染 partnerRegions */}
            </div>
          )}
        </li>

        {/* 相關資訊 */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion('相關資訊')}
            className="w-full flex items-center justify-between hover:text-green-700"
            aria-expanded={isResourcesOpen}
            aria-controls="mobile-resources-panel"
          >
            <span>相關資訊</span>
            <FaChevronDown className={caretCls(isResourcesOpen)} aria-hidden />
          </button>

          {isResourcesOpen && (
            <div id="mobile-resources-panel" className="pl-4 mt-2 space-y-2">
              <Link
                href="/resources/papers"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                醫學文獻
              </Link>
              <Link
                href="/resources/news"
                onClick={closeMenu}
                className="block text-green-900 hover:text-green-700"
              >
                新聞報導
              </Link>
            </div>
          )}
        </li>

        {/* 客戶服務 */}
        <li>
          <Link
            href="/customer-service"
            onClick={closeMenu}
            className="hover:text-green-700"
          >
            客戶服務
          </Link>
        </li>

        {/* 聯絡我們（LINE） */}
        <li>
          <a
            href="https://line.me/ti/p/@464hptwo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="hover:text-green-700"
          >
            聯絡我們
          </a>
        </li>
      </ul>
    </nav>
  );
}
