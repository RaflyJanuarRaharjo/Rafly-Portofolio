import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import SiteBackground from "@/components/SiteBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafly Januar Raharjo — UI/UX Designer",
  description:
    "Portofolio UI/UX Designer: experience, awards, project, dan blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={GeistSans.variable}>
      <body className="font-sans text-neutral-800">
        <SiteBackground />
        <div className="relative z-10 flex justify-center px-[175px] max-[1440px]:px-0">
          <div className="flex w-[1089px] max-w-full flex-col items-start border-l border-r border-neutral-300 bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
