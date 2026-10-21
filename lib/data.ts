// labelAr mirrors each label in the header's right-hand (Arabic) nav and
// matches the section's wall-scale Arabic title.
export const links = [
  { name: "Home", label: "Home", labelAr: "", hash: "#home" },
  { name: "Projects", label: "Work", labelAr: "الأعمال", hash: "#projects" },
  { name: "About", label: "About", labelAr: "نبذة", hash: "#about" },
  { name: "Experience", label: "Ledger", labelAr: "المسيرة", hash: "#experience" },
  { name: "Contact", label: "Contact", labelAr: "تواصل", hash: "#contact" },
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

// Screens are cropped from each app's public App Store listing. `points` is
// the capture device's screen size in iOS points, so every screen can be drawn
// at true relative scale (the 5.5" SosoSketch captures stand shorter).
const PRO_MAX = { w: 430, h: 932 };
const PLUS_8 = { w: 414, h: 736 };

export const projectsData = [
  // ── Flagship ────────────────────────────────────────────────
  {
    title: "TAD",
    titleAr: null,
    description:
      "A private Learning Management System built for a single company — course creation, student progress tracking, admin panel, and secure media storage. Turns training content into a measurable, monetizable product.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma"],
    url: "https://tadedu.com",
    category: "LMS · B2B",
    status: "Live",
    year: "2024",
    group: "Flagship",
    linkLabel: "tadedu.com",
    screens: [],
    points: null,
    site: null,
  },
  {
    title: "Target",
    titleAr: null,
    description:
      "An ad-tech platform for the MENA region applying digital-ad logic to physical billboards: campaign management, ad inventory, QR-code scan tracking that proves real-world views, analytics dashboards, and an AI voice assistant for natural-language campaign queries.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Backblaze B2", "Gemini AI", "WebSockets"],
    url: null,
    category: "Ad-tech · B2B",
    status: "Live · Private",
    year: "2024",
    group: "Flagship",
    linkLabel: null,
    screens: [],
    points: null,
    site: null,
  },
  // ── iOS ─────────────────────────────────────────────────────
  {
    title: "Atilim Schedule",
    titleAr: null,
    description:
      "Schedule manager for Atılım University students. Add courses, view a weekly timetable, and use auto-generation to build a conflict-free schedule. Adopted by ~7,000 students. No data collected.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/atilim-schedule-app/id6730125883",
    category: "iOS App",
    status: "Live · ~7,000 users",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
    screens: [
      "/work/atilim-schedule/screen-4.jpg",
      "/work/atilim-schedule/screen-6.jpg",
      "/work/atilim-schedule/screen-5.jpg",
    ],
    points: PRO_MAX,
    site: null,
  },
  {
    title: "TAD iOS",
    titleAr: null,
    description:
      "Udemy-style courses platform for high-school and university students in Libya. Browse, enroll, and watch curated courses on iPhone and iPad.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/tad/id6757405981",
    category: "iOS App",
    status: "Live",
    year: "2026",
    group: "iOS",
    linkLabel: "App Store",
    screens: [
      "/work/tad-ios/screen-1.jpg",
      "/work/tad-ios/screen-2.jpg",
      "/work/tad-ios/screen-5.jpg",
    ],
    points: { w: 428, h: 926 },
    site: null,
  },
  {
    title: "Khatwa",
    titleAr: "خطوه",
    description:
      "Arabic mental-health and self-care app. Track your daily mood, write personal diaries, follow guided breathing and meditation, and get personalized support through an AI assistant.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "https://apps.apple.com/tr/app/khatwa-%D8%AE%D8%B7%D9%88%D9%87/id6744864963",
    category: "iOS App",
    status: "Live",
    year: "2025",
    group: "iOS",
    linkLabel: "App Store",
    screens: [
      "/work/khatwa/screen-1.jpg",
      "/work/khatwa/screen-4.jpg",
      "/work/khatwa/screen-3.jpg",
    ],
    points: PRO_MAX,
    site: null,
  },
  {
    title: "SosoSketch",
    titleAr: null,
    description:
      "Turns your iPhone into a tracing tool: pick a photo, hold it over paper, and the app overlays the image through the camera so you can draw it freehand.",
    tags: ["Swift", "SwiftUI", "iOS", "AVFoundation"],
    url: "https://apps.apple.com/tr/app/sososketch/id6670456438",
    category: "iOS App",
    status: "Live",
    year: "2024",
    group: "iOS",
    linkLabel: "App Store",
    screens: [
      "/work/sososketch/screen-1.jpg",
      "/work/sososketch/screen-3.jpg",
    ],
    points: PLUS_8,
    site: null,
  },
  {
    title: "Murafa’a",
    titleAr: "مُرافعة",
    description:
      "Arabic-first practice manager for lawyers in Iraq. Scan national IDs and powers of attorney, track court sessions and postponements, and get reminded before every hearing. Files stay on-device and in the lawyer's own iCloud, locked with Face ID.",
    tags: ["Swift", "SwiftUI", "iOS"],
    url: "/murafa",
    category: "iOS App · Legal",
    status: "Coming soon",
    year: "2026",
    group: "iOS",
    linkLabel: "Product site",
    screens: [],
    points: null,
    site: null,
  },
  // ── Web ─────────────────────────────────────────────────────
  {
    title: "Orka",
    titleAr: null,
    description:
      "E-commerce store for ORKA.iq — medical apparel brand based in Basra, Iraq. Scrubs and workwear designed for comfort during long shifts without compromising on style.",
    tags: ["Next.js", "E-commerce"],
    url: "https://orka.store",
    category: "Web · E-commerce",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "orka.store",
    screens: [],
    points: null,
    site: "/work/sites/orka-hero.jpg",
  },
  {
    title: "Movie",
    titleAr: null,
    description:
      "Describe a scene you remember and the app figures out which movie it's from. Useful when you've forgotten the title but can still picture the moment.",
    tags: ["Next.js", "AI"],
    url: "https://movie.alialfatlawi.com",
    category: "Web · AI Tool",
    status: "Live",
    year: "2024",
    group: "Web",
    linkLabel: "Try it",
    screens: [],
    points: null,
    site: "/work/sites/movie.jpg",
  },
  // Both Altadark sites were unreachable on 2026-10-21 (no DNS / TLS failure),
  // so they stay listed without a link or a "Live" claim.
  {
    title: "Altadark Group",
    titleAr: null,
    description:
      "Landing page for the Altadark Group brand — a single-page presence introducing the group online.",
    tags: ["Web"],
    url: null,
    category: "Web · Brand",
    status: "Offline",
    year: "2024",
    group: "Web",
    linkLabel: null,
    screens: [],
    points: null,
    site: null,
  },
  {
    title: "Altadark Cloud",
    titleAr: null,
    description: "Cloud-services side of the Altadark brand.",
    tags: ["Web"],
    url: null,
    category: "Web · Cloud",
    status: "Offline",
    year: "2024",
    group: "Web",
    linkLabel: null,
    screens: [],
    points: null,
    site: null,
  },
  // ── Client ──────────────────────────────────────────────────
  {
    title: "Qi Card Branches",
    titleAr: null,
    description:
      "Website for Qi Card, Iraq's banking and payment-card company, to showcase and locate their branches across the country. Helps customers find the nearest branch and navigate Qi Card's physical presence.",
    tags: ["Next.js"],
    url: null,
    category: "Web · Client",
    status: "Delivered",
    year: "2024",
    group: "Client",
    linkLabel: null,
    screens: [],
    points: null,
    site: null,
  },
] as const;

