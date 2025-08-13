'use client';
import Image from 'next/image';

export default function Certificates({
  certs,
}: {
  certs: { src: string; alt: string }[];
}) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif font-semibold text-green-900 text-4xl sm:text-4xl">業界肯定</h2>
        <p className="mt-4 text-gray-500">專業服務結合多年經驗，為每一位客戶帶來卓越體驗</p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {certs.map(({ src, alt }, idx) => (
          <div key={idx} className="relative w-full h-0 pb-[125%] shadow-lg overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={idx < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
