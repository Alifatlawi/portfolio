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
      className="inline-flex items-center gap-2 label tabular text-ink-3 hover:text-ink px-2 py-2 min-h-[44px] justify-center transition-colors duration-fast"
    >
      <span
        aria-hidden
        className="w-[6px] h-[6px] rounded-full bg-accent"
      />
      <span>{label}</span>
    </button>
  );
}
