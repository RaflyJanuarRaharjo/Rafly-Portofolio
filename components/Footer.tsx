import Link from "next/link";
import { cta, profile } from "@/lib/data";

const pages = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/awards", label: "Awards" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

/* Email diambil dari cta.href supaya tidak ada dua sumber yang bisa beda. */
const email = cta.href.replace("mailto:", "");

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300">
      <div className="flex w-full flex-col gap-[32px] px-[16px] py-[32px] md:flex-row md:justify-between md:gap-[48px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
        {/* Identitas dan ajakan menghubungi */}
        <div className="flex max-w-[380px] flex-col gap-[8px]">
          <p className="text-[18px] font-medium text-neutral-800 md:text-[20px] lg:text-[24px]">
            {profile.name}
          </p>
          <p className="text-[14px] text-neutral-500 md:text-[16px] lg:text-[18px]">
            {profile.headline}
          </p>
          <a
            href={cta.href}
            className="mt-[8px] w-fit border-b border-neutral-300 pb-[2px] text-[14px] text-neutral-600 transition-colors hover:border-neutral-600 hover:text-neutral-800 md:text-[16px] lg:text-[18px]"
          >
            {email}
          </a>
        </div>

        {/* Dua kolom tautan */}
        <div className="flex gap-[48px] md:gap-[64px] lg:gap-[96px]">
          <nav aria-label="Halaman" className="flex flex-col gap-[10px]">
            <p className="text-[13px] uppercase tracking-[0.08em] text-neutral-500 lg:text-[14px]">
              Halaman
            </p>
            {pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-800 md:text-[16px] lg:text-[17px]"
              >
                {p.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Sosial" className="flex flex-col gap-[10px]">
            <p className="text-[13px] uppercase tracking-[0.08em] text-neutral-500 lg:text-[14px]">
              Sosial
            </p>
            {profile.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-800 md:text-[16px] lg:text-[17px]"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Baris penutup */}
      {/* pr lebih lebar di HP supaya tidak tertimpa tombol tema yang mengambang. */}
      <div className="w-full border-t border-neutral-200 py-[20px] pl-[16px] pr-[68px] text-[13px] text-neutral-500 md:pl-[48px] md:pr-[48px] md:text-[14px] lg:pl-[80px] lg:pr-[80px] lg:text-[15px]">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
