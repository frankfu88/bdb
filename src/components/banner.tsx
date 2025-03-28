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
        objectFit="contain"
        className="absolute inset-0"
        priority
      />
      
      {/* ✅ 文字區塊保持一致 */}
      <div className="absolute inset-y-0 right-8 sm:right-28 flex flex-col justify-center px-4 sm:px-0 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%]">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-base sm:text-lg text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}
