import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import BackLink from "@/components/BackLink";
import CaseStudy from "@/components/CaseStudy";
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
      {/* Header + navbar menempel di atas saat di-scroll. */}
      <div className="sticky top-0 z-30 w-full bg-white">
        <div className="flex w-full items-center justify-between gap-[12px] px-[16px] py-[20px] md:px-[48px] lg:h-[114px] lg:px-[80px] lg:py-[32px]">
          <BackLink href="/portfolio" />
          <p className="min-w-0 truncate p-[8px] text-[18px] font-medium text-neutral-800 md:text-[24px] lg:text-[32px]">
            {project.title}
          </p>
        </div>
        <Stripe />
        <Navbar />
      </div>
      <Stripe />

      {/* Punya `story` -> halaman biasa. Kalau belum, jatuh ke flipbook PDF. */}
      {project.story ? (
        <CaseStudy project={project} />
      ) : (
        <div className="w-full px-[16px] py-[32px] md:px-[48px] lg:px-[80px] lg:py-[64px]">
          <PdfFlipbook dir={`/case-study/${project.slug}`} />
        </div>
      )}
      <Stripe />
    </>
  );
}
