import Link from "next/link";
import { A } from "@/lib/assets";
import type { ProjectItem } from "@/lib/data";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="flex w-full flex-col items-center border-b border-neutral-300 px-[80px] py-[64px]">
      <div className="flex w-[927px] flex-col gap-[32px]">
        {/* Showcase */}
        <div className="relative h-[390px] w-[927px] overflow-hidden border border-[rgba(213,232,255,0.49)] bg-gradient-to-b from-slate-100 to-blue-100">
          <img
            src={A.ornament}
            alt=""
            aria-hidden
            className="absolute left-[-1px] top-[-1px] h-[282px] w-[257px] max-w-none"
          />
          <img
            src={A.ornament}
            alt=""
            aria-hidden
            className="absolute left-[669px] top-[107px] h-[282px] w-[257px] max-w-none"
          />
          <div className="absolute inset-0 flex items-center justify-between px-[40px] py-[16px]">
            {project.shots.map((shot, i) => (
              <img
                key={i}
                src={shot}
                alt=""
                aria-hidden
                className="h-[312px] w-[144px] rounded-[8px] border-5 border-neutral-800 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Teks */}
        <div className="flex w-full flex-col gap-[16px]">
          <h3 className="text-[32px] leading-[36px] font-medium text-neutral-800">
            {project.title}
          </h3>
          <p className="text-[24px] leading-[36px] text-neutral-500">
            {project.summary}
          </p>
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="flex w-full items-center justify-center border border-neutral-200 bg-neutral-600 px-[32px] py-[24px] text-[24px] font-medium text-neutral-100"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
}
