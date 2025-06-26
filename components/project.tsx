"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        y: yProgress,
      }}
      className="group mb-8 sm:mb-12 last:mb-0"
    >
      <motion.section
        className="glass card-hover max-w-[48rem] overflow-hidden sm:pr-8 relative sm:h-[24rem] transition-all duration-700 sm:group-even:pl-8 shadow-premium hover:shadow-premium-dark group-hover:scale-[1.02]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Gradient Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
            backgroundSize: "300% 300%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="absolute inset-[2px] rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"></div>
        
        <div className="relative z-10 pt-8 pb-10 px-8 sm:pl-12 sm:pr-4 sm:pt-12 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[20rem]">
          <div className="flex items-center gap-4 mb-4">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>
            
            {url && (
              <motion.div className="flex gap-2">
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full opacity-60 hover:opacity-100 transition-all duration-300 group/link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiExternalLink className="w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover/link:opacity-20 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.a>
              </motion.div>
            )}
          </div>
          
          <motion.p 
            className="mt-2 leading-relaxed text-gray-700 dark:text-white/80 text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {description}
          </motion.p>
          
          <motion.ul 
            className="flex flex-wrap gap-3 mt-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {tags.map((tag, index) => (
              <motion.li
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-[0.75rem] uppercase tracking-wider text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" 
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Enhanced Image with 3D Effect */}
        <motion.div
          className="absolute hidden sm:block top-8 -right-40 w-[32rem] h-[20rem] group-even:right-[initial] group-even:-left-40"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(50px)",
          }}
        >
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              quality={95}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            {/* Overlay with Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{
                background: "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
              }}
            />
          </motion.div>
          
          {/* Floating Elements Around Image */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-40"
            animate={{
              y: [5, -5, 5],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
