import { A } from "./assets";
import type { Txt } from "./i18n";

export const profile = {
  name: "Rafly Januar Raharjo",
  role: { id: "UI / UX Designer", en: "UI / UX Designer" },
  bio: [
    {
      id: "Sebagai UI/UX Designer Intern di Alfagift, saya ikut merancang solusi desain yang berpusat pada pengguna untuk produk digital, dengan bersandar pada riset UX, Figma, dan prinsip design system. Saya bekerja berdampingan dengan para pemangku kepentingan untuk memahami kebutuhan pengguna, menemukan masalah kegunaan, lalu menerjemahkan temuan itu jadi antarmuka yang mudah dipakai dan bisa dikembangkan.",
      en: "As a UI/UX Designer Intern at Alfagift, I contribute to creating user-centered design solutions for digital products by applying UX research, Figma, and design system principles. I work closely with stakeholders to understand user needs, identify usability issues, and translate insights into intuitive and scalable interface solutions.",
    },
    {
      id: "Pekerjaan saya mencakup riset pengguna dan analisis kebutuhan, pemetaan user flow, pembuatan wireframe dan prototype interaktif, penyusunan desain UI high-fidelity, serta rekomendasi perbaikan berdasarkan masalah yang ditemukan. Saya juga ikut membenahi arsitektur informasi, navigasi, dan pengalaman pengguna secara menyeluruh agar alur kerja operasional berjalan lebih efisien.",
      en: "My responsibilities include conducting user research and needs analysis, mapping user flows, creating wireframes and interactive prototypes, developing high-fidelity UI designs, and providing redesign recommendations based on identified pain points. I also contribute to improving information architecture, navigation, and overall user experience to support more efficient operational workflows.",
    },
    {
      id: "Lewat pendekatan berulang yang berpusat pada pengguna, saya menjembatani kebutuhan pengguna dengan kebutuhan bisnis, sambil menjaga konsistensi, kemudahan pakai, dan kualitas visual di seluruh pengalaman produk.",
      en: "Through an iterative, user-centered approach, I help bridge user needs and business requirements while maintaining consistency, usability, and visual quality across the product experience.",
    },
  ],
  /**
   * Ikon sosmed di bawah bio. Di HP, link ini otomatis membuka app-nya kalau terpasang.
   * Di desktop, hover memunculkan screenshot profil aslinya (`preview`).
   */
  headline: {
    id: "UI/UX Designer Intern di Alfagift",
    en: "UI/UX Designer Intern at Alfagift",
  },
  socials: [
    { id: "linkedin", label: "LinkedIn", handle: "in/rafly-januar-raharjo", preview: "/assets/social/linkedin.webp", href: "https://www.linkedin.com/in/rafly-januar-raharjo" },
    { id: "instagram", label: "Instagram", handle: "@rafly_jnr", preview: "/assets/social/instagram.webp", href: "https://www.instagram.com/rafly_jnr" },
    { id: "dribbble", label: "Dribbble", handle: "@KRISSz_", preview: "/assets/social/dribbble.webp", href: "https://dribbble.com/KRISSz_" },
    { id: "fastwork", label: "Fastwork", handle: "@rafproject", preview: "/assets/social/fastwork.webp", href: "https://fastwork.id/user/rafproject" },
  ],
};

export const cta = {
  headline: {
    id: "Merancang produk digital yang benar-benar dimengerti orang.",
    en: "Designing digital products people actually understand.",
  },
  tagline: {
    id: "Riset UX, desain antarmuka, dan design system untuk alur kerja operasional yang nyata.",
    en: "UX research, interface design, and design systems for real operational workflows.",
  },
  label: { id: "Hubungi saya", en: "Get in touch" },
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
  /** Penyelenggara. Opsional - ada award yang penyelenggaranya belum dicatat. */
  org?: string;
  year: string;
  bullets?: string[];
  images?: string[];
};

export const awards: AwardItem[] = [
  { title: "Finalist – PlayIT UI/UX Hackathon", org: "PlayIT", year: "2026" },
  { title: "3rd Place – National UI/UX Design Competition RAFAETECH 2025", org: "Fakultas Sains dan Teknologi, Universitas Islam Negeri Raden Fatah Palembang", year: "2025" },
  { title: "3rd Place Design Challenge - Intechfest 2025", org: "Politeknik Negeri Bali", year: "2025" },
  { title: "2nd Place – National UI/UX Design Competition 2025", org: "Himpunan Mahasiswa Sistem Informasi, UNISNU Jepara", year: "2025" },
  { title: "Finalis UI/UX Design – Silogy Expo Education Fair 2025", org: "Himpunan Mahasiswa Sistem Informasi UNSIKA", year: "2025" },
  { title: "Finalis 10 Besar – UI/UX in Action", org: "KSM Multimedia UPN \u201cVeteran\u201d Jakarta", year: "2025" },
];

