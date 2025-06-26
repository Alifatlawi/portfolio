"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaMagic, FaBolt } from "react-icons/fa";
import AnimatedBackground from "./animated-background";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      id="experience" 
      ref={ref} 
      className="scroll-mt-28 mb-28 sm:mb-40 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="nature" intensity="medium" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-16 text-blue-500/20"
          variants={floatingVariants}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaRocket className="text-8xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 -right-20 text-purple-500/20"
          variants={floatingVariants}
          animate={{
            y: [10, -20, 10],
            rotate: [0, -360, 0],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaMagic className="text-10xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 -left-12 text-emerald-500/25"
          variants={floatingVariants}
          animate={{
            y: [-12, 18, -12],
            rotate: [0, 180, 360],
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaBolt className="text-7xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-8 text-pink-500/20"
          variants={floatingVariants}
          animate={{
            y: [-8, 12, -8],
            rotate: [45, 405, 45],
            scale: [1.1, 0.8, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaStar className="text-6xl" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        viewport={{ once: true }}
      >
        <SectionHeading>My Journey</SectionHeading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: theme === "light" 
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)" 
                    : "linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)",
                  border: theme === "light" 
                    ? "1px solid rgba(59, 130, 246, 0.2)" 
                    : "1px solid rgba(139, 92, 246, 0.3)",
                  textAlign: "left",
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  backdropFilter: "blur(20px)",
                  boxShadow: theme === "light"
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(59, 130, 246, 0.1)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.2)",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid rgba(59, 130, 246, 0.3)"
                      : "0.4rem solid rgba(139, 92, 246, 0.4)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" 
                      ? "linear-gradient(135deg, #3b82f6, #8b5cf6)" 
                      : "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  fontSize: "1.5rem",
                  border: "3px solid #ffffff",
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                    {item.location}
                  </p>
                  <p className="text-gray-700 dark:text-white/80 leading-relaxed text-base sm:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.section>
  );
}