export type Project = (typeof projectsData)[number];

// The four live App Store apps that stand on the hero baseline.
export const shelfApps = [
  { title: "Atilim Schedule", label: "Atilim Schedule", screen: "/work/atilim-schedule/screen-4.jpg" },
  { title: "TAD iOS", label: "TAD", screen: "/work/tad-ios/screen-1.jpg" },
  { title: "Khatwa", label: "Khatwa", screen: "/work/khatwa/screen-1.jpg" },
  { title: "SosoSketch", label: "SosoSketch", screen: "/work/sososketch/screen-1.jpg" },
] as const;

// Pixel size of every exported screen in public/work, keyed by path prefix.
export const screenSize = {
  "atilim-schedule": { width: 780, height: 1700 },
  "tad-ios": { width: 780, height: 1691 },
  khatwa: { width: 780, height: 1695 },
  sososketch: { width: 780, height: 1385 },
} as const;

// Pixel size of each live-site capture in public/work/sites.
export const siteSize: Record<string, { width: number; height: number }> = {
  "/work/sites/orka-hero.jpg": { width: 1800, height: 831 },
  "/work/sites/movie.jpg": { width: 1800, height: 1125 },
};

export function sizeOf(src: string) {
  const key = src.split("/")[2] as keyof typeof screenSize;
  return screenSize[key];
}
