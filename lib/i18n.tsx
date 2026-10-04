"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "id" | "en";

/**
 * Teks yang bisa dua bahasa. String biasa dipakai untuk yang tidak perlu
 * diterjemahkan — nama orang, nama produk, istilah yang memang dibiarkan.
 */
export type Txt = string | { id: string; en: string };

/** Ambil satu bahasa dari Txt. Kalau versi Inggrisnya belum ada, pakai Indonesia. */
export function pick(value: Txt, lang: Lang): string {
  if (typeof value === "string") return value;
  return lang === "en" ? value.en || value.id : value.id;
}

/** Versi untuk daftar. */
export function pickList(values: Txt[] | undefined, lang: Lang): string[] {
  return (values ?? []).map((v) => pick(v, lang));
}

const KEY = "lang";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "id", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  /* Dibaca setelah mount supaya render pertama di server dan di browser sama. */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "id") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Label antarmuka yang tidak datang dari lib/data.ts. */
export const ui = {
  back: { id: "Kembali", en: "Back" },
  viewCaseStudy: { id: "Lihat Case Study", en: "View Case Study" },
  viewPrototype: { id: "Lihat Prototype", en: "View Prototype" },
  seeAll: { id: "Lihat semua", en: "See all" },
  readMore: { id: "Selengkapnya", en: "Read more" },
  filterAll: { id: "Semua", en: "All" },
  emptyCategory: {
    id: "Belum ada project di kategori ini.",
    en: "No projects in this category yet.",
  },
  caseStudyMissing: {
    id: "Case study belum tersedia.",
    en: "Case study not available yet.",
  },
  tapForFullSize: {
    id: "Ketuk gambar untuk ukuran penuh",
    en: "Tap the image for full size",
  },
  loading: { id: "Memuat…", en: "Loading…" },
  pages: { id: "Halaman", en: "Pages" },
  social: { id: "Sosial", en: "Social" },
  blog: { id: "Blog", en: "Blog" },
  langLabel: { id: "Ganti ke English", en: "Switch to Indonesian" },
} as const;
