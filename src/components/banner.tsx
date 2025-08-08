'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BannerProps {
  title?: string;
  description?: string;
  imageSrc: string;
  mobileImageSrc?: string;
  priority?: boolean;
}

export default function Banner({
  title,
  description,
  imageSrc,
  mobileImageSrc,
  priority = false,
}: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // 初始檢查
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const src = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc;

  return (
    <div className="w-screen relative min-h-[220px] sm:min-h-[400px]">
      <Image
        src={src}
        alt={title || 'Banner'}
        width={1920}
        height={500}
        className="w-full h-full object-cover"
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 640px) 100vw, 100vw"
      />

      {(title || description) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <div className="text-center px-4">
            {title && (
              <h1 className="text-xl sm:text-4xl font-bold text-white drop-shadow-md">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-2 text-sm sm:text-lg text-white drop-shadow-sm">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
