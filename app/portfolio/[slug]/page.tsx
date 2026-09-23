import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import { projects } from "@/lib/data";

const PdfFlipbook = dynamic(() => import("@/components/PdfFlipbook"));

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Case Study` : "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <div className="flex w-full items-center justify-between gap-[12px] px-[16px] py-[20px] md:px-[48px] lg:h-[114px] lg:px-[80px] lg:py-[32px]">
        <Link
          href="/portfolio"
          className="flex h-[36px] w-[88px] flex-none items-center justify-center border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 lg:h-[42px] lg:w-[120px] lg:text-[24px]"
        >
          Back
        </Link>
        <p className="min-w-0 truncate p-[8px] text-[18px] font-medium text-neutral-800 md:text-[24px] lg:text-[32px]">
          {project.title}
        </p>
      </div>
      <Stripe />
      <Navbar />
      <Stripe />

      <div className="w-full px-[16px] py-[32px] md:px-[48px] lg:px-[80px] lg:py-[64px]">
        <PdfFlipbook dir={`/case-study/${project.slug}`} pdf={project.pdf} />
      </div>
      <Stripe />
    </>
  );
}