export type ProjectItem = {
  slug: string;
  title: string;
  summary: Txt;
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

export type StoryStat = { value: Txt; label: Txt };
export type StoryCard = { title: Txt; meta?: Txt; body: Txt };

export type StorySection = {
  heading: Txt;
  /** Kalimat pembuka di bawah judul section. */
  lead?: Txt;
  body?: Txt[];
  bullets?: Txt[];
  /** Daftar bernomor, mis. pain point 01..04. */
  steps?: { title: Txt; body: Txt }[];
  stats?: StoryStat[];
  cards?: StoryCard[];
  /** Tabel dua kolom label-nilai, mis. ringkasan project. */
  rows?: { label: Txt; value: Txt }[];
  /** Tabel penuh. Sel boleh true (centang) atau false (silang). */
  table?: { head: Txt[]; rows: (Txt | boolean)[][] };
  image?: { src: string; alt: Txt; caption?: Txt };
  /** Gambar lebar bertumpuk, masing-masing berketerangan. Untuk sebelum-sesudah. */
  figures?: { src: string; alt: Txt; caption?: Txt }[];
  /** Deretan layar HP. */
  gallery?: { src: string; alt: Txt }[];
  /** Tautan di akhir section, mis. "Lihat detail" ke board Figma. */
  links?: { label: Txt; href: string }[];
};

export type Story = {
  tagline: Txt;
  /** Baris ringkas di kepala halaman: peran, tahun, tim, tools. */
  meta: { label: Txt; value: Txt }[];
  sections: StorySection[];
  links?: { label: Txt; href: string }[];
};

/**
 * Urutkan sesuai waktu ditambahkan: project baru cukup ditaruh PALING BAWAH
 * daftar ini, nanti otomatis tampil paling atas di home dan /portfolio.
 */
const projectsByDateAdded: ProjectItem[] = [
  {
    slug: "apo-mitra",
    title: "APO Mitra - Alfagift",
    summary: {
      id: "Membenahi visibilitas trip, navigasi, dan alur pengantaran supaya mitra bisa menyelesaikan order lebih efisien.",
      en: "Improving trip visibility, navigation, and delivery workflows to help mitra complete orders more efficiently.",
    },
    pdf: "/case-study/apo-mitra.pdf",
    tags: ["Mobile App"],
    prototype:
      "https://www.figma.com/proto/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=542-4499&starting-point-node-id=542%3A4499",
    cover: A.apoCover,
    story: {
      tagline: "Mitra Management & Order Platform",
      meta: [
        { label: { id: "Peran", en: "Role" }, value: "UI/UX Designer" },
        { label: { id: "Platform", en: "Platform" }, value: "Mobile App" },
        { label: { id: "Durasi", en: "Duration" }, value: { id: "3 bulan", en: "3 months" } },
        { label: { id: "Metode", en: "Method" }, value: { id: "User Centered Design", en: "User Centered Design" } },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: { id: "Objective", en: "Objective" },
              value:
                { id: "Meningkatkan kemudahan mitra dalam mengelola aktivitas, menerima informasi, dan memantau status order melalui aplikasi APO Mitra.", en: "Make it easier for mitra to manage their activity, receive information, and track order status through the APO Mitra app." },
            },
            {
              label: { id: "Target user", en: "Target user" },
              value:
                { id: "Mitra atau partner yang menggunakan APO untuk menjalankan aktivitas operasional.", en: "Mitra - the delivery partners who use APO to carry out their daily operations." },
            },
            {
              label: { id: "Focus", en: "Focus" },
              value:
                { id: "Simplifikasi flow, meningkatkan visibility informasi, dan mengurangi friction dalam proses operasional.", en: "Simplify the flow, make information more visible, and remove friction from operational work." },
            },
          ],
          body: [
            { id: "APO Mitra dirancang sebagai platform yang membantu mitra menjalankan aktivitas operasional secara lebih mudah dan terstruktur. Namun beberapa proses masih memiliki friction: informasi yang tersebar, status yang kurang jelas, serta alur yang membutuhkan beberapa langkah untuk menyelesaikan satu task.", en: "APO Mitra is built to help partners run their operational work more easily and in a more structured way. Several processes still carry friction, though: information is scattered, status is not always clear, and some tasks take several steps to finish." },
          ],
          image: {
            src: A.apoCover,
            alt: { id: "Kumpulan layar hasil redesign APO Mitra", en: "The screens from the APO Mitra redesign" },
            caption: { id: "Redesign APO MITRA - pembaruan flow dan tampilan dengan metode UCD", en: "APO MITRA redesign - reworked flows and visuals using a user-centered design approach" },
          },
        },
        {
          heading: { id: "Problem", en: "Problem" },
          lead:
            { id: "Aplikasi adalah media utama mitra untuk menerima informasi, mengelola order, dan menjalankan aktivitas layanan.", en: "The app is a partner's main channel for receiving information, managing orders, and carrying out service work." },
          body: [
            { id: "Dari evaluasi terhadap experience APO Mitra, ditemukan empat area yang masih bisa dioptimalkan.", en: "Evaluating the APO Mitra experience surfaced four areas with room to improve." },
          ],
          steps: [
            {
              title: { id: "Informasi kurang terstruktur", en: "Information lacks structure" },
              body:
                { id: "Informasi penting belum selalu ditampilkan berdasarkan prioritas, sehingga mitra butuh waktu lebih lama untuk menemukan yang dibutuhkan.", en: "Important information is not always ordered by priority, so partners spend longer finding what they need." },
            },
            {
              title: { id: "Status kurang terlihat", en: "Status is hard to see" },
              body:
                { id: "Mitra tidak selalu mendapat gambaran yang jelas mengenai status proses atau order yang sedang berjalan.", en: "Partners do not always get a clear picture of where a process or an in-flight order stands." },
            },
            {
              title: { id: "Flow terlalu panjang", en: "The flow runs too long" },
              body:
                { id: "Beberapa aktivitas membutuhkan banyak langkah sebelum mitra dapat menyelesaikan task.", en: "Some activities take many steps before a partner can finish the task." },
            },
            {
              title: { id: "Informasi operasional tersebar", en: "Operational information is scattered" },
              body:
                { id: "Informasi terkait aktivitas mitra berada di beberapa bagian aplikasi, sehingga meningkatkan cognitive load.", en: "Information about a partner's activity is spread across several parts of the app, which raises cognitive load." },
            },
          ],
        },
        {
          heading: { id: "Goal", en: "Goal" },
          lead:
            { id: "Mengoptimalkan experience APO Mitra dengan informasi yang lebih terstruktur, status yang lebih mudah dipahami, serta alur aktivitas yang lebih sederhana dan efisien.", en: "Improve the APO Mitra experience with better-structured information, status that reads at a glance, and simpler, more efficient task flows." },
        },
        {
          heading: { id: "User research", en: "User research" },
          lead:
            { id: "Memahami pengalaman mitra saat menggunakan APO Mitra dan menjalankan proses delivery.", en: "Understand what partners go through while using APO Mitra and running a delivery." },
          bullets: [
            { id: "Aktivitas yang dilakukan mitra selama proses delivery", en: "What partners actually do during a delivery" },
            "Hambatan saat menjalankan order",
            "Cara mitra menemukan lokasi customer",
            "Penggunaan aplikasi saat proses pengantaran",
            { id: "Kendala komunikasi dengan customer", en: "Obstacles in communicating with customers" },
            { id: "Informasi yang dibutuhkan selama delivery", en: "Information needed while delivering" },
            { id: "Feedback dan keluhan dari mitra", en: "Feedback and complaints from partners" },
          ],
          body: [
            { id: "Salah satu feedback dari mitra menunjukkan aplikasi memiliki banyak perpindahan halaman dan proses loading yang terasa lama. Mitra juga menginginkan navigasi yang bisa dilakukan langsung di dalam aplikasi, supaya tidak perlu berpindah ke Google Maps.", en: "One piece of feedback pointed to too many page changes and loading that feels slow. Partners also wanted navigation built into the app itself, so they would not have to switch over to Google Maps." },
          ],
        },
        {
          heading: { id: "Competitor analysis", en: "Competitor analysis" },
          lead:
            { id: "Membandingkan APO Mitra dengan Astro untuk menemukan celah yang bisa digarap.", en: "Comparing APO Mitra against Astro to find gaps worth closing." },
          table: {
            head: [{ id: "Feature", en: "Feature" }, "APO Mitra", "Astro", { id: "Opportunity", en: "Opportunity" }],
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
            { id: "Astro menunjukkan pendekatan yang lebih berpihak pada driver dalam hal navigasi, routing, dan penanganan masalah pengiriman. Ini membuka peluang bagi APO Mitra untuk mengurangi perpindahan aplikasi dan membuat keputusan saat delivery lebih actionable.", en: "Astro takes a more driver-friendly approach to navigation, routing, and handling delivery problems. That opens an opportunity for APO Mitra to cut down on app switching and make in-delivery decisions more actionable." },
          ],
        },
        {
          heading: { id: "User persona", en: "User persona" },
          lead: { id: "Rider mitra yang menjalankan delivery setiap hari.", en: "A partner rider who runs deliveries every day." },
          cards: [
            {
              title: { id: "Goals", en: "Goals" },
              body:
                { id: "Menyelesaikan delivery dengan efisien, menemukan lokasi customer dengan mudah, mendapatkan informasi order yang jelas, dan lanjut ke order berikutnya dengan cepat.", en: "Finish deliveries efficiently, find customer locations easily, get clear order information, and move on to the next order quickly." },
            },
            {
              title: { id: "Pain points", en: "Pain points" },
              body:
                { id: "Pin lokasi tidak sesuai, alamat customer tidak lengkap, harus berpindah ke Google Maps, customer tidak merespons, informasi order tidak selalu mudah ditemukan, dan terlalu banyak notifikasi.", en: "Location pins that are off, incomplete customer addresses, having to switch to Google Maps, customers who do not answer, order information that is hard to find, and too many notifications." },
            },
            {
              title: { id: "Needs", en: "Needs" },
              body:
                { id: "Navigasi terintegrasi, informasi order yang mudah ditemukan, status delivery yang jelas, komunikasi customer yang lebih efektif, dan flow penyelesaian order yang sederhana.", en: "Built-in navigation, order information that is easy to find, clear delivery status, more effective customer contact, and a simple flow for closing an order." },
            },
          ],
        },
        {
          heading: { id: "How might we", en: "How might we" },
          lead:
            "\u201cHow might we simplify the APO Mitra delivery experience so riders can navigate, communicate with customers, and complete orders without unnecessary friction?\u201d",
        },
        {
          heading: { id: "Information architecture", en: "Information architecture" },
          body: [
            { id: "Sitemap dan userflow disusun ulang supaya hierarki informasi lebih dangkal dan setiap aktivitas punya jalur yang konsisten.", en: "The sitemap and user flows were rebuilt so the information hierarchy sits shallower and every task follows a consistent path." },
          ],
          links: [
            {
              label: { id: "Sitemap", en: "Sitemap" },
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=0-1",
            },
            {
              label: { id: "Userflow", en: "User flow" },
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=1-186",
            },
          ],
        },
        {
          heading: { id: "Wireframe & design system", en: "Wireframe & design system" },
          body: [
            { id: "Wireframe dipakai untuk menguji struktur layar sebelum masuk ke visual, lalu design system disusun supaya komponen konsisten dan siap diserahkan ke developer.", en: "Wireframes tested the structure of each screen before any visual work, then a design system kept components consistent and ready for developer handoff." },
          ],
          links: [
            {
              label: { id: "Wireframe", en: "Wireframe" },
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=1-6580",
            },
            {
              label: { id: "Design system", en: "Design system" },
              href: "https://www.figma.com/board/ZZGAb6hvnsQkNnjD7V1wKA/Alfagift?node-id=5-2313",
            },
          ],
        },
        {
          heading: { id: "High fidelity & prototype", en: "High fidelity & prototype" },
          body: [
            { id: "Desain akhir dan prototype interaktif untuk menguji alur delivery dari menerima order sampai menyelesaikan pengantaran.", en: "Final designs and an interactive prototype for testing the delivery flow, from accepting an order to completing the drop-off." },
          ],
          gallery: [
            { src: A.apo1, alt: { id: "Layar menunggu trip", en: "Waiting for a trip" } },
            { src: A.apo2, alt: { id: "Layar trip berjalan", en: "Trip in progress" } },
            { src: A.apo3, alt: { id: "Detail order", en: "Order detail" } },
            { src: A.apo4, alt: { id: "Navigasi menuju customer", en: "Navigating to the customer" } },
            { src: A.apo5, alt: { id: "Proof of delivery", en: "Proof of delivery" } },
          ],
          links: [
            {
              label: { id: "Design hi-fi", en: "Hi-fi design" },
              href: "https://www.figma.com/design/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=355-1386",
            },
          ],
        },
      ],
      links: [
        {
          label: { id: "Prototype Figma", en: "Figma prototype" },
          href:
            "https://www.figma.com/proto/ByEBlomNpqZpKN169PWxgt/Intern-Alfagift?node-id=542-4499&starting-point-node-id=542%3A4499",
        },
      ],
    },
  },
  {
    slug: "edunex",
    title: "EDUNEX - Learn. Grow. Connect.",
    summary: {
      id: "Ekosistem super-app yang menyatukan beasiswa, bantuan finansial, kompetisi, kursus, dan persiapan karier berbantuan AI dalam satu platform. Diuji ke 11 tester: success rate 100%, rata-rata selesai 20 detik.",
      en: "Super-app ecosystem bringing scholarships, financial aid, competitions, courses, and AI-assisted career prep into one platform. Validated with 11 testers: 100% success rate, 20s average completion time.",
    },
    pdf: "/case-study/edunex.pdf",
    tags: ["Mobile App"],
    prototype:
      "https://www.figma.com/proto/A4CUpEVRhXkR5qzuhPBxJ9/Lomba-UI-UX-LDR?node-id=14-3602&starting-point-node-id=14%3A3602",
    cover: A.edunexCover,
    story: {
      tagline: "Your Next Step Starts Here",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: { id: "Tim", en: "Team" }, value: "Tim LDR" },
        { label: "Metode", value: "User Centered Design" },
        { label: { id: "Tools", en: "Tools" }, value: "Figma, Maze" },
      ],
      sections: [
        {
          heading: { id: "Latar belakang", en: "Background" },
          lead:
            { id: "Jutaan masyarakat Indonesia masih menghadapi keterbatasan akses pendidikan dan pekerjaan.", en: "Millions of Indonesians still face limited access to education and work." },
          body: [
            { id: "Per Agustus 2025 tercatat 7,46 juta orang menganggur di Indonesia. Di sisi lain, sekitar 3,9 juta anak diperkirakan berada di luar sekolah, dan 22,4% responden menyebut biaya pendidikan sebagai salah satu alasan tidak bersekolah.", en: "As of August 2025, 7.46 million people in Indonesia were unemployed. At the same time, an estimated 3.9 million children were out of school, and 22.4% of respondents named the cost of education as one reason for not attending." },
            { id: "Keterbatasan akses dan kendala biaya mempersempit peluang seseorang untuk berkembang dan memasuki dunia kerja. Sumber: BPS 2024–2025 dan UNICEF Indonesia.", en: "Limited access and cost barriers narrow a person's chance to grow and enter the workforce. Sources: BPS 2024–2025 and UNICEF Indonesia." },
          ],
          stats: [
            { value: { id: "7,46 juta", en: "7.46 million" }, label: { id: "pengangguran, Agustus 2025", en: "unemployed, August 2025" } },
            { value: { id: "3,9 juta", en: "3.9 million" }, label: { id: "anak di luar sekolah", en: "children out of school" } },
            { value: "22,4%", label: { id: "terhambat biaya pendidikan", en: "blocked by education costs" } },
          ],
        },
        {
          heading: { id: "Memahami konteks", en: "Understanding the context" },
          lead:
            { id: "Wawancara eksploratif dengan tiga mahasiswa dari disiplin ilmu berbeda.", en: "Exploratory interviews with three students from different disciplines." },
          cards: [
            {
              title: "Marrysa Salsabila",
              meta: "Akuntansi - Polinema",
              body:
                { id: "Kesulitan mencari informasi terpusat soal beasiswa, dan sulit mengakses kompetisi di luar kampus. Butuh agregator yang terpusat dan transparan.", en: "Struggles to find scholarship information in one place, and finds competitions outside campus hard to reach. Needs a single, transparent aggregator." },
            },
            {
              title: "Febrian Arka Samudra",
              meta: "Teknik Informatika - Polinema",
              body:
                { id: "Sulit menemukan wadah kolaborasi lintas jurusan, dan cemas menghadapi standar rekrutmen industri. Butuh persiapan rekrutmen yang terstruktur.", en: "Finds it hard to collaborate across majors, and feels anxious about industry recruitment standards. Needs structured recruitment preparation." },
            },
            {
              title: "Marwah Sinta",
              meta: "Akuntansi - Polinema",
              body:
                { id: "Menghadapi hambatan finansial mendadak untuk kebutuhan belajar, dan minim sarana latihan wawancara. Butuh bantuan cepat terverifikasi dan simulasi interaktif.", en: "Hits sudden financial obstacles for study needs, with few places to practise interviews. Needs fast verified help and interactive simulation." },
            },
          ],
        },
        {
          heading: { id: "Solusi", en: "Solution" },
          lead:
            { id: "Satu super-app yang merangkum kebutuhan mahasiswa ke dalam delapan pilar fitur.", en: "One super-app that gathers student needs into eight feature pillars." },
          bullets: [
            { id: "NexScholar - katalog dan pendaftaran beasiswa", en: "NexScholar - scholarship catalogue and applications" },
            { id: "NexAid - bantuan finansial darurat dan subsidi perangkat", en: "NexAid - emergency financial aid and device subsidies" },
            { id: "NexArena - hub kompetisi dan hackathon", en: "NexArena - competition and hackathon hub" },
            { id: "NexCareer - portal lowongan kerja dan magang", en: "NexCareer - job and internship portal" },
            "Nex Resume - AI ATS resume optimizer",
            "Nex Interview - simulator wawancara real-time",
            { id: "Nex Course & Quiz - modul belajar dan evaluasi", en: "Nex Course & Quiz - learning modules and assessment" },
            { id: "Community Forum - ruang obrolan dan study jam", en: "Community Forum - chat rooms and study jams" },
          ],
        },
        {
          heading: "Design system",
          body: [
            { id: "Biru dipilih karena memberi kesan terpercaya dan edukatif, dengan kontras yang lolos standar aksesibilitas. Warna netral membentuk hierarki teks sekaligus menjaga fokus pada konten.", en: "Blue was chosen because it reads as trustworthy and educational, with contrast that clears accessibility thresholds. Neutrals carry the text hierarchy while keeping attention on the content." },
            { id: "Font Geist dipakai karena mudah dibaca di layar mobile, dan tiga weight sudah cukup untuk hierarki yang jelas. Grid 4pt menjaga jarak antarelemen konsisten dan mudah diterapkan developer. Radius 8px memberi kesan ramah tanpa kehilangan sisi profesional, dan tinggi tombol 44px mengikuti standar Apple HIG agar nyaman disentuh.", en: "Geist was chosen for legibility on mobile screens, and three weights are enough for a clear hierarchy. A 4pt grid keeps spacing consistent and easy for developers to apply. An 8px radius feels friendly without losing professionalism, and a 44px button height follows Apple HIG so targets stay comfortable to tap." },
          ],
          image: {
            src: "/case-study/edunex-page/design-system.webp",
            alt: { id: "Papan design system EDUNEX: warna, tipografi, grid, dan komponen", en: "The EDUNEX design system board: colour, typography, grid, and components" },
          },
        },
        {
          heading: "User flow",
          image: {
            src: "/case-study/edunex-page/userflow.webp",
            alt: { id: "Diagram user flow EDUNEX", en: "The EDUNEX user flow diagram" },
          },
        },
        {
          heading: "Sitemap",
          body: [
            { id: "Terdiri dari area onboarding (splash, sign in, lupa password, sign up) dan lima menu utama di bottom navbar. Home memuat NexScholar, NexAid, NexArena, dan NexCareer dengan pola seragam: daftar, detail, formulir, lalu konfirmasi.", en: "It covers an onboarding area (splash, sign in, forgot password, sign up) and five main items in the bottom navbar. Home holds NexScholar, NexAid, NexArena, and NexCareer, all following the same pattern: list, detail, form, then confirmation." },
            { id: "Course berisi kursus, langganan, video, dan quiz. AI berisi chat Nex 4.5 dan Nex Interview. Forum berisi grup diskusi, dan Profile berisi pengaturan akun serta status pengajuan. Hierarkinya dangkal dan konsisten sehingga mudah dinavigasi.", en: "Course holds classes, subscriptions, videos, and quizzes. AI holds the Nex 4.5 chat and Nex Interview. Forum holds discussion groups, and Profile holds account settings and application status. The hierarchy stays shallow and consistent, so it is easy to navigate." },
          ],
          image: {
            src: "/case-study/edunex-page/sitemap.webp",
            alt: "Sitemap EDUNEX",
          },
        },
        {
          heading: "NexScholar",
          lead: { id: "Pendaftaran beasiswa dengan friksi seminimal mungkin.", en: "Scholarship applications with as little friction as possible." },
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
          lead: { id: "Jaring pengaman finansial yang bisa diajukan cepat.", en: "A financial safety net that can be requested quickly." },
          body: [
            { id: "Pengguna memilih jenis bantuan, mengisi formulir data diri darurat, dan melampirkan bukti persyaratan dalam satu alur linier.", en: "Users pick an aid type, fill in an emergency details form, and attach supporting evidence in one linear flow." },
          ],
          image: {
            src: "/case-study/edunex-page/nexaid.webp",
            alt: "Rangkaian layar NexAid",
          },
        },
        {
          heading: "NexArena",
          lead: { id: "Pendaftaran kompetisi multidisiplin yang disederhanakan.", en: "Simplified registration for multidisciplinary competitions." },
          body: [
            { id: "Perwakilan tim memilih cabang lomba, mempelajari pedoman, lalu mengirim berkas pendaftaran dengan umpan balik visual seketika.", en: "A team representative picks a category, reads the guidelines, then submits the entry with immediate visual feedback." },
          ],
          image: {
            src: "/case-study/edunex-page/nexarena.webp",
            alt: "Rangkaian layar NexArena",
          },
        },
        {
          heading: "NexCareer",
          lead: { id: "Portal transisi dari bangku kuliah ke dunia kerja.", en: "A bridge from the lecture hall to working life." },
          body: [
            { id: "Mahasiswa mengecek kualifikasi lowongan, mengisi profil profesional, dan mengunggah resume - memangkas cognitive load saat melamar.", en: "Students check role requirements, complete a professional profile, and upload a resume - cutting the cognitive load of applying." },
          ],
          image: {
            src: "/case-study/edunex-page/nexcareer.webp",
            alt: "Rangkaian layar NexCareer",
          },
        },
        {
          heading: "Nex Course & Quiz",
          lead: { id: "Belajar mandiri yang terstruktur dan interaktif.", en: "Self-paced learning that stays structured and interactive." },
          body: [
            { id: "Modul video terhubung langsung dengan kuis berbatas waktu. Halaman hasil menyajikan metrik pencapaian dan umpan balik dengan visual yang jelas.", en: "Video modules connect straight into timed quizzes. The results page presents achievement metrics and feedback in clear visual form." },
          ],
          image: {
            src: "/case-study/edunex-page/course-quiz.webp",
            alt: { id: "Rangkaian layar Nex Course dan Quiz", en: "The Nex Course and Quiz screens" },
          },
        },
        {
          heading: "Nex AI Chat & Interview",
          lead: { id: "Dari asisten percakapan teks ke simulasi wawancara video.", en: "From a text chat assistant to a video interview simulation." },
          body: [
            { id: "Transisinya dibuat mulus, dan alurnya ditutup halaman evaluasi berbasis data yang memberi skor serta actionable feedback.", en: "The transition is seamless, and the flow closes with a data-driven evaluation page that gives a score and actionable feedback." },
          ],
          image: {
            src: "/case-study/edunex-page/ai-chat-interview.webp",
            alt: { id: "Rangkaian layar Nex AI Chat dan Nex Interview", en: "The Nex AI Chat and Nex Interview screens" },
          },
        },
        {
          heading: "Community Forum",
          lead: "Mengadaptasi pola mental aplikasi pesan instan.",
          body: [
            { id: "Kurva belajarnya nyaris nol: pengguna langsung mencari topik, bergabung ke ruang study jam yang difasilitasi mentor, dan berinteraksi lewat hierarki gelembung chat yang familier.", en: "The learning curve is close to zero: users search a topic, join a mentor-led study jam room, and interact through a familiar chat-bubble hierarchy." },
          ],
          image: {
            src: "/case-study/edunex-page/forum.webp",
            alt: "Rangkaian layar Community Forum",
          },
        },
        {
          heading: { id: "Usability testing", en: "Usability testing" },
          lead:
            { id: "Pengujian daring lewat Maze bersama 11 tester yang sesuai target pengguna.", en: "Remote testing through Maze with 11 testers matching the target users." },
          body: [
            { id: "Setiap tester diberi skenario dan serangkaian tugas, sementara sistem mencatat perilaku mereka selama pengujian berlangsung.", en: "Each tester was given a scenario and a set of tasks while the system recorded their behaviour throughout." },
          ],
          stats: [
            { value: "11", label: { id: "tester", en: "testers" } },
            { value: "100%", label: { id: "success rate", en: "success rate" } },
            { value: { id: "20 detik", en: "20 seconds" }, label: { id: "rata-rata waktu penyelesaian", en: "average completion time" } },
          ],
        },
        {
          heading: { id: "Kesimpulan", en: "Conclusion" },
          body: [
            { id: "EDUNEX menjawab tiga keresahan yang muncul berulang di riset: fragmentasi informasi, kendala finansial, dan kecemasan menghadapi rekrutmen industri - dirangkum ke dalam delapan pilar fitur yang terpusat.", en: "EDUNEX answers three concerns that kept surfacing in research - scattered information, financial barriers, and anxiety about industry recruitment - gathered into eight feature pillars in one place." },
            { id: "Design system-nya mengikuti standar Apple HIG untuk menekan cognitive load lewat navigasi yang konsisten. Hasilnya diuji secara empiris: 100% success rate dengan rata-rata penyelesaian 20 detik.", en: "Its design system follows Apple HIG to lower cognitive load through consistent navigation. The result was tested empirically: a 100% success rate with an average completion time of 20 seconds." },
          ],
          bullets: [
            { id: "SDG 4 - pendidikan inklusif lewat pembelajaran interaktif dan ekosistem mentor", en: "SDG 4 - inclusive education through interactive learning and a mentor ecosystem" },
            { id: "SDG 8 - kesiapan kerja lewat simulasi wawancara AI dan portal lowongan", en: "SDG 8 - work readiness through AI interview simulation and a job portal" },
            { id: "SDG 10 - pemerataan informasi bantuan finansial dan beasiswa", en: "SDG 10 - equal access to information on financial aid and scholarships" },
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
    summary: {
      id: "Redesign landing page dan aplikasi VPN gaming dari brief klien: mekanisme waitlist pra-rilis, tiga janji produk yang diulang di onboarding, dan belasan layar yang belum ada di brief.",
      en: "Landing page and app redesign for a gaming VPN, built from a client brief: the pre-launch waitlist mechanic, three product promises echoed in onboarding, and a dozen screens the brief never covered.",
    },
    pdf: "/case-study/glidexa.pdf",
    tags: ["Website", "Mobile App"],
    prototype: "https://glidexa-vpn.vercel.app/",
    cover: A.glidexaCover,
    story: {
      tagline: "Gaming VPN - Landing Page & App Redesign",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: { id: "Jenis", en: "Type" }, value: { id: "Project klien", en: "Client project" } },
        { label: "Platform", value: { id: "Website & Mobile App", en: "Website & Mobile App" } },
        { label: { id: "Status", en: "Status" }, value: { id: "Pra-rilis", en: "Pre-launch" } },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: { id: "Produk", en: "Product" },
              value:
                { id: "VPN yang diposisikan khusus untuk gaming - menekan latency saat bermain, bukan sekadar menyembunyikan lokasi.", en: "A VPN positioned specifically for gaming - cutting in-match latency, not just hiding your location." },
            },
            {
              label: { id: "Titik awal", en: "Starting point" },
              value:
                { id: "Brief dari klien berisi wireframe landing page, empat proposisi, mekanisme booking pra-rilis, dan anotasi alur teknis di balik tiap layar.", en: "A client brief containing landing page wireframes, four propositions, the pre-launch booking mechanic, and annotations for the technical flow behind each screen." },
            },
            {
              label: "Objective",
              value:
                { id: "Menerjemahkan brief itu jadi landing page dan aplikasi yang siap dibangun, sekaligus menutup celah yang belum terjawab di brief.", en: "Turn that brief into a landing page and app ready to build, while closing the gaps the brief left unanswered." },
            },
          ],
          body: [
            { id: "Berbeda dari project lain di portofolio ini, GLIDEXA berangkat dari brief klien, bukan dari riset mandiri. Kebutuhan, fitur, dan mekanisme bisnisnya sudah ditentukan; kontribusi desainnya ada pada menerjemahkan semua itu jadi alur yang bisa dijalankan, lalu melengkapi bagian yang belum terpikirkan.", en: "Unlike the other projects here, GLIDEXA started from a client brief rather than my own research. The requirements, features, and business mechanics were already set; the design contribution lay in turning all of it into flows that could actually run, then filling in the parts nobody had thought through yet." },
          ],
        },
        {
          heading: { id: "Tantangan: menjual produk yang belum ada", en: "The challenge: selling a product that does not exist yet" },
          lead:
            { id: "Saat landing page ini dirancang, aplikasinya belum rilis.", en: "When this landing page was designed, the app had not launched." },
          body: [
            { id: "Situasi ini menutup pola yang biasa dipakai halaman produk - tidak ada tombol install yang benar-benar berfungsi, tidak ada screenshot store, tidak ada ulasan pengguna. Yang tersedia hanya janji.", en: "That rules out the patterns a product page normally leans on - no install button that actually works, no store screenshots, no user reviews. All that is left is a promise." },
            { id: "Karena itu halamannya dibangun di sekitar satu pertanyaan: apa yang membuat orang mau menunggu? Jawabannya ada pada dua hal - bukti bahwa orang lain sudah menunggu, dan imbalan konkret bagi yang menunggu lebih awal. Brief klien menyebut keduanya; yang perlu dikerjakan adalah membuat keduanya terbaca sejak layar pertama.", en: "So the page was built around one question: what makes someone willing to wait? The answer rests on two things - proof that others are already waiting, and a concrete reward for waiting early. The client brief named both; the work was making both readable from the first screen." },
          ],
        },
        {
          heading: { id: "Hero: dari klaim ke janji yang spesifik", en: "Hero: from a claim to a specific promise" },
          lead:
            { id: "Headline-nya diganti, dan itu perubahan paling menentukan di halaman ini.", en: "The headline was replaced, and it is the most consequential change on the page." },
          body: [
            { id: "Brief menuliskan “Fastest VPN ready for online - For your Gaming Acceleration”. Masalahnya, “fastest” adalah klaim yang dipakai hampir semua VPN, dan “gaming acceleration” terdengar seperti istilah teknis ketimbang manfaat.", en: "The brief read “Fastest VPN ready for online - For your Gaming Acceleration”. The trouble is that “fastest” is a claim almost every VPN makes, and “gaming acceleration” sounds like jargon rather than a benefit." },
            { id: "Versi redesign memakai “Stable ping. Zero lag. Game like nothing's in your way.” Tiga hal berubah: janjinya jadi spesifik dan bisa diuji, bahasanya memakai kosakata pemain, dan kalimat penutupnya menggambarkan perasaan main tanpa gangguan alih-alih menyebut fitur.", en: "The redesign uses “Stable ping. Zero lag. Game like nothing's in your way.” Three things change: the promise becomes specific and testable, the language borrows a player's vocabulary, and the closing line describes how it feels to play undisturbed instead of naming a feature." },
            { id: "Counter pun naik derajat. Di brief ia hanya angka di tengah hero; di redesign ia jadi pita tersendiri bertuliskan “80+ Early Access Waitlist”, ditambah pita pengumuman di paling atas halaman yang menjelaskan keuntungan ikut lebih awal. Bukti sosialnya jadi sulit dilewatkan.", en: "The counter is promoted too. In the brief it was just a number in the middle of the hero; in the redesign it becomes its own band reading “80+ Early Access Waitlist”, plus an announcement strip at the very top explaining what joining early is worth. The social proof becomes hard to miss." },
          ],
          figures: [
            {
              src: A.glidexaHero,
              alt: { id: "Hero versi brief klien", en: "The hero as specified in the client brief" },
              caption: { id: "Versi brief - klaim “Fastest VPN”, counter sebagai angka lepas di tengah", en: "Brief version - a “Fastest VPN” claim, with the counter as a loose number in the middle" },
            },
            {
              src: A.gx2Hero,
              alt: { id: "Hero versi redesign dengan pita waitlist", en: "The redesigned hero with its waitlist band" },
              caption: { id: "Versi redesign - janji spesifik, pita pengumuman di atas, waitlist jadi pita tersendiri", en: "Redesigned version - a specific promise, an announcement strip on top, and the waitlist as its own band" },
            },
          ],
        },
        {
          heading: { id: "Tiga janji, diulang dua kali", en: "Three promises, made twice" },
          lead:
            { id: "Apa yang dijanjikan di web adalah hal pertama yang dibaca di aplikasi.", en: "What the website promises is the first thing you read inside the app." },
          body: [
            { id: "Section “Show your gaming skill to the world” memecah produk jadi tiga janji: Built for zero lag, Connect in one tap, dan Privacy not a policy. Masing-masing dapat satu visual yang menunjukkan wujudnya - meteran kecepatan, pemilih server, dan perisai data.", en: "The “Show your gaming skill to the world” section breaks the product into three promises: Built for zero lag, Connect in one tap, and Privacy not a policy. Each gets one visual showing what it looks like - a speed gauge, a server picker, and a data shield." },
            { id: "Tiga janji yang sama persis muncul lagi sebagai tiga layar onboarding di aplikasi, dengan urutan dan visual yang sama. Orang yang mendaftar dari landing page tidak menemukan produk yang berbeda dari yang dijanjikan; ia menemukan kalimat yang sama, kali ini di dalam aplikasinya.", en: "Those same three promises reappear as three onboarding screens in the app, in the same order with the same visuals. Someone who signed up from the landing page does not find a different product than the one promised; they find the same sentences, this time inside the app." },
          ],
          gallery: [
            { src: A.gx2Onb1, alt: { id: "Onboarding 1 - Built for zero lag", en: "Onboarding 1 - Built for zero lag" } },
            { src: A.gx2Onb2, alt: { id: "Onboarding 2 - Connect in one tap", en: "Onboarding 2 - Connect in one tap" } },
            { src: A.gx2Onb3, alt: { id: "Onboarding 3 - Privacy, not a policy", en: "Onboarding 3 - Privacy, not a policy" } },
          ],
          image: {
            src: A.gx2Pillars,
            alt: { id: "Section tiga janji di landing page", en: "The three-promise section on the landing page" },
          },
        },
        {
          heading: { id: "Empat alasan, dari kartu jadi akordeon", en: "Four reasons, from cards to an accordion" },
          lead:
            { id: "Isinya tetap, cara membacanya yang berubah.", en: "The content stays the same; the way you read it changes." },
          body: [
            { id: "Brief menyusun empat alasan - Fastest, Security First, Integrity Reason, Premium for free - sebagai empat kartu sejajar yang semuanya terbuka. Di layar panjang ini memaksa pengunjung membaca empat paragraf sekaligus, padahal hanya satu yang biasanya relevan baginya.", en: "The brief laid out four reasons - Fastest, Security First, Integrity Reason, Premium for free - as four side-by-side cards, all open. On a long page that forces a visitor to read four paragraphs at once, when usually only one is relevant to them." },
            { id: "Versi redesign mengubahnya jadi akordeon dengan satu item terbuka secara default. Judulnya tetap terlihat semua, jadi pengunjung tahu ada empat alasan, tapi hanya membaca yang ia pilih. Slot maskot yang di brief masih kosong akhirnya terisi - bukan maskot, melainkan visual petir di atas potret pemain.", en: "The redesign turns it into an accordion with one item open by default. All four headings stay visible, so a visitor knows there are four reasons but only reads the one they pick. The mascot slot left empty in the brief is finally filled - not with a mascot, but with a lightning visual over a portrait of a player." },
          ],
          figures: [
            {
              src: A.glidexaWhy,
              alt: { id: "Section Why choose us versi brief, empat kartu terbuka", en: "The Why choose us section in the brief, with four cards open" },
              caption: { id: "Versi brief - empat kartu terbuka sekaligus, plus slot maskot yang masih kosong", en: "Brief version - four cards open at once, plus an empty mascot slot" },
            },
            {
              src: A.gx2Why,
              alt: { id: "Section Why choose us versi redesign, akordeon", en: "The redesigned Why choose us section as an accordion" },
              caption: { id: "Versi redesign - akordeon dengan satu item terbuka, slot maskot terisi visual petir", en: "Redesigned version - an accordion with one item open, the mascot slot filled with a lightning visual" },
            },
          ],
        },
        {
          heading: { id: "Layar yang belum ada di brief", en: "The screens the brief never covered" },
          lead:
            { id: "Brief mengatur jalur utama. Yang menentukan produk bisa dipakai sehari-hari justru jalur sampingnya.", en: "The brief covers the main path. What decides whether a product is usable day to day is the side paths." },
          body: [
            { id: "Brief mencakup login, koneksi, daftar server, riwayat, dan langganan. Yang belum disebut: apa yang terjadi kalau pengguna lupa password, bagaimana ia mengelola perangkat yang sudah login, bagaimana ia mengganti bahasa, dan ke mana ia bertanya kalau ada masalah.", en: "The brief covers login, connection, the server list, history, and subscriptions. What it does not mention: what happens when someone forgets their password, how they manage devices already signed in, how they change language, and where they go when something breaks." },
            { id: "Lupa password dirancang tiga langkah - kirim email, masukkan enam digit kode, lalu buat password baru - ditutup dialog konfirmasi berhasil. Device Manager menampilkan berapa perangkat terpakai beserta tombol logout per perangkat, yang penting karena tiap paket membatasi jumlah perangkat. Help & Support menaruh kontak dukungan di atas, lalu FAQ di bawahnya.", en: "Forgot password runs in three steps - send an email, enter a six-digit code, then set a new password - closing with a success dialog. Device Manager shows how many devices are in use with a logout button for each, which matters because every plan caps the device count. Help & Support puts contact support at the top and the FAQ below it." },
          ],
          gallery: [
            { src: A.gx2Forgot1, alt: { id: "Lupa password - masukkan email", en: "Forgot password - enter your email" } },
            { src: A.gx2Forgot2, alt: { id: "Lupa password - kode enam digit", en: "Forgot password - six-digit code" } },
            { src: A.gx2Forgot3, alt: { id: "Lupa password - password baru", en: "Forgot password - new password" } },
            { src: A.gx2Device, alt: { id: "Device Manager dengan logout per perangkat", en: "Device Manager with per-device logout" } },
            { src: A.gx2History, alt: { id: "Riwayat aktivitas dengan filter waktu", en: "Activity history with time filters" } },
            { src: A.gx2Language, alt: "Pilihan bahasa" },
            { src: A.gx2Help, alt: { id: "Help & Support dengan kontak dan FAQ", en: "Help & Support with contact and FAQ" } },
            { src: A.gx2Profile, alt: { id: "Halaman profil", en: "The profile screen" } },
          ],
        },
        {
          heading: { id: "Angka sebelum sambung", en: "Numbers before you connect" },
          lead:
            { id: "Pemain tidak memilih server berdasarkan nama negara, tapi berdasarkan ping.", en: "Players do not pick a server by country name. They pick it by ping." },
          body: [
            { id: "Layar Home menampilkan status tersambung, durasi sesi yang berjalan, dan dua meteran - unduh 50 Mbps dan unggah 20 Mbps - dengan bar yang terisi, bukan sekadar angka. Durasi sesi ini tambahan dari brief, dan berguna justru karena VPN gaming dipakai per pertandingan.", en: "The Home screen shows connection status, a running session timer, and two meters - 50 Mbps down and 20 Mbps up - drawn as filled bars rather than bare numbers. The session timer is an addition to the brief, and it earns its place precisely because a gaming VPN is used match by match." },
            { id: "Daftar server membawa ping dan kecepatan di tiap baris, plus pemisah Recommended dan Global serta kolom pencarian. Server yang menuntut paket berbayar ditandai label Premium di tempatnya, bukan disembunyikan - pengguna tahu apa yang ia lewatkan tanpa harus membuka halaman harga.", en: "The server list carries ping and speed on every row, plus a Recommended/Global split and a search field. Servers that require a paid plan are marked Premium in place rather than hidden - users see what they are missing without opening the pricing page." },
          ],
          gallery: [
            { src: A.gx2Home, alt: { id: "Layar Home dengan durasi sesi dan meteran kecepatan", en: "The Home screen with session timer and speed meters" } },
            { src: A.gx2Server, alt: { id: "Daftar server dengan ping per baris", en: "The server list with ping on each row" } },
            { src: A.gx2Signin, alt: { id: "Layar masuk", en: "The sign-in screen" } },
            { src: A.gx2Splash, alt: { id: "Splash screen", en: "Splash screen" } },
          ],
        },
        {
          heading: { id: "Paket langganan", en: "Subscription plans" },
          lead:
            { id: "Tiga nama paket, disusun ulang dari penamaan di brief.", en: "Three plan names, reworked from the ones in the brief." },
          body: [
            { id: "Brief memakai nama Basic, Standard 5+1, dan Connected for a year - dua di antaranya menjelaskan durasi, bukan tingkatan. Redesign menggantinya jadi Basic, Plus, dan Prime: tangga yang langsung terbaca urutannya tanpa perlu membaca detail.", en: "The brief used Basic, Standard 5+1, and Connected for a year - two of which describe duration rather than tier. The redesign replaces them with Basic, Plus, and Prime: a ladder whose order reads instantly, without having to study the details." },
            { id: "Tiap kartu menampilkan daftar fitur yang sama susunannya, sehingga perbedaan antarpaket terbaca dari membandingkan baris yang sejajar, bukan dari mencari-cari.", en: "Every card lists its features in the same order, so the difference between plans comes from comparing rows that line up rather than hunting for it." },
          ],
          table: {
            head: [{ id: "Paket", en: "Plan" }, { id: "Harga", en: "Price" }, { id: "Hemat", en: "Saving" }, { id: "Server", en: "Server" }, { id: "Perangkat", en: "Devices" }, { id: "Bandwidth", en: "Bandwidth" }],
            rows: [
              ["Basic", "Rp49rb/bln", "15%", { id: "1 server", en: "1 server" }, { id: "2 perangkat", en: "2 devices" }, "–"],
              ["Plus", "Rp40rb/bln", "23%", { id: "Semua server", en: "All servers" }, { id: "3 perangkat", en: "3 devices" }, "1 TB"],
              ["Prime", "Rp36rb/bln", "30%", "Semua server", "3 perangkat", "2 TB"],
            ],
          },
          gallery: [
            { src: A.gx2Subs, alt: { id: "Halaman paket di aplikasi dengan tab Basic, Plus, Prime", en: "The in-app plans screen with Basic, Plus, and Prime tabs" } },
          ],
          image: {
            src: A.gx2Pricing,
            alt: { id: "Section harga di landing page dengan tiga kartu paket", en: "The pricing section on the landing page with its three plan cards" },
          },
        },
        {
          heading: { id: "Membangun kepercayaan", en: "Building trust" },
          lead:
            { id: "VPN meminta pengguna mempercayakan seluruh lalu lintas internetnya. Itu permintaan besar untuk produk yang belum rilis.", en: "A VPN asks users to hand over all of their internet traffic. That is a large request for a product that has not launched." },
          body: [
            { id: "Tiga hal ditambahkan untuk menjawab itu, dan ketiganya tidak ada di brief. Halaman Privacy Policy tersendiri, sehingga klaim “tidak menjual data” punya tempat untuk dijabarkan. Badge PSE dan Kominfo di footer, menandakan produknya terdaftar sebagai penyelenggara sistem elektronik di Indonesia. Dan nama badan hukum lengkap - PT Glidexa Inovasi Digital - di baris copyright, bukan sekadar nama merek.", en: "Three things were added to answer that, none of them in the brief. A dedicated Privacy Policy page, so the claim of “never selling your data” has somewhere to be spelled out. PSE and Kominfo badges in the footer, marking the product as a registered electronic system provider in Indonesia. And the full legal entity name - PT Glidexa Inovasi Digital - on the copyright line, rather than just a brand name." },
            { id: "Section FAQ melengkapi itu dari sisi lain: ia menjawab keberatan yang muncul sebelum orang menekan tombol, mulai dari apakah servernya bisa dipilih sampai apakah aplikasinya jalan di perangkat mobile.", en: "The FAQ section completes that from another angle: it answers the objections that surface before someone taps a button, from whether servers can be chosen to whether the app runs on mobile." },
          ],
          gallery: [
            { src: A.gx2Faq, alt: { id: "Section FAQ dengan satu jawaban terbuka", en: "The FAQ section with one answer open" } },
            { src: A.gx2Footer, alt: { id: "Footer dengan badge PSE dan Kominfo", en: "The footer with PSE and Kominfo badges" } },
          ],
        },
        {
          heading: { id: "Yang masih terbuka", en: "Still open" },
          lead:
            { id: "Empat hal yang sebaiknya dibereskan sebelum halaman ini dipublikasikan.", en: "Four things worth settling before this page goes live." },
          bullets: [
            { id: "Deretan logo partner di bawah hero masih bertuliskan “Loremipsum” - perlu diisi logo asli atau dihapus, karena placeholder di halaman produksi justru menurunkan kepercayaan", en: "The partner logo strip below the hero still reads “Loremipsum” - fill it with real logos or remove it, because placeholders on a live page cost more trust than they buy" },
            { id: "Prime lebih murah dari Plus (Rp36rb berbanding Rp40rb) padahal durasinya sama 5+1 bulan dan fiturnya lebih lengkap - dengan susunan ini tidak ada alasan memilih Plus", en: "Prime costs less than Plus (Rp36k against Rp40k) despite the same 5+1 month term and a fuller feature set - as it stands, there is no reason to choose Plus" },
            { id: "Urutan paket berbeda antara web dan aplikasi: landing page menampilkan Basic, Prime, Plus sementara aplikasi menampilkan Basic, Plus, Prime", en: "Plan order differs between web and app: the landing page shows Basic, Prime, Plus while the app shows Basic, Plus, Prime" },
            { id: "Kata “Bandwith” di kartu Plus dan Prime seharusnya “Bandwidth”", en: "The word “Bandwith” on the Plus and Prime cards should read “Bandwidth”" },
          ],
        },
      ],
      links: [
        { label: { id: "Lihat prototype", en: "View prototype" }, href: "https://glidexa-vpn.vercel.app/" },
      ],
    },
  },
  {
    slug: "mews-mayangan",
    title: "MEWS Mayangan - Early Warning Dashboard",
    summary: {
      id: "Dashboard pemantauan untuk stasiun peringatan dini pesisir di Desa Mayangan, Subang. Memantau tinggi muka air, cuaca, dan kesehatan perangkat, dengan tiga tingkat peringatan banjir rob yang tersambung ke sirine dan lampu indikator.",
      en: "Monitoring dashboard for a coastal early-warning station in Desa Mayangan, Subang. Tracks water level, weather, and device health, with three tidal-flood alert tiers wired to a siren and indicator lamp.",
    },
    pdf: "/case-study/mews-mayangan.pdf",
    tags: ["Dashboard"],
    prototype:
      "https://www.figma.com/proto/sgR4tLwhS8lmUuf5MVtt8T/Mayangan-Dashboard-Redesign?node-id=11-2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A2&show-proto-sidebar=1",
    video: A.mewsVideo,
    poster: A.mewsPoster,
    ratio: "16 / 9",
    story: {
      tagline: "Early Warning Dashboard - Redesign",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: "Jenis", value: { id: "Redesign", en: "Redesign" } },
        { label: "Platform", value: "Dashboard" },
        { label: { id: "Lokasi", en: "Location" }, value: { id: "Desa Mayangan, Subang", en: "Desa Mayangan, Subang" } },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: { id: "Sistem", en: "System" },
              value:
                { id: "Mayangan Early Warning System (MEWS) - stasiun pantau laut yang mendeteksi banjir rob dan membunyikan sirine saat air mencapai level kritis.", en: "Mayangan Early Warning System (MEWS) - a coastal monitoring station that detects tidal flooding and sounds a siren when the water reaches a critical level." },
            },
            {
              label: "Lokasi",
              value:
                { id: "Rumah Edukasi Mangrove Pesisir Utara Jawa Barat, Desa Mayangan, Subang. Dikelola Yayasan Wanadri dengan dukungan PT Bio Farma (Persero).", en: "Rumah Edukasi Mangrove on the north coast of West Java, in Desa Mayangan, Subang. Run by Yayasan Wanadri with support from PT Bio Farma (Persero)." },
            },
            {
              label: "Objective",
              value:
                { id: "Merancang ulang dashboard monitoring-nya supaya satu pertanyaan utama - apakah sekarang aman - bisa dijawab dalam hitungan detik.", en: "Redesign its monitoring dashboard so the one question that matters - is it safe right now - can be answered in seconds." },
            },
          ],
          body: [
            { id: "MEWS bukan dashboard analitik yang dibuka saat orang punya waktu luang. Ia dibuka justru saat air sedang naik dan orang sedang cemas. Hampir semua keputusan desain di sini berangkat dari kenyataan itu.", en: "MEWS is not an analytics dashboard opened in a spare moment. It gets opened precisely when the water is rising and people are anxious. Nearly every design decision here starts from that fact." },
          ],
        },
        {
          heading: { id: "Yang dipantau", en: "What is being monitored" },
          lead: { id: "Tiga level, tiga konsekuensi yang berbeda.", en: "Three levels, three different consequences." },
          body: [
            { id: "Alat ini memakai pelampung tiga tingkat. Setiap tingkat yang terangkat menandakan ketinggian air yang berbeda, dan yang membedakan ketiganya bukan sekadar angka melainkan apa yang otomatis terjadi sesudahnya.", en: "The station uses a three-stage float. Each stage that lifts marks a different water height, and what separates the three is not just a number but what happens automatically next." },
          ],
          table: {
            head: [{ id: "Level", en: "Level" }, { id: "Arti", en: "Meaning" }, { id: "Pemicu", en: "Trigger" }, { id: "Aksi otomatis", en: "Automatic action" }],
            rows: [
              ["L1", "Pasang normal", "Pelampung level 1 terangkat", { id: "Status tampil di dashboard dan panel lokasi", en: "Status appears on the dashboard and the on-site panel" }],
              ["L2", "Siaga rob", "Pelampung level 2 terangkat", "Status tampil di dashboard dan panel lokasi"],
              ["L3", "Banjir rob", "Pelampung level 3 terangkat", { id: "Lampu indikator, sirine, dan email otomatis", en: "Indicator lamp, siren, and automatic email" }],
            ],
          },
        },
        {
          heading: { id: "Satu layar, satu pertanyaan", en: "One screen, one question" },
          lead:
            { id: "Urutan isi dashboard mengikuti urutan yang dicari orang saat membukanya.", en: "The dashboard is ordered the way people search it when they open it." },
          body: [
            { id: "Angka tinggi muka air diletakkan paling atas dan paling besar, berdampingan dengan tertinggi, terendah, dan rata-rata hari itu - konteks yang membuat satu angka berarti sesuatu. Di bawahnya grafik, lalu baru status peringatan dini dan status alert.", en: "The water level sits at the very top and largest, beside the day's high, low, and average - the context that makes a single number mean something. Below it the chart, and only then the early-warning status and alert status." },
            { id: "Status peringatan dini menampilkan ketiga level sekaligus beserta keterangannya, bukan hanya level yang sedang aktif. Operator jadi tahu posisi air sekarang ada di mana dalam tangga itu, bukan sekadar tahu bahwa keadaan aman.", en: "The early-warning panel shows all three levels with their descriptions, not just the active one. An operator learns where the water currently stands on that ladder, rather than only that things are safe." },
            { id: "Di sidebar paling bawah ada dua hal yang terlihat di semua halaman: badge status “Aman · 0 dari 3” dan indikator “Online · 10 dtk”. Yang kedua sama pentingnya dengan yang pertama - operator perlu yakin bahwa yang ia lihat memang data terbaru.", en: "At the bottom of the sidebar, two things stay visible on every page: the status badge “Aman · 0 dari 3” and the indicator “Online · 10 dtk”. The second matters as much as the first - an operator needs to trust that what they are seeing is current." },
          ],
          image: {
            src: A.mewsDashboard,
            alt: { id: "Halaman Dashboard MEWS Mayangan", en: "The MEWS Mayangan dashboard" },
            caption:
              { id: "Dashboard - angka utama, grafik, status peringatan, cuaca, riwayat, dan ringkasan perangkat", en: "Dashboard - headline number, chart, warning status, weather, history, and a device summary" },
          },
        },
        {
          heading: { id: "Membedakan nol dari tidak terdengar", en: "Telling zero apart from silence" },
          lead: { id: "Ini keputusan paling menentukan di seluruh redesign.", en: "This is the most consequential decision in the whole redesign." },
          body: [
            { id: "Sensor cahaya menunjukkan 0 lux. Kalau ditampilkan apa adanya, angka itu terbaca sebagai keadaan normal di malam hari. Padahal pembacaan terakhirnya pukul 23:41 kemarin - sensornya sudah lama tidak mengirim apa-apa.", en: "The light sensor reads 0 lux. Shown as-is, that number reads as a normal night. But its last reading was 23:41 yesterday - the sensor has not sent anything in a long time." },
            { id: "Karena itu “Terlambat” dibuat jadi status tersendiri, berwarna merah, lengkap dengan waktu pembacaan terakhirnya. Ringkasan di atas tabel pun memisahkan ketiganya: 3 normal, 2 perlu perhatian, 1 terlambat.", en: "So “Terlambat” - stale - became a status of its own, in red, carrying the time of its last reading. The summary above the table separates all three: 3 normal, 2 needing attention, 1 stale." },
            { id: "Untuk sistem peringatan dini, sensor yang diam tidak boleh terlihat seperti sensor yang melaporkan keadaan tenang. Halaman Tentang Perangkat meneruskan logika yang sama - weather station di sana berstatus “Sebagian terlambat”, bukan sekadar aktif atau mati.", en: "In an early-warning system, a silent sensor must never look like a sensor reporting calm. The About Device page carries the same logic - the weather station there reads “Partially stale”, not simply active or off." },
          ],
          image: {
            src: A.mewsCuaca,
            alt: { id: "Halaman Cuaca dengan status Terlambat pada sensor cahaya", en: "The Weather page, with the light sensor marked stale" },
            caption:
              { id: "Sensor cahaya ditandai Terlambat beserta waktu pembacaan terakhir, bukan ditampilkan sebagai 0 lux biasa", en: "The light sensor is marked stale with its last reading time, rather than shown as a plain 0 lux" },
          },
        },
        {
          heading: { id: "Peringatan yang bisa dibaca dan diuji", en: "A warning you can read, and test" },
          lead: { id: "Halaman Alert menjelaskan mesinnya, bukan cuma melaporkan hasilnya.", en: "The Alert page explains the machinery, not just its output." },
          body: [
            { id: "Tabel “Alur peringatan” memetakan tiap level ke pemicunya dan ke aksi otomatis yang menyertainya. Operator jadi bisa memahami apa yang akan terjadi sebelum hal itu terjadi - penting untuk sistem yang sebagian besar waktunya diam.", en: "The “Alur peringatan” table maps each level to its trigger and the automatic action that follows. An operator can understand what will happen before it happens - which matters for a system that is quiet most of the time." },
            { id: "Tombol “Uji sirine” menjawab masalah khas alat peringatan: perangkat yang jarang berbunyi tidak pernah ketahuan rusak sampai saat ia paling dibutuhkan. Status sirine dan lampu pun ditulis dua lapis - “Mati” sebagai kondisi, “Standby” sebagai kesiapan - supaya mati tidak tertukar dengan rusak.", en: "The “Test siren” button answers a problem peculiar to warning equipment: a device that rarely sounds is never found broken until the moment it is needed most. Siren and lamp status are written in two layers - “Off” as the condition, “Standby” as the readiness - so off is never mistaken for broken." },
            { id: "Log alert mencatat tiap perubahan status beserta apa yang ikut menyala: sirine, lampu, dan apakah email terkirim. Jadi sesudah kejadian, jalannya peristiwa masih bisa ditelusuri.", en: "The alert log records every status change along with what fired: siren, lamp, and whether the email went out. So after an event, the sequence can still be traced." },
          ],
          image: {
            src: A.mewsAlert,
            alt: { id: "Halaman Alert dengan alur peringatan dan log", en: "The Alert page with its warning flow and log" },
            caption: { id: "Alert - level saat ini, kesiapan aktuator, alur tiap level, dan log kejadian", en: "Alert - current level, actuator readiness, the flow for each level, and the event log" },
          },
        },
        {
          heading: { id: "Data mentah itu berisik", en: "Raw data is noisy" },
          lead: { id: "333 titik data dalam tiga jam, dan garisnya bergerigi.", en: "333 data points in three hours, and the line is jagged." },
          body: [
            { id: "Grafik monitoring menampilkan data apa adanya, dan itu memang perlu - operator harus bisa melihat lonjakan yang sesungguhnya. Tapi data sementah itu menyulitkan ketika yang dicari adalah arah tren.", en: "The monitoring chart shows the data as it is, and that is necessary - an operator has to be able to see a real spike. But data that raw gets in the way when what you want is the direction of a trend." },
            { id: "Jalan keluarnya bukan memilihkan satu cara penghalusan, melainkan menyediakan lima dan membiarkan operator memilih: Asli, Agregasi per jam, Moving average, Sampling, dan Spline.", en: "The answer was not to pick one smoothing method, but to offer five and let the operator choose: Raw, Hourly aggregate, Moving average, Sampling, and Spline." },
            { id: "Yang membuatnya benar-benar berguna adalah baris keterangan di bawah tombolnya - tiap mode dijelaskan satu kalimat pendek seperti “ambil tiap n data” atau “kurva dihaluskan”. Tanpa baris itu, lima tombol hanya jadi jargon statistik; dengan baris itu, operator yang bukan analis data tetap tahu apa yang sedang ia lihat dan apa yang disembunyikan tiap mode.", en: "What makes it genuinely useful is the caption row beneath the buttons - each mode explained in one short line, like “take every nth point” or “curve smoothed”. Without that row, five buttons are just statistical jargon; with it, an operator who is not a data analyst still knows what they are looking at and what each mode hides." },
          ],
          image: {
            src: A.mewsData,
            alt: { id: "Halaman Data & Grafik dengan lima mode penghalusan grafik", en: "The Data & Chart page with its five smoothing modes" },
            caption: { id: "Lima mode penghalusan, masing-masing dengan keterangan singkat di bawahnya", en: "Five smoothing modes, each with a short explanation underneath" },
          },
        },
        {
          heading: { id: "Memakai ambang yang sudah dipercaya", en: "Borrowing thresholds people already trust" },
          lead: { id: "Kategori intensitas hujan tidak dikarang sendiri.", en: "The rain intensity categories were not invented here." },
          body: [
            { id: "Panel hujan memakai kategori BMKG - Ringan 1–5, Sedang 5–10, Lebat 10–20, dan Sangat lebat di atas 20 mm per jam - dengan sumbernya ditulis terang di judul panel.", en: "The rain panel uses BMKG's categories - Light 1–5, Moderate 5–10, Heavy 10–20, and Very heavy above 20 mm per hour - with the source named plainly in the panel title." },
            { id: "Untuk sistem yang hasilnya dipakai mengambil keputusan evakuasi, memakai ambang milik lembaga resmi lebih bisa dipertanggungjawabkan daripada menetapkan ambang sendiri, dan menyebut sumbernya membuat angka itu bisa diperiksa orang lain.", en: "For a system whose output informs evacuation decisions, using an official agency's thresholds is more defensible than setting your own, and naming the source lets someone else check the numbers." },
          ],
        },
        {
          heading: { id: "Menjelaskan dirinya sendiri", en: "Explaining itself" },
          lead: { id: "Dashboard ini juga dibuka orang yang belum pernah melihat alatnya.", en: "This dashboard is also opened by people who have never seen the equipment." },
          body: [
            { id: "Halaman Tentang Perangkat memuat enam langkah “Cara kerja - dari sensor sampai peringatan”, peta lokasi dengan koordinat yang bisa disalin, video liputan, dan tabel delapan komponen lengkap dengan fungsi serta statusnya masing-masing.", en: "The About Device page carries six steps under “How it works - from sensor to warning”, a location map with copyable coordinates, a news video, and a table of eight components with each one's function and status." },
            { id: "Satu baris di tabel itu menyingkap hal yang mudah terlewat: ada “Panel dashboard lokasi” yang tugasnya memberi informasi untuk warga di lokasi. Artinya sistem ini punya dua audiens - operator yang memantau dari jauh lewat dashboard ini, dan warga yang membaca panel di tempat. Keduanya butuh bentuk informasi yang berbeda.", en: "One row in that table reveals something easy to miss: an “on-site dashboard panel” whose job is to inform residents at the location. Which means the system has two audiences - operators monitoring remotely through this dashboard, and residents reading the panel on site. Each needs information shaped differently." },
          ],
          image: {
            src: A.mewsPerangkat,
            alt: { id: "Halaman Tentang Perangkat dengan cara kerja dan daftar komponen", en: "The About Device page with how it works and the component list" },
            caption:
              { id: "Tentang Perangkat - identitas sistem, lokasi, cara kerja enam langkah, dan status delapan komponen", en: "About Device - system identity, location, the six-step flow, and the status of eight components" },
          },
        },
      ],
      links: [
        {
          label: { id: "Sistem yang berjalan saat ini", en: "The system running today" },
          href: "https://mayangansiaga.conservation.id/",
        },
      ],
    },
  },
  {
    slug: "match",
    title: "Match - Find Your Job",
    summary: {
      id: "Identitas brand untuk platform pencari kerja yang mempertemukan orang dengan pekerjaan sesuai skill, minat, dan tujuan kariernya. Mencakup logo, palet warna, dan bagaimana marknya dipakai di web app, app icon, profil sosial, sampai media luar ruang.",
      en: "Brand identity for a job platform that connects people with work matching their skills, interests, and career goals. Covers the logo, palette, and how the mark carries across the web app, app icon, social profile, and out-of-home placements.",
    },
    pdf: "/case-study/match.pdf",
    tags: ["Branding", "Website", "Mobile App"],
    video: A.matchVideo,
    poster: A.matchPoster,
    story: {
      tagline: "Brand Identity & Visual System",
      meta: [
        { label: "Peran", value: { id: "Brand & UI Designer", en: "Brand & UI Designer" } },
        { label: "Jenis", value: { id: "Brand Identity", en: "Brand Identity" } },
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
                { id: "Platform pencari kerja yang mencocokkan orang dengan lowongan lewat personalisasi AI, bukan lewat penelusuran manual.", en: "A job platform that matches people to roles through AI personalisation rather than manual searching." },
            },
            {
              label: "Objective",
              value:
                { id: "Membangun identitas yang membuat mekanisme produk - mencocokkan - terbaca sejak logo, tanpa perlu dijelaskan lewat teks.", en: "Build an identity that makes the product's mechanism - matching - legible from the logo alone, without needing text to explain it." },
            },
            {
              label: { id: "Deliverable", en: "Deliverable" },
              value:
                { id: "Logo, palet warna, arah fotografi, pattern, penerapan di app icon, profil sosial, dan media luar ruang, sampai sistem warna untuk antarmuka produknya.", en: "Logo, colour palette, photography direction, pattern, applications across app icon, social profile, and out-of-home, through to the colour system for the product interface." },
            },
          ],
          body: [
            { id: "Match berangkat dari satu premis: mencari kerja hari ini bukan masalah kekurangan lowongan, melainkan kelebihan lowongan yang tidak relevan. Produknya menjawab itu dengan personalisasi AI, dan identitasnya dibangun untuk menyuarakan hal yang sama.", en: "Match starts from one premise: looking for work today is not a shortage of listings, it is a surplus of irrelevant ones. The product answers that with AI personalisation, and the identity was built to say the same thing." },
          ],
        },
        {
          heading: { id: "Filosofi nama", en: "The name" },
          lead:
            { id: "“Match” bukan kiasan - itu nama mekanisme produknya sendiri.", en: "“Match” is not a metaphor - it is the name of the product's own mechanism." },
          body: [
            { id: "Nama ini dipilih karena persis menggambarkan cara kerja platformnya: mempertemukan skill, minat, dan tujuan karier seseorang dengan lowongan yang benar-benar cocok. Personalisasi AI-nya bekerja sebagai pencocok, bukan sebagai mesin pencari.", en: "The name was chosen because it describes exactly how the platform works: bringing someone's skills, interests, and career goals together with roles that genuinely fit. Its AI personalisation works as a matcher, not as a search engine." },
            { id: "Satu suku kata, dan berfungsi sebagai kata kerja sekaligus kata benda - pengguna melakukan match, dan menerima match. Mudah diucapkan lintas bahasa, dan sudah familier di telinga tanpa perlu diterjemahkan.", en: "One syllable, working as both verb and noun - a user matches, and receives matches. Easy to say across languages, and already familiar without needing translation." },
            { id: "Namanya dipakai dalam dua panjang. “Match” untuk wordmark dan sapaan sehari-hari, “Matchwork” untuk nama penuh yang dipakai di domain matchwork.com, handle @matchwork, dan label asisten AI-nya di dalam produk. Bentuk pendek untuk dikenali, bentuk panjang untuk dicari dan dimiliki.", en: "The name runs at two lengths. “Match” for the wordmark and everyday use, “Matchwork” as the full name carried by matchwork.com, the handle @matchwork, and the AI assistant's label inside the product. The short form to be recognised, the long form to be searched for and owned." },
            { id: "Tagline-nya menurunkan premis itu secara harfiah: “Find your job and discover opportunities that match your skills, interests, and career goals.”", en: "The tagline states that premise literally: “Find your job and discover opportunities that match your skills, interests, and career goals.”" },
          ],
        },
        {
          heading: "Logo",
          lead:
            { id: "Huruf M yang dibangun dari batang vertikal dengan sambungan di ketinggian berbeda.", en: "An M built from vertical bars whose joints sit at different heights." },
          body: [
            { id: "Batangnya berlebar sama rata, tapi titik temunya sengaja tidak sejajar - tinggi, rendah, tinggi. Siluetnya jadi terbaca seperti dua sisi bergerigi yang saling mengunci, dan itulah gagasan match yang dibawa ke bentuk.", en: "The bars share one width, but their meeting points are deliberately uneven - high, low, high. The silhouette reads as two toothed edges locking together, which is the idea of a match carried into form." },
            { id: "Ruang kosong di antara batang punya bobot yang setara dengan batangnya. Celah itu yang membuat marknya tetap terbaca saat dikecilkan ke ukuran favicon 16px, dan tetap punya tegangan saat dibesarkan ke ukuran billboard.", en: "The space between the bars carries as much weight as the bars themselves. Those gaps are what keep the mark legible shrunk to a 16px favicon, and what keep it taut blown up to billboard size." },
            { id: "Konstruksinya kaku dan modular, mendekati karakter huruf monospace. Itu disengaja: produknya digerakkan algoritma, dan logonya tidak berpura-pura ditulis tangan.", en: "The construction is rigid and modular, close to the character of a monospace face. That is deliberate: the product is driven by an algorithm, and its logo does not pretend to be handwritten." },
          ],
        },
        {
          heading: { id: "Palet warna", en: "Colour palette" },
          lead:
            { id: "Lima warna, dibangun gelap lebih dulu karena warna sinyalnya memang menuntut itu.", en: "Five colours, built dark-first because the signal colour demands it." },
          body: [
            { id: "Lime adalah satu-satunya warna yang boleh berteriak. Ia dipakai untuk logo, CTA, dan apa pun yang menandakan “ini kecocokanmu” - porsinya kecil justru supaya tetap berarti.", en: "Lime is the only colour allowed to shout. It carries the logo, the CTA, and anything that marks “this one is your match” - kept to small doses precisely so it keeps meaning something." },
          ],
          table: {
            head: [{ id: "Warna", en: "Colour" }, { id: "Hex", en: "Hex" }, "Peran", { id: "Kontras di #0A0A0A", en: "Contrast on #0A0A0A" }],
            rows: [
              [{ id: "Lime", en: "Lime" }, "#A1E433", { id: "Sinyal utama - logo, CTA, highlight hasil match", en: "Primary signal - logo, CTA, match result highlights" }, "12,88:1"],
              [{ id: "Hijau tua", en: "Deep green" }, "#69A900", { id: "Pendukung - fill, hover, aksen grafis", en: "Supporting - fills, hover, graphic accents" }, "6,86:1"],
              [{ id: "Ink", en: "Ink" }, "#0A0A0A", { id: "Latar utama seluruh sistem", en: "The base background across the system" }, "–"],
              [{ id: "Arang", en: "Charcoal" }, "#171717", { id: "Permukaan kartu, pemisah antar layer", en: "Card surfaces, separating layers" }, "–"],
              [{ id: "Kertas", en: "Paper" }, "#FAFAFA", { id: "Teks utama di atas latar gelap", en: "Body text on dark" }, "18,97:1"],
            ],
          },
        },
        {
          heading: { id: "Kenapa gelap, bukan terang", en: "Why dark, not light" },
          lead:
            { id: "Keputusan ini datang dari angka, bukan dari selera.", en: "This decision came from numbers, not taste." },
          body: [
            { id: "Lime #A1E433 di atas putih hanya menghasilkan kontras 1,47:1 - jauh di bawah ambang WCAG AA yang 4,5:1, dan praktis tidak terbaca. Warna yang sama di atas #0A0A0A melompat ke 12,88:1, lewat dari ambang AAA.", en: "Lime #A1E433 on white yields a contrast of just 1.47:1 - far under the WCAG AA threshold of 4.5:1, and effectively unreadable. The same colour on #0A0A0A jumps to 12.88:1, clearing AAA." },
            { id: "Artinya warna sinyal ini hanya hidup di atas gelap. Daripada melemahkannya jadi hijau yang lebih tua dan lebih tumpul demi muat di tema terang, sistemnya dibalik: gelap jadi default, dan lime dibiarkan setajam aslinya.", en: "Which means this signal colour only lives on dark. Rather than dulling it into a deeper, blunter green to fit a light theme, the system was inverted: dark became the default, and lime was left as sharp as it is." },
            { id: "Konsekuensinya konsisten di seluruh penerapan - app icon, profil sosial, sampai poster - semuanya berangkat dari latar gelap.", en: "The consequence runs consistently through every application - app icon, social profile, posters - all of them starting from a dark ground." },
          ],
          stats: [
            { value: "12,88:1", label: { id: "lime di atas ink - lolos AAA", en: "lime on ink - clears AAA" } },
            { value: "1,47:1", label: { id: "lime di atas putih - gagal AA", en: "lime on white - fails AA" } },
            { value: "18,97:1", label: { id: "teks kertas di atas ink", en: "paper text on ink" } },
          ],
        },
        {
          heading: { id: "Fotografi", en: "Photography" },
          lead:
            { id: "Orang yang sedang berpindah tempat, bukan orang yang sedang berpose di kantor.", en: "People in the middle of going somewhere, not people posing in an office." },
          body: [
            { id: "Arah fotonya memilih momen transit - peron, lorong bawah tanah, perjalanan. Secara harfiah ini adalah orang di antara dua titik, dan itu posisi yang sama dengan pengguna Match: di antara pekerjaan yang sekarang dan yang berikutnya.", en: "The photography direction chooses moments of transit - platforms, underpasses, journeys. Literally, these are people between two points, which is exactly where a Match user stands: between the job they have and the next one." },
            { id: "Semua foto diberi cast hijau supaya menyatu dengan palet, dan dibiarkan gelap sehingga mark atau teks lime bisa duduk di atasnya tanpa kehilangan kontras.", en: "Every photo carries a green cast so it sits inside the palette, and stays dark so the mark or lime text can sit on top without losing contrast." },
          ],
        },
        {
          heading: { id: "Penerapan", en: "Applications" },
          lead:
            { id: "Mark yang sama dipakai dari 16 piksel sampai sebesar dinding.", en: "The same mark runs from 16 pixels to the size of a wall." },
          bullets: [
            { id: "Favicon dan tab browser - mark saja, tanpa wordmark, pada matchwork.com", en: "Favicon and browser tab - the mark alone, no wordmark, on matchwork.com" },
            { id: "App icon iOS - mark lime di atas ink, berdiri di antara ikon sistem tanpa tenggelam", en: "iOS app icon - lime mark on ink, holding its own among system icons" },
            { id: "Profil sosial - avatar bundar dengan pattern diagonal sebagai header", en: "Social profile - a round avatar with the diagonal pattern as header" },
            { id: "Media luar ruang - mark putih dan tagline di atas foto transit", en: "Out-of-home - the white mark and tagline over a transit photograph" },
          ],
        },
        {
          heading: { id: "Dua permukaan, dua sistem warna", en: "Two surfaces, two colour systems" },
          lead:
            { id: "Yang dilihat sekilas dan yang dipakai berjam-jam tidak bisa memakai aturan warna yang sama.", en: "What is glanced at and what is used for hours cannot follow the same colour rules." },
          body: [
            { id: "Permukaan brand - poster, app icon, profil sosial - bekerja dalam hitungan detik. Tugasnya menarik perhatian, jadi lime di atas gelap adalah pilihan yang tepat: kontras 12,88:1 dan warna yang sulit diabaikan.", en: "Brand surfaces - posters, app icon, social profile - work in seconds. Their job is to catch attention, so lime on dark is the right call: 12.88:1 contrast in a colour that is hard to ignore." },
            { id: "Permukaan produk bekerja sebaliknya. Pengguna membaca puluhan lowongan berturut-turut, dan latar gelap dengan aksen neon justru melelahkan di sesi panjang. Karena itu antarmuka Matchwork berdiri di atas sistem terang dengan aksen emerald #0b8457 - kontras 4,72:1 di atas putih, cukup untuk lolos AA sebagai warna tombol, tapi tidak berteriak.", en: "Product surfaces work the other way. Users read dozens of listings in a row, and a dark ground with a neon accent is tiring over a long session. So the Matchwork interface stands on a light system with an emerald accent, #0b8457 - 4.72:1 on white, enough to clear AA as a button colour without shouting." },
            { id: "Keduanya tetap satu keluarga karena berangkat dari hijau. Yang berubah hanya suhu dan terangnya, menyesuaikan lama waktu orang menatapnya.", en: "Both stay in one family because both start from green. Only the temperature and lightness shift, tuned to how long someone looks at them." },
          ],
          table: {
            head: ["", { id: "Permukaan brand", en: "Brand surface" }, { id: "Permukaan produk", en: "Product surface" }],
            rows: [
              ["Latar", "#0A0A0A", "#FFFFFF"],
              ["Aksen", "#A1E433", "#0b8457"],
              [{ id: "Kontras aksen", en: "Accent contrast" }, "12,88:1 di ink", "4,72:1 di putih"],
              [{ id: "Durasi pakai", en: "Time spent" }, { id: "Hitungan detik", en: "Seconds" }, { id: "Hitungan jam", en: "Hours" }],
              ["Tugas", { id: "Menarik perhatian", en: "Catch attention" }, { id: "Menjaga keterbacaan", en: "Protect readability" }],
            ],
          },
        },
        {
          heading: { id: "Penerapan di produk", en: "In the product" },
          lead:
            { id: "Janji “match” harus kelihatan angkanya, bukan cuma jadi nama.", en: "The promise of a “match” has to show its number, not just be a name." },
          body: [
            { id: "Daftar lowongan tidak diurutkan berdasarkan tanggal, melainkan berdasarkan kecocokan - setiap baris membawa persentasenya sendiri, dari 92% sampai 69%. Pengguna langsung tahu urutannya berdasarkan apa.", en: "The listing is ordered by fit rather than by date - every row carries its own percentage, from 92% down to 69%. Users see immediately what the order is based on." },
            { id: "Angka itu lalu dibuka isinya. Panel detail memecah skor 92% menjadi empat baris bernama: Skills, Experience, Domain, dan Work mode, masing-masing ditandai Match, Bonus, atau Check. Satu angka berubah jadi empat alasan yang bisa diperiksa, dan ketidakcocokan tidak disembunyikan - work mode yang belum pas tetap ditandai Check.", en: "Then the number is opened up. The detail panel breaks 92% into four named rows: Skills, Experience, Domain, and Work mode, each tagged Match, Bonus, or Check. One number becomes four reasons that can be inspected, and mismatches are not hidden - a work mode that does not fit still gets a Check." },
            { id: "Asisten AI-nya duduk di panel yang sama lewat “Ask about this role”, lengkap dengan pertanyaan siap pakai seperti “Is the salary fair for my level?” dan tombol “Tailor my resume”. Di bawahnya ada satu baris yang sengaja tidak dihilangkan: “AI can make mistakes. Always check details with the employer.”", en: "The AI assistant sits in that same panel under “Ask about this role”, with ready-made prompts like “Is the salary fair for my level?” and a “Tailor my resume” button. Below it sits one line kept deliberately in place: “AI can make mistakes. Always check details with the employer.”" },
          ],
        },
        {
          heading: { id: "Penutup", en: "Closing" },
          body: [
            { id: "Identitas ini dibangun dari satu gagasan yang sama di tiap lapisnya: dua sisi yang saling mengunci. Gagasan itu ada di nama, ada di gerigi logonya, dan ada di cara skor kecocokan dipecah jadi alasan yang bisa diperiksa.", en: "This identity is built from one idea repeated at every layer: two edges locking together. It is in the name, in the teeth of the logo, and in the way a match score breaks apart into reasons you can check." },
            { id: "Yang membuatnya bertahan bukan konsistensi warna yang kaku, melainkan konsistensi maksud - tiap permukaan memakai warna yang sesuai dengan berapa lama orang menatapnya.", en: "What holds it together is not rigid colour consistency but consistency of intent - each surface uses the colour that suits how long someone looks at it." },
          ],
        },
      ],
    },
  },
  {
    slug: "matchwork-web",
    title: "Matchwork - Job Search Dashboard",
    summary: {
      id: "Web app untuk pencari kerja: memantau lamaran, jadwal interview, dan skor kecocokan dalam satu layar. Dibangun dengan palet brand Match - lime di atas gelap.",
      en: "Web app for job seekers: track applications, interviews, and match scores on one screen. Built on the Match brand palette - lime on dark.",
    },
    pdf: "/case-study/matchwork-web.pdf",
    tags: ["Website", "Dashboard"],
    video: A.mwVideo,
    poster: A.mwPoster,
    ratio: "16 / 9",
    story: {
      tagline: "Job Search Dashboard",
      meta: [
        { label: "Peran", value: "UI/UX Designer" },
        { label: "Platform", value: { id: "Web App", en: "Web App" } },
        { label: { id: "Bagian", en: "Scope" }, value: { id: "Dashboard pelamar", en: "Applicant dashboard" } },
        { label: { id: "Tema", en: "Theme" }, value: { id: "Gelap, aksen lime", en: "Dark, lime accent" } },
      ],
      sections: [
        {
          heading: "Overview",
          rows: [
            {
              label: "Produk",
              value:
                { id: "Matchwork - platform pencari kerja yang mencocokkan orang dengan lowongan lewat personalisasi AI.", en: "Matchwork - a job platform that matches people to roles through AI personalisation." },
            },
            {
              label: { id: "Layar ini", en: "This screen" },
              value:
                { id: "Dashboard milik pelamar: ringkasan lamaran yang sedang berjalan, jadwal interview terdekat, dan tabel lamaran aktif.", en: "The applicant's dashboard: a summary of applications in flight, the nearest interviews, and a table of active applications." },
            },
            {
              label: "Objective",
              value:
                { id: "Menjawab satu pertanyaan yang paling sering muncul di kepala pencari kerja: sudah sejauh mana lamaranku, dan apa yang perlu disiapkan minggu ini.", en: "Answer the question that sits in every job seeker's head: how far along are my applications, and what do I need to prepare this week." },
            },
          ],
          body: [
            { id: "Mencari kerja itu proses panjang yang tersebar di banyak tempat - email, kalender, catatan sendiri. Dashboard ini menarik semuanya ke satu layar supaya pelamar tidak perlu mengingat-ingat lamaran mana yang sudah dibalas dan mana yang belum.", en: "Job hunting is a long process scattered across many places - email, calendar, your own notes. This dashboard pulls all of it onto one screen so an applicant never has to remember which applications got a reply and which did not." },
          ],
        },
        {
          heading: { id: "Angka yang selalu membawa pembanding", en: "Numbers that always carry a comparison" },
          lead:
            { id: "Empat kartu di atas, dan tidak satu pun berdiri sendirian.", en: "Four cards along the top, and not one of them stands alone." },
          body: [
            { id: "New matches 24, Applications 12, Interviews 3, Response rate 50%. Tiap kartu membawa sparkline dan selisih terhadap minggu lalu, jadi angkanya langsung punya arah - naik atau turun - tanpa perlu membuka halaman lain.", en: "New matches 24, Applications 12, Interviews 3, Response rate 50%. Each card carries a sparkline and the change against last week, so every number arrives with a direction - up or down - without opening another page." },
            { id: "Yang menarik, kartu Response rate menunjukkan −3% dan ditandai merah. Dashboard ini tidak menyembunyikan angka yang sedang memburuk, padahal itu angka yang paling menyakitkan untuk pencari kerja. Menyembunyikannya justru akan membuat pelamar tidak tahu kapan harus mengubah strategi.", en: "Notably, the Response rate card shows −3% marked in red. This dashboard does not hide the number that is getting worse, even though it is the most painful one for a job seeker. Hiding it would only leave the applicant unaware of when to change approach." },
          ],
          image: {
            src: A.mwKpi,
            alt: { id: "Empat kartu ringkasan dengan sparkline dan selisih mingguan", en: "Four summary cards with sparklines and weekly change" },
            caption:
              { id: "Tiap angka didampingi tren mingguan - termasuk yang sedang turun", en: "Every number comes with its weekly trend - including the one falling" },
          },
        },
        {
          heading: { id: "Skor kecocokan ikut sampai ke tabel lamaran", en: "The match score follows through to the applications table" },
          lead:
            { id: "Janji “match” tidak berhenti di halaman pencarian.", en: "The promise of a “match” does not stop at the search page." },
          body: [
            { id: "Di tabel lamaran aktif, tiap baris membawa kolom MATCH beserta bar-nya - 92%, 88%, 85%, 81%, 76%, 58%. Angka yang dipakai saat merekomendasikan lowongan tetap menempel setelah lamaran dikirim.", en: "In the active applications table, every row carries a MATCH column with its bar - 92%, 88%, 85%, 81%, 76%, 58%. The number used to recommend a role stays attached after the application is sent." },
            { id: "Karena skor itu berdampingan dengan kolom STAGE, pelamar bisa melihat sendiri hubungan antara seberapa cocok sebuah lowongan dengan sejauh mana lamarannya berjalan. Itu umpan balik yang berguna: bukan cuma “lamaranmu ditolak”, tapi juga bahan untuk menilai lowongan mana yang sebenarnya layak dikejar.", en: "Because that score sits beside the STAGE column, an applicant can see for themselves how a role's fit relates to how far the application got. That is useful feedback: not just “you were rejected”, but material for judging which roles are actually worth chasing." },
          ],
          image: {
            src: A.mwTable,
            alt: { id: "Tabel lamaran aktif dengan kolom stage dan skor kecocokan", en: "The active applications table with stage and match score columns" },
            caption:
              { id: "Kolom MATCH berdampingan dengan STAGE, jadi kecocokan dan hasil terbaca bersamaan", en: "The MATCH column sits beside STAGE, so fit and outcome read together" },
          },
        },
        {
          heading: { id: "Menyaring tanpa berpindah halaman", en: "Filtering without leaving the page" },
          lead:
            { id: "Tab stage menyaring di tempat, dan baris yang tidak cocok diredupkan, bukan dihapus.", en: "The stage tabs filter in place, dimming the rows that do not match rather than removing them." },
          body: [
            { id: "Tab All, Interview, In review, dan Offer ada di kepala tabel. Menekan salah satunya membuat baris yang tidak termasuk meredup sementara barisnya tetap di tempatnya.", en: "All, Interview, In review, and Offer tabs sit at the head of the table. Pressing one dims the rows that fall outside it while leaving them where they are." },
            { id: "Pilihan ini menjaga rasa posisi: pelamar tetap melihat keseluruhan daftarnya dan tahu di mana baris yang disorot berada di antara yang lain. Kalau barisnya dihapus dan daftarnya memendek, tiap penyaringan akan terasa seperti berpindah ke halaman baru.", en: "That choice preserves a sense of place: the applicant still sees the whole list and knows where the highlighted rows sit among the rest. Remove the rows and shorten the list, and every filter would feel like landing on a new page." },
          ],
        },
        {
          heading: { id: "Jadwal yang benar-benar dekat", en: "The schedule that is actually close" },
          lead:
            { id: "Empat interview minggu ini, lengkap dengan cara pelaksanaannya.", en: "Four interviews this week, each with how it will be held." },
          body: [
            { id: "Tiap baris membawa tanggal, nama posisi, perusahaan, jam, dan satu badge yang menyebut bentuk interviewnya - Video call, On-site, atau Phone. Badge itu kecil tapi menentukan: on-site berarti harus menghitung waktu perjalanan, phone berarti cukup memastikan sinyal.", en: "Every row carries a date, role, company, time, and a badge naming the format - Video call, On-site, or Phone. That badge is small but decisive: on-site means budgeting travel time, phone means just checking you have signal." },
            { id: "Daftarnya ditutup kalimat “That’s all for this week”, bukan dibiarkan menggantung. Pelamar jadi tahu bahwa daftarnya memang habis, bukan terpotong.", en: "The list closes with “That's all for this week” rather than trailing off. The applicant knows the list has genuinely ended, not been cut short." },
            { id: "Grafik di sebelahnya menghitung 48 lamaran terkirim tahun ini dengan bar per bulan, dan September disorot lime sebagai bulan tertinggi. Rentangnya bisa diganti antara 3 bulan, 6 bulan, dan sepanjang tahun.", en: "The chart beside it counts 48 applications sent this year with a bar per month, September highlighted in lime as the peak. The range switches between three months, six months, and year to date." },
          ],
          image: {
            src: A.mwChart,
            alt: { id: "Grafik lamaran terkirim dan daftar interview mendatang", en: "The applications-sent chart and the upcoming interviews list" },
            caption:
              { id: "Riwayat panjang di kiri, yang perlu disiapkan minggu ini di kanan", en: "The long history on the left, what needs preparing this week on the right" },
          },
        },
        {
          heading: { id: "Sidebar sebagai peta proses", en: "The sidebar as a map of the process" },
          lead:
            { id: "Menunya tidak disusun berdasarkan fitur, tapi berdasarkan tahap yang dilalui pelamar.", en: "The menu is grouped not by feature but by the stage an applicant is in." },
          body: [
            { id: "Kelompok pertama untuk mencari - Dashboard, Matchwork AI, Find jobs, Saved jobs, Companies. Kelompok Applications untuk yang sedang berjalan - Applied, Interviews, Messages. Kelompok Profile untuk bekal yang dibawa - Resume, Portfolio, Job alerts.", en: "The first group is for searching - Dashboard, Matchwork AI, Find jobs, Saved jobs, Companies. The Applications group is for what is in flight - Applied, Interviews, Messages. The Profile group is for what you bring with you - Resume, Portfolio, Job alerts." },
            { id: "Di bawahnya ada Saved searches dengan jumlah lowongan baru di tiap pencarian: Frontend · Jakarta +5, Remote UI/UX +3, ML Internship +2. Pencarian yang disimpan jadi terasa hidup, bukan sekadar daftar kata kunci.", en: "Below that sit Saved searches with a count of new roles in each: Frontend · Jakarta +5, Remote UI/UX +3, ML Internship +2. A saved search feels alive rather than being a list of keywords." },
            { id: "Di paling atas ada sakelar “Open to work”, diletakkan tepat di bawah logo. Posisinya menandakan status itu sesuatu yang sering diubah, bukan pengaturan yang disembunyikan di halaman profil.", en: "At the very top sits an “Open to work” switch, placed directly under the logo. Its position says this status is something you change often, not a setting buried in a profile page." },
          ],
        },
      ],
    },
  },
];

