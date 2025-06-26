"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gradient-to-b from-blue-500 to-purple-500 my-24 h-16 w-1 rounded-full hidden sm:block dark:from-blue-400 dark:to-purple-400 shadow-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
