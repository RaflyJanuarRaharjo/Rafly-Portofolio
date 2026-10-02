import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Blog` : "Blog" };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Header + navbar menempel di atas saat di-scroll, sama seperti case study. */}
      <div className="sticky top-0 z-30 w-full bg-white">
        <div className="flex w-full items-center justify-between gap-[12px] px-[16px] py-[20px] md:px-[48px] lg:h-[114px] lg:px-[80px] lg:py-[32px]">
          <Link
            href="/blog"
            className="flex h-[36px] w-[88px] flex-none items-center justify-center border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 lg:h-[42px] lg:w-[120px] lg:text-[24px]"
          >
            Back
          </Link>
          <p className="min-w-0 truncate p-[8px] text-[18px] font-medium text-neutral-800 md:text-[24px] lg:text-[32px]">
            Blog
          </p>
        </div>
        <Stripe />
        <Navbar />
      </div>
      <Stripe />

      <article className="w-full">
        <header className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
          <h1 className="max-w-[860px] text-[24px] font-medium leading-[32px] text-neutral-800 md:text-[32px] md:leading-[42px] lg:text-[40px] lg:leading-[52px]">
            {post.title}
          </h1>
          {post.meta && (
            <p className="mt-[12px] max-w-[760px] text-[14px] leading-[22px] text-neutral-500 md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[28px]">
              {post.meta}
            </p>
          )}
        </header>

        <div className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
          {/* Lebarnya dibatasi supaya foto tidak dipaksa melar melebihi ukuran aslinya. */}
          {(post.image ?? post.thumb) && (
            <img
              src={post.image ?? post.thumb}
              alt=""
              aria-hidden
              className="mb-[8px] w-full max-w-[450px] border border-neutral-200 bg-neutral-100"
            />
          )}

          {post.body?.map((paragraph, i) => (
            <p
              key={i}
              className="mt-[20px] max-w-[760px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:mt-[28px] lg:text-[19px] lg:leading-[32px]"
            >
              {paragraph}
            </p>
          ))}

          {post.bullets && (
            <ul className="mt-[20px] flex max-w-[760px] flex-col gap-[8px] lg:mt-[28px] lg:gap-[10px]">
              {post.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-[10px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:text-[19px] lg:leading-[32px]"
                >
                  <span
                    aria-hidden
                    className="mt-[9px] size-[5px] shrink-0 bg-neutral-500 lg:mt-[12px]"
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </>
  );
}
