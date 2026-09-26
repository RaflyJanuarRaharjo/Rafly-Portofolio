"use client";

import { usePathname } from "next/navigation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";

/**
 * Kepala halaman (Hero + Navbar) dipasang di layout, bukan di tiap page.
 * Layout tidak ikut dibongkar saat pindah route, jadi elemen <video> di Hero
 * tetap hidup dan tidak restart — itu yang bikin header kedut sebelumnya.
 *
 * Halaman case study (/portfolio/<slug>) punya header sendiri, jadi dilewati.
 */
export default function SiteChrome() {
  const pathname = usePathname();

  const isCaseStudy =
    pathname.startsWith("/portfolio/") && pathname !== "/portfolio";

  if (isCaseStudy) return null;

  return (
    <>
      <Hero />
      <Stripe />
      <Navbar />
      <Stripe />
    </>
  );
}
