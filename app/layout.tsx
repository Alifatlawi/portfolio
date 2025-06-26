import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Floating Particles Background */}
        <div className="floating-particles">
          <div className="particle w-2 h-2" style={{left: '10%', animationDelay: '0s'}}></div>
          <div className="particle w-3 h-3" style={{left: '20%', animationDelay: '2s'}}></div>
          <div className="particle w-1 h-1" style={{left: '30%', animationDelay: '4s'}}></div>
          <div className="particle w-2 h-2" style={{left: '40%', animationDelay: '6s'}}></div>
          <div className="particle w-4 h-4" style={{left: '50%', animationDelay: '8s'}}></div>
          <div className="particle w-2 h-2" style={{left: '60%', animationDelay: '10s'}}></div>
          <div className="particle w-3 h-3" style={{left: '70%', animationDelay: '12s'}}></div>
          <div className="particle w-1 h-1" style={{left: '80%', animationDelay: '14s'}}></div>
          <div className="particle w-2 h-2" style={{left: '90%', animationDelay: '16s'}}></div>
          <div className="particle w-3 h-3" style={{left: '15%', animationDelay: '18s'}}></div>
        </div>

        {/* Ultra-Premium Background Gradients */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10"></div>
          
          {/* Dynamic Floating Orbs */}
          <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] float-1">
            <div className="w-full h-full bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-600/30 dark:from-blue-600/20 dark:via-indigo-700/20 dark:to-purple-800/20 rounded-full"></div>
          </div>
          
          <div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] float-2">
            <div className="w-full h-full bg-gradient-to-br from-pink-400/30 via-rose-500/30 to-orange-500/30 dark:from-pink-600/20 dark:via-rose-700/20 dark:to-orange-800/20 rounded-full"></div>
          </div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-[40rem] right-[-20rem] h-[20rem] w-[20rem] rounded-full blur-[8rem] opacity-60 float-3">
            <div className="w-full h-full bg-gradient-to-r from-cyan-400/40 to-blue-500/40 dark:from-cyan-600/30 dark:to-blue-700/30 rounded-full"></div>
          </div>
          
          <div className="absolute top-[80rem] left-[-10rem] h-[25rem] w-[25rem] rounded-full blur-[9rem] opacity-50 float-1">
            <div className="w-full h-full bg-gradient-to-r from-violet-400/40 to-pink-500/40 dark:from-violet-600/30 dark:to-pink-700/30 rounded-full"></div>
          </div>
          
          {/* Mesh Gradient Overlay */}
          <div className="absolute top-[60rem] right-[5rem] h-[15rem] w-[15rem] rounded-full blur-[6rem] opacity-30 float-2">
            <div className="w-full h-full mesh-gradient rounded-full"></div>
          </div>
          
          <div className="absolute top-[100rem] left-[10rem] h-[18rem] w-[18rem] rounded-full blur-[7rem] opacity-40 float-3">
            <div className="w-full h-full bg-gradient-to-br from-emerald-400/30 via-teal-500/30 to-cyan-600/30 dark:from-emerald-600/20 dark:via-teal-700/20 dark:to-cyan-800/20 rounded-full"></div>
          </div>
        </div>

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
