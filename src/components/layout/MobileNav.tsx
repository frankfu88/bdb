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
    <nav className="sm:hidden bg-white border-t">
      <ul className="flex flex-col items-start p-4 space-y-4 text-base text-gray-700">
        <li>
          <Link href="/" onClick={closeMenu} className="hover:text-blue-600">
            首頁
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu} className="hover:text-blue-600">
            關於我們
          </Link>
        </li>

        <li>
          <Link href="/products" onClick={closeMenu} className="hover:text-blue-600">
            產品介紹
          </Link>
        </li>

        <li className="w-full">
          <button onClick={() => toggleRegion("合作夥伴")} className="hover:text-blue-600 w-full text-left">
            合作夥伴
          </button>

          {mobileRegionOpen["合作夥伴"] && (
            <div className="mt-2 w-full">
              {partnerRegions.map((region) => (
                <div key={region.region} className="mb-2">
                  <button
                    onClick={() => toggleRegion(region.region)}
                    className="w-full text-left text-gray-800 bg-gray-50 px-3 py-2"
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
                          className="block text-gray-700 hover:text-blue-600"
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

        <li>
          <a
            href="https://line.me/ti/p/@464hptwo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="hover:text-blue-600"
          >
            聯絡我們
          </a>
        </li>
      </ul>
    </nav>
  );
}
