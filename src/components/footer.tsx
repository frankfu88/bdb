'use client';

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-12">
      <p className="text-lg font-semibold">
        &copy; {year ? year : "2025"} 寶的寶有限公司. 版權所有.
      </p>
      <p className="mt-2">地址：桃園市中壢區青商路 59 號 2 樓</p>
      <p>電話：03-2871723</p>
    </footer>
  );
}