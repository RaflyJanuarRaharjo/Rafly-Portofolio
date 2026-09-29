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
  /** Link prototype (Figma atau situs live). Kalau kosong, tombolnya tidak muncul. */
  prototype?: string;
  /** Deretan screenshot HP (gaya APO Mitra). */
  shots?: string[];
  /** Satu gambar lebar, dipakai kalau tidak ada shots. */
  cover?: string;
  /** Video showcase, dipakai kalau tidak ada shots. Menang atas cover. */
  video?: string;
  /** Frame pertama video, tampil sebelum video termuat. */
  poster?: string;
  /** Rasio banner, mis. "16 / 9". Default "4 / 3". */
  ratio?: string;
  /** Kategori untuk filter di /portfolio. Chip-nya otomatis ikut isi ini. */
  tags?: string[];
  /** Case study versi halaman. Kalau ada, dipakai menggantikan flipbook PDF. */
  story?: Story;
};

export type StoryStat = { value: string; label: string };
export type StoryCard = { title: string; meta?: string; body: string };

export type StorySection = {
  heading: string;
  /** Kalimat pembuka di bawah judul section. */
  lead?: string;
  body?: string[];
  bullets?: string[];
  stats?: StoryStat[];
  cards?: StoryCard[];
  image?: { src: string; alt: string; caption?: string };
};

export type Story = {
  tagline: string;
  /** Baris ringkas di kepala halaman: peran, tahun, tim, tools. */
  meta: { label: string; value: string }[];
  sections: StorySection[];
  links?: { label: string; href: string }[];
};

