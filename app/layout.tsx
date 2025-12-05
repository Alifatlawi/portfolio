import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Cursor from "@/components/cursor";
import BackgroundGradient from "@/components/background-gradient";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Al-Fatlawi - Software Engineer",
  description: "Ali Al-Fatlawi is a Software Engineer passionate about creating innovative digital solutions and building scalable applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} text-gray-950 relative pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <Cursor />
        <ScrollProgress />
        <BackgroundGradient />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  color: '#374151',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

