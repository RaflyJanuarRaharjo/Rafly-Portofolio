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

export const cta = {
  headline: "Designing digital products people actually understand.",
  tagline:
    "UX research, interface design, and design systems for real operational workflows.",
  label: "Get in touch",
  href: "mailto:januarrafly641@gmail.com",
};

export type ExperienceItem = {
  title: string;
  org: string;
  year: string;
  logo: string;
  bullets?: string[];
  images?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "UI / UX Designer",
    org: "GLI ( Alfagift ) - Internship",
    year: "2026",
    logo: A.logoAlfagift,
    bullets: [
      "Conducted UX research and user observation to identify pain points across rider, warehouse, and delivery workflows.",
      "Designed UI/UX solutions using Figma, from wireframe to high-fidelity prototype.",
      "Improved rider & warehouse workflows for better efficiency and usability.",
      "Collaborated with cross-functional teams to deliver user-centered solutions.",
      "Redesigned and optimized operational interfaces to improve task efficiency, status visibility, and navigation clarity.",
      "Built structured design system for development handoff.",
      "Evaluated existing UX patterns and proposed improvements based on user.",
    ],
  },
  {
    title: "Resident Lab Assistant",
    org: "Universitas Brawijaya",
    year: "2026",
    logo: A.logoBrawijaya,
    bullets: [
      "Led end to end UI/UX design process for web platform project.",
      "Conducted user flow mapping and wireframing based on business requirements.",
      "Designed responsive web layouts for desktop and mobile.",
      "Created high-fidelity prototypes for stakeholder validation.",
      "Applied usability principles and accessibility standards.",
      "Built structured design system for development handoff.",
      "Collaborated with developers to ensure accurate implementation.",
    ],
  },
  {
    title: "Research Member",
    org: "Universitas Bina Nusantara",
    year: "2026",
    logo: A.logoBinus,
    bullets: [
      "Contributed to UI/UX research and information architecture development for the MayanganSiaga early warning system website.",
      "Assisted in designing user-centered interface structures to improve information readability and public response clarity.",
      "Conducted wireframing, interface exploration, and usability-focused design planning for emergency information delivery.",
      "Collaborated with research teams under the Visual Communication Design study program to support digital ecosystem initiatives.",
      "Supported the development of responsive and accessible web interface concepts aligned with community needs and disaster awareness systems.",
      "Participated in research activities under the Penelitian Pemula Binus research scheme focusing on integrated coastal and offshore infrastructure technology.",
    ],
  },
];

export type AwardItem = {
  title: string;
  org: string;
  year: string;
  bullets?: string[];
  images?: string[];
};

export const awards: AwardItem[] = [
  { title: "Finalist – PlayIT UI/UX Hackathon", org: "PlayIT Polinema", year: "2026" },
  { title: "3rd Place – Competition RAFAETECH 2025", org: "Universitas Islam Negeri Raden Fatah Palembang", year: "2026" },
  { title: "3rd Place Design Challenge - Intechfest 2025", org: "Politeknik Negeri Bali", year: "2026" },
];

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  /** PDF asli di /public/case-study, buat tombol unduh. */
  pdf: string;
  /** Link prototype Figma. Kalau kosong, tombolnya tidak muncul. */
  prototype?: string;
  /** Deretan screenshot HP (gaya APO Mitra). */
  shots?: string[];
  /** Satu gambar lebar, dipakai kalau tidak ada shots. */
  cover?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "apo-mitra",
    title: "APO Mitra - Alfagift",
    summary:
      "Improving trip visibility, navigation, and delivery workflows to help mitra complete orders more efficiently.",
    pdf: "/case-study/apo-mitra.pdf",
    cover: A.apoCover,
  },
  {
    slug: "edunex",
    title: "EDUNEX - Learn. Grow. Connect.",
    summary:
      "Super-app ecosystem bringing scholarships, financial aid, competitions, courses, and AI-assisted career prep into one platform. Validated with 11 testers: 100% success rate, 20s average completion time.",
    pdf: "/case-study/edunex.pdf",
    prototype:
      "https://www.figma.com/proto/A4CUpEVRhXkR5qzuhPBxJ9/Lomba-UI-UX-LDR?node-id=14-3602&starting-point-node-id=14%3A3602",
    cover: A.edunexCover,
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