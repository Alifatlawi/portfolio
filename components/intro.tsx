"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, shelfApps, sizeOf } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ArrowRight, ArrowUpRight } from "./icons";

const shelf = shelfApps.map((app) => {
  const project = projectsData.find((p) => p.title === app.title);
  if (!project || !project.points || !project.url) {
    throw new Error(`Shelf app "${app.title}" needs points and a url in projectsData`);
  }
  return { ...app, project, points: project.points, url: project.url };
});

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="intro-heading"
      className="hero field"
    >
      <div className="page hero-grid">
        <h1 id="intro-heading" className="hero-name display">
          Ali Al-Fatlawi
        </h1>

        <p lang="ar" dir="rtl" className="hero-ar">
          علي الفتلاوي
        </p>

        <p className="hero-claim display">
          builds apps that ship<span className="text-saffron">.</span>
        </p>

        {/* DOM order follows the phone layout (screens before copy); at lg
            the grid areas move the screens to the right-hand column. */}
        <div className="hero-shelf shelf">
          <ul
            className="shelf-track"
            aria-label="Four apps live on the App Store"
            data-engaged={active !== null}
            onMouseLeave={() => setActive(null)}
          >
            {shelf.map((app, i) => {
              const { width, height } = sizeOf(app.screen);
              // The label plate: year, platform, status, link — same fields,
              // same positions on every plate.
              const status = app.project.status.split(" · ")[0];
              return (
                <li
                  key={app.title}
                  className="shelf-item"
                  data-active={active === i}
                  style={{ "--w": app.points.w, "--i": i } as React.CSSProperties}
                >
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                  >
                    <span className="shelf-dim">
                      <Image
                        src={app.screen}
                        width={width}
                        height={height}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 220px, (min-width: 768px) 190px, 40vw"
                        className="screen shelf-screen"
                        data-device={app.points.h < 800 ? "plus" : undefined}
                      />
                    </span>
                    <span className="shelf-plate block">
                      <span className="shelf-plate-name block text-[0.9375rem] font-medium leading-tight text-field-ink transition-colors duration-base">
                        {app.label}
                      </span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap label text-field-ink-2">
                        {app.project.year}
                        <span className="shelf-plate-platform"> · iOS</span> · {status}
                        <span className="sr-only">, on the App Store (opens in a new tab)</span>
                        <ArrowUpRight
                          size={13}
                          className="shrink-0 text-saffron transition-transform duration-base ease-out-quart group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero-copy">
          <p className="text-base md:text-lg leading-[1.55] text-field-ink-2 max-w-[36ch]">
            I design and build across iOS, web, and the infrastructure
            underneath. Four apps are live on the App Store; more are in the
            quiet part of the workshop.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="btn-saffron"
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>

            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="https://github.com/Alifatlawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1.5 py-2.5 text-field-ink"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alfatlawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1.5 py-2.5 text-field-ink"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <p className="hero-footnote hidden lg:block label text-field-ink-2">
            Live on the App Store, 2024–2026
          </p>
        </div>
      </div>
    </section>
  );
}
