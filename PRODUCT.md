# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary**: technical recruiters and engineering managers at product-led companies, especially iOS / mobile-first teams. They arrive from LinkedIn, GitHub, or a résumé link and spend 30–90 seconds deciding whether Ali is worth a conversation. Mostly desktop during work hours for the first scan, with a mobile follow-up later. They arrive skeptical: every portfolio they see looks the same.

**Secondary**: freelance inbound. Founders or small teams looking for someone to build or ship an iOS or cross-platform app.

**Job to be done**: "Convince me in one scroll that this person has taste, ships real things, and would be pleasant to work with."

## Product Purpose

A single-page personal portfolio for Ali Al-Fatlawi, a software engineer who builds iOS apps (Swift / SwiftUI), web products (Next.js / NestJS), and the backend underneath. Success means a qualified visitor starts a conversation through the contact form, email, or LinkedIn.

## Positioning

Ali ships real products to real users, many of them for Arabic-speaking and MENA audiences that most portfolios never touch: an Arabic mental-health app (Khatwa), an Arabic-first practice manager for Iraqi lawyers (Murafa'a), a course platform for Libyan students (TAD), an ad-tech platform for the MENA region (Target), and client work for Iraqi brands (Qi Card, Orka). Four iOS apps are live on the App Store, one of them adopted by ~7,000 Atılım University students.

## Operating Context

- Visitors judge the site in a 30–90 second scan before deciding to read further.
- The first screen must lead with the shipped work itself (user decision, 2026-10-21), not with a name-only hero.
- The site is a Next.js App Router project. The portfolio lives in the `app/(portfolio)` route group. The Murafa'a product site at `/murafa` and `/murafa/en` is a separate surface with its own fixed palette, and it is out of scope for portfolio design work. Shared Tailwind config must keep it working.

## Capabilities and Constraints

- Sections: hero, projects (flagship, iOS, web, client), about, experience, contact. All of them stay.
- The contact form sends email through a Next.js server action (`actions/sendEmail.ts`) via Resend; it must keep working.
- A light/dark theme toggle exists and stays. Light is the default; the scene is a recruiter's daylit office or laptop.
- Stack: Next.js 13.4 (App Router), React 18, TypeScript, Tailwind 3.3. There is no animation library installed.
- Node >=22 <25 (Vercel).
- No CV is published yet. `public/CV.pdf` is empty, so the CV link stays hidden until a real file exists (user decision, 2026-10-21).

## Brand Commitments

- Name: **Ali Al-Fatlawi**. Monogram used in the header: **A/F**.
- Personality: **engineered, considered, quietly confident.** No "aspiring developer" energy.
- Binding anti-references, set by the user in `.impeccable.md`: no rainbow or multi-hue gradient text, no animated gradient mesh backgrounds, no floating decorative emoji or tech icons, no glow or neon rings around the portrait, no glassmorphism, no identical rounded-rectangle project cards in a symmetric grid, no Inter / DM Sans / Plus Jakarta / Space Grotesk / Fraunces.
- No continuous looping animation on decorative elements. Respect `prefers-reduced-motion`.

## Evidence on Hand

- **App Store listings, public, with icons and iPhone screenshots** (release dates from the App Store lookup API):
  - Atilim Schedule, id 6730125883, released 2024-09-30. Adopted by ~7,000 Atılım students (Ali's own figure).
  - TAD (iOS), id 6757405981, released 2026-04-19.
  - Khatwa | خطوه, id 6744864963, released 2025-04-28.
  - SosoSketch, id 6670456438, released 2024-09-04.
- **Live websites**: tadedu.com (TAD LMS), orka.store, movie.alialfatlawi.com, altadarkgroup.com, altadark.cloud.
- **Private / delivered work, no public URL**: Target (ad-tech, live, private), Qi Card Branches (client, delivered).
- **Murafa'a**: product site in this repo at `/murafa`; app status "coming soon".
- **Portrait**: `public/IMG_8819.JPG` (640×640).
- **Do not use**: `public/corpcomment.png`, `rmtdev.png`, `wordanalytics.png` are tutorial projects, not Ali's products. `public/atilimcom.png` belongs to Atilim Community, which the user chose not to list.
- **Absent, must not be fabricated**: testimonials, client logos, employer names beyond what `lib/data.ts` states, metrics beyond "~7,000 students", download counts, a CV.

## Product Principles

1. **Trust the work.** The shipped apps and sites are the proof; the page frames them instead of out-shouting them.
2. **Ship signal, cut noise.** Every element must communicate something; decoration that says nothing is removed.
3. **Prove, don't claim.** Show the real product, real screens, and real dates rather than adjectives.
4. **Restraint is the flex.** Calm confidence over spectacle.

## Accessibility & Inclusion

- WCAG AA baseline (AAA for body copy where achievable).
- Every interactive element is keyboard-reachable, with visible focus.
- Full `prefers-reduced-motion` support.
- Color is never the only signal for state.
- Arabic product names (e.g. خطوه) render correctly and carry `lang`/`dir` where shown.
