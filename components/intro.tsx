"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaCode, FaMagic, FaRocket, FaLaptopCode, FaMobile } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const controls = useAnimation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] relative px-4 pt-20 sm:pt-28 md:pt-32"
      style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Gradient Mesh - More Subtle */}
        <motion.div
          className="absolute -top-60 -left-60 w-80 h-80 bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -top-40 -right-60 w-96 h-96 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Interactive Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-blue-500/30' :
                i % 3 === 1 ? 'bg-purple-500/30' : 'bg-pink-500/30'
              }`}
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${10 + (i * 12) % 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            whileHover={{
              scale: 3,
              opacity: 1,
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Floating Tech Icons - More Subtle */}
        <motion.div
          className="absolute top-20 left-[10%] text-blue-500/15 text-xl"
          variants={floatingIconVariants}
          animate="animate"
        >
          <FaLaptopCode />
        </motion.div>

        <motion.div
          className="absolute top-40 right-[15%] text-purple-500/15 text-lg"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <FaMobile />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-[15%] text-pink-500/15 text-base"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <HiSparkles />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-[10%] text-emerald-500/15 text-lg"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 3 }}
        >
          <FaMagic />
        </motion.div>
      </div>

      {/* Enhanced Profile Section */}
      <motion.div
        className="flex items-center justify-center mb-10 relative"
        variants={itemVariants}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
        }}
      >
        <div className="relative group">
          {/* Multiple Animated Rings */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full border-2 border-dashed border-blue-500/30"></div>
          </motion.div>

          <motion.div
            className="absolute inset-2 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.95, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-dotted border-purple-500/25"></div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1.2,
            }}
            whileHover={{ scale: 1.08 }}
            className="relative z-10"
          >
            {/* Multiple Glowing Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <div className="absolute inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <Image
              src="/IMG_8819.JPG"
              alt="Ali Al-Fatlawi portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-40 w-40 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-blue-500/30 dark:ring-blue-400/40 relative z-10 hover-glow transition-all duration-500 group-hover:ring-purple-500/40"
            />
          </motion.div>

          {/* Enhanced Wave Emoji */}
          <motion.span
            className="absolute -bottom-3 -right-3 text-5xl sm:text-6xl filter drop-shadow-lg"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              opacity: { type: "spring", stiffness: 125, delay: 0.8, duration: 1 },
              scale: { type: "spring", stiffness: 125, delay: 0.8, duration: 1 },
              rotate: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }
            }}
            whileHover={{
              scale: 1.3,
              rotate: 20,
              transition: { duration: 0.3 }
            }}
          >
            👋
          </motion.span>

          {/* Enhanced Floating Tech Icons */}
          <motion.div
            className="absolute -top-6 -left-6 text-blue-500 opacity-70 text-xl sm:text-2xl"
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCode />
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-6 text-purple-500 opacity-70 text-xl sm:text-2xl"
            animate={{
              y: [8, -8, 8],
              rotate: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaRocket />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-4 text-emerald-500 opacity-60 text-lg sm:text-xl"
            animate={{
              x: [-5, 5, -5],
              rotate: [0, 10, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HiSparkles />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-4 text-pink-500 opacity-60 text-lg sm:text-xl"
            animate={{
              x: [5, -5, 5],
              rotate: [0, -12, 0],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaMagic />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Title with Better Typography */}
      <motion.h1
        className="mb-10 px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !leading-[1.1] text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        <motion.span
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Ali Al-Fatlawi
          </span>
        </motion.span>
        <br className="hidden sm:block" />
        <motion.span
          className="mt-2 sm:mt-0 inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I'm a{" "}
          <motion.span
            className="relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        </motion.span>
        <br />
        <motion.span
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mt-4 block leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          passionate about creating{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
            innovative digital solutions
          </span>{" "}
          and building{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-semibold">
            scalable applications
          </span>
        </motion.span>
      </motion.h1>

      {/* Enhanced Button Group */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
        variants={itemVariants}
      >
        {/* Enhanced CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#contact"
            className="group relative overflow-hidden px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-3 rounded-full outline-none transition-all duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-blue-500/25"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.span
              className="relative z-10 font-semibold tracking-wide"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact me here
            </motion.span>

            <motion.div
              className="relative z-10"
              whileHover={{ x: 5, rotate: -45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsArrowRight className="text-xl" />
            </motion.div>

            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full scale-0"
              whileHover={{ scale: 2.5 }}
              transition={{ duration: 0.6 }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </Link>
        </motion.div>

        {/* Enhanced Social Links */}
        <div className="flex items-center gap-5">
          <motion.a
            className="group relative p-4 sm:p-5 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white/60 dark:hover:text-white"
            href="https://www.linkedin.com/in/alfatlawi/"
            target="_blank"
            whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsLinkedin className="text-xl sm:text-2xl" />
            </motion.div>

            {/* Enhanced Hover Background */}
            <motion.div
              className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-blue-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"
              whileHover={{ scale: 1.5 }}
            />
          </motion.a>

          <motion.a
            className="group relative p-4 sm:p-5 text-gray-700 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white/60 dark:hover:text-white hover:text-gray-950"
            href="https://github.com/Alifatlawi"
            target="_blank"
            whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithubSquare className="text-xl sm:text-2xl" />
            </motion.div>

            {/* Enhanced Hover Background */}
            <motion.div
              className="absolute inset-0 bg-gray-800 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gray-600/50 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"
              whileHover={{ scale: 1.5 }}
            />
          </motion.a>
        </div>
      </motion.div>


    </motion.section>
  );
}
