"use client";

import { useState } from "react";
import Row from "@/components/Row";
import type { AwardItem, ExperienceItem } from "@/lib/data";

type Item = ExperienceItem | AwardItem;

/**
 * Daftar Row yang berlaku seperti akordeon: membuka satu baris menutup baris
 * yang tadi terbuka. State-nya dipegang di sini, bukan di masing-masing Row.
 */
export default function RowList({
  items,
  divided,
}: {
  items: Item[];
  divided?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, i) => (
        <Row
          key={`${item.title}-${item.org ?? ""}-${i}`}
          {...item}
          divided={divided}
          open={openIndex === i}
          onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
        />
      ))}
    </>
  );
}
