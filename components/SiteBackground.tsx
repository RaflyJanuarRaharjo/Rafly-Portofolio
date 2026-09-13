"use client";

import BlinkingSquares from "@/components/ui/blinking-squares";

/**
 * Latar halaman. Dipasang fixed di belakang kolom konten.
 * Kolom 1089px tetap putih, jadi kotaknya kelihatan di area kiri/kanan.
 */
export default function SiteBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none bg-[#f5f5f5]">
      <BlinkingSquares squareColor="#d4d4d4" density={0.5} minBrightness={0.4} />
    </div>
  );
}