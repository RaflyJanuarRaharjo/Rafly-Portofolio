"use client";

import { useLang } from "@/lib/i18n";

/**
 * Tombol ganti bahasa, duduk tepat di atas tombol tema.
 * Pilihannya disimpan di localStorage lewat LangProvider.
 */
export default function LangToggle() {
  const { lang, setLang } = useLang();
  const next = lang === "id" ? "en" : "id";
  const label = lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className="fixed bottom-[76px] right-[20px] z-50 flex h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white px-[12px] text-[14px] font-medium uppercase tracking-[0.04em] text-neutral-600 shadow-md transition-colors hover:bg-neutral-100 lg:bottom-[88px] lg:h-[52px] lg:text-[15px]"
    >
      {lang}
    </button>
  );
}
