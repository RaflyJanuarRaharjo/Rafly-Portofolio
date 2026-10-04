import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import BackLink from "@/components/BackLink";
import BlogArticle from "@/components/BlogArticle";
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
  return { title: post ? `${post.title} - Blog` : "Blog" };
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
          <BackLink href="/blog" />
          <p className="min-w-0 truncate p-[8px] text-[18px] font-medium text-neutral-800 md:text-[24px] lg:text-[32px]">
            Blog
          </p>
        </div>
        <Stripe />
        <Navbar />
      </div>
      <Stripe />

      <BlogArticle post={post} />
    </>
  );
}
