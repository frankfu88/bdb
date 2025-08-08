import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  const tel = "03-2871723";

  return (
    <div className="bg-white border-b">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-10">
        {/* 桌機左右排，手機垂直堆疊 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center h-auto sm:h-[64px] py-3 sm:py-0">
          
          {/* ✅ 左側：社群 icon，手機 & 桌機都顯示 */}
          <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61574549074092"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/facebook.png" alt="Facebook" width={22} height={22} />
            </a>
            <a
              href="https://www.instagram.com/baodebaotw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/instagram.png" alt="Instagram" width={22} height={22} />
            </a>
            <a
              href="https://line.me/ti/p/@464hptwo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/images/icons/line.png" alt="LINE" width={22} height={22} />
            </a>
          </div>

          {/* 🚫 右側：電話與按鈕 - 僅在 sm 以上顯示 */}
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            <Link
              href={`tel:${tel.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center rounded px-4 py-2 text-sm sm:text-base
                         border border-green-900 text-green-900
                         hover:bg-green-900 hover:text-white transition-colors"
            >
              立即聯繫
            </Link>

            <a
              href={`tel:${tel.replace(/-/g, "")}`}
              className="text-green-900 tracking-wide text-base sm:text-xl md:text-2xl font-semibold"
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