export const projects: ProjectItem[] = [
  {
    slug: "apo-mitra",
    title: "APO Mitra - Alfagift",
    summary:
      "Improving trip visibility, navigation, and delivery workflows to help mitra complete orders more efficiently.",
    pdf: "/case-study/apo-mitra.pdf",
    tags: ["Mobile App"],
    cover: A.apoCover,
  },
  {
    slug: "edunex",
    title: "EDUNEX - Learn. Grow. Connect.",
    summary:
      "Super-app ecosystem bringing scholarships, financial aid, competitions, courses, and AI-assisted career prep into one platform. Validated with 11 testers: 100% success rate, 20s average completion time.",
    pdf: "/case-study/edunex.pdf",
    tags: ["Mobile App"],
    prototype:
      "https://www.figma.com/proto/A4CUpEVRhXkR5qzuhPBxJ9/Lomba-UI-UX-LDR?node-id=14-3602&starting-point-node-id=14%3A3602",
    cover: A.edunexCover,
    story: {
      tagline: "Your Next Step Starts Here",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: "Tim", value: "Tim LDR" },
        { label: "Metode", value: "User Centered Design" },
        { label: "Tools", value: "Figma, Maze" },
      ],
      sections: [
        {
          heading: "Latar belakang",
          lead:
            "Jutaan masyarakat Indonesia masih menghadapi keterbatasan akses pendidikan dan pekerjaan.",
          body: [
            "Per Agustus 2025 tercatat 7,46 juta orang menganggur di Indonesia. Di sisi lain, sekitar 3,9 juta anak diperkirakan berada di luar sekolah, dan 22,4% responden menyebut biaya pendidikan sebagai salah satu alasan tidak bersekolah.",
            "Keterbatasan akses dan kendala biaya mempersempit peluang seseorang untuk berkembang dan memasuki dunia kerja. Sumber: BPS 2024–2025 dan UNICEF Indonesia.",
          ],
          stats: [
            { value: "7,46 juta", label: "pengangguran, Agustus 2025" },
            { value: "3,9 juta", label: "anak di luar sekolah" },
            { value: "22,4%", label: "terhambat biaya pendidikan" },
          ],
        },
        {
          heading: "Memahami konteks",
          lead:
            "Wawancara eksploratif dengan tiga mahasiswa dari disiplin ilmu berbeda.",
          cards: [
            {
              title: "Marrysa Salsabila",
              meta: "Akuntansi — Polinema",
              body:
                "Kesulitan mencari informasi terpusat soal beasiswa, dan sulit mengakses kompetisi di luar kampus. Butuh agregator yang terpusat dan transparan.",
            },
            {
              title: "Febrian Arka Samudra",
              meta: "Teknik Informatika — Polinema",
              body:
                "Sulit menemukan wadah kolaborasi lintas jurusan, dan cemas menghadapi standar rekrutmen industri. Butuh persiapan rekrutmen yang terstruktur.",
            },
            {
              title: "Marwah Sinta",
              meta: "Akuntansi — Polinema",
              body:
                "Menghadapi hambatan finansial mendadak untuk kebutuhan belajar, dan minim sarana latihan wawancara. Butuh bantuan cepat terverifikasi dan simulasi interaktif.",
            },
          ],
        },
        {
          heading: "Solusi",
          lead:
            "Satu super-app yang merangkum kebutuhan mahasiswa ke dalam delapan pilar fitur.",
          bullets: [
            "NexScholar — katalog dan pendaftaran beasiswa",
            "NexAid — bantuan finansial darurat dan subsidi perangkat",
            "NexArena — hub kompetisi dan hackathon",
            "NexCareer — portal lowongan kerja dan magang",
            "Nex Resume — AI ATS resume optimizer",
            "Nex Interview — simulator wawancara real-time",
            "Nex Course & Quiz — modul belajar dan evaluasi",
            "Community Forum — ruang obrolan dan study jam",
          ],
        },
        {
          heading: "Design system",
          body: [
            "Biru dipilih karena memberi kesan terpercaya dan edukatif, dengan kontras yang lolos standar aksesibilitas. Warna netral membentuk hierarki teks sekaligus menjaga fokus pada konten.",
            "Font Geist dipakai karena mudah dibaca di layar mobile, dan tiga weight sudah cukup untuk hierarki yang jelas. Grid 4pt menjaga jarak antarelemen konsisten dan mudah diterapkan developer. Radius 8px memberi kesan ramah tanpa kehilangan sisi profesional, dan tinggi tombol 44px mengikuti standar Apple HIG agar nyaman disentuh.",
          ],
          image: {
            src: "/case-study/edunex-page/design-system.webp",
            alt: "Papan design system EDUNEX: warna, tipografi, grid, dan komponen",
          },
        },
        {
          heading: "User flow",
          image: {
            src: "/case-study/edunex-page/userflow.webp",
            alt: "Diagram user flow EDUNEX",
          },
        },
        {
          heading: "Sitemap",
          body: [
            "Terdiri dari area onboarding (splash, sign in, lupa password, sign up) dan lima menu utama di bottom navbar. Home memuat NexScholar, NexAid, NexArena, dan NexCareer dengan pola seragam: daftar, detail, formulir, lalu konfirmasi.",
            "Course berisi kursus, langganan, video, dan quiz. AI berisi chat Nex 4.5 dan Nex Interview. Forum berisi grup diskusi, dan Profile berisi pengaturan akun serta status pengajuan. Hierarkinya dangkal dan konsisten sehingga mudah dinavigasi.",
          ],
          image: {
            src: "/case-study/edunex-page/sitemap.webp",
            alt: "Sitemap EDUNEX",
          },
        },
        {
          heading: "NexScholar",
          lead: "Pendaftaran beasiswa dengan friksi seminimal mungkin.",
          body: [
            "Pengguna menelusuri katalog program, meninjau syarat, mengisi formulir terintegrasi, lalu mengunggah dokumen pendukung sampai tahap konfirmasi.",
          ],
          image: {
            src: "/case-study/edunex-page/nexscholar.webp",
            alt: "Rangkaian layar NexScholar",
          },
        },
        {
          heading: "NexAid",
          lead: "Jaring pengaman finansial yang bisa diajukan cepat.",
          body: [
            "Pengguna memilih jenis bantuan, mengisi formulir data diri darurat, dan melampirkan bukti persyaratan dalam satu alur linier.",
          ],
          image: {
            src: "/case-study/edunex-page/nexaid.webp",
            alt: "Rangkaian layar NexAid",
          },
        },
        {
          heading: "NexArena",
          lead: "Pendaftaran kompetisi multidisiplin yang disederhanakan.",
          body: [
            "Perwakilan tim memilih cabang lomba, mempelajari pedoman, lalu mengirim berkas pendaftaran dengan umpan balik visual seketika.",
          ],
          image: {
            src: "/case-study/edunex-page/nexarena.webp",
            alt: "Rangkaian layar NexArena",
          },
        },
        {
          heading: "NexCareer",
          lead: "Portal transisi dari bangku kuliah ke dunia kerja.",
          body: [
            "Mahasiswa mengecek kualifikasi lowongan, mengisi profil profesional, dan mengunggah resume — memangkas cognitive load saat melamar.",
          ],
          image: {
            src: "/case-study/edunex-page/nexcareer.webp",
            alt: "Rangkaian layar NexCareer",
          },
        },
        {
          heading: "Nex Course & Quiz",
          lead: "Belajar mandiri yang terstruktur dan interaktif.",
          body: [
            "Modul video terhubung langsung dengan kuis berbatas waktu. Halaman hasil menyajikan metrik pencapaian dan umpan balik dengan visual yang jelas.",
          ],
          image: {
            src: "/case-study/edunex-page/course-quiz.webp",
            alt: "Rangkaian layar Nex Course dan Quiz",
          },
        },
        {
          heading: "Nex AI Chat & Interview",
          lead: "Dari asisten percakapan teks ke simulasi wawancara video.",
          body: [
            "Transisinya dibuat mulus, dan alurnya ditutup halaman evaluasi berbasis data yang memberi skor serta actionable feedback.",
          ],
          image: {
            src: "/case-study/edunex-page/ai-chat-interview.webp",
            alt: "Rangkaian layar Nex AI Chat dan Nex Interview",
          },
        },
        {
          heading: "Community Forum",
          lead: "Mengadaptasi pola mental aplikasi pesan instan.",
          body: [
            "Kurva belajarnya nyaris nol: pengguna langsung mencari topik, bergabung ke ruang study jam yang difasilitasi mentor, dan berinteraksi lewat hierarki gelembung chat yang familier.",
          ],
          image: {
            src: "/case-study/edunex-page/forum.webp",
            alt: "Rangkaian layar Community Forum",
          },
        },
        {
          heading: "Usability testing",
          lead:
            "Pengujian daring lewat Maze bersama 11 tester yang sesuai target pengguna.",
          body: [
            "Setiap tester diberi skenario dan serangkaian tugas, sementara sistem mencatat perilaku mereka selama pengujian berlangsung.",
          ],
          stats: [
            { value: "11", label: "tester" },
            { value: "100%", label: "success rate" },
            { value: "20 detik", label: "rata-rata waktu penyelesaian" },
          ],
        },
        {
          heading: "Kesimpulan",
          body: [
            "EDUNEX menjawab tiga keresahan yang muncul berulang di riset: fragmentasi informasi, kendala finansial, dan kecemasan menghadapi rekrutmen industri — dirangkum ke dalam delapan pilar fitur yang terpusat.",
            "Design system-nya mengikuti standar Apple HIG untuk menekan cognitive load lewat navigasi yang konsisten. Hasilnya diuji secara empiris: 100% success rate dengan rata-rata penyelesaian 20 detik.",
          ],
          bullets: [
            "SDG 4 — pendidikan inklusif lewat pembelajaran interaktif dan ekosistem mentor",
            "SDG 8 — kesiapan kerja lewat simulasi wawancara AI dan portal lowongan",
            "SDG 10 — pemerataan informasi bantuan finansial dan beasiswa",
          ],
        },
      ],
      links: [
        {
          label: "Prototype Figma",
          href:
            "https://www.figma.com/proto/A4CUpEVRhXkR5qzuhPBxJ9/Lomba-UI-UX-LDR?node-id=14-3602&starting-point-node-id=14%3A3602",
        },
      ],
    },
  },
  {
    slug: "glidexa",
    title: "GLIDEXA VPN - Gaming Acceleration",
    summary:
      "Landing page for a gaming-focused VPN: early-access waitlist, pricing tiers, and product positioning built around low latency and one-tap connection.",
    pdf: "/case-study/glidexa.pdf",
    tags: ["Website"],
    prototype: "https://glidexa-vpn.vercel.app/",
    cover: A.glidexaCover,
  },
  {
    slug: "mews-mayangan",
    title: "MEWS Mayangan - Early Warning Dashboard",
    summary:
      "Monitoring dashboard for a coastal early-warning station in Desa Mayangan, Subang. Tracks water level, weather, and device health, with three tidal-flood alert tiers wired to a siren and indicator lamp.",
    pdf: "/case-study/mews-mayangan.pdf",
    tags: ["Dashboard"],
    video: A.mewsVideo,
    poster: A.mewsPoster,
    ratio: "16 / 9",
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