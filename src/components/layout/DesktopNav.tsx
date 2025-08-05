'use client';

import Link from "next/link";
import { useState } from "react";

type Region = { region: string; items: { name: string; url: string }[] };

export default function DesktopNav({ partnerRegions }: { partnerRegions: Region[] }) {
  const [openProducts, setOpenProducts] = useState(false);
  const [openPartners, setOpenPartners] = useState(false);

  return (
    <nav className="hidden sm:flex flex-1 justify-end font-serif font-semibold">
      <ul className="flex items-center text-base text-green-900 divide-x divide-green-700">
        {/* 關於我們 */}
        <li className="px-5">
          <Link href="/about">關於寶的寶</Link>
        </li>

        {/* 產品介紹 */}
        <li
          className="relative px-5"
          onMouseEnter={() => setOpenProducts(true)}
          onMouseLeave={() => setOpenProducts(false)}
        >
          <Link href="/products">產品介紹</Link>
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-lg border border-green-100 rounded-lg z-10
              transition-opacity duration-200
              ${openProducts ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <Link
              href="/products"
              className="block px-4 py-2 text-gray-600 hover:bg-green-50"
            >
              特點介紹
            </Link>
            <Link
              href="/applications"
              className="block px-4 py-2 text-gray-600 hover:bg-green-50"
            >
              應用範圍
            </Link>
          </div>
        </li>

        {/* 合作夥伴 */}
        <li
          className="relative px-5"
          onMouseEnter={() => setOpenPartners(true)}
          onMouseLeave={() => setOpenPartners(false)}
        >
          <span className="cursor-pointer">合作夥伴</span>
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-white shadow-lg border border-green-100 rounded-lg z-10
              transition-opacity duration-200
              ${openPartners ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            {partnerRegions.map((region) => (
              <div key={region.region} className="border-b last:border-b-0 border-green-100">
                <div className="px-4 py-2 text-gray-900 bg-green-50">{region.region}</div>
                {region.items.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-2 text-gray-600 hover:bg-green-50"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
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
