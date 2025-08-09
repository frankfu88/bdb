'use client';

import Link from 'next/link';

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
  const isLocationsOpen = !!mobileRegionOpen['服務據點'];

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

        {/* 產品介紹（展開兩個分類） */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion('產品介紹')}
            className="w-full text-left hover:text-green-700"
            aria-expanded={!!mobileRegionOpen['產品介紹']}
            aria-controls="mobile-products-panel"
          >
            產品介紹
          </button>

          {mobileRegionOpen['產品介紹'] && (
            <div id="mobile-products-panel" className="pl-4 mt-1 space-y-1">
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

        {/* 服務據點（先顯示兩個分類捷徑，再可選的合作夥伴清單） */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion('服務據點')}
            className="w-full text-left hover:text-green-700"
            aria-expanded={isLocationsOpen}
            aria-controls="mobile-locations-panel"
          >
            服務據點
          </button>

          {isLocationsOpen && (
            <div id="mobile-locations-panel" className="mt-2 w-full">
              {/* 分類捷徑（比照 DesktopNav） */}
              <div className="pl-4 space-y-1 mb-2">
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
              </div>

              {/* 分隔線（需要就留，不需要可移除） */}
              {partnerRegions.length > 0 && (
                <div className="pl-4 my-2">
                  <hr className="border-green-100" />
                </div>
              )}
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
