import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useScrollReveal(stagger = 70) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = ref.current;
    if (!container) return;

    const els = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!els.length) return;

    const observers = els.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.animationDelay = `${i * stagger}ms`;
            el.classList.add("in-view");
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [stagger]);

  return ref;
}
