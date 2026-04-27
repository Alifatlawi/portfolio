
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Atilim University",
    location: "Ankara, TR",
    description: "Pursuing a degree in Software Engineering, focusing on advanced algorithms, system design, and modern programming paradigms. Active participant in coding competitions and collaborative projects, developing strong problem-solving and teamwork skills in a fast-paced academic environment.",
    date: "2021 - present",
  },
  {
    title: "Mobile App Developer Internship",
    location: "Ankara, TR",
    description: "Intensive internship focused on Flutter mobile app development. Collaborated with senior developers to build cross-platform applications, implemented responsive UI designs, and optimized app performance. Gained hands-on experience with state management, API integration, and mobile development best practices.",
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Ankara, TR",
    description: "Full-stack software engineer developing scalable applications across iOS, web, and backend platforms. Architect and implement clean, maintainable code following SOLID principles. Lead technical discussions and mentor junior developers while delivering enterprise-level software solutions.",
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  // ── Flagship ────────────────────────────────────────────────
  {
    title: "TAD",
    description:
      "A private Learning Management System built for a single company — course creation, student progress tracking, admin panel, and secure media storage. Turns training content into a measurable, monetizable product.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma"],
    url: "https://tadedu.com",
    category: "LMS · B2B",
    status: "Live",
    year: "2024",
    group: "Flagship",
    linkLabel: "Visit tadedu.com",
  },
  {
    title: "Target",
    description:
      "An ad-tech platform for the MENA region applying digital-ad logic to physical billboards: campaign management, ad inventory, QR-code scan tracking that proves real-world views, analytics dashboards, and an AI voice assistant for natural-language campaign queries.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Backblaze B2", "Gemini AI", "WebSockets"],
    url: null,
    category: "Ad-tech · B2B",
    status: "Live · Private",
    year: "2024",
    group: "Flagship",
    linkLabel: null,
  },
  // ── iOS ─────────────────────────────────────────────────────
  {
    title: "Atilim Schedule",
    description:
      "Schedule manager for Atılım University students. Add courses, view a weekly timetable, and use auto-generation to build a conflict-free schedule. Adopted by ~7,000 students. No data collected.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/atilim-schedule-app/id6730125883",
    category: "iOS App",
    status: "Live · ~7,000 users",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
  },
  {
    title: "TAD iOS",
    description:
      "Udemy-style courses platform for high-school and university students in Libya. Browse, enroll, and watch curated courses on iPhone and iPad.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/tad/id6757405981",
    category: "iOS App",
    status: "Live",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
  },
  {
    title: "Khatwa",
    description:
      "Arabic mental-health and self-care app. Track your daily mood, write personal diaries, follow guided breathing and meditation, and get personalized support through an AI assistant.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/khatwa-%D8%AE%D8%B7%D9%88%D9%87/id6744864963",
    category: "iOS App",
    status: "Live",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
  },
  {
    title: "SosoSketch",
    description:
      "Turns your iPhone into a tracing tool: pick a photo, hold it over paper, and the app overlays the image through the camera so you can draw it freehand.",
    tags: ["Swift", "SwiftUI", "iOS", "AVFoundation"],
    url: "https://apps.apple.com/tr/app/sososketch/id6670456438",
    category: "iOS App",
    status: "Live",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
  },
  // ── Web ─────────────────────────────────────────────────────
  {
    title: "Orka",
    description:
      "E-commerce store for ORKA.iq — medical apparel brand based in Basra, Iraq. Scrubs and workwear designed for comfort during long shifts without compromising on style.",
    tags: ["Next.js", "E-commerce"],
    url: "https://orka.store",
    category: "Web · E-commerce",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "Visit orka.store",
  },
  {
    title: "Movie",
    description:
      "Describe a scene you remember and the app figures out which movie it's from. Useful when you've forgotten the title but can still picture the moment.",
    tags: ["Next.js", "AI"],
    url: "https://movie.alialfatlawi.com",
    category: "Web · AI Tool",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "Try it",
  },
  {
    title: "Altadark Group",
    description:
      "Landing page for the Altadark Group brand — a single-page presence introducing the group online.",
    tags: ["Web"],
    url: "https://altadarkgroup.com",
    category: "Web · Brand",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "Visit site",
  },
  {
    title: "Altadark Cloud",
    description: "Cloud-services side of the Altadark brand.",
    tags: ["Web"],
    url: "https://altadark.cloud",
    category: "Web · Cloud",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "Visit site",
  },
  // ── Client ──────────────────────────────────────────────────
  {
    title: "Qi Card Branches",
    description:
      "Website for Qi Card, Iraq's banking and payment-card company, to showcase and locate their branches across the country. Helps customers find the nearest branch and navigate Qi Card's physical presence.",
    tags: ["Next.js"],
    url: null,
    category: "Web · Client",
    status: "Delivered",
    year: "2024",
    group: "Client",
    linkLabel: null,
  },
] as const;
