import { profile } from "@/lib/data";

/* Ikon garis (Tabler) dengan tebal garis disamakan dengan ikon navbar. */
const paths: Record<string, string[]> = {
  linkedin: [
    "M8 11v5",
    "M8 8v.01",
    "M12 16v-5",
    "M16 16v-3a2 2 0 1 0 -4 0",
    "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10",
  ],
  instagram: [
    "M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8",
    "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
    "M16.5 7.5v.01",
  ],
  dribbble: [
    "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
    "M9 3.6c5 6 7 10.5 7.5 16.2",
    "M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4",
    "M3.1 10.75c5 0 9.814 -.38 15.314 -5",
  ],
};

const iconClass = "size-[20px] md:size-[22px] lg:size-[26px]";

function Icon({ id }: { id: string }) {
  if (id === "fastwork") {
    /* Logo Fastwork dijadikan mask, jadi warnanya ikut teks (terang/gelap). */
    return (
      <span
        aria-hidden
        className={`${iconClass} block bg-current`}
        style={{
          maskImage: "url(/assets/icon-fastwork.png)",
          WebkitMaskImage: "url(/assets/icon-fastwork.png)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
    >
      {paths[id]?.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <ul aria-label="Media sosial" className="flex flex-wrap items-center gap-[8px] lg:gap-[12px]">
      {profile.socials.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="flex size-[40px] items-center justify-center border border-neutral-200 bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-800 md:size-[44px] lg:size-[52px]"
          >
            <Icon id={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}
