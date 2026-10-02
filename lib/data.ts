import { A } from "./assets";

export const profile = {
  name: "Rafly Januar Raharjo",
  role: "UI / UX Designer",
  bio: [
    "As a UI/UX Designer Intern at Alfagift, I contribute to creating user-centered design solutions for digital products by applying UX research, Figma, and design system principles. I work closely with stakeholders to understand user needs, identify usability issues, and translate insights into intuitive and scalable interface solutions.",
    "My responsibilities include conducting user research and needs analysis, mapping user flows, creating wireframes and interactive prototypes, developing high-fidelity UI designs, and providing redesign recommendations based on identified pain points. I also contribute to improving information architecture, navigation, and overall user experience to support more efficient operational workflows.",
    "Through an iterative, user-centered approach, I help bridge user needs and business requirements while maintaining consistency, usability, and visual quality across the product experience.",
  ],
  /**
   * Ikon sosmed di bawah bio. Di HP, link ini otomatis membuka app-nya kalau terpasang.
   * Di desktop, hover memunculkan screenshot profil aslinya (`preview`).
   */
  headline: "UI/UX Designer Intern at Alfagift",
  socials: [
    { id: "linkedin", label: "LinkedIn", handle: "in/rafly-januar-raharjo", preview: "/assets/social/linkedin.webp", href: "https://www.linkedin.com/in/rafly-januar-raharjo" },
    { id: "instagram", label: "Instagram", handle: "@rafly_jnr", preview: "/assets/social/instagram.webp", href: "https://www.instagram.com/rafly_jnr" },
    { id: "dribbble", label: "Dribbble", handle: "@KRISSz_", preview: "/assets/social/dribbble.webp", href: "https://dribbble.com/KRISSz_" },
    { id: "fastwork", label: "Fastwork", handle: "@rafproject", preview: "/assets/social/fastwork.webp", href: "https://fastwork.id/user/rafproject" },
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
  logo?: string;
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
  {
    title: "UI / UX Designer",
    org: "PT. Digital Netwerk Venture Indonesia ( The Netwerk )",
    year: "2026",
    logo: A.logoNetwerk,
  },
  {
    title: "UI / UX Designer",
    org: "Gridbrid",
    year: "2026",
    logo: A.logoGridbrid,
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
    title: "UI / UX Designer",
    org: "Fastwork Technologies Indonesia",
    year: "2026",
    logo: A.logoFastwork,
    bullets: [
      "Worked on UI/UX design tasks for web-based projects.",
      "Developed intuitive layouts and visual hierarchies to enhance user experience.",
      "Communicated directly with clients to align design outcomes with expectations.",
    ],
  },
  {
    title: "UI / UX Designer",
    org: "Joki Proyek",
    year: "2026",
    logo: A.logoJokiProyek,
    bullets: [
      "Designed web and mobile UI based on user needs and project requirements.",
      "Created user flows, wireframes, and high-fidelity prototypes using Figma.",
      "Iterated designs based on client feedback to improve usability and clarity.",
      "Delivered clean, developer-ready design assets.",
    ],
  },
  {
    title: "Google Student Ambassador",
    org: "Google",
    year: "2026",
    logo: A.logoGoogle,
    bullets: [
      "Participated in technology-focused programs and training sessions.",
      "Actively involved in community engagement and student tech initiatives.",
    ],
  },
  {
    title: "Blu Ambassador",
    org: "PT Bank Digital BCA ( BCA Digital )",
    year: "2026",
    logo: A.logoBcaDigital,
    bullets: [
      "Supported brand awareness activities and digital campaigns.",
      "Collaborated with team members in hybrid working environments.",
    ],
  },
  {
    title: "Campus Ambassador",
    org: "PopSurvey by Populix",
    year: "2025",
    logo: A.logoPopSurvey,
    bullets: [
      "Represented the brand in campus-based digital initiatives.",
      "Assisted in outreach, engagement, and campaign execution.",
      "Strengthened communication and professional networking skills.",
    ],
  },
  {
    title: "Staff Competition",
    org: "HOLOGY UB",
    year: "2025",
    logo: A.logoHology,
    bullets: [
      "Planned, executed, and evaluated the Scientific Writing (KTI) and Business Plan competitions as part of the HOLOGY 8.0 event series.",
      "Coordinated with organizing committees, judges, and participants to keep the competition flow smooth and professional.",
      "Prepared competition timelines, guidelines, and evaluation processes, including judge coordination and assessment procedures.",
      "Ensured fairness, clarity, and efficiency throughout the judging and competition stages.",
      "Developed event management, leadership, communication, and problem-solving skills in dynamic, high-pressure environments.",
    ],
  },
];

export type AwardItem = {
  title: string;
  /** Penyelenggara. Opsional — ada award yang penyelenggaranya belum dicatat. */
  org?: string;
  year: string;
  bullets?: string[];
  images?: string[];
};

export const awards: AwardItem[] = [
  { title: "Finalist – PlayIT UI/UX Hackathon", org: "PlayIT Polinema", year: "2026" },
  { title: "3rd Place – Competition RAFAETECH 2025", org: "Universitas Islam Negeri Raden Fatah Palembang", year: "2026" },
  { title: "3rd Place Design Challenge - Intechfest 2025", org: "Politeknik Negeri Bali", year: "2026" },
  { title: "2nd Place – National UI/UX Design Competition 2025", year: "2025" },
  { title: "Finalis UI/UX Design – Silogy Expo Education Fair 2025", org: "Silogy Expo Education Fair", year: "2025" },
  { title: "Finalis 10 Besar – UI/UX in Action", org: "Multimedia in Action LinkAja 2025", year: "2025" },
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
  /** Daftar bernomor, mis. pain point 01..04. */
  steps?: { title: string; body: string }[];
  stats?: StoryStat[];
  cards?: StoryCard[];
  /** Tabel dua kolom label-nilai, mis. ringkasan project. */
  rows?: { label: string; value: string }[];
  /** Tabel penuh. Sel boleh true (centang) atau false (silang). */
  table?: { head: string[]; rows: (string | boolean)[][] };
  image?: { src: string; alt: string; caption?: string };
  /** Deretan layar HP. */
  gallery?: { src: string; alt: string }[];
  /** Tautan di akhir section, mis. "Lihat detail" ke board Figma. */
  links?: { label: string; href: string }[];
};

export type Story = {
  tagline: string;
  /** Baris ringkas di kepala halaman: peran, tahun, tim, tools. */
  meta: { label: string; value: string }[];
  sections: StorySection[];
  links?: { label: string; href: string }[];
};

/**
 * Urutkan sesuai waktu ditambahkan: project baru cukup ditaruh PALING BAWAH
 * daftar ini, nanti otomatis tampil paling atas di home dan /portfolio.
 */
const projectsByDateAdded: ProjectItem[] = [
  {
    slug: "apo-mitra",
    title: "APO Mitra - Alfagift",
    summary:
      "Improving trip visibility, navigation, and delivery workflows to help mitra complete orders more efficiently.",
    pdf: "/case-study/apo-mitra.pdf",
    tags: ["Mobile App"],
    prototype:
      "https://www.figma.com/proto/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=542-4499&starting-point-node-id=542%3A4499",
    cover: A.apoCover,
    story: {
      tagline: "Mitra Management & Order Platform",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: "Platform", value: "Mobile App" },
        { label: "Durasi", value: "3 bulan" },
        { label: "Metode", value: "User Centered Design" },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: "Objective",
              value:
                "Meningkatkan kemudahan mitra dalam mengelola aktivitas, menerima informasi, dan memantau status order melalui aplikasi APO Mitra.",
            },
            {
              label: "Target user",
              value:
                "Mitra atau partner yang menggunakan APO untuk menjalankan aktivitas operasional.",
            },
            {
              label: "Focus",
              value:
                "Simplifikasi flow, meningkatkan visibility informasi, dan mengurangi friction dalam proses operasional.",
            },
          ],
          body: [
            "APO Mitra dirancang sebagai platform yang membantu mitra menjalankan aktivitas operasional secara lebih mudah dan terstruktur. Namun beberapa proses masih memiliki friction: informasi yang tersebar, status yang kurang jelas, serta alur yang membutuhkan beberapa langkah untuk menyelesaikan satu task.",
          ],
          image: {
            src: A.apoCover,
            alt: "Kumpulan layar hasil redesign APO Mitra",
            caption: "Redesign APO MITRA — pembaruan flow dan tampilan dengan metode UCD",
          },
        },
        {
          heading: "Problem",
          lead:
            "Aplikasi adalah media utama mitra untuk menerima informasi, mengelola order, dan menjalankan aktivitas layanan.",
          body: [
            "Dari evaluasi terhadap experience APO Mitra, ditemukan empat area yang masih bisa dioptimalkan.",
          ],
          steps: [
            {
              title: "Informasi kurang terstruktur",
              body:
                "Informasi penting belum selalu ditampilkan berdasarkan prioritas, sehingga mitra butuh waktu lebih lama untuk menemukan yang dibutuhkan.",
            },
            {
              title: "Status kurang terlihat",
              body:
                "Mitra tidak selalu mendapat gambaran yang jelas mengenai status proses atau order yang sedang berjalan.",
            },
            {
              title: "Flow terlalu panjang",
              body:
                "Beberapa aktivitas membutuhkan banyak langkah sebelum mitra dapat menyelesaikan task.",
            },
            {
              title: "Informasi operasional tersebar",
              body:
                "Informasi terkait aktivitas mitra berada di beberapa bagian aplikasi, sehingga meningkatkan cognitive load.",
            },
          ],
        },
        {
          heading: "Goal",
          lead:
            "Mengoptimalkan experience APO Mitra dengan informasi yang lebih terstruktur, status yang lebih mudah dipahami, serta alur aktivitas yang lebih sederhana dan efisien.",
        },
        {
          heading: "User research",
          lead:
            "Memahami pengalaman mitra saat menggunakan APO Mitra dan menjalankan proses delivery.",
          bullets: [
            "Aktivitas yang dilakukan mitra selama proses delivery",
            "Hambatan saat menjalankan order",
            "Cara mitra menemukan lokasi customer",
            "Penggunaan aplikasi saat proses pengantaran",
            "Kendala komunikasi dengan customer",
            "Informasi yang dibutuhkan selama delivery",
            "Feedback dan keluhan dari mitra",
          ],
          body: [
            "Salah satu feedback dari mitra menunjukkan aplikasi memiliki banyak perpindahan halaman dan proses loading yang terasa lama. Mitra juga menginginkan navigasi yang bisa dilakukan langsung di dalam aplikasi, supaya tidak perlu berpindah ke Google Maps.",
          ],
        },
        {
          heading: "Competitor analysis",
          lead:
            "Membandingkan APO Mitra dengan Astro untuk menemukan celah yang bisa digarap.",
          table: {
            head: ["Feature", "APO Mitra", "Astro", "Opportunity"],
            rows: [
              ["Order status", true, true, "\u2013"],
              ["Order history", true, true, "\u2013"],
              ["Navigation", false, true, "Integrated navigation"],
              ["Progress visibility", false, true, "Clearer delivery progress"],
              ["Customer notification", false, true, "Better arrival communication"],
              ["Quick action", false, true, "Reduce unnecessary steps"],
              ["Route optimization", false, true, "Optimize order sequence"],
              ["Nearest order selection", false, true, "Prioritize closest order"],
              ["Delivery issue handling", false, true, "Provide clearer exception flow"],
              ["Redelivery handling", false, true, "Support structured redelivery"],
            ],
          },
          body: [
            "Astro menunjukkan pendekatan yang lebih berpihak pada driver dalam hal navigasi, routing, dan penanganan masalah pengiriman. Ini membuka peluang bagi APO Mitra untuk mengurangi perpindahan aplikasi dan membuat keputusan saat delivery lebih actionable.",
          ],
        },
        {
          heading: "User persona",
          lead: "Rider mitra yang menjalankan delivery setiap hari.",
          cards: [
            {
              title: "Goals",
              body:
                "Menyelesaikan delivery dengan efisien, menemukan lokasi customer dengan mudah, mendapatkan informasi order yang jelas, dan lanjut ke order berikutnya dengan cepat.",
            },
            {
              title: "Pain points",
              body:
                "Pin lokasi tidak sesuai, alamat customer tidak lengkap, harus berpindah ke Google Maps, customer tidak merespons, informasi order tidak selalu mudah ditemukan, dan terlalu banyak notifikasi.",
            },
            {
              title: "Needs",
              body:
                "Navigasi terintegrasi, informasi order yang mudah ditemukan, status delivery yang jelas, komunikasi customer yang lebih efektif, dan flow penyelesaian order yang sederhana.",
            },
          ],
        },
        {
          heading: "How might we",
          lead:
            "\u201cHow might we simplify the APO Mitra delivery experience so riders can navigate, communicate with customers, and complete orders without unnecessary friction?\u201d",
        },
        {
          heading: "Information architecture",
          body: [
            "Sitemap dan userflow disusun ulang supaya hierarki informasi lebih dangkal dan setiap aktivitas punya jalur yang konsisten.",
          ],
          links: [
            {
              label: "Sitemap",
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=0-1",
            },
            {
              label: "Userflow",
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=1-186",
            },
          ],
        },
        {
          heading: "Wireframe & design system",
          body: [
            "Wireframe dipakai untuk menguji struktur layar sebelum masuk ke visual, lalu design system disusun supaya komponen konsisten dan siap diserahkan ke developer.",
          ],
          links: [
            {
              label: "Wireframe",
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=1-6580",
            },
            {
              label: "Design system",
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=5-2313",
            },
          ],
        },
        {
          heading: "High fidelity & prototype",
          body: [
            "Desain akhir dan prototype interaktif untuk menguji alur delivery dari menerima order sampai menyelesaikan pengantaran.",
          ],
          gallery: [
            { src: A.apo1, alt: "Layar menunggu trip" },
            { src: A.apo2, alt: "Layar trip berjalan" },
            { src: A.apo3, alt: "Detail order" },
            { src: A.apo4, alt: "Navigasi menuju customer" },
            { src: A.apo5, alt: "Proof of delivery" },
          ],
          links: [
            {
              label: "Design hi-fi",
              href: "https://www.figma.com/design/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=355-1386",
            },
          ],
        },
      ],
      links: [
        {
          label: "Prototype Figma",
          href:
            "https://www.figma.com/proto/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=542-4499&starting-point-node-id=542%3A4499",
        },
      ],
    },
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
    prototype:
      "https://www.figma.com/proto/sgR4tLwhS8lmUuf5MVtt8T/Mayangan-Dashboard-Redesign?node-id=11-2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A2&show-proto-sidebar=1",
    video: A.mewsVideo,
    poster: A.mewsPoster,
    ratio: "16 / 9",
  },
  {
    slug: "match",
    title: "Match - Find Your Job",
    summary:
      "Brand identity for a job platform that connects people with work matching their skills, interests, and career goals. Covers the logo, palette, and how the mark carries across the web app, app icon, social profile, and out-of-home placements.",
    pdf: "/case-study/match.pdf",
    tags: ["Branding", "Website", "Mobile App"],
    video: A.matchVideo,
    poster: A.matchPoster,
    story: {
      tagline: "Brand Identity & Visual System",
      meta: [
        { label: "Peran", value: "Brand & UI Designer" },
        { label: "Jenis", value: "Brand Identity" },
        { label: "Platform", value: "Web & Mobile App" },
        { label: "Tools", value: "Figma" },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: "Produk",
              value:
                "Platform pencari kerja yang mencocokkan orang dengan lowongan lewat personalisasi AI, bukan lewat penelusuran manual.",
            },
            {
              label: "Objective",
              value:
                "Membangun identitas yang membuat mekanisme produk — mencocokkan — terbaca sejak logo, tanpa perlu dijelaskan lewat teks.",
            },
            {
              label: "Deliverable",
              value:
                "Logo, palet warna, arah fotografi, pattern, penerapan di app icon, profil sosial, dan media luar ruang, sampai sistem warna untuk antarmuka produknya.",
            },
          ],
          body: [
            "Match berangkat dari satu premis: mencari kerja hari ini bukan masalah kekurangan lowongan, melainkan kelebihan lowongan yang tidak relevan. Produknya menjawab itu dengan personalisasi AI, dan identitasnya dibangun untuk menyuarakan hal yang sama.",
          ],
        },
        {
          heading: "Filosofi nama",
          lead:
            "“Match” bukan kiasan — itu nama mekanisme produknya sendiri.",
          body: [
            "Nama ini dipilih karena persis menggambarkan cara kerja platformnya: mempertemukan skill, minat, dan tujuan karier seseorang dengan lowongan yang benar-benar cocok. Personalisasi AI-nya bekerja sebagai pencocok, bukan sebagai mesin pencari.",
            "Satu suku kata, dan berfungsi sebagai kata kerja sekaligus kata benda — pengguna melakukan match, dan menerima match. Mudah diucapkan lintas bahasa, dan sudah familier di telinga tanpa perlu diterjemahkan.",
            "Namanya dipakai dalam dua panjang. “Match” untuk wordmark dan sapaan sehari-hari, “Matchwork” untuk nama penuh yang dipakai di domain matchwork.com, handle @matchwork, dan label asisten AI-nya di dalam produk. Bentuk pendek untuk dikenali, bentuk panjang untuk dicari dan dimiliki.",
            "Tagline-nya menurunkan premis itu secara harfiah: “Find your job and discover opportunities that match your skills, interests, and career goals.”",
          ],
        },
        {
          heading: "Logo",
          lead:
            "Huruf M yang dibangun dari batang vertikal dengan sambungan di ketinggian berbeda.",
          body: [
            "Batangnya berlebar sama rata, tapi titik temunya sengaja tidak sejajar — tinggi, rendah, tinggi. Siluetnya jadi terbaca seperti dua sisi bergerigi yang saling mengunci, dan itulah gagasan match yang dibawa ke bentuk.",
            "Ruang kosong di antara batang punya bobot yang setara dengan batangnya. Celah itu yang membuat marknya tetap terbaca saat dikecilkan ke ukuran favicon 16px, dan tetap punya tegangan saat dibesarkan ke ukuran billboard.",
            "Konstruksinya kaku dan modular, mendekati karakter huruf monospace. Itu disengaja: produknya digerakkan algoritma, dan logonya tidak berpura-pura ditulis tangan.",
          ],
        },
        {
          heading: "Palet warna",
          lead:
            "Lima warna, dibangun gelap lebih dulu karena warna sinyalnya memang menuntut itu.",
          body: [
            "Lime adalah satu-satunya warna yang boleh berteriak. Ia dipakai untuk logo, CTA, dan apa pun yang menandakan “ini kecocokanmu” — porsinya kecil justru supaya tetap berarti.",
          ],
          table: {
            head: ["Warna", "Hex", "Peran", "Kontras di #0A0A0A"],
            rows: [
              ["Lime", "#A1E433", "Sinyal utama — logo, CTA, highlight hasil match", "12,88:1"],
              ["Hijau tua", "#69A900", "Pendukung — fill, hover, aksen grafis", "6,86:1"],
              ["Ink", "#0A0A0A", "Latar utama seluruh sistem", "–"],
              ["Arang", "#171717", "Permukaan kartu, pemisah antar layer", "–"],
              ["Kertas", "#FAFAFA", "Teks utama di atas latar gelap", "18,97:1"],
            ],
          },
        },
        {
          heading: "Kenapa gelap, bukan terang",
          lead:
            "Keputusan ini datang dari angka, bukan dari selera.",
          body: [
            "Lime #A1E433 di atas putih hanya menghasilkan kontras 1,47:1 — jauh di bawah ambang WCAG AA yang 4,5:1, dan praktis tidak terbaca. Warna yang sama di atas #0A0A0A melompat ke 12,88:1, lewat dari ambang AAA.",
            "Artinya warna sinyal ini hanya hidup di atas gelap. Daripada melemahkannya jadi hijau yang lebih tua dan lebih tumpul demi muat di tema terang, sistemnya dibalik: gelap jadi default, dan lime dibiarkan setajam aslinya.",
            "Konsekuensinya konsisten di seluruh penerapan — app icon, profil sosial, sampai poster — semuanya berangkat dari latar gelap.",
          ],
          stats: [
            { value: "12,88:1", label: "lime di atas ink — lolos AAA" },
            { value: "1,47:1", label: "lime di atas putih — gagal AA" },
            { value: "18,97:1", label: "teks kertas di atas ink" },
          ],
        },
        {
          heading: "Fotografi",
          lead:
            "Orang yang sedang berpindah tempat, bukan orang yang sedang berpose di kantor.",
          body: [
            "Arah fotonya memilih momen transit — peron, lorong bawah tanah, perjalanan. Secara harfiah ini adalah orang di antara dua titik, dan itu posisi yang sama dengan pengguna Match: di antara pekerjaan yang sekarang dan yang berikutnya.",
            "Semua foto diberi cast hijau supaya menyatu dengan palet, dan dibiarkan gelap sehingga mark atau teks lime bisa duduk di atasnya tanpa kehilangan kontras.",
          ],
        },
        {
          heading: "Penerapan",
          lead:
            "Mark yang sama dipakai dari 16 piksel sampai sebesar dinding.",
          bullets: [
            "Favicon dan tab browser — mark saja, tanpa wordmark, pada matchwork.com",
            "App icon iOS — mark lime di atas ink, berdiri di antara ikon sistem tanpa tenggelam",
            "Profil sosial — avatar bundar dengan pattern diagonal sebagai header",
            "Media luar ruang — mark putih dan tagline di atas foto transit",
          ],
        },
        {
          heading: "Dua permukaan, dua sistem warna",
          lead:
            "Yang dilihat sekilas dan yang dipakai berjam-jam tidak bisa memakai aturan warna yang sama.",
          body: [
            "Permukaan brand — poster, app icon, profil sosial — bekerja dalam hitungan detik. Tugasnya menarik perhatian, jadi lime di atas gelap adalah pilihan yang tepat: kontras 12,88:1 dan warna yang sulit diabaikan.",
            "Permukaan produk bekerja sebaliknya. Pengguna membaca puluhan lowongan berturut-turut, dan latar gelap dengan aksen neon justru melelahkan di sesi panjang. Karena itu antarmuka Matchwork berdiri di atas sistem terang dengan aksen emerald #0b8457 — kontras 4,72:1 di atas putih, cukup untuk lolos AA sebagai warna tombol, tapi tidak berteriak.",
            "Keduanya tetap satu keluarga karena berangkat dari hijau. Yang berubah hanya suhu dan terangnya, menyesuaikan lama waktu orang menatapnya.",
          ],
          table: {
            head: ["", "Permukaan brand", "Permukaan produk"],
            rows: [
              ["Latar", "#0A0A0A", "#FFFFFF"],
              ["Aksen", "#A1E433", "#0b8457"],
              ["Kontras aksen", "12,88:1 di ink", "4,72:1 di putih"],
              ["Durasi pakai", "Hitungan detik", "Hitungan jam"],
              ["Tugas", "Menarik perhatian", "Menjaga keterbacaan"],
            ],
          },
        },
        {
          heading: "Penerapan di produk",
          lead:
            "Janji “match” harus kelihatan angkanya, bukan cuma jadi nama.",
          body: [
            "Daftar lowongan tidak diurutkan berdasarkan tanggal, melainkan berdasarkan kecocokan — setiap baris membawa persentasenya sendiri, dari 92% sampai 69%. Pengguna langsung tahu urutannya berdasarkan apa.",
            "Angka itu lalu dibuka isinya. Panel detail memecah skor 92% menjadi empat baris bernama: Skills, Experience, Domain, dan Work mode, masing-masing ditandai Match, Bonus, atau Check. Satu angka berubah jadi empat alasan yang bisa diperiksa, dan ketidakcocokan tidak disembunyikan — work mode yang belum pas tetap ditandai Check.",
            "Asisten AI-nya duduk di panel yang sama lewat “Ask about this role”, lengkap dengan pertanyaan siap pakai seperti “Is the salary fair for my level?” dan tombol “Tailor my resume”. Di bawahnya ada satu baris yang sengaja tidak dihilangkan: “AI can make mistakes. Always check details with the employer.”",
          ],
        },
        {
          heading: "Penutup",
          body: [
            "Identitas ini dibangun dari satu gagasan yang sama di tiap lapisnya: dua sisi yang saling mengunci. Gagasan itu ada di nama, ada di gerigi logonya, dan ada di cara skor kecocokan dipecah jadi alasan yang bisa diperiksa.",
            "Yang membuatnya bertahan bukan konsistensi warna yang kaku, melainkan konsistensi maksud — tiap permukaan memakai warna yang sesuai dengan berapa lama orang menatapnya.",
          ],
        },
      ],
    },
  },
];

/** Terbaru di atas. */
export const projects: ProjectItem[] = [...projectsByDateAdded].reverse();

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