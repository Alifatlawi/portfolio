"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "./icons";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="inline-flex h-11 w-11 items-center justify-center text-field-ink-2 hover:text-field-ink transition-colors duration-base"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
