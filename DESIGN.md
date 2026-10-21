---
name: Ali Al-Fatlawi — Portfolio
description: A bilingual modernist print sheet. Lapis spot ink, saffron second ink, Latin from the left margin and Arabic from the right, shipped apps on one shared baseline.
colors:
  bg: "oklch(97.4% 0.004 100)"
  bg-raised: "oklch(94.8% 0.006 100)"
  ink: "oklch(20% 0.024 268)"
  ink-2: "oklch(36% 0.032 268)"
  ink-3: "oklch(46% 0.036 268)"
  rule: "oklch(86.5% 0.014 268)"
  rule-strong: "oklch(20% 0.024 268)"
  lapis-text: "oklch(40% 0.16 268)"
  field: "oklch(39% 0.16 268)"
  field-deep: "oklch(32.5% 0.14 268)"
  field-ink: "oklch(97.4% 0.004 100)"
  field-ink-2: "oklch(87% 0.04 268)"
  field-rule: "oklch(97.4% 0.004 100 / 0.32)"
  saffron: "oklch(80.5% 0.152 80)"
  saffron-hover: "oklch(86% 0.13 86)"
  on-saffron: "oklch(20% 0.024 268)"
  bg-dark: "oklch(16.5% 0.036 268)"
  bg-raised-dark: "oklch(20.5% 0.046 268)"
  ink-dark: "oklch(95.5% 0.006 100)"
  ink-2-dark: "oklch(84% 0.03 268)"
  ink-3-dark: "oklch(73% 0.04 268)"
  rule-dark: "oklch(31% 0.05 268)"
  rule-strong-dark: "oklch(88% 0.012 268)"
  lapis-text-dark: "oklch(77% 0.1 268)"
  field-dark: "oklch(29.5% 0.125 268)"
  field-deep-dark: "oklch(24% 0.1 268)"
  field-ink-dark: "oklch(96% 0.006 100)"
  field-ink-2-dark: "oklch(84% 0.045 268)"
  field-rule-dark: "oklch(96% 0.006 100 / 0.26)"
typography:
  display:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 10.6 * var(--u), 9.75rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  display-ar:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9.2 * var(--u), 8.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "0"
  headline:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3vw + 1rem, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline-ar:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 11vw, 10.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  title-billboard:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Reem Kufi, Geeza Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.6vw + 1rem, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Readex Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 360
    lineHeight: 1.55
  body:
    fontFamily: "Readex Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 360
    lineHeight: 1.6
  label:
    fontFamily: "Readex Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 450
    lineHeight: 1.45
    letterSpacing: "0.01em"
    fontFeature: "tnum"
rounded:
  none: "0"
  screen: "14% / 6.45%"
  screen-plus: "2px"
spacing:
  page-x: "clamp(1rem, 3.35vw, 3rem)"
  gutter: "clamp(1rem, 1.7vw, 1.5rem)"
  header: "4rem"
  plate-row: "0.625rem"
  group: "7rem"
  section: "9rem"
components:
  button-saffron:
    backgroundColor: "{colors.saffron}"
    textColor: "{colors.on-saffron}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.375rem"
    height: "3rem"
  button-saffron-hover:
    backgroundColor: "{colors.saffron-hover}"
    textColor: "{colors.on-saffron}"
  button-saffron-pending:
    backgroundColor: "{colors.field-ink-2}"
    textColor: "{colors.on-saffron}"
  field-input:
    backgroundColor: "transparent"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0"
  nav-link:
    textColor: "{colors.field-ink-2}"
    typography: "{typography.label}"
    padding: "0.625rem 0.75rem"
  nav-link-active:
    textColor: "{colors.field-ink}"
  index-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    padding: "1.5rem 1rem"
  index-row-active:
    backgroundColor: "{colors.field}"
    textColor: "{colors.field-ink}"
  index-row-dimmed:
    textColor: "{colors.ink-3}"
  label-plate-term:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
    width: "5.5rem"
    padding: "0.625rem 0"
---

# Design System: Ali Al-Fatlawi — Portfolio

## Overview

**Creative North Star: "Two Scripts, One Grid"**

