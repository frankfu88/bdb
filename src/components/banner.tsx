'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps {
  title: string;
  description?: string;
  imageSrc: string;
  mobileImageSrc?: string;
}

export default function Banner({ title, description, imageSrc, mobileImageSrc }: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const srcToUse = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc;

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[120px] sm:h-[400px]">
      <Image
        src={srcToUse}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      {description && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/40">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
            <p className="mt-2 text-base sm:text-lg">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