/** Terbaru di atas. */
export const projects: ProjectItem[] = [...projectsByDateAdded].reverse();

export type BlogItem = {
  /** Dipakai sebagai alamat halaman detail: /blog/<slug>. */
  slug: string;
  /** Satu-satunya teks yang tampil di thumbnail. */
  title: string;
  /** Baris kecil di halaman detail: penyelenggara dan tanggal. */
  meta?: Txt;
  /** Tahun, dipakai di kartu yang belum punya foto. */
  year?: string;
  /** Kosongkan kalau fotonya belum ada; kartunya memakai pola garis. */
  thumb?: string;
  /** Gambar di halaman detail; kalau kosong, thumbnail yang dipakai. */
  image?: string;
  /** Paragraf isi di halaman detail. */
  body?: Txt[];
  /** Poin-poin capaian di halaman detail. */
  bullets?: Txt[];
};

export const posts: BlogItem[] = [
  {
    slug: "playit-hackathon",
    thumb: A.blogPlayit,
    image: A.blogPlayitFull,
    title: "Finalist – PlayIT UI/UX Hackathon",
    meta: "PlayIT · Juni 2026 · Associated with University of Brawijaya",
    year: "2026",
    body: [
      "Selected as a Finalist in the PlayIT UI/UX Hackathon for designing a user-centered digital solution within a competitive hackathon environment. Collaborated with a multidisciplinary team to research user needs, create intuitive interfaces, develop interactive prototypes, and present the final solution to the judges.",
    ],
    bullets: [
      "Selected as a Finalist in the PlayIT UI/UX Hackathon.",
      "Awarded 2nd Place – Problem Solver for delivering an innovative and user-centered solution to the challenge.",
      "Collaborated with a multidisciplinary team to design a digital product within a limited timeframe.",
      "Conducted UX research, created user flows, wireframes, high-fidelity UI designs, and interactive prototypes using Figma.",
      "Presented the final solution to the judges while demonstrating strong design thinking, collaboration, and problem-solving skills.",
    ],
  },
  {
    slug: "rafaetech-2025",
    title: "3rd Place – National UI/UX Design Competition RAFAETECH 2025",
    meta:
      { id: "Fakultas Sains dan Teknologi, Universitas Islam Negeri Raden Fatah Palembang · Oktober 2025 · Associated with University of Brawijaya", en: "Faculty of Science and Technology, Universitas Islam Negeri Raden Fatah Palembang · October 2025 · Associated with University of Brawijaya" },
    year: "2025",
    thumb: A.blogRafaetech,
    image: A.blogRafaetechFull,
    bullets: [
      "Awarded 3rd Place in a national-level UI/UX design competition themed “Tech Beyond Limits: Building Our Future Together - Innovation, Competition, and Entrepreneurial Excellence.”",
      "Designed WISEBITE, a user-centered digital solution focused on accessibility, usability, and efficient food management.",
      "Emphasized inclusive design principles to improve user experience in modern digital food systems.",
    ],
  },
  {
    slug: "intechfest-2025",
    thumb: A.blogIntechfest,
    image: A.blogIntechfestFull,
    title: "3rd Place Design Challenge – Intechfest 2025",
    meta:
      "Politeknik Negeri Bali · September 2025 · Associated with University of Brawijaya",
    year: "2025",
    bullets: [
      "Achieved 3rd Place in the Design Challenge at the Information and Technology Festival (Intechfest) 2025.",
      "First experience participating in an offline UI/UX competition, strengthening presentation and collaboration skills.",
      "Delivered a design pitch without slides, focusing on storytelling and design rationale.",
      "Gained valuable insights through networking and discussions with fellow designers and mentors.",
    ],
  },
  {
    slug: "multimedia-in-action-2025",
    thumb: A.blogMultimedia,
    image: A.blogMultimediaFull,
    title: "Finalis 10 Besar – UI/UX in Action, Multimedia in Action LinkAja 2025",
    meta:
      "KSM Multimedia UPN “Veteran” Jakarta · 26 September – 28 November 2025 · Associated with University of Brawijaya",
    year: "2025",
    body: [
      "Selected as Top 10 Finalist in UI/UX in Action, part of Multimedia in Action 2025 \u2014 \u201cEmpowering Visionaries, Impacting Industries\u201d. This competition focused on delivering user-centered UI/UX solutions through research-driven design, usability, and impactful digital experiences. The experience strengthened my skills in UX research, problem-solving, and design presentation.",
    ],
  },
  {
    slug: "unisnu-jepara-2025",
    thumb: A.blogUnisnu,
    image: A.blogUnisnuFull,
    title: "2nd Place – National UI/UX Design Competition 2025",
    meta:
      "Himpunan Mahasiswa Sistem Informasi, UNISNU Jepara · Juni 2025 · Associated with University of Brawijaya",
    year: "2025",
    body: [
      "Our team presented “Lokalook: AI-Powered Fashion Platform for Localpreneurs” - a design solution powered by artificial intelligence, built to empower local fashion entrepreneurs through a human-centered, intuitive, and visually appealing mobile interface.",
      "This experience was a valuable journey of collaboration, research, and purposeful design.",
    ],
    bullets: [
      "Awarded 2nd Place in a national mobile UI/UX design competition.",
      "Presented “Lokalook”, an AI-powered fashion platform designed to empower local fashion entrepreneurs.",
      "Focused on human-centered design, intuitive user flow, and visually engaging mobile interfaces.",
      "Strengthened experience in teamwork, research-driven design, and solution-oriented problem solving.",
    ],
  },
  {
    slug: "silogy-expo-2025",
    thumb: A.blogSilogy,
    image: A.blogSilogyFull,
    title: "Finalis UI/UX Design – Silogy Expo Education Fair 2025",
    meta:
      "Himpunan Mahasiswa Sistem Informasi UNSIKA (HIMSIKA) · Juni 2025 · Associated with University of Brawijaya",
    year: "2025",
    bullets: [
      "Selected as Top 4 finalist in National Competition Silogy Expo 2025, themed \u201cInnovate Technology with Creativity, Intelligence, and Knowledge\u201d.",
      "Developed an educational application prototype using a user-centered design approach.",
      "Emphasized intuitive navigation, interactivity, and inclusive user experience.",
    ],
  },
];

/** Jumlah total yang tampil di badge header section. */
export const counts = {
  experience: experiences.length,
  awards: awards.length,
};