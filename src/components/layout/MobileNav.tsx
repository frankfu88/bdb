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
            關於我們
          </Link>
        </li>

        <li>
          <Link href="/products" onClick={closeMenu} className="hover:text-green-700">
            產品介紹
          </Link>
        </li>

        <li className="w-full">
          <button
            onClick={() => toggleRegion("合作夥伴")}
            className="w-full text-left hover:text-green-700"
          >
            合作夥伴
          </button>

          {mobileRegionOpen["合作夥伴"] && (
            <div className="mt-2 w-full">
              {partnerRegions.map((region) => (
                <div key={region.region} className="mb-2">
                  <button
                    onClick={() => toggleRegion(region.region)}
                    className="w-full text-left bg-green-50 px-3 py-2 text-green-900"
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
                          className="block text-green-900 hover:text-green-700"
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
