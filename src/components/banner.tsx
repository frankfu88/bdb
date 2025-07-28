'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps {
  title: string;
  description?: string;
  imageSrc: string; // desktop 預設圖片
  mobileImageSrc?: string; // mobile 圖片（可選）
}

export default function Banner({ title, imageSrc, mobileImageSrc }: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm: 640px
    };

    handleResize(); // 初次渲染時先偵測一次
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const srcToUse = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc;

  return (
    <div className="w-full">
      <Image
        src={srcToUse}
        alt={title}
        width={isMobile ? 360 : 1200}
        height={isMobile ? 120 : 400}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
