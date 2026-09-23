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

/** Seberapa lebar buku dibanding kontainer. Sisanya jadi jarak kiri-kanan. */
const FILL = 0.86;
/** Di bawah lebar ini tampil satu halaman, di atasnya dua halaman. */
const SPREAD_AT = 900;
/** Batas atas lebar satu halaman, biar tidak kebesaran di layar lebar. */
const MAX_PAGE = 560;

export default function PdfFlipbook({ dir, pdf }: Props) {
  const [data, setData] = useState<Manifest | null>(null);
  const [error, setError] = useState(false);
  const [box, setBox] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
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

  /* Ukur sendiri lebar kontainer supaya ukuran buku bisa dikendalikan. */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setBox(entry.contentRect.width));
    ro.observe(el);
    setBox(el.clientWidth);
    return () => ro.disconnect();
  }, [data]);

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

  const ratio = data ? data.height / data.width : 1.414;
  const portrait = box < SPREAD_AT;
  const usable = box * FILL;
  const pageW = Math.floor(Math.min(portrait ? usable : usable / 2, MAX_PAGE));
  const pageH = Math.round(pageW * ratio);
  const ready = data && box > 0 && pageW > 0;

  return (
    <div ref={wrapRef} className="flex w-full flex-col items-center gap-[24px]">
      {!ready ? (
        <div className="py-[64px] text-[20px] text-neutral-500">Memuat…</div>
      ) : (
        <>
          {/* key: paksa flipbook dibangun ulang saat ukuran berubah. */}
          {/* @ts-expect-error — react-pageflip belum punya tipe React 19 */}
          <HTMLFlipBook
            key={`${pageW}-${portrait}`}
            ref={bookRef}
            width={pageW}
            height={pageH}
            size="fixed"
            usePortrait={portrait}
            maxShadowOpacity={0.4}
            showCover
            mobileScrollSupport
            className="shadow-lg"
          >
            {data!.pages.map((file, i) => (
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

          <div
            className="flex items-stretch justify-center gap-[8px] lg:gap-[16px]"
            style={{ width: portrait ? pageW : pageW * 2 }}
          >
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
        </>
      )}
    </div>
  );
}
