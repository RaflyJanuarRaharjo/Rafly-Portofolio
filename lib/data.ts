import { A } from "./assets";

export const profile = {
  name: "Rafly Januar Raharjo",
  role: "UI / UX Designer",
  bio: [
    "As a UI/UX Designer Intern at Alfagift, I contribute to creating user-centered design solutions for digital products by applying UX research, Figma, and design system principles. I work closely with stakeholders to understand user needs, identify usability issues, and translate insights into intuitive and scalable interface solutions.",
    "My responsibilities include conducting user research and needs analysis, mapping user flows, creating wireframes and interactive prototypes, developing high-fidelity UI designs, and providing redesign recommendations based on identified pain points. I also contribute to improving information architecture, navigation, and overall user experience to support more efficient operational workflows.",
    "Through an iterative, user-centered approach, I help bridge user needs and business requirements while maintaining consistency, usability, and visual quality across the product experience.",
  ],
};

export type ExperienceItem = {
  title: string;
  org: string;
  year: string;
  logo: string;
};

export const experiences: ExperienceItem[] = [
  { title: "UI / UX Designer", org: "GLI ( Alfagift ) - Internship", year: "2026", logo: A.logoAlfagift },
  { title: "Resident Lab Assistant", org: "Universitas Brawijaya", year: "2026", logo: A.logoBrawijaya },
  { title: "Research Member", org: "Universitas Bina Nusantara", year: "2026", logo: A.logoBinus },
];

export type AwardItem = { title: string; org: string; year: string };

export const awards: AwardItem[] = [
  { title: "Finalist – PlayIT UI/UX Hackathon", org: "PlayIT Polinema", year: "2026" },
  { title: "3rd Place – Competition RAFAETECH 2025", org: "Universitas Islam Negeri Raden Fatah Palembang", year: "2026" },
  { title: "3rd Place Design Challenge - Intechfest 2025", org: "Politeknik Negeri Bali", year: "2026" },
];

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  shots: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "apo-mitra",
    title: "APO Mitra - Alfagift",
    summary:
      "Improving trip visibility, navigation, and delivery workflows to help mitra complete orders more efficiently.",
    shots: [A.apo1, A.apo2, A.apo3, A.apo4, A.apo5],
  },
];

export type BlogItem = { excerpt: string; thumb: string };

export const posts: BlogItem[] = [
  { excerpt: "Awarded 2nd Place – Problem Solver for delivering an innovative and user....", thumb: A.blogThumb },
  { excerpt: "Awarded 2nd Place – Problem Solver for delivering an innovative and user....", thumb: A.blogThumb },
];

/** Jumlah total yang tampil di badge header section. */
export const counts = {
  experience: experiences.length,
  awards: awards.length,
};
