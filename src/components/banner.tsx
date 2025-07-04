'use client';

import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function Banner({ title, description, imageSrc }: BannerProps) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* ✅ 統一圖片尺寸 */}
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      
      {/* ✅ 文字區塊保持一致 */}
      <div className="absolute bottom-6 right-6 sm:bottom-20 sm:right-40 flex flex-col items-start px-4 w-auto max-w-[70%]">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-left">{title}</h2>
        <p className="text-base text-gray-700 mt-2 text-right">{description}</p>
      </div>
    </div>
  );
}
