import Link from "next/link";
import { A } from "@/lib/assets";
import type { ProjectItem } from "@/lib/data";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  /* Project bergaya satu gambar lebar (EDUNEX) vs deretan HP (APO Mitra). */
  const isCover = !project.shots && !!project.cover;

  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
      <div className="flex w-full max-w-[927px] flex-col gap-[20px] lg:gap-[32px]">
        {/* Showcase */}
        {/* Cover: tinggi ikut rasio gambar (3200x2400 = 4:3) lewat inline style,
            supaya tidak bergantung pada kelas arbitrary Tailwind.
            Shots: tinggi tetap sesuai Figma. */}
        <div
          className={`relative w-full overflow-hidden ${
            isCover
              ? ""
              : "h-[160px] border border-[rgba(213,232,255,0.49)] bg-gradient-to-b from-slate-100 to-blue-100 md:h-[270px] lg:h-[390px]"
          }`}
          style={isCover ? { aspectRatio: "4 / 3" } : undefined}
        >
          {!isCover && (
            <>
              <img
                src={A.ornament}
                alt=""
                aria-hidden
                className="absolute left-[-1px] top-[-1px] hidden h-[282px] w-[257px] max-w-none md:block"
              />
              <img
                src={A.ornament}
                alt=""
                aria-hidden
                className="absolute left-[669px] top-[107px] hidden h-[282px] w-[257px] max-w-none lg:block"
              />
            </>
          )}

          {isCover ? (
            <img
              src={project.cover}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-between px-[10px] py-[10px] md:px-[24px] lg:px-[40px] lg:py-[16px]">
              {project.shots?.map((shot, i) => (
                <img
                  key={i}
                  src={shot}
                  alt=""
                  aria-hidden
                  className="h-[120px] w-[56px] rounded-[4px] border-2 border-neutral-800 object-cover md:h-[215px] md:w-[100px] lg:h-[312px] lg:w-[144px] lg:rounded-[8px] lg:border-5"
                />
              ))}
            </div>
          )}
        </div>

        {/* Teks */}
        <div className="flex w-full flex-col gap-[8px] lg:gap-[16px]">
          <h3 className="text-[18px] font-medium leading-[26px] text-neutral-800 md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[36px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-[22px] text-neutral-500 md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[36px]">
            {project.summary}
          </p>
        </div>

        <div className="flex w-full items-stretch gap-[12px] lg:gap-[16px]">
          {project.prototype && (
            <a
              href={project.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center border border-neutral-200 bg-neutral-100 px-[20px] py-[12px] text-center text-[15px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 md:py-[18px] md:text-[19px] lg:px-[32px] lg:py-[24px] lg:text-[24px]"
            >
              View Prototype
            </a>
          )}
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex flex-1 items-center justify-center border border-neutral-200 bg-neutral-600 px-[20px] py-[12px] text-center text-[15px] font-medium text-neutral-100 transition-colors hover:bg-neutral-800 md:py-[18px] md:text-[19px] lg:px-[32px] lg:py-[24px] lg:text-[24px]"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
