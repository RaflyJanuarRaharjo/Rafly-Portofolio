"use client";

import { useEffect, useRef } from "react";
import { cta } from "@/lib/data";

/** Banner ajakan di bagian bawah halaman. Memakai video yang sama dengan hero. */
export default function CtaBanner() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative h-[260px] w-full overflow-hidden bg-neutral-800 md:h-[320px] lg:h-[360px]">
      <video
        ref={ref}
        src="/assets/cover.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/5"
      />

      <div className="absolute inset-0 flex flex-col justify-center gap-[12px] px-[16px] md:gap-[16px] md:px-[48px] lg:gap-[20px] lg:px-[80px]">
        <h2 className="max-w-[620px] text-[22px] font-bold leading-[30px] text-white md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px]">
          {cta.headline}
        </h2>
        <p className="max-w-[520px] text-[14px] leading-[22px] text-white/85 md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[29px]">
          {cta.tagline}
        </p>
        <a
          href={cta.href}
          className="mt-[4px] flex w-fit items-center justify-center rounded-full bg-white px-[20px] py-[10px] text-[14px] font-medium text-neutral-800 transition-colors hover:bg-neutral-200 md:px-[26px] md:py-[12px] md:text-[16px] lg:px-[30px] lg:py-[14px] lg:text-[18px]"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
