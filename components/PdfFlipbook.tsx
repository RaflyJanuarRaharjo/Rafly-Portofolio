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
    <div className="flex flex-col items-center gap-[24px]">
      {/* @ts-expect-error — react-pageflip belum punya tipe React 19 */}
      <HTMLFlipBook
        ref={bookRef}
        width={W}
        height={H}
        size="stretch"
        minWidth={280}
        maxWidth={620}
        minHeight={380}
        maxHeight={880}
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

      <div className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
          className="h-[42px] w-[120px] border border-neutral-200 bg-neutral-100 text-[20px] font-medium text-neutral-600"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip()?.flipNext()}
          className="h-[42px] w-[120px] border border-neutral-200 bg-neutral-100 text-[20px] font-medium text-neutral-600"
        >
          Next
        </button>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[42px] items-center justify-center border border-neutral-200 bg-neutral-600 px-[24px] text-[20px] font-medium text-neutral-100"
        >
          Unduh PDF
        </a>
      </div>
    </div>
  );
}
