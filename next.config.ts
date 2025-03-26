// 預設伺服器端渲染
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

//  靜態輸出模式 for webFTP部署
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true, // 讓靜態檔案支援 `/` 形式的 URL
//   images: {
//     unoptimized: true, // 靜態部署時停用 Next.js 圖片優化功能
//   },
// };

// export default nextConfig;
