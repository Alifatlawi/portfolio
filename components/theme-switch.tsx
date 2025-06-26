"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white/90 backdrop-blur-sm w-[3rem] h-[3rem] border border-gray-200 shadow-lg rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all duration-300 dark:bg-gray-950/90 dark:border-white/20 dark:shadow-white/10"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="text-gray-700" /> : <BsMoon className="text-white" />}
    </button>
  );
}
