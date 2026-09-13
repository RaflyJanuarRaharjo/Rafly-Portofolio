import { A } from "@/lib/assets";

type Props = {
  title: string;
  org: string;
  year: string;
  logo?: string;
  divided?: boolean;
};

/** Baris daftar — dipakai untuk Experience (dengan logo) dan Awards (tanpa logo). */
export default function Row({ title, org, year, logo, divided }: Props) {
  return (
    <div
      className={`flex w-full flex-col items-start bg-white px-[80px] py-[24px] ${
        divided ? "border-t border-neutral-300" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between p-[8px]">
        <div className="flex items-center gap-[16px]">
          {logo && (
            <div className="flex size-[89px] shrink-0 items-center justify-center bg-neutral-100">
              <img src={logo} alt="" aria-hidden className="size-[89px] object-cover" />
            </div>
          )}
          <div className="flex flex-col justify-center gap-[16px]">
            <p className="text-[32px] font-medium text-neutral-800">{title}</p>
            <p className="text-[24px] text-neutral-600">{org}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-[16px]">
          <span className="flex h-[42px] w-[80px] items-center justify-center border border-neutral-200 text-[24px] font-medium text-neutral-600">
            {year}
          </span>
          <img src={A.iconChevron} alt="" aria-hidden className="size-[24px]" />
        </div>
      </div>
    </div>
  );
}
