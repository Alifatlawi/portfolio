"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import MorphingWord from "./morphing-word";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="intro-heading"
      className="page pt-32 md:pt-40 pb-20 md:pb-28 scroll-mt-24"
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        {/* Eyebrow */}
        <div className="col-span-12 md:col-span-3 md:pt-3">
          <p className="label tabular reveal">
            <span className="text-accent">Portfolio</span>
            <span className="mx-2 text-rule-strong">/</span>
            <span>2021 — present</span>
          </p>
        </div>

        {/* Display */}
        <div className="col-span-12 md:col-span-9">
          <h1
            id="intro-heading"
            className="display text-ink text-[clamp(2.75rem,8vw+1rem,7.5rem)] reveal reveal-delay-1"
          >
            <span className="text-ink-3">Ali Al-Fatlawi</span>
            <br aria-hidden />
            builds{" "}
            <MorphingWord
              words={["apps", "systems", "tools", "interfaces", "software"]}
              ariaWord="software"
            />
            <br aria-hidden />
            that ships<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Divider */}
        <div className="col-span-12 rule-top mt-4" aria-hidden />

        {/* Portrait + meta */}
        <aside className="col-span-12 md:col-span-3 flex md:block gap-4 items-start">
          <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-sm ring-1 ring-rule reveal reveal-delay-2">
            <Image
              src="/IMG_8819.JPG"
              alt="Ali Al-Fatlawi"
              fill
              sizes="(min-width: 768px) 128px, 96px"
              className="object-cover"
              priority
            />
          </div>
          <dl className="md:mt-6 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 label tabular reveal reveal-delay-3">
            <dt className="text-ink-3">Based</dt>
            <dd className="text-ink-2">Ankara, TR</dd>
            <dt className="text-ink-3">Role</dt>
            <dd className="text-ink-2">Software Engineer</dd>
            <dt className="text-ink-3">Open</dt>
            <dd className="flex items-center gap-2 text-ink-2">
              <span className="dot" aria-hidden />
              <span>For work</span>
            </dd>
          </dl>
        </aside>

        {/* Lede */}
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <p className="measure text-xl md:text-2xl leading-snug text-ink-2 reveal reveal-delay-2">
            I design and build across iOS, web, and the infrastructure
            underneath. Four apps are live on the App Store; more are in the
            quiet part of the workshop.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 reveal reveal-delay-4">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="group inline-flex items-center gap-3 bg-ink text-bg px-5 py-3 min-h-[44px] text-sm tracking-tight transition-colors duration-base ease-out-quart hover:bg-accent hover:text-bg"
            >
              <span>Start a conversation</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
                className="transition-transform duration-base ease-out-quart group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="flex items-center gap-6 label tabular">
              <a
                href="https://github.com/Alifatlawi"
                target="_blank"
                rel="noopener noreferrer"
                className="link-reveal py-2 -my-2 inline-flex items-center"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alfatlawi/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-reveal py-2 -my-2 inline-flex items-center"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="/CV.pdf" className="link-reveal py-2 -my-2 inline-flex items-center">
                CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
