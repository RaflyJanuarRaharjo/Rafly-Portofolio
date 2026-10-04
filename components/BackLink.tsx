"use client";

import Link from "next/link";
import { pick, ui, useLang } from "@/lib/i18n";

/** Tombol kembali di kepala halaman detail. Dipisah karena ikut tombol bahasa. */
export default function BackLink({ href }: { href: string }) {
  const { lang } = useLang();
  return (
    <Link
      href={href}
      className="flex h-[36px] w-[88px] flex-none items-center justify-center border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 lg:h-[42px] lg:w-[120px] lg:text-[24px]"
    >
      {pick(ui.back, lang)}
    </Link>
  );
}
