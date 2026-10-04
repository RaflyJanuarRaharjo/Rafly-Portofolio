"use client";

import type { BlogItem } from "@/lib/data";
import { pick, useLang } from "@/lib/i18n";

/** Isi halaman detail blog. Dipisah dari page-nya karena perlu tombol bahasa. */
export default function BlogArticle({ post }: { post: BlogItem }) {
  const { lang } = useLang();

  return (
    <article className="w-full">
      <header className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
        <h1 className="max-w-[860px] text-[24px] font-medium leading-[32px] text-neutral-800 md:text-[32px] md:leading-[42px] lg:text-[40px] lg:leading-[52px]">
          {post.title}
        </h1>
        {post.meta && (
          <p className="mt-[12px] max-w-[760px] text-[14px] leading-[22px] text-neutral-500 md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
            {pick(post.meta, lang)}
          </p>
        )}
      </header>

      <div className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
        {/* Tanpa w-full: foto tampil seukuran aslinya, mengecil hanya kalau
            kolomnya lebih sempit. Jadi tidak pernah dipaksa melar. */}
        {(post.image ?? post.thumb) && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={post.image ?? post.thumb}
            alt=""
            aria-hidden
            className="mb-[8px] h-auto max-w-full border border-neutral-200 bg-neutral-100"
          />
        )}

        {post.body?.map((paragraph, i) => (
          <p
            key={i}
            className="mt-[20px] max-w-[760px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:mt-[28px] lg:text-[19px] lg:leading-[32px]"
          >
            {pick(paragraph, lang)}
          </p>
        ))}

        {post.bullets && (
          <ul className="mt-[20px] flex max-w-[760px] flex-col gap-[8px] lg:mt-[28px] lg:gap-[10px]">
            {post.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-[10px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:text-[19px] lg:leading-[32px]"
              >
                <span
                  aria-hidden
                  className="mt-[9px] size-[5px] shrink-0 bg-neutral-500 lg:mt-[12px]"
                />
                {pick(b, lang)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
