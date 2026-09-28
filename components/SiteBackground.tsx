"use client";

import { useEffect, useState } from "react";
import BlinkingSquares from "@/components/ui/blinking-squares";

/**
 * Latar halaman. Dipasang fixed di belakang kolom konten, jadi kotaknya
 * kelihatan di area kiri/kanan kolom.
 *
 * Warna kotak dibaca dari variabel CSS --color-square supaya ikut berubah
 * saat tema diganti — BlinkingSquares menerimanya sebagai prop JS, bukan CSS.
 */
export default function SiteBackground() {
  const [square, setSquare] = useState("#d4d4d4");

  useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      const v = getComputedStyle(root).getPropertyValue("--color-square").trim();
      if (v) setSquare(v);
    };

    read();

    /* Tema diubah dengan menambah/melepas kelas `dark` di <html>. */
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none bg-[var(--color-page)]"
    >
      <BlinkingSquares squareColor={square} density={0.5} minBrightness={0.4} />
    </div>
  );
}
