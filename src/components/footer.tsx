'use client';

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return (
    <footer className="bg-[#1E3A8A] text-white py-4 px-6 mt-12 text-center">
      <div className="max-w-6xl mx-auto text-sm">
        &copy; {year} 寶的寶有限公司 | BDB International Co, Ltd.
      </div>
    </footer>
  );
}
