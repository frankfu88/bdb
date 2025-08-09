'use client';

import Link from "next/link";

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
            onClick={() => toggleRegion("產品介紹")}
            className="w-full text-left hover:text-green-700"
          >
            產品介紹
          </button>

          {mobileRegionOpen["產品介紹"] && (
            <div className="pl-4 mt-1 space-y-1">
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
                人用高壓氧艙
              </Link>
            </div>
          )}
        </li>

        {/* 服務據點 */}
        <li className="w-full">
          <button
            onClick={() => toggleRegion("服務據點")}
            className="w-full text-left hover:text-green-700"
          >
            服務據點
          </button>

          {mobileRegionOpen["服務據點"] && (
            <div className="mt-2 w-full">
              {partnerRegions.map((region) => (
                <div key={region.region} className="mb-2">
                  <button
                    onClick={() => toggleRegion(region.region)}
                    className="w-full text-left bg-green-50 px-3 py-2 text-gray-600"
                  >
                    {region.region}
                  </button>

                  {mobileRegionOpen[region.region] && (
                    <div className="pl-4 mt-1 space-y-1">
                      {region.items.map((p) => (
                        <a
                          key={p.name}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenu}
                          className="block text-green-900 hover:text-green-700 break-all"
                        >
                          {p.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
