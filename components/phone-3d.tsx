"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { projectsData } from "@/lib/data";

// Real App Store screens of the live apps, cropped to the raw screen. Each
// caption links to the app's App Store page.
const SCREENS = [
  { title: "Atilim Schedule", label: "Atilim Schedule", src: "/hero/atilim-schedule-4.jpg", w: 640, h: 1395, alt: "Atilim Schedule: the exams countdown screen" },
  { title: "TAD iOS", label: "TAD", src: "/hero/tad-ios-1.jpg", w: 640, h: 1388, alt: "TAD: the course home screen" },
  { title: "Murafa’a", label: "Murafa’a", src: "/hero/murafa.jpg", w: 640, h: 1387, alt: "Murafa’a: today's court sessions, in Arabic", url: "https://apps.apple.com/tr/app/%D9%85%D8%B1%D8%A7%D9%81%D8%B9%D8%A9-%D9%85%D8%B3%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%85%D9%8A/id6821060248" },
  { title: "Khatwa", label: "Khatwa", src: "/hero/khatwa-1.jpg", w: 640, h: 1391, alt: "Khatwa: the daily mood home screen, in Arabic" },
  { title: "Warqa", label: "Warqa", src: "/hero/warqa.jpg", w: 640, h: 1393, alt: "Warqa: handwritten Cornell notes with the pen tools open" },
  { title: "SosoSketch", label: "SosoSketch", src: "/hero/sososketch-1.jpg", w: 640, h: 1136, alt: "SosoSketch: tracing a drawing through the camera" },
].map((s) => ({
  ...s,
  url: ("url" in s ? s.url : null) ?? projectsData.find((p) => p.title === s.title)?.url ?? null,
}));

// Stacked slices behind the face give the body a solid metal edge in 3D.
const LAYERS = 18;
const INTERVAL = 4500;

/**
 * A CSS-3D iPhone that shows the live apps. It turns in once on load, leans
 * toward the cursor while it moves over the hero, and steps through the apps
 * (paused on hover/focus, off-screen, in a background tab, or by the Pause
 * control). Under prefers-reduced-motion it stays still and only changes
 * when a dot is pressed.
 */
export default function Phone3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [holding, setHolding] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Step through the apps
  useEffect(() => {
    if (reduced || paused || holding || !inView) return;
    const t = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % SCREENS.length);
      } else {
        setTick((n) => n + 1); // try again once the tab is back
      }
    }, INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, tick, reduced, paused, holding, inView]);

  // Lean toward the cursor (mouse only), eased so it settles smoothly
  useEffect(() => {
    const stage = stageRef.current;
    const hero = document.getElementById("home");
    if (!stage || !hero || reduced) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const step = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      stage.style.setProperty("--tilt-x", current.x.toFixed(4));
      stage.style.setProperty("--tilt-y", current.y.toFixed(4));
      const moving =
        Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.0005;
      frame = moving ? requestAnimationFrame(step) : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = hero.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      target.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const current = SCREENS[index];

  return (
    <figure
      className="phone3d"
      aria-label={`Screens from ${SCREENS.length} of Ali's App Store apps`}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocus={() => setHolding(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHolding(false);
      }}
    >
      <div ref={stageRef} className="phone3d-stage">
        <div className="phone3d-enter">
          <div className="phone3d-device">
            {Array.from({ length: LAYERS }, (_, i) => (
              <span
                key={i}
                aria-hidden
                className="phone3d-layer"
                style={{ "--z": i + 1 } as React.CSSProperties}
              />
            ))}
            <div className="phone3d-face">
              <div className="phone3d-screen">
                {SCREENS.map((s, i) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    width={s.w}
                    height={s.h}
                    alt={i === index ? s.alt : ""}
                    aria-hidden={i !== index}
                    priority={i === 0}
                    sizes="(min-width: 1024px) 280px, 240px"
                    className={clsx("phone3d-shot", i === index && "is-active")}
                  />
                ))}
                <span aria-hidden className="phone3d-glare" />
              </div>
            </div>
          </div>
        </div>
        <span aria-hidden className="phone3d-shadow" />
      </div>

      <figcaption className="mt-10 flex flex-col gap-2 label tabular">
        {current.url ? (
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal py-2 -my-2 inline-flex items-center gap-1 text-ink"
          >
            {current.label} <span aria-hidden="true">↗</span>
            <span className="sr-only">on the App Store (opens in a new tab)</span>
          </a>
        ) : (
          <span className="text-ink">{current.label}</span>
        )}

        <div className="-ml-2 flex items-center">
          {SCREENS.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.label}`}
              aria-pressed={i === index}
              className="group inline-flex h-7 w-7 items-center justify-center"
            >
              <span
                className={clsx(
                  "h-[6px] w-[6px] rounded-full transition-colors duration-base",
                  i === index ? "bg-accent" : "bg-rule-strong group-hover:bg-muted"
                )}
              />
            </button>
          ))}
          {!reduced ? (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="ml-auto py-2 text-ink-3 hover:text-ink transition-colors duration-fast"
            >
              {paused ? "Play" : "Pause"}
            </button>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}
