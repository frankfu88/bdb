'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1E3A8A] text-white py-4 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* 左側 - 連結 */}
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">
            隱私權政策
          </Link>
          <span>|</span>
          <Link href="/" className="hover:underline">
            免責聲明
          </Link>
          <span>|</span>
          <Link href="/" className="hover:underline">
            網站導覽
          </Link>
        </div>

        {/* 右側 - 版權資訊 */}
        <div className="mt-2 md:mt-0">
          &copy; {year ? year : "2025"} 寶的寶有限公司 | BDB International Co, Ltd.
        </div>

      </div>
    </footer>
  );
}