The portfolio is a modernist print sheet run in two flat spot inks on uncoated stock. A lapis field owns the opening spread, the header band, the contact close and the colophon; bright paper carries the reading sections between them. Saffron is the single second ink, printed for action, for the active state and for the Arabic voice when it sits on lapis. Ink-black sets the text. Nothing is glossed, blurred or lifted: depth comes from ink changing, not from light.

Two scripts share one grid. Latin hangs from the left margin and Arabic from the right, and the two meet on shared last baselines: the hero name and its Arabic counterpart, every section head, the header's Latin nav and its mirrored Arabic nav. Scale jumps hard, from a 13px tabular label straight to billboard display, with little in between. The shipped work is the proof. Real app screens stand at true relative scale on one full-width rule, and every project carries the same label plate with the same fields in the same order.

The world refuses the name-hero-over-card-grid developer page and the cream-paper, hairline, mono-label editorial look. It also carries the user's binding refusals: no gradient text, no gradient-mesh backgrounds, no glassmorphism, no glow around the portrait, no floating tech icons, no identical rounded project cards in a symmetric grid.

**Key Characteristics:**
- Two flat inks (lapis field, saffron) plus ink-black on bright paper; no gradients, no translucency effects.
- Bilingual layout: Latin from the left margin, Arabic from the right, aligned on last baselines.
- Square corners everywhere except the phone screens.
- Hairline rules divide content; a strong ink rule closes each head.
- Labels are set in the text face with tabular figures, never in a mono costume and never in all caps.
- One orchestrated load, then only state transitions.

## Colors

Two spot inks and their papers: a deep lapis blue that owns surfaces, a warm saffron that marks action, and blue-tinted neutrals for text and rules.

### Primary
- **Lapis Field** (`field`; dark `field-dark`): the spot-ink surface. It fills the hero, the fixed header band, the active row of the iOS index, the pinned viewer, the duotone portrait ground, the contact section and the footer. Close to #22389A, which is also the browser `themeColor`. Nothing else is lapis-filled.
- **Lapis Text** (`lapis-text`; dark `lapis-text-dark`): lapis as a text ink on paper. It sets the wall-scale Arabic section titles on paper, Arabic app names in the index, Arabic dates in the ledger, the caret, and the focus ring on paper.
- **Deep Lapis** (`field-deep`): reserved darker step of the field. It is defined and mapped, but no component in the shipped page uses it yet.

### Secondary
- **Saffron** (`saffron`, identical in both themes): the one second ink. It fills the single button family, draws the 2px active rule under nav items, colours the active plate name on the shelf and the active app name in the index, sets the Arabic name and Arabic section titles on lapis, the A/F monogram, the full stop in the hero claim, link arrows on the shelf, text selection, and the focus ring and field underline on lapis.
- **Saffron Lift** (`saffron-hover`): the button's hover ink, lighter and yellower.
- **On Saffron** (`on-saffron`): dark ink for text on saffron, unchanged in dark mode.

### Neutral
- **Bright Paper** (`bg`): the reading ground for Projects and Experience. In dark mode (`bg-dark`) it becomes a deep lapis-black.
- **Raised Paper** (`bg-raised`): one tonal step for a whole section (About) and for hover on paper rows. It is never a card.
- **Ink, Ink 2, Ink 3** (`ink`, `ink-2`, `ink-3`): heading text, body text, and labels or metadata. All three are lapis-tinted (hue 268), and they invert in dark mode.
- **Hairline** (`rule`): the default border on every element. It divides rows, plate fields and list items.
- **Ink Rule** (`rule-strong`): the full-strength rule under section heads and group heads, around site captures, and between the two platform columns.
- **Field Ink, Field Ink 2, Field Rule** (`field-ink`, `field-ink-2`, `field-rule`): primary text, secondary text and translucent hairlines on lapis. Field ink is the paper colour, so the shelf baseline reads as a paper line through the lapis.

### Named Rules
**The Two Inks Rule.** Lapis and saffron are the only chromatic inks. Lapis fills surfaces and saffron marks action and the active state. A third hue, a gradient or a tint between them breaks the print.

**The Saffron Is Earned Rule.** Saffron appears only on the primary action, the active or selected item, the Arabic voice on lapis, and selection or focus on lapis. It is never used for decoration on paper. An active state always pairs it with a second signal: a rule, a ground change or words.

