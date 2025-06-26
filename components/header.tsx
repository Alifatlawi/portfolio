"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.90]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.99]);
  const headerY = useTransform(scrollY, [0, 100], [0, -2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when section changes
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="z-[999] relative">
      {/* Desktop Header */}
      <motion.div
        className={clsx(
          "fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border backdrop-blur-xl transition-all duration-500 sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full hidden sm:block",
          isScrolled 
            ? "border-white/20 bg-white/70 dark:bg-gray-800/70 dark:border-white/15 shadow-2xl" 
            : "border-white/30 bg-white/80 dark:bg-gray-800/80 dark:border-white/20 shadow-xl"
        )}
        style={{
          opacity: headerOpacity,
          scale: headerScale,
          y: headerY,
        }}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {/* Enhanced animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: "conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))",
            padding: "1px",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: "50%",
            }}
            animate={{
              y: [-3, 3, -3],
              x: [-1, 1, -1],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-5 py-2.5 hover:text-gray-950 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-200 rounded-full relative group font-medium",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {link.name}
                </motion.span>

                {/* Enhanced hover effect - only shows when NOT active */}
                {activeSection !== link.name && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ 
                      scale: 1.05,
                    }}
                  />
                )}

                {/* Active section indicator with FIXED styling */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full shadow-lg backdrop-blur-xl border border-white/30"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 35%, rgba(236, 72, 153, 0.2) 100%)",
                      boxShadow: "0 6px 20px -6px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                    }}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  >
                    {/* STATIC Background Gradient - No Animation */}
                    <div
                      className="absolute inset-0 rounded-full opacity-40"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))",
                      }}
                    />
                    
                    {/* STATIC Highlight - No Animation */}
                    <div
                      className="absolute inset-0 rounded-full opacity-60"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
                      }}
                    />
                  </motion.span>
                )}

                {/* Enhanced ripple effect on click */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0"
                  animate={{
                    scale: activeSection === link.name ? [0, 2, 0] : 0,
                    opacity: activeSection === link.name ? [0.4, 0, 0] : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Header */}
      <motion.div
        className={clsx(
          "fixed top-0 left-0 right-0 h-16 border-b backdrop-blur-xl transition-all duration-300 sm:hidden z-50",
          isScrolled || isMobileMenuOpen
            ? "border-white/20 bg-white/80 dark:bg-gray-800/80 dark:border-white/15 shadow-lg" 
            : "border-white/30 bg-white/90 dark:bg-gray-800/90 dark:border-white/20 shadow-md"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo/Brand */}
          <motion.div
            className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ali Al-Fatlawi
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 text-gray-700 dark:text-white/80 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={clsx(
          "fixed inset-0 bg-black/20 backdrop-blur-sm sm:hidden z-40",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <motion.div
        className={clsx(
          "fixed top-16 left-0 right-0 backdrop-blur-xl border-b border-white/20 dark:border-white/10 sm:hidden z-40 overflow-hidden",
          "bg-white/95 dark:bg-gray-800/95 shadow-2xl"
        )}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <motion.div
          className="py-6"
          initial={{ y: -20 }}
          animate={{ y: isMobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 : 0 }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.hash}
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMobileMenuOpen ? 0 : -20,
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              transition={{ 
                delay: isMobileMenuOpen ? index * 0.05 : 0,
                duration: 0.3 
              }}
            >
              <Link
                className={clsx(
                  "flex items-center px-6 py-4 text-lg font-medium transition-all duration-300 relative group border-l-4 rounded-r-lg",
                  activeSection === link.name
                    ? "text-blue-600 dark:text-blue-400 border-blue-500"
                    : "text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 hover:bg-blue-50/30 dark:hover:bg-blue-900/10"
                )}
                style={activeSection === link.name ? {
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 35%, rgba(236, 72, 153, 0.1) 100%)",
                } : {}}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMobileMenuOpen(false);
                }}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.span>

                {/* Active indicator for mobile - STATIC */}
                {activeSection === link.name && (
                  <>
                    {/* STATIC Background for Mobile */}
                    <div
                      className="absolute inset-0 rounded-r-lg opacity-20"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
                      }}
                    />
                    
                    <motion.div
                      className="absolute right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced floating background orbs */}
      <motion.div
        className="fixed top-2 left-1/5 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl -z-10"
        animate={{
          y: [-8, 8, -8],
          x: [-4, 4, -4],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="fixed top-6 right-1/5 w-12 h-12 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl -z-10"
        animate={{
          y: [6, -12, 6],
          x: [3, -6, 3],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="fixed top-10 left-1/3 w-10 h-10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl -z-10"
        animate={{
          y: [-4, 10, -4],
          x: [-2, 5, -2],
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </header>
  );
}
