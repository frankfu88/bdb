'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BannerProps {
  title?: string;
  description?: string;
  imageSrc: string;
  mobileImageSrc?: string;
}

export default function Banner({
  title,
  description,
  imageSrc,
  mobileImageSrc,
}: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const src = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc;

  return (
    <div className="w-screen">
      {/* 
        layout="responsive" + width/height 讓圖片依照比例縮放，
        w-full h-auto 保證寬度填滿、高度自動，object-contain 不會裁切
      */}
      <Image
        src={src}
        alt={title || 'Banner'}
        width={1920}         // 你的原圖寬度
        height={500}         // 你的原圖高度
        className="w-full h-auto object-contain"
        priority
        // layout="responsive" // Next 12 用法；13＋可以省略
      />

      {description && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <div className="text-center px-4">
            {title && <h1 className="text-2xl sm:text-4xl font-bold text-white">{title}</h1>}
            <p className="mt-2 text-base sm:text-lg text-white">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
