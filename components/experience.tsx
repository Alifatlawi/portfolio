"use client";

import React from "react";
import SectionHead from "./section-head";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const EASTERN_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** "2023 - present" → "2023 – present" */
function formatDate(date: string) {
  return date.replace(" - ", " – ");
}

/** "2023 - present" → "٢٠٢٣ – الآن", set from the right margin */
function formatDateAr(date: string) {
  return date
    .replace(/\d/g, (d) => EASTERN_DIGITS[Number(d)])
    .replace(" - ", " – ")
    .replace("present", "الآن");
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const entries = experiencesData.slice().reverse();

  return (
    <section
      ref={ref}
      id="experience"
      aria-labelledby="experience-heading"
      className="pt-28 md:pt-40 pb-24 md:pb-32"
    >
      <div className="page">
        <SectionHead id="experience-heading" titleAr="المسيرة">
          Where the time has gone.
        </SectionHead>

        <ol>
          {entries.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-3 py-8 md:py-10 border-b border-rule"
            >
              <p className="col-span-12 md:col-span-3 lg:col-span-2 label tabular text-ink-3 md:pt-1.5">
                {formatDate(item.date)}
              </p>
              <div className="col-span-12 md:col-span-9 lg:col-span-4">
                <h3 className="text-2xl leading-[1.05]">{item.title}</h3>
                <p className="mt-2 label text-ink-3">{item.location}</p>
              </div>
              <p className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-5 lg:col-start-auto text-ink-2 leading-[1.7] max-w-[62ch]">
                {item.description}
              </p>
              <p
                lang="ar"
                dir="rtl"
                aria-hidden="true"
                className="hidden lg:block lg:col-span-1 whitespace-nowrap font-display text-[1.0625rem] leading-none text-lapis-text md:pt-1.5"
              >
                {formatDateAr(item.date)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
