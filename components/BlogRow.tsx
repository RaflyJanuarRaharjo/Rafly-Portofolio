import type { BlogItem } from "@/lib/data";

export default function BlogRow({ items }: { items: BlogItem[] }) {
  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
      <div className="flex w-full flex-col items-start gap-[28px] md:flex-row md:justify-between md:gap-[24px]">
        {items.map((post, i) => (
          <article
            key={i}
            className="flex w-full flex-col gap-[14px] md:w-[calc(50%-12px)] lg:w-[443px] lg:gap-[30px]"
          >
            <img
              src={post.thumb}
              alt=""
              aria-hidden
              className="aspect-[443/346] w-full object-cover"
            />
            <p className="text-[14px] leading-[22px] text-neutral-600 md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[36px]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
