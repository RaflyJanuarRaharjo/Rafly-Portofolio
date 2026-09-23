"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

type Manifest = { width: number; height: number; pages: string[] };

type Props = {
  /** Folder hasil `npm run pdf` — contoh: "/case-study/edunex" */
  dir: string;
  /** PDF asli, buat tombol unduh. */
  pdf: string;
};

export default function PdfFlipbook({ dir, pdf }: Props) {
  const [data, setData] = useState<Manifest | null>(null);
  const [error, setError] = useState(false);
  const bookRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${dir}/pages.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((m: Manifest) => !cancelled && setData(m))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [dir]);

  if (error) {
    return (
      <div className="py-[64px] text-center text-[20px] text-neutral-600">
        Case study belum tersedia.{" "}
        <a href={pdf} className="underline" target="_blank" rel="noopener noreferrer">
          Buka PDF
        </a>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-[64px] text-center text-[20px] text-neutral-500">Memuat…</div>
    );
  }

  const W = 500;
  const H = Math.round((W * data.height) / data.width);

  return (
    <div className="flex w-full flex-col items-center gap-[24px] px-[20px] md:px-[12px] lg:px-0">
      {/* @ts-expect-error — react-pageflip belum punya tipe React 19 */}
      <HTMLFlipBook
        ref={bookRef}
        width={W}
        height={H}
        size="stretch"
        /* Ambang satu-halaman = minWidth x 2. 450 -> di bawah 900px
           (tablet & HP) tampil satu halaman penuh, bukan spread kecil. */
        minWidth={450}
        maxWidth={620}
        minHeight={400}
        maxHeight={1400}
        maxShadowOpacity={0.4}
        showCover
        mobileScrollSupport
        className="shadow-lg"
      >
        {data.pages.map((file, i) => (
          <div key={file} className="bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${dir}/${file}`}
              alt={`Halaman ${i + 1}`}
              /* Dua halaman pertama dimuat duluan, sisanya saat dibuka. */
              loading={i < 2 ? "eager" : "lazy"}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Tombol dibagi rata selebar flipbook supaya tidak mepet di HP. */}
      <div className="flex w-full max-w-[620px] items-stretch justify-center gap-[8px] px-[4px] lg:gap-[16px]">
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
          className="h-[40px] flex-1 basis-0 whitespace-nowrap border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 lg:h-[42px] lg:text-[20px]"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip()?.flipNext()}
          className="h-[40px] flex-1 basis-0 whitespace-nowrap border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 lg:h-[42px] lg:text-[20px]"
        >
          Next
        </button>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[40px] flex-1 basis-0 items-center justify-center whitespace-nowrap border border-neutral-200 bg-neutral-600 text-[15px] font-medium text-neutral-100 transition-colors hover:bg-neutral-800 lg:h-[42px] lg:text-[20px]"
        >
          Unduh PDF
        </a>
      </div>
    </div>
  );
}
