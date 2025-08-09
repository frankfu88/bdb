'use client';

import { useState } from "react";
import Link from "next/link";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const [year] = useState<number>(new Date().getFullYear());

  const companyInfo = [
    { Icon: PhoneIcon, label: "服務電話", value: "03-2871723" },
    { Icon: ClockIcon, label: "服務時間", value: "週一至週五 09:00~17:00（例假日休）" },
    { Icon: MapPinIcon, label: "所在地點", value: "桃園市中壢區青商路59號2樓" },
    { Icon: EnvelopeIcon, label: "電子信箱", value: "frank.fu@bdb.com.tw" },
  ];

  return (
    <footer className="bg-green-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 三欄資訊區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 justify-items-center sm:justify-items-start">
          
          {/* 公司資訊 */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-6 text-center sm:text-left">
              寶的寶有限公司
            </h3>
            <ul className="space-y-6">
              {companyInfo.map(({ Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start justify-center sm:justify-start gap-1 sm:gap-3"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="font-medium">{label}</span>
                    <span className="break-words">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 快速導覽 */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">
              快速導覽
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
               <li>
                <Link href="/" className="hover:text-green-200">
                  －首頁
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-200">
                  －關於寶的寶
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-green-200">
                  －最新消息
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-200">
                  －產品介紹
                </Link>
              </li>
              <li>
                <Link href="/customer-service" className="hover:text-green-200">
                  －客戶服務
                </Link>
              </li>
            </ul>
          </div>

          {/* 產品連結 */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">
              產品連結
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <Link href="/products" className="hover:text-green-200">
                  －BDB 高壓氧艙
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="https://line.me/ti/p/@464hptwo"
            target="_blank"
            className="
              inline-flex items-center justify-center
              px-6 py-3
              border border-white text-base font-medium tracking-wide
              text-white
              hover:bg-white hover:text-[#003E1F]
              transition-colors duration-300
              max-w-xs w-full mx-auto sm:w-auto
            "
          >
            立即預約洽詢 →
          </Link>
        </div>

        {/* 分隔線 */}
        <div className="mt-16 border-t border-white/20 mx-auto max-w-6xl"></div>

        {/* 版權聲明 */}
        <div className="pt-4 text-center text-sm">
          &copy; {year} 寶的寶有限公司 | BDB International Co, Ltd.
        </div>
      </div>
    </footer>
  );
}
