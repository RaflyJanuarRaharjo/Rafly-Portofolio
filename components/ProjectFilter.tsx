"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectItem } from "@/lib/data";

const ALL = "All";

export default function ProjectFilter({ projects }: { projects: ProjectItem[] }) {
  /* Daftar chip diturunkan dari data, urut sesuai kemunculan pertama.
     Jadi menambah kategori cukup lewat `tags` di lib/data.ts. */
  const tags = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags ?? [])))];

  const [active, setActive] = useState(ALL);

  const countOf = (tag: string) =>
    tag === ALL ? projects.length : projects.filter((p) => p.tags?.includes(tag)).length;

  const shown =
    active === ALL ? projects : projects.filter((p) => p.tags?.includes(active));

  /* Satu kategori saja tidak perlu difilter. */
  if (tags.length < 3) {
    return (
      <>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </>
    );
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filter project"
        className="flex w-full flex-wrap items-center gap-[8px] border-b border-neutral-300 px-[16px] py-[16px] md:gap-[12px] md:px-[48px] md:py-[20px] lg:px-[80px] lg:py-[24px]"
      >
        {tags.map((tag) => {
          const on = tag === active;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(tag)}
              className={`flex items-center gap-[8px] border px-[14px] py-[8px] text-[14px] font-medium transition-colors md:px-[18px] md:py-[10px] md:text-[17px] lg:px-[22px] lg:py-[12px] lg:text-[20px] ${
                on
                  ? "border-neutral-600 bg-neutral-600 text-neutral-100"
                  : "border-neutral-200 bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {tag}
              <span className={on ? "text-neutral-300" : "text-neutral-400"}>
                {countOf(tag)}
              </span>
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <div className="w-full px-[16px] py-[48px] text-center text-[16px] text-neutral-500 md:px-[48px] lg:px-[80px] lg:text-[20px]">
          Belum ada project di kategori ini.
        </div>
      ) : (
        shown.map((project) => <ProjectCard key={project.slug} project={project} />)
      )}
    </>
  );
}