**The Ground Decides the Ink Rule.** Each element takes its ink from its ground. On paper, use `ink*`, `rule*` and `lapis-text`. On lapis, use `field-ink*`, `field-rule` and `saffron`. Never put paper-ground tokens on the field.

## Typography

**Display Font:** Reem Kufi (with Geeza Pro, ui-sans-serif, system-ui), loaded with both the Latin and Arabic subsets.
**Body Font:** Readex Pro (with ui-sans-serif, system-ui, -apple-system, Segoe UI), loaded with both the Latin and Arabic subsets.
**Label Font:** Readex Pro, set as a label style (no separate face).

**Character:** a geometric Kufic display drawn for both scripts, so the Latin and Arabic share colour, weight and baseline, paired with a light, wide, slightly technical text face. Body text runs at weight 360, lighter than regular, and display at 700. That contrast in weight is what makes the scale jumps work.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 14.6u, 9.75rem)` on phones and `clamp(3.5rem, 10.6u, 9.75rem)` from md, lh 0.92, -0.03em): the Latin name in the hero, hung slightly past the margin (-0.045em) so the stem sits on it optically. `--u` is 1vw, capped at `min(1vw, 1.6vh)` from md so short wide screens don't overflow.
- **Display Arabic** (700, `clamp(3rem, 9.2u, 8.5rem)` from md, lh 1.12, letter-spacing 0, saffron): the Arabic name at the right margin, last-baseline aligned with the claim.
- **Claim** (700, `clamp(1.75rem, 3.3u, 3rem)`, lh 1): the one hero sentence. At lg it is also capped by its own four-column container (`3.2cqw`).
- **Headline** (700, `--fs-3xl` = `clamp(2.25rem, 3vw + 1rem, 3.75rem)`, lh 1.02): the English section heading.
- **Headline Arabic** (700, `clamp(4rem, 11vw, 10.5rem)`, lh 1.1 from md and 1.2 below): the Arabic section title, set at wall scale and larger than its English heading. This is deliberate.
- **Billboard Title** (700, `clamp(3rem, 5.4vw, 5rem)`, lh 0.9, -0.03em): the flagship platform names. Billboard scale is used only where a name carries the section.
- **Title** (700, `--fs-2xl` = `clamp(1.75rem, 1.6vw + 1rem, 2.5rem)`, lh about 1.05): group heads, ledger roles and website names. The index app names are a near variant at `clamp(1.5rem, 2.2vw, 2.5rem)`, lh 1.
- **Lead** (360, `--fs-lg` 1.25rem, lh 1.55): the first paragraph of a section, in full ink.
- **Body** (360, `--fs-base` 1.0625rem, lh 1.6, and 1.7 for long prose): reading text, capped at 54–66ch (`measure` = 66ch). Secondary copy uses 0.9375rem.
- **Label** (450, `--fs-sm` 0.8125rem, lh 1.45, +0.01em, tabular figures, sentence case): plate terms, metadata runs, group notes, captions and the colophon.

The fixed text scale is `--fs-xs` through `--fs-xl` (0.75, 0.8125, 1.0625, 1.25 and 1.5rem). Only `2xl` to `4xl` are fluid.

### Named Rules
**The Footnote-to-Billboard Rule.** Each element is either label-small or display-large. Avoid mid-sized decorative type. Numerals go large only where they carry data.

**The Label Is Text Rule.** Small set labels use the text face at 450 with tabular figures. Don't use monospace, all caps or wide tracking.

**The Arabic Tracks Zero Rule.** Any `lang="ar"` run resets letter-spacing to 0 and takes a looser line-height (1.1–1.2 against 0.9–1.05 for Latin), so the joins and descenders stay whole.

## Layout

**Page.** A centred page frame (max 90rem) with fluid side padding `page-x`, `clamp(1rem, 3.35vw, 3rem)`. Inside it is a 12-column grid with a fluid `gutter` of `clamp(1rem, 1.7vw, 1.5rem)`. A fixed 4rem header sits above everything, and `scroll-padding-top` matches it. Breakpoints follow Tailwind's defaults: md is 768px, lg 1024px and xl 1280px.

**Hero grid.** Below md, the regions stack in this order: name, Arabic name, claim, shelf, copy. On phones the apps come straight after the two names, before the lede. From md, the claim takes six columns and the Arabic name the other six on one last baseline. From lg, the name spans all 12 columns, the Arabic name takes columns 6–12, the claim and copy share columns 1–4, and the shelf takes columns 5–12 across the last two rows. The copy column's footnote sits in the same plate band as the shelf's labels.

**Bilingual section head.** A 12-column head with the English `h2` hung from the left (7 columns at md, 6 at lg) and the Arabic title from the right (5 at md, 6 at lg, `justify-self: end`). From md the two align on their last baselines above a strong rule, with the Arabic descenders hanging into the space above the rule and never through it. Below md the Arabic title comes first, right-aligned above the English heading.

**Rows and plates.** Ledger rows, also-built rows and plate fields all run on the same 12-column grid, separated by hairlines. Dates sit in columns 1–2 or 1–3, titles in 4 columns, text in 5 columns, and the Arabic date in the last column. Two-column definition lists (`5.5rem | 1fr`, or `5rem` in contact) set every plate.

**Rhythm.** Sections open with generous paper: about 6rem of top padding on phones and 9–10rem from md, with 5–7rem at the foot. Groups inside a section are spaced 5rem apart, 7rem from md. A group head is followed by 2–2.5rem of space, and a section head by 2.5–3.5rem. Plate rows use 0.625rem of vertical padding, and list rows 1.5–2.5rem.

### Named Rules
**The Shared Baseline Rule.** Where Latin and Arabic face each other, they align on their last baselines rather than on box edges. Shelf screens stand on one rule, and the plates below them have a fixed height (`--plate-h` 3.5rem) and single-line rows, so a plate can never lift its screen off the line.

**The Left-Latin, Right-Arabic Rule.** Latin always hangs from the left margin and Arabic from the right. The layout is never mirrored to put Arabic on the left.

## Elevation & Depth

The system is flat. Depth comes from ink: a lapis band is printed across the paper, or a row turns lapis when it becomes active. There is no layered stack of shadows. The only shadow belongs to the phone screens, which are physical objects standing on the baseline: a 1px edge ring plus a short drop beneath.

### Shadow Vocabulary
- **Screen Stand** (`box-shadow: 0 0 0 1px var(--screen-edge), 0 22px 32px -18px var(--screen-shadow)`): app screenshots only, on the shelf, in the viewer and in the strips.

### Named Rules
**The Ink, Not Light Rule.** A surface steps forward by changing ink (paper to raised paper, or paper to lapis), never by casting a shadow. Only phone screens cast one.

## Shapes

Corners are square: a 0 radius on buttons, fields, rows, the viewer, the portrait, site captures, the toast and even the scrollbar thumb. The single exception is the phone screen, which keeps its device silhouette (`14% / 6.45%` elliptical radius), or 2px for iPhone 8 Plus-era captures that are square-cornered. Website captures sit in a 1px ink-rule frame. Icons are one drawn family on a 24-unit grid with a 1.75 stroke and square caps and miter joins: arrow right, arrow up-right, menu, close, sun and moon.

## Components

### Buttons
Saffron is the one filled control. It is confident and printed, with no outline or ghost variant.
- **Shape:** square (0), min-height 3rem, padding 0.75rem 1.375rem, a 0.75rem gap before a trailing 16px arrow.
- **Primary:** saffron ground, on-saffron text, Readex Pro 500 at the base size. It is used for "Start a conversation" in the hero and "Send message" in contact, both on lapis.
- **Hover:** the ground shifts to saffron-hover and the arrow moves 3px right, over 220ms with ease-out-quart.
- **Pending:** `aria-disabled` rather than `disabled`, which keeps focus. The ground turns field-ink-2, the cursor shows progress, and the words change to "Sending…".
- **Focus:** a 2px saffron ring at 3px offset, because the button lives on lapis.

### Links
- **Text link:** the same colour as the surrounding text, with a 1px underline at 0.22em offset. On hover the underline fades to transparent; it does not change hue. External links carry a 13px up-right arrow and screen-reader text "(opens in a new tab)".
- **Social links** (GitHub, LinkedIn) are text links at label size, with 0.625rem of vertical padding to enlarge the touch target.

### Label Plate (signature)
Like a cassette deck fascia, every project carries the same fields in the same positions.
- **Full plate:** a two-column definition list (term column 5.5rem) with the rows Year, Status, Type, Stack and Link in that order. The term is a label in ink-3, the value is 0.9375rem in ink with tabular figures, each row has 0.625rem of padding and a hairline above. A missing link is stated in words ("Private platform, no public link") rather than left out.
- **Shelf plate:** a fixed 3.5rem band holding the app name (0.9375rem, weight 500, field-ink) over one label line ("Year · iOS · Status" and a saffron arrow).
- **Meta runs** join items with " · " so a line can end on a separator but never start with one, and never break inside an item.
- The same list form sets About's "Working with" and the contact details.

### Shelf (signature, hero)
Four real App Store screens at true relative scale (points × `--pt`) stand on one full-bleed paper rule inside the lapis field.
- **Desktop:** the screens are right-aligned, and their size is capped by both width and viewport height.
- **Below md:** the shelf bleeds to the viewport edges and scrolls horizontally with snap points. About 2.4 phones fit per screen, so the next one always peeks in, and the scrollbar is hidden.
- **Isolate-and-dim:** pointing at or focusing an app fades the other screens to 0.42 opacity. Their plate names step down to field-ink-2 but keep full contrast, and the active plate name turns saffron.

### iOS Index + Pinned Viewer (signature)
- **Index (7 columns at lg):** an ordered list of apps divided by hairlines. Each row lays out name (with its Arabic name where one exists), year, status and link label. At lg the rows share the column height equally.
- **Active row:** turns into a lapis band (field ground, field-ink text) with the app name in saffron. While the list is engaged, the other rows step down to ink-3 instead of fading, so they stay AA.
- **Viewer (5 columns at lg, `aria-hidden`):** a lapis panel that stacks one plate per app and shows only the active one, crossfading opacity and visibility over 220ms. Each plate shows up to two screens standing on a field-ink rule, with the name, stack and description below. Its height comes from the viewport so the whole plate fits under the header.
- **Below lg:** there is no viewer. Each row shows its description and a horizontally scrolling strip of its screens. The strip is a keyboard stop only when it actually scrolls.

### Inputs / Fields
- **Style:** printed lines on lapis. The field has a transparent ground, no border except a bottom rule in field-ink-2, no radius, 0.75rem vertical padding, 1.25rem text in field-ink, and placeholders in field-ink-2. The label sits above as a label in field-ink-2.
- **Focus:** the underline turns saffron and thickens visually with a 1px saffron under-shadow, over 220ms. This replaces the outline ring on fields.
- **Status:** results go to persistent live regions (status and alert) and are mirrored by a square toast in ink on paper colours.

### Navigation
- **Header:** a fixed 4rem lapis band with a field-rule hairline at its foot. On the left are the saffron A/F monogram in Reem Kufi and the name in field-ink-2, then the Latin nav. On the right, from lg, sits the Arabic mirror of the nav, followed by the theme switch.
- **Nav link:** 0.8125rem Latin, or 1.25rem Reem Kufi for Arabic, with 0.625rem × 0.75rem padding. The link is field-ink-2 at rest and field-ink when hovered or active. The active item gets a 2px saffron rule that scales in from the reading-start edge (from the left in Latin, from the right in Arabic), and the Latin link carries `aria-current="location"`.
- **Arabic mirror:** `lang="ar" dir="rtl"`, `aria-hidden`, and `tabIndex=-1`. It is a visual voice for pointer users. Keyboard and assistive-tech users use the Latin nav.
- **Mobile (below md):** a "Menu"/"Close" text toggle opens a full-height lapis sheet, unfolded with a grid-rows transition over 480ms. Rows are 2rem Reem Kufi Latin on the left with the Arabic (1.5rem, hidden from assistive tech) on the right, divided by field rules, and the active row is saffron in both scripts. The page behind goes inert and scroll-locks, Escape returns focus to the toggle, and the sheet closes itself when the viewport widens past md.
- **Theme switch:** a 44px square icon button (moon or sun) in field-ink-2, turning field-ink on hover.

### Bilingual Rules
- Every Arabic run carries `lang="ar"` and `dir="rtl"`.
- Arabic that echoes an adjacent English label is `aria-hidden`: section titles, the nav mirror, the mobile sheet's Arabic labels and the ledger's Arabic dates. Arabic that is content in its own right stays exposed: the name in the hero and colophon, and app names such as خطوه and مُرافعة.
- Arabic dates use Eastern Arabic digits, an en dash, and الآن for "present".
- On paper, Arabic display text is lapis-text; on lapis it is saffron. The exceptions are the nav, where Arabic follows the field-ink states, and the colophon name, which is field-ink.

### Motion
- **One orchestrated load,** gated on `.js-ready` so content is visible without JS. The name, Arabic name, claim and copy rise in (14px, 720ms, ease-out-expo, staggered 0, 90, 160 and 220ms). The Arabic name slides in from its own right side. The shelf rule draws out from the centre (900ms, starting at 180ms), the screens settle onto it (36px, 900ms, from 380ms plus 90ms per screen), and the plates fade in from 640ms plus 90ms per plate.
- **After the load,** only state transitions run: `--dur-fast` 120ms, `--dur-base` 220ms (most colour, opacity and transform changes) and `--dur-slow` 480ms (the mobile sheet and the site-capture hover zoom of 1.015), with ease-out-quart for state and ease-out-expo for entrances. Nothing loops.
- **Reduced motion:** every animation and transition collapses to 0.001ms with no delay, and smooth scrolling is turned off.

### States
- **Focus on paper:** a 2px lapis-text outline at 3px offset. **On lapis** (anything inside `.field`): the same ring in saffron. **Fields:** a saffron underline instead of a ring. **Scroll strips:** an inset ring (offset -2px).
- **Active:** saffron plus a second signal (a rule, a lapis band or `aria-current`). In forced-colours mode, `aria-current` falls back to a 2px underline.
- **Isolate-and-dim:** the shelf dims screens to 0.42 opacity, while the index steps text down to ink-3 without fading it. Text is never faded below AA.
- **Selection:** a saffron ground with on-saffron text.
- **Skip link:** a saffron chip at the top left when focused.

## Do's and Don'ts

### Do:
- **Do** fill surfaces only with paper, raised paper or the lapis field. Use lapis for the hero, the header band, the active index row, the viewer, the contact close and the footer.
- **Do** keep saffron for the primary action, the active or selected state, the Arabic voice on lapis, and focus or selection on lapis.
- **Do** set every bilingual heading as Latin at the left margin and Arabic at the right, aligned on last baselines, with the Arabic title larger than the English one.
- **Do** give every project the same label plate: Year, Status, Type, Stack and Link, in that order, with absent values stated in words.
- **Do** stand phone screens on one shared rule at true relative scale, with the Screen Stand shadow and the device corner radius.
- **Do** set labels in Readex Pro 450 at 0.8125rem with tabular figures and sentence case.
- **Do** dim by stepping ink (ink to ink-3, or field-ink to field-ink-2) when text is involved; fade images only.
- **Do** take tokens from the ground: `ink*`, `rule*` and `lapis-text` on paper; `field-*` and `saffron` on lapis.
- **Do** mark every Arabic run with `lang="ar" dir="rtl"`, and hide it from assistive tech only when it echoes adjacent English.

### Don't:
- **Don't** round corners on anything but phone screens: no rounded cards, buttons, inputs or chips.
- **Don't** add a third chromatic ink, gradients, gradient text, gradient-mesh backgrounds, glassmorphism, or glow around the portrait.
- **Don't** build an identical-card grid for projects. Work is set as plates, index rows and shelves on the 12-column grid.
- **Don't** use a monospace or all-caps tracked label style, or place kickers and eyebrows above headings.
- **Don't** cast shadows on surfaces, cards or buttons. Only phone screens stand with a shadow.
- **Don't** use glyph, emoji or icon-font icons. Draw from the one 1.75-stroke, square-cap SVG family.
- **Don't** add looping or scroll-triggered decorative motion. The hero load runs once, and everything else is a state transition.
- **Don't** set Inter, DM Sans, Plus Jakarta, Space Grotesk, Fraunces or a system display face. Reem Kufi and Readex Pro cover both scripts.
- **Don't** mirror the page for Arabic or put Arabic on the left margin.
