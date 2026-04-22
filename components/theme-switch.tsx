"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${label.toLowerCase()} mode`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-raised label tabular text-ink-2 hover:text-ink px-3 py-2 ring-1 ring-rule hover:ring-rule-strong transition-colors duration-fast backdrop-blur-sm"
    >
      <span
        aria-hidden
        className="w-[6px] h-[6px] rounded-full bg-accent"
      />
      <span>{label}</span>
    </button>
  );
}
