import type { ProjectItem, StorySection } from "@/lib/data";

/**
 * Case study versi halaman biasa — alternatif dari flipbook PDF.
 * Isinya datang dari `story` di lib/data.ts, jadi project lain tinggal
 * menambah datanya tanpa menyentuh komponen ini.
 */
export default function CaseStudy({ project }: { project: ProjectItem }) {
  const story = project.story;
  if (!story) return null;

  return (
    <article className="w-full">
      {/* Kepala */}
      <header className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
        <p className="text-[15px] text-neutral-500 md:text-[18px] lg:text-[20px]">
          {story.tagline}
        </p>
        <h1 className="mt-[8px] text-[26px] font-medium leading-[34px] text-neutral-800 md:text-[36px] md:leading-[44px] lg:text-[44px] lg:leading-[54px]">
          {project.title}
        </h1>
        <p className="mt-[16px] max-w-[760px] text-[15px] leading-[24px] text-neutral-600 md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px]">
          {project.summary}
        </p>

        <dl className="mt-[28px] grid grid-cols-2 gap-[16px] md:grid-cols-4 lg:mt-[36px]">
          {story.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[13px] text-neutral-500 md:text-[15px]">{m.label}</dt>
              <dd className="mt-[2px] text-[15px] font-medium text-neutral-800 md:text-[18px]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {story.sections.map((section) => (
        <Section key={section.heading} section={section} />
      ))}

      {/* Tautan penutup */}
      {story.links?.length ? (
        <div className="flex w-full flex-col gap-[12px] border-b border-neutral-300 px-[16px] py-[32px] md:flex-row md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
          {story.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center border border-neutral-200 bg-neutral-600 px-[20px] py-[12px] text-center text-[15px] font-medium text-neutral-100 transition-colors hover:bg-neutral-800 md:py-[18px] md:text-[19px] lg:py-[24px] lg:text-[24px]"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}

    </article>
  );
}

function Section({ section }: { section: StorySection }) {
  return (
    <section className="w-full border-b border-neutral-300 px-[16px] py-[32px] md:px-[48px] md:py-[48px] lg:px-[80px] lg:py-[64px]">
      <h2 className="text-[20px] font-medium text-neutral-800 md:text-[26px] lg:text-[32px]">
        {section.heading}
      </h2>

      {section.lead && (
        <p className="mt-[10px] max-w-[760px] text-[16px] leading-[26px] text-neutral-800 md:text-[20px] md:leading-[32px] lg:text-[24px] lg:leading-[38px]">
          {section.lead}
        </p>
      )}

      {section.body?.map((p, i) => (
        <p
          key={i}
          className="mt-[14px] max-w-[760px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:text-[19px] lg:leading-[32px]"
        >
          {p}
        </p>
      ))}

      {section.stats && (
        <div className="mt-[24px] grid grid-cols-1 gap-[12px] sm:grid-cols-3 lg:mt-[32px] lg:gap-[16px]">
          {section.stats.map((s) => (
            <div
              key={s.label}
              className="border border-neutral-200 bg-neutral-100 px-[16px] py-[16px] lg:px-[24px] lg:py-[20px]"
            >
              <p className="text-[22px] font-medium text-neutral-800 md:text-[28px] lg:text-[34px]">
                {s.value}
              </p>
              <p className="mt-[2px] text-[13px] text-neutral-600 md:text-[15px] lg:text-[17px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.cards && (
        <div className="mt-[24px] grid grid-cols-1 gap-[12px] md:grid-cols-3 lg:mt-[32px] lg:gap-[16px]">
          {section.cards.map((c) => (
            <div
              key={c.title}
              className="border border-neutral-200 px-[16px] py-[16px] lg:px-[20px] lg:py-[20px]"
            >
              <p className="text-[16px] font-medium text-neutral-800 lg:text-[19px]">
                {c.title}
              </p>
              {c.meta && (
                <p className="mt-[2px] text-[13px] text-neutral-500 lg:text-[15px]">
                  {c.meta}
                </p>
              )}
              <p className="mt-[10px] text-[14px] leading-[22px] text-neutral-600 lg:text-[16px] lg:leading-[26px]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.rows && (
        <dl className="mt-[20px] w-full border-t border-neutral-200 lg:mt-[28px]">
          {section.rows.map((r) => (
            <div
              key={r.label}
              className="flex flex-col gap-[2px] border-b border-neutral-200 py-[12px] md:flex-row md:gap-[24px] md:py-[14px]"
            >
              <dt className="shrink-0 text-[14px] text-neutral-500 md:w-[180px] md:text-[16px] lg:w-[220px] lg:text-[18px]">
                {r.label}
              </dt>
              <dd className="text-[15px] leading-[24px] text-neutral-800 md:text-[17px] md:leading-[28px] lg:text-[19px] lg:leading-[30px]">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {section.steps && (
        <ol className="mt-[20px] flex max-w-[760px] flex-col gap-[16px] lg:mt-[28px] lg:gap-[20px]">
          {section.steps.map((st, i) => (
            <li key={st.title} className="flex gap-[14px] lg:gap-[20px]">
              <span className="shrink-0 pt-[2px] text-[14px] font-medium tabular-nums text-neutral-500 lg:text-[17px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[15px] font-medium text-neutral-800 md:text-[17px] lg:text-[20px]">
                  {st.title}
                </p>
                <p className="mt-[4px] text-[14px] leading-[22px] text-neutral-600 md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[30px]">
                  {st.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.table && (
        /* Tabel lebar digeser mendatar di layar sempit, bukan diremas. */
        <div className="mt-[20px] w-full overflow-x-auto lg:mt-[28px]">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                {section.table.head.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border border-neutral-200 bg-neutral-100 px-[12px] py-[10px] text-[13px] font-medium text-neutral-800 md:px-[16px] md:text-[15px] lg:text-[17px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border border-neutral-200 px-[12px] py-[10px] text-[13px] text-neutral-600 md:px-[16px] md:text-[15px] lg:text-[17px] ${
                        typeof cell === "boolean" ? "text-center" : ""
                      }`}
                    >
                      {typeof cell === "boolean" ? (
                        <span
                          aria-label={cell ? "ada" : "tidak ada"}
                          className={cell ? "text-neutral-800" : "text-neutral-500"}
                        >
                          {cell ? "\u2713" : "\u2013"}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.bullets && (
        <ul className="mt-[20px] flex max-w-[760px] flex-col gap-[8px] lg:mt-[28px] lg:gap-[10px]">
          {section.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-[10px] text-[15px] leading-[24px] text-neutral-600 md:text-[17px] md:leading-[28px] lg:text-[19px] lg:leading-[32px]"
            >
              <span aria-hidden className="mt-[9px] size-[5px] shrink-0 bg-neutral-500 lg:mt-[12px]" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {section.gallery && (
        /* Deretan layar HP, digeser mendatar kalau tidak muat. */
        <div className="mt-[24px] flex gap-[12px] overflow-x-auto pb-[4px] lg:mt-[32px] lg:gap-[20px]">
          {section.gallery.map((g) => (
            <a
              key={g.src}
              href={g.src}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-[240px] w-auto rounded-[8px] border border-neutral-200 bg-neutral-100 md:h-[320px] lg:h-[420px]"
              />
            </a>
          ))}
        </div>
      )}

      {section.image && (
        <figure className="mt-[24px] lg:mt-[32px]">
          <a href={section.image.src} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={section.image.src}
              alt={section.image.alt}
              loading="lazy"
              className="w-full border border-neutral-200 bg-neutral-100"
            />
          </a>
          <figcaption className="mt-[8px] text-[13px] text-neutral-500 lg:text-[15px]">
            {section.image.caption ?? "Ketuk gambar untuk ukuran penuh"}
          </figcaption>
        </figure>
      )}

      {section.links && (
        <div className="mt-[20px] flex flex-wrap gap-[12px] lg:mt-[28px]">
          {section.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-200 bg-neutral-100 px-[18px] py-[10px] text-[14px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 md:text-[16px] lg:px-[24px] lg:py-[12px] lg:text-[18px]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
