import Link from "next/link";
import { A } from "@/lib/assets";
import type { BlogItem } from "@/lib/data";

/**
 * Thumbnail blog: gambar dan judul saja. Selebihnya ada di halaman detail,
 * yang dibuka saat kartunya ditekan.
 *
 * Entri yang fotonya belum ada memakai blok pola garis dengan tahunnya,
 * supaya kartunya tetap terlihat disengaja dan tidak kembar satu sama lain.
 */
export default function BlogRow({ items }: { items: BlogItem[] }) {
  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
      {/* Dibungkus supaya jumlah entri ganjil tidak merusak barisnya. */}
      <div className="flex w-full flex-col items-start gap-[28px] md:flex-row md:flex-wrap md:gap-[24px]">
        {items.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex w-full flex-col gap-[14px] md:w-[calc(50%-12px)] lg:gap-[20px]"
          >
            {post.thumb ? (
              <img
                src={post.thumb}
                alt=""
                aria-hidden
                className="aspect-[443/346] w-full object-cover transition-opacity group-hover:opacity-85"
              />
            ) : (
              <div className="relative aspect-[443/346] w-full overflow-hidden border border-neutral-200 bg-neutral-100 transition-colors group-hover:bg-neutral-200">
                <img
                  src={A.stripe}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-60 dark:brightness-[0.8] dark:invert"
                />
                {post.year && (
                  <span className="absolute inset-0 flex items-center justify-center text-[40px] font-medium tabular-nums text-neutral-500 md:text-[52px] lg:text-[64px]">
                    {post.year}
                  </span>
                )}
              </div>
            )}
            <h3 className="text-[16px] font-medium leading-[24px] text-neutral-800 underline-offset-4 group-hover:underline md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[34px]">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
