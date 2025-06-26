"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <motion.footer 
      className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative overflow-hidden rounded-3xl p-8 mx-auto max-w-md backdrop-blur-xl border border-white/10 shadow-2xl group"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 35%, rgba(236, 72, 153, 0.1) 100%)",
        }}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(251, 146, 60, 0.15))",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Enhanced Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10">
          {/* Copyright */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ali Al-Fatlawi
            </motion.h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; 2024 All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full"
          animate={{
            scale: [1.3, 0.8, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.footer>
  );
}
