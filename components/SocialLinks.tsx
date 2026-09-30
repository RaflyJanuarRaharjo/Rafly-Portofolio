"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Social = (typeof profile.socials)[number];

/* Ikon garis (Tabler) dengan tebal garis disamakan dengan ikon navbar. */
const paths: Record<string, string[]> = {
  linkedin: [
    "M8 11v5",
    "M8 8v.01",
    "M12 16v-5",
    "M16 16v-3a2 2 0 1 0 -4 0",
    "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10",
  ],
  instagram: [
    "M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8",
    "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
    "M16.5 7.5v.01",
  ],
  dribbble: [
    "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
    "M9 3.6c5 6 7 10.5 7.5 16.2",
    "M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4",
    "M3.1 10.75c5 0 9.814 -.38 15.314 -5",
  ],
};

function Icon({ id, className }: { id: string; className: string }) {
  if (id === "fastwork") {
    /* Logo Fastwork dijadikan mask, jadi warnanya ikut teks (terang/gelap). */
    const mask = "url(/assets/icon-fastwork.png) center / contain no-repeat";
    return (
      <span
        aria-hidden
        className={`${className} block bg-current`}
        style={{ mask, WebkitMask: mask }}
      />
    );
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[id]?.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

/** Preview: screenshot profil aslinya + baris platform di bawahnya. */
function ProfileCard({ s }: { s: Social }) {
  return (
    <div className="w-[360px] overflow-hidden border border-neutral-200 bg-white shadow-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={s.preview} alt="" aria-hidden className="block w-full" />
      <div className="flex items-center justify-between gap-[12px] border-t border-neutral-200 px-[14px] py-[10px]">
        <span className="flex min-w-0 items-center gap-[8px] text-[14px] font-medium text-neutral-800">
          <Icon id={s.id} className="size-[16px] shrink-0" />
          <span className="truncate">
            {s.label} <span className="font-normal text-neutral-500">{s.handle}</span>
          </span>
        </span>
        <span className="shrink-0 text-[13px] text-neutral-500">Buka ↗</span>
      </div>
    </div>
  );
}

export default function SocialLinks() {
  const [active, setActive] = useState<string | null>(null);
  /* Kartu terakhir tetap terlihat selama animasi menghilang. */
  const [last, setLast] = useState<string | null>(null);
  const current = profile.socials.find((s) => s.id === active);

  /* Preview hanya untuk perangkat yang bisa hover; di HP ketuk langsung membuka app. */
  const show = (id: string) => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setActive(id);
      setLast(id);
    }
  };

  return (
    <>
      {/* Peredup halaman saat preview tampil. */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          current ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-50 w-fit" onMouseLeave={() => setActive(null)}>
        {/* Preview melayang di atas deretan ikon. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute bottom-full left-0 mb-[16px] origin-bottom-left transition-all duration-300 ease-out ${
            current ? "translate-y-0 scale-100 opacity-100" : "translate-y-[8px] scale-[0.96] opacity-0"
          }`}
        >
          {/* Semua kartu dirender sejak awal supaya gambarnya sudah termuat saat di-hover. */}
          {profile.socials.map((s) => (
            <div key={s.id} className={s.id === last ? "block" : "hidden"}>
              <ProfileCard s={s} />
            </div>
          ))}
        </div>

        <ul aria-label="Media sosial" className="flex flex-wrap items-center gap-[8px] lg:gap-[12px]">
          {profile.socials.map((s) => {
            const on = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  onMouseEnter={() => show(s.id)}
                  onFocus={() => show(s.id)}
                  onBlur={() => setActive(null)}
                  className={`flex size-[40px] items-center justify-center border transition-all duration-200 md:size-[44px] lg:size-[52px] ${
                    on
                      ? "border-neutral-600 bg-neutral-600 text-neutral-100"
                      : active
                        ? "border-neutral-200 bg-neutral-100 text-neutral-600 opacity-50"
                        : "border-neutral-200 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800"
                  }`}
                >
                  <Icon id={s.id} className="size-[20px] md:size-[22px] lg:size-[26px]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
