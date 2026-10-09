import "./murafa.css";
import type { Metadata } from "next";
import { localize, murafaContent, type MurafaLang } from "@/lib/murafa";

// Only these glyphs are downloaded from the icon font (must stay alphabetical).
const ICON_NAMES = [
  "add",
  "block",
  "check",
  "cloud_done",
  "document_scanner",
  "event",
  "event_repeat",
  "familiar_face_and_zone",
  "folder_shared",
  "ios_share",
  "lock",
  "notifications",
  "person_add",
  "phone_iphone",
  "remove",
  "signal_cellular_alt",
  "translate",
  "visibility_off",
].join(",");

const TEXT_FONTS =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap";
const ICON_FONT = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${ICON_NAMES}&display=block`;

export const murafaPath = (lang: MurafaLang) =>
  lang === "ar" ? "/murafa" : "/murafa/en";

export function murafaMetadata(lang: MurafaLang): Metadata {
  const meta = localize(murafaContent.meta, lang);
  const name = localize(murafaContent.t.name, lang);
  return {
    metadataBase: new URL("https://alialfatlawi.com"),
    title: meta.title,
    description: meta.description,
    applicationName: name,
    icons: { icon: "/murafa/icon.svg", apple: "/murafa/icon.svg" },
    alternates: {
      canonical: murafaPath(lang),
      languages: { ar: "/murafa", en: "/murafa/en" },
    },
    openGraph: {
      type: "website",
      siteName: name,
      title: meta.title,
      description: meta.description,
      url: murafaPath(lang),
      locale: lang === "ar" ? "ar_IQ" : "en_US",
      images: [{ url: `/murafa/og-${lang}.png`, width: 1200, height: 514 }],
    },
    twitter: { card: "summary_large_image" },
    themeColor: "#F3F1EC",
  };
}

export default function MurafaDocument({
  lang,
  children,
}: {
  lang: MurafaLang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Root layout in the app router; the pages-router rule misfires outside app/ */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={TEXT_FONTS} />
        <link rel="stylesheet" href={ICON_FONT} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
