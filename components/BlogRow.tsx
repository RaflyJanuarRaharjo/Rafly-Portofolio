import type { BlogItem } from "@/lib/data";

export default function BlogRow({ items }: { items: BlogItem[] }) {
  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
      {/* Dibungkus supaya jumlah entri ganjil tidak merusak barisnya. */}
      <div className="flex w-full flex-col items-start gap-[28px] md:flex-row md:flex-wrap md:gap-[24px]">
        {items.map((post, i) => (
          <article
            key={i}
            className="flex w-full flex-col gap-[14px] md:w-[calc(50%-12px)] lg:gap-[20px]"
          >
            <img
              src={post.thumb}
              alt=""
              aria-hidden
              className="aspect-[443/346] w-full object-cover"
            />
            {post.title && (
              <h3 className="text-[16px] font-medium leading-[24px] text-neutral-800 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[34px]">
                {post.title}
              </h3>
            )}
            {post.meta && (
              <p className="-mt-[8px] text-[13px] leading-[20px] text-neutral-500 md:text-[15px] md:leading-[22px] lg:-mt-[12px] lg:text-[16px] lg:leading-[24px]">
                {post.meta}
              </p>
            )}
            <p className="text-[14px] leading-[22px] text-neutral-600 md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
