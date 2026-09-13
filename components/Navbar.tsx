"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { A } from "@/lib/assets";

const items = [
  { href: "/", label: "Home", icon: A.iconHome, w: "w-[26px] md:w-[32px] lg:w-[40px]" },
  { href: "/experience", label: "Experience", icon: A.iconWork, w: "w-[26px] md:w-[32px] lg:w-[40px]" },
  { href: "/awards", label: "Awards", icon: A.iconAward, w: "w-[26px] md:w-[32px] lg:w-[40px]" },
  { href: "/portfolio", label: "Portfolio", icon: A.iconDoc, w: "w-[24px] md:w-[30px] lg:w-[37px]" },
  { href: "/blog", label: "Blog", icon: A.iconPhotos, w: "w-[26px] md:w-[32px] lg:w-[40px]" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi utama"
      className="sticky top-0 z-20 flex h-[60px] w-full items-center justify-between border-b border-neutral-200 bg-white px-[16px] md:h-[78px] md:px-[48px] lg:h-[97px] lg:px-[80px]"
    >
      {items.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            title={item.label}
            className={`group flex h-[60px] items-center justify-center gap-[8px] transition-colors duration-200 md:h-[78px] lg:h-[97px] lg:gap-[16px] ${
              active
                ? "border-b-4 border-neutral-500 lg:border-b-5"
                : "border-b-4 border-transparent hover:border-neutral-300 lg:border-b-5"
            }`}
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden
              className={`h-[26px] max-w-none transition-all duration-200 group-hover:scale-110 md:h-[32px] lg:h-[40px] ${item.w} ${
                active ? "" : "opacity-65 group-hover:opacity-100"
              }`}
            />
            {active ? (
              <span className="hidden text-[16px] leading-[24px] text-neutral-600 sm:inline lg:text-[24px] lg:leading-[36px]">
                {item.label}
              </span>
            ) : (
              <span className="sr-only">{item.label}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
