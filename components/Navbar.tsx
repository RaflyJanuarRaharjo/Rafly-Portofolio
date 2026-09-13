"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { A } from "@/lib/assets";

const items = [
  { href: "/", label: "Home", icon: A.iconHome, size: 40 },
  { href: "/experience", label: "Experience", icon: A.iconWork, size: 40 },
  { href: "/awards", label: "Awards", icon: A.iconAward, size: 40 },
  { href: "/portfolio", label: "Portfolio", icon: A.iconDoc, size: 37 },
  { href: "/blog", label: "Blog", icon: A.iconPhotos, size: 40 },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi utama"
      className="flex h-[97px] w-full items-center justify-between bg-white px-[80px]"
    >
      {items.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "flex h-[97px] items-center justify-center gap-[16px] border-b-5 border-neutral-500"
                : "flex items-center"
            }
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden
              style={{ width: item.size, height: 40 }}
              className="max-w-none"
            />
            {active ? (
              <span className="text-[24px] leading-[36px] text-neutral-600">
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
