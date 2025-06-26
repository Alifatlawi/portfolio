"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaRocket, 
  FaMagic, 
  FaLightbulb, 
  FaHeart, 
  FaStar, 
  FaGem, 
  FaAtom,
  FaCube,
  FaFire,
  FaBolt,
  FaLeaf,
  FaGlobe,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { 
  HiSparkles, 
  HiLightningBolt, 
  HiStar,
  HiChip,
  HiColorSwatch
} from "react-icons/hi";

interface AnimatedBackgroundProps {
  variant?: 'default' | 'dense' | 'minimal' | 'cosmic' | 'tech' | 'nature';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function AnimatedBackground({ 
  variant = 'default', 
  intensity = 'medium',
  className = ""
}: AnimatedBackgroundProps) {
  
  const iconSets = {
    default: [FaCode, FaRocket, FaMagic, FaLightbulb, HiSparkles],
    cosmic: [FaStar, FaMoon, FaSun, FaAtom, HiLightningBolt],
    tech: [FaCode, FaCube, HiChip, FaBolt, FaAtom],
    nature: [FaLeaf, FaSun, FaStar, FaGlobe, HiSparkles],
    dense: [FaCode, FaRocket, FaMagic, FaLightbulb, FaHeart, FaStar, FaGem, HiSparkles, HiStar],
    minimal: [FaCode, FaRocket, HiSparkles]
  };

  const colorPalettes = {
    default: [
      'text-blue-500/20', 'text-purple-500/25', 'text-pink-500/20', 
      'text-emerald-500/25', 'text-orange-500/20'
    ],
    cosmic: [
      'text-indigo-500/25', 'text-purple-500/30', 'text-blue-500/20',
      'text-cyan-500/25', 'text-violet-500/20'
    ],
    tech: [
      'text-blue-500/25', 'text-cyan-500/20', 'text-emerald-500/25',
      'text-teal-500/20', 'text-green-500/25'
    ],
    nature: [
      'text-green-500/25', 'text-emerald-500/20', 'text-lime-500/25',
      'text-yellow-500/20', 'text-orange-500/25'
    ],
    dense: [
      'text-blue-500/15', 'text-purple-500/20', 'text-pink-500/15',
      'text-emerald-500/20', 'text-orange-500/15', 'text-cyan-500/20',
      'text-indigo-500/15', 'text-rose-500/20', 'text-amber-500/15'
    ],
    minimal: [
      'text-blue-500/15', 'text-purple-500/20', 'text-pink-500/15'
    ]
  };

  const intensitySettings = {
    low: { count: 3, size: 'small', speed: 'slow' },
    medium: { count: 5, size: 'medium', speed: 'medium' },
    high: { count: 8, size: 'large', speed: 'fast' }
  };

  const settings = intensitySettings[intensity];
  const icons = iconSets[variant];
  const colors = colorPalettes[variant];

  const getSizeClass = (size: string, index: number) => {
    const sizeMap = {
      small: ['text-6xl', 'text-7xl', 'text-8xl'],
      medium: ['text-7xl', 'text-8xl', 'text-9xl', 'text-10xl'],
      large: ['text-8xl', 'text-9xl', 'text-10xl', 'text-11xl']
    };
    return sizeMap[size as keyof typeof sizeMap][index % sizeMap[size as keyof typeof sizeMap].length];
  };

  const getSpeedMultiplier = (speed: string) => {
    const speedMap = { slow: 1.5, medium: 1, fast: 0.7 };
    return speedMap[speed as keyof typeof speedMap];
  };

  const basePositions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '8%' },
    { bottom: '25%', left: '3%' },
    { bottom: '15%', right: '6%' },
    { top: '50%', left: '10%' },
    { top: '60%', right: '12%' },
    { bottom: '40%', left: '8%' },
    { top: '30%', right: '15%' }
  ];

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Main Floating Icons */}
      {Array.from({ length: settings.count }).map((_, i) => {
        const IconComponent = icons[i % icons.length];
        const position = basePositions[i % basePositions.length];
        const speedMultiplier = getSpeedMultiplier(settings.speed);
        
        return (
          <motion.div
            key={`main-${i}`}
            className={`absolute ${colors[i % colors.length]} ${getSizeClass(settings.size, i)}`}
            style={position}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [-20 * (i + 1), 20 * (i + 1), -20 * (i + 1)],
              x: i % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
            }}
            transition={{
              opacity: { duration: 1, delay: i * 0.2 },
              scale: { duration: 1, delay: i * 0.2 },
              rotate: { duration: 1, delay: i * 0.2 },
              y: {
                duration: (8 + i * 2) * speedMultiplier,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: (6 + i * 1.5) * speedMultiplier,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: (15 + i * 3) * speedMultiplier,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: (4 + i) * speedMultiplier,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            >
              <IconComponent />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Particles */}
      {variant !== 'minimal' && Array.from({ length: intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
          style={{
            left: `${10 + (i * 12) % 80}%`,
            top: `${15 + (i * 8) % 70}%`,
            background: i % 3 === 0 
              ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4))'
              : i % 3 === 1 
              ? 'linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(251, 146, 60, 0.4))'
              : 'linear-gradient(45deg, rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))'
          }}
          animate={{
            y: [-15 * (i % 3 + 1), 15 * (i % 3 + 1), -15 * (i % 3 + 1)],
            x: [-8 * (i % 2 + 1), 8 * (i % 2 + 1), -8 * (i % 2 + 1)],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: (4 + i * 0.5) * getSpeedMultiplier(settings.speed),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      {variant !== 'minimal' && (
        <>
          <motion.div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-30"
            style={{
              top: '20%',
              left: '15%',
              background: variant === 'cosmic' 
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))'
                : variant === 'tech'
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))'
                : variant === 'nature'
                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(101, 163, 13, 0.1))'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 20 * getSpeedMultiplier(settings.speed),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-25"
            style={{
              bottom: '25%',
              right: '20%',
              background: variant === 'cosmic'
                ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(124, 58, 237, 0.1))'
                : variant === 'tech'
                ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1))'
                : variant === 'nature'
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(34, 197, 94, 0.1))'
                : 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))'
            }}
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.25, 0.5, 0.25],
              x: [25, -35, 25],
              y: [15, -25, 15],
            }}
            transition={{
              duration: 16 * getSpeedMultiplier(settings.speed),
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Mesh Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: variant === 'cosmic'
            ? "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
            : variant === 'tech'
            ? "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
            : variant === 'nature'
            ? "radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 65% 65%, rgba(101, 163, 13, 0.1) 0%, transparent 50%)"
            : "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)"
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12 * getSpeedMultiplier(settings.speed),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 