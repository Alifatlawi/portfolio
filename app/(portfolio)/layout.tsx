import "./globals.css";
import type { Metadata } from "next";
import { Reem_Kufi, Readex_Pro } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

// Both faces are drawn for Latin and Arabic together, so the two scripts
// share colour, weight and baseline.
const display = Reem_Kufi({
  subsets: ["latin", "arabic"],
  variable: "--font-reem",
  display: "swap",
});

const text = Readex_Pro({
  subsets: ["latin", "arabic"],
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Al-Fatlawi — Software Engineer",
  description:
    "Software engineer in Ankara building iOS apps, web products, and the backend underneath. Four apps live on the App Store.",
  themeColor: "#22389A",
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
    <html
      lang="en"
      className={`${display.variable} ${text.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="min-h-screen bg-bg text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-saffron focus:text-on-saffron focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main id="content">{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 5000,
                style: {
                  background: "var(--ink)",
                  color: "var(--bg)",
                  borderRadius: "0",
                  fontFamily: "var(--font-text)",
                  fontSize: "var(--fs-sm)",
                  boxShadow: "none",
                  padding: "12px 16px",
                },
                success: {
                  iconTheme: { primary: "var(--saffron)", secondary: "var(--ink)" },
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
