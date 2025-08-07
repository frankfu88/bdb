'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const [year] = useState<number>(new Date().getFullYear());

  return (
    <footer className="bg-green-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 三欄資訊 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-md leading-relaxed">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">寶的寶有限公司</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mt-1 mr-2 shrink-0" />
                <div className="flex w-full">
                  <span className="w-24 shrink-0 text-left">服務電話</span>
                  <span className="text-left">03-2871723</span>
                </div>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-5 h-5 mt-1 mr-2 shrink-0" />
                <div className="flex w-full">
                  <span className="w-24 shrink-0 text-left">服務時間</span>
                  <span className="text-left">週一至週五 09:00~17:00（例假日休）</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mt-1 mr-2 shrink-0" />
                <div className="flex w-full">
                  <span className="w-24 shrink-0 text-left">所在地點</span>
                  <span className="text-left">桃園市中壢區青商路59號2樓</span>
                </div>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 mt-1 mr-2 shrink-0" />
                <div className="flex w-full">
                  <span className="w-24 shrink-0 text-left">電子信箱</span>
                  <span className="text-left">frank.fu@bdb.com.tw</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 快速導覽 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">快速導覽</h3>
            <ul className="space-y-3 text-left">
              <li>
                <Link href="/about" className="hover:text-green-200">－關於寶的寶</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-green-200">－最新消息</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-200">－產品介紹</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-200">－客戶服務</Link>
              </li>
            </ul>
          </div>

          {/* 產品連結 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">產品連結</h3>
            <ul className="space-y-3 text-left">
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
            className="
              inline-flex items-center justify-center
              px-10 py-5
              border border-white text-lg font-medium tracking-wide
              text-white
              hover:bg-white hover:text-[#003E1F]
              transition-colors duration-300
            "
          >
            <span>立即預約洽詢</span>
            <span className="ml-2">→</span>
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
