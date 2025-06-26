"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaCode, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";
import AnimatedBackground from "./animated-background";

export default function About() {
  const { ref } = useSectionInView("About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="cosmic" intensity="low" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <SectionHeading>About me</SectionHeading>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Enhanced Card with Animations */}
          <motion.div
            className="relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl bg-white/80 dark:bg-gray-800/80 p-8 sm:p-12"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
                backgroundSize: "400% 400%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <motion.p
                className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                After pursuing my{" "}
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Engineering degree
                </span>{" "}
                at Atilim University, I found my passion in creating innovative solutions through code. My journey has taken me through various technologies and frameworks, always driven by curiosity and the desire to build something meaningful.
              </motion.p>

              <motion.p
                className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                My core stack includes{" "}
                <span className="font-medium bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  Swift, SwiftUI, React, Next.js, Node.js, and TypeScript
                </span>
                . I'm also proficient with{" "}
                <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Firebase, PostgreSQL, and MongoDB
                </span>
                . I am always looking to learn new technologies and stay updated with the latest trends in software development.
              </motion.p>

              <motion.p
                className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and{" "}
                <span className="font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  staying active in the developer community
                </span>
                . I believe in continuous learning and sharing knowledge with fellow developers.
              </motion.p>
            </div>

            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-500/20 blur-xl opacity-50"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Icons with Floating Animation */}
      <motion.div 
        className="flex justify-center items-center gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: FaCode, delay: 0, color: "text-blue-500" },
          { icon: FaRocket, delay: 0.2, color: "text-purple-500" },
          { icon: FaLightbulb, delay: 0.4, color: "text-yellow-500" },
          { icon: FaHeart, delay: 0.6, color: "text-pink-500" }
        ].map(({ icon: Icon, delay, color }, index) => (
          <motion.div
            key={index}
            className={`glass p-4 rounded-full ${color} shadow-glow hover:shadow-glow-lg`}
            variants={iconVariants}
            custom={delay}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
            }}
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              y: {
                duration: 2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: { duration: 0.3 },
              rotate: { duration: 0.6 }
            }}
          >
            <Icon className="text-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
