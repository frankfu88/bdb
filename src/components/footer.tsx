'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

type ChipLink = { href: string; label: string };

const PRODUCT_LINKS: ChipLink[] = [
  { href: '/products/pet', label: '寵物高壓氧艙' },
  { href: '/products/human', label: '人用微壓氧艙' },
];

const LOCATION_LINKS: ChipLink[] = [
  { href: '/locations/pet-hospitals', label: '寵物醫院' },
  { href: '/locations/gyms', label: '健身房' },
];

export default function Footer() {
  const [year] = useState<number>(new Date().getFullYear());
  const pathname = usePathname();

  // 兩個獨立開關：各自展開在對應的清單項目之下
  const [openProducts, setOpenProducts] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);

  // 換頁自動收合
  useEffect(() => {
    setOpenProducts(false);
    setOpenLocations(false);
  }, [pathname]);

  const companyInfo = [
    { Icon: PhoneIcon, label: '服務電話', value: '03-2871723' },
    { Icon: ClockIcon, label: '服務時間', value: '週一至週五 09:00~17:00（例假日休）' },
    { Icon: MapPinIcon, label: '所在地點', value: '桃園市中壢區青商路59號2樓' },
    { Icon: EnvelopeIcon, label: '電子信箱', value: 'frank.fu@bdb.com.tw' },
  ];

  return (
    <footer className="bg-green-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 三欄資訊區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 justify-items-center sm:justify-items-start">
          {/* 公司資訊 */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-6 text-center sm:text-left">寶的寶有限公司</h3>
            <ul className="space-y-6">
              {companyInfo.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start justify-center sm:justify-start gap-1 sm:gap-3">
                  <Icon className="w-5 h-5 shrink-0" />
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="font-medium">{label}</span>
                    <span className="break-words">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 快速導覽（點擊項目 → 在該項目下方顯示 chips） */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">快速導覽</h3>
            <ul className="space-y-1 text-center sm:text-left">
              <li>
                <Link href="/" className="hover:text-green-200">－首頁</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-200">－關於寶的寶</Link>
              </li>

              {/* 產品介紹 */}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setOpenProducts((v) => !v);
                    // 若打開產品，關掉據點；反之亦然
                    if (!openProducts) setOpenLocations(false);
                  }}
                  className="w-full text-left hover:text-green-200 text-center sm:text-left"
                  aria-expanded={openProducts}
                >
                  －產品介紹
                </button>

                {/* chips：就在「產品介紹」這一行的下方 */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openProducts ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {PRODUCT_LINKS.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpenProducts(false)}
                        className="inline-flex items-center rounded-full border border-white/30 px-2.5 py-1 text-xs text-white hover:bg-white hover:text-[#003E1F] transition"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* 服務據點 */}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setOpenLocations((v) => !v);
                    if (!openLocations) setOpenProducts(false);
                  }}
                  className="w-full text-left hover:text-green-200 text-center sm:text-left"
                  aria-expanded={openLocations}
                >
                  －服務據點
                </button>

                {/* chips：就在「服務據點」這一行的下方 */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openLocations ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {LOCATION_LINKS.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpenLocations(false)}
                        className="inline-flex items-center rounded-full border border-white/30 px-2.5 py-1 text-xs text-white hover:bg-white hover:text-[#003E1F] transition"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link href="/customer-service" className="hover:text-green-200">－客戶服務</Link>
              </li>
            </ul>
          </div>

          {/* 產品連結 */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">產品連結</h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <Link href="/products" className="hover:text-green-200">－BDB 高壓氧艙</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="https://line.me/ti/p/@464hptwo"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium tracking-wide text-white hover:bg-white hover:text-[#003E1F] transition-colors duration-300 max-w-xs w-full mx-auto sm:w-auto"
          >
            立即預約洽詢 →
          </Link>
        </div>

        {/* 分隔線 */}
        <div className="mt-16 border-t border-white/20 mx-auto max-w-6xl" />

        {/* 版權聲明 + 免責聲明連結 */}
        <div className="pt-4 text-center text-sm space-x-1">
          <span>&copy; {year} 寶的寶有限公司 | BDB International Co, Ltd.</span>
          <span className="opacity-50">｜</span>
          <Link
            href="/disclaimer"
            className="underline-offset-4 hover:text-green-200"
          >
            免責聲明
          </Link>
          <span className="opacity-50">｜</span>
          <Link
            href="/statement"
            className="underline-offset-4 hover:text-green-200"
          >
            特別聲明
          </Link>
        </div>

      </div>
    </footer>
  );
}
