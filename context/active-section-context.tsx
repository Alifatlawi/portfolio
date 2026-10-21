"use client";

import type { SectionName } from "@/lib/types";
import { links } from "@/lib/data";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const lastClickRef = useRef(timeOfLastClick);
  lastClickRef.current = timeOfLastClick;

  // The per-section observer watches a line mid-viewport, which the first and
  // last sections can never cross on very tall screens. Pin those ends here.
  useEffect(() => {
    let frame = 0;
    let pinned = false;
    // The section crossing the observers' band line, used when leaving a pin
    const sectionAtBand = (): SectionName | null => {
      const line = window.innerHeight * 0.455;
      for (const link of links) {
        const rect = document.querySelector(link.hash)?.getBoundingClientRect();
        if (rect && rect.top <= line && rect.bottom > line) return link.name;
      }
      return null;
    };
    const check = () => {
      frame = 0;
      // During a nav click's grace period the pin is still recorded (so the
      // hand-back works afterwards), but the active section is left alone.
      const settled = Date.now() - lastClickRef.current >= 1000;
      const { scrollY, innerHeight } = window;
      const bottom = document.documentElement.scrollHeight - 2;
      if (scrollY + innerHeight >= bottom) {
        pinned = true;
        if (settled) setActiveSection("Contact");
      } else if (scrollY < 10) {
        pinned = true;
        if (settled) setActiveSection("Home");
      } else if (pinned && settled) {
        pinned = false;
        const name = sectionAtBand();
        if (name) setActiveSection(name);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
