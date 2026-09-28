"use client";

import { useEffect, useState } from "react";

/**
 * Tombol terang/gelap. Pilihan disimpan di localStorage; kalau belum pernah
 * memilih, ikut setelan sistem. Kelas `dark` dipasang lebih dulu oleh skrip
 * kecil di app/layout.tsx supaya tidak ada kedip tema saat halaman dibuka.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Mode penyamaran / penyimpanan diblokir — biarkan berlaku sesi ini saja.
    }
  }

  const label = dark ? "Mode terang" : "Mode gelap";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      /* Sembunyikan ikon sampai tema terbaca, supaya tidak sempat salah ikon. */
      className="fixed bottom-[20px] right-[20px] z-50 flex size-[44px] cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-md transition-colors hover:bg-neutral-100 lg:size-[52px]"
    >
      <span className={ready ? "" : "opacity-0"}>
        {dark ? (
          /* Matahari — klik untuk kembali terang. */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[22px]">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* Bulan — klik untuk gelap. */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[22px]">
            <path d="M20 13.5A8 8 0 0 1 10.5 4a8.5 8.5 0 1 0 9.5 9.5Z" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  );
}
