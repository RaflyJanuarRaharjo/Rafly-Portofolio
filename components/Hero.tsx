import { A } from "@/lib/assets";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-[20px] pb-[24px] md:gap-[32px] lg:gap-[40px] lg:pb-[32px]">
      <div className="flex w-full flex-col">
        {/* Cover */}
        <div className="-mb-[50px] h-[150px] w-full overflow-hidden bg-neutral-200 md:-mb-[76px] md:h-[220px] lg:-mb-[104px] lg:h-[290px]">
          <video
            src="/assets/cover.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[12px] px-[16px] md:flex-row md:items-end md:gap-[24px] md:px-[48px] lg:h-[214px] lg:gap-[32px] lg:pl-[80px] lg:pr-[120px]">
          <img
            src={A.avatar}
            alt={profile.name}
            className="size-[90px] shrink-0 rounded-[8px] border-4 border-white object-cover md:size-[130px] lg:size-[167px] lg:border-5"
          />

          <div className="flex w-full flex-col gap-[4px] pb-[4px]">
            <div className="flex flex-wrap items-center gap-[10px] py-[4px] lg:gap-[16px] lg:p-[8px]">
              <h1 className="text-[20px] font-semibold text-neutral-800 md:text-[26px] lg:text-[32px]">
                {profile.name}
              </h1>
              <span className="flex items-center gap-[6px] lg:gap-[8px]">
                <img src={A.badgeVerified} alt="" aria-hidden className="size-[24px] md:size-[30px] lg:size-[40px]" />
                <img src={A.badgeX} alt="" aria-hidden className="size-[20px] md:size-[24px] lg:size-[32px]" />
              </span>
            </div>
            <div className="flex items-center lg:px-[8px]">
              <p className="text-[15px] text-neutral-600 md:text-[19px] lg:text-[24px]">
                {profile.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[913px] flex-col justify-center px-[16px] md:px-[48px] lg:px-0">
        <p className="text-[15px] leading-[24px] text-neutral-800 md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[36px]">
          {profile.bio}
        </p>
      </div>
    </header>
  );
}
