import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Ali Al-Fatlawi — Software Engineer",
  description:
    "Software engineer building iOS apps, web products, and the quiet tooling in between. Based in Ankara.",
};

const setInitialTheme = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.classList.add('js-ready');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,300..700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:text-sm focus:tracking-tight"
        >
          Skip to content
        </a>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main id="content">{children}</main>
            <Footer />
            <ThemeSwitch />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "var(--bg-raised)",
                  color: "var(--ink)",
                  border: "1px solid var(--rule)",
                  borderRadius: "4px",
                  fontSize: "var(--fs-sm)",
                  boxShadow: "none",
                  padding: "12px 16px",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
