"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type MorphingWordProps = {
  /** List of words to cycle through. Set your canonical word last. */
  words: readonly string[];
  /** ms between transitions */
  interval?: number;
  /** Transition duration in ms */
  duration?: number;
  /** Pause the cycle while true (e.g. when an ancestor is off-screen) */
  paused?: boolean;
  /**
   * Word that screen readers should announce. The visual cycle is
   * aria-hidden so the headline reads as one stable claim.
   */
  ariaWord?: string;
  className?: string;
};

/**
 * A tiny, opinionated word-cycling component.
 *
 * Design intent:
 *  - Inherits font, size, weight from parent (no override).
 *  - Crossfade + 6px vertical travel. No blur, no SVG filters.
 *  - Sizes the inline box to the widest word so the line length is stable.
 *  - Pauses on hover/focus, while tab is hidden, and under prefers-reduced-motion.
 */
export default function MorphingWord({
  words,
  interval = 3500,
  duration = 320,
  paused = false,
  ariaWord,
  className,
}: MorphingWordProps) {
  const [{ current, previous }, setState] = useState({
    current: 0,
    previous: -1,
  });
  const hoverPausedRef = useRef(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;
    if (mql.matches) return;

    let timer: number | null = null;

    const schedule = () => {
      if (timer !== null) window.clearTimeout(timer);
      timer = window.setTimeout(tick, interval);
    };

    const tick = () => {
      if (
        !hoverPausedRef.current &&
        !paused &&
        document.visibilityState === "visible"
      ) {
        setState((s) => ({
          previous: s.current,
          current: (s.current + 1) % words.length,
        }));
      }
      schedule();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") schedule();
    };

    schedule();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (timer !== null) window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [words, interval, paused]);

  const onPauseStart = () => {
    hoverPausedRef.current = true;
  };
  const onPauseEnd = () => {
    hoverPausedRef.current = false;
  };

  return (
    <span
      className={clsx("relative inline-grid align-baseline", className)}
      onMouseEnter={onPauseStart}
      onMouseLeave={onPauseEnd}
      onFocusCapture={onPauseStart}
      onBlurCapture={onPauseEnd}
    >
      {/* Stable accessible text. The cycle below is decorative only. */}
      <span className="sr-only">{ariaWord ?? words[words.length - 1]}</span>

      {words.map((word, i) => {
        const isActive = i === current;
        const isLeaving = i === previous;
        const isResting = !isActive && !isLeaving;

        return (
          <span
            key={word}
            aria-hidden="true"
            className="col-start-1 row-start-1 will-change-[opacity,transform]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isLeaving
                ? "translateY(-6px)"
                : isActive
                ? "translateY(0)"
                : "translateY(6px)",
              transitionProperty: isResting ? "none" : "opacity, transform",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: "var(--ease-out-expo)",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
