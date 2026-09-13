import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";

export const metadata = { title: "APO Mitra — Case Study" };

/** Placeholder. Halaman case study lengkap (Desktop - 5) belum di-porting. */
export default function CaseStudyPage() {
  return (
    <>
      <div className="flex h-[114px] w-full items-center justify-between px-[80px] py-[32px]">
        <Link
          href="/portfolio"
          className="flex h-[42px] w-[120px] items-center justify-center border border-neutral-200 bg-neutral-100 text-[24px] font-medium text-neutral-600"
        >
          Back
        </Link>
        <p className="p-[8px] text-[32px] font-medium text-neutral-800">APO Mitra</p>
      </div>
      <Stripe />
      <Navbar />
      <Stripe />
      <div className="px-[80px] py-[64px]">
        <p className="text-[24px] leading-[36px] text-neutral-600">
          Halaman case study lengkap belum dibuat.
        </p>
      </div>
      <Stripe />
    </>
  );
}
