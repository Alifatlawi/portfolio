import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// A section is "current" while it crosses a thin line just above the middle
// of the viewport, so sections taller than the screen still register.
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    rootMargin: "-45% 0px -54% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // At the very top the page belongs to Home, even when a tall screen puts
    // the next section across the band line.
    const atTop = window.scrollY < 10 && sectionName !== "Home";
    if (inView && !atTop && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
