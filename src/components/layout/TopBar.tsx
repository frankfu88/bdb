import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  const tel = "03-2871723";

  return (
    <div className="bg-white border-b">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10">
        {/* 左右分佈：左邊社群、右邊按鈕＋電話 */}
        <div className="h-[56px] md:h-[64px] flex items-center justify-between">
          {/* 左側：社群 icon（簡約、間距適中） */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61574549074092"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/facebook.png" alt="Facebook" width={25} height={25} />
            </a>
            <a
              href="https://www.instagram.com/baodebaotw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/instagram.png" alt="Instagram" width={25} height={25} />
            </a>
            <a
              href="https://line.me/ti/p/@464hptwo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/line.png" alt="LINE" width={25} height={25} />
            </a>
          </div>

          {/* 右側：立即聯繫 + 電話 */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href={`tel:${tel.replace(/-/g, "")}`}
              className="inline-flex items-center rounded px-3 py-1.5 md:px-4 md:py-2
                         border border-green-900 text-green-900
                         hover:bg-green-900 hover:text-white transition-colors"
            >
              立即聯繫
            </Link>

            <a
              href={`tel:${tel.replace(/-/g, "")}`}
              className="text-green-900 tracking-wider text-lg sm:text-xl md:text-2xl font-semibold"
              aria-label={`撥打電話 ${tel}`}
            >
              {tel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
