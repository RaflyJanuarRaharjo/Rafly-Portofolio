import type { BlogItem } from "@/lib/data";

export default function BlogRow({ items }: { items: BlogItem[] }) {
  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[80px] py-[64px]">
      <div className="flex w-full items-start justify-between">
        {items.map((post, i) => (
          <article key={i} className="flex w-[443px] flex-col gap-[30px]">
            <img
              src={post.thumb}
              alt=""
              aria-hidden
              className="h-[346px] w-[443px] object-cover"
            />
            <p className="text-[24px] leading-[36px] text-neutral-600">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
