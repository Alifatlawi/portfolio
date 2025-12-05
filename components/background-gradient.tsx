"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            {/* Base Background */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-500" />

            {/* Aurora Effect Layers */}
            <div className="absolute inset-0 opacity-50 dark:opacity-30 blur-[100px]">
                {/* Layer 1: Blue/Purple */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mix-blend-multiply dark:mix-blend-screen"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Layer 2: Pink/Rose */}
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-pink-400 via-rose-500 to-orange-400 mix-blend-multiply dark:mix-blend-screen"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Layer 3: Cyan/Teal */}
                <motion.div
                    className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-cyan-400 via-teal-500 to-emerald-400 mix-blend-multiply dark:mix-blend-screen"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                />
            </div>

            {/* Noise Texture Overlay for Premium Feel */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
