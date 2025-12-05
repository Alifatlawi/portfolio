"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import AnimatedBackground from "./animated-background";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles, HiBadgeCheck } from "react-icons/hi";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

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

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9, rotateX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 relative perspective-1000"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="tech" intensity="medium" />

      <div className="max-w-[75rem] mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <SectionHeading>Featured Projects</SectionHeading>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative preserve-3d"
            >
              {/* Enhanced Project Card */}
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl bg-white/5 dark:bg-white/5 transform-style-3d">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    background: index % 2 === 0
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)"
                      : "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)",
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

                {/* Shimmer Effect */}
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

                <div className="relative z-10 p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <motion.div
                        className="flex items-center gap-3 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <motion.div
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <HiSparkles className="text-yellow-500 text-sm" />
                            <span className="text-yellow-600 dark:text-yellow-400 text-xs font-semibold">Featured</span>
                          </motion.div>
                        )}
                      </motion.div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiBadgeCheck className="text-green-500 text-sm" />
                          <span>{project.status}</span>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Technology Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    variants={containerVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced Action Buttons */}
                  <motion.div
                    className="flex gap-4"
                    variants={containerVariants}
                  >
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      variants={itemVariants}
                    >
                      <span>View Project</span>
                      <motion.div
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.div>

                      {/* Button shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                        style={{ transform: "skewX(-20deg)" }}
                      />
                    </motion.a>

                    {project.featured && (
                      <motion.button
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        variants={itemVariants}
                      >
                        <FaStar className="text-lg" />
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Decorative Corner Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl opacity-50 group-hover:opacity-80"
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
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-500/20 blur-xl opacity-50 group-hover:opacity-80"
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HiSparkles className="text-blue-500" />
            <span>More projects coming soon...</span>
            <HiSparkles className="text-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
