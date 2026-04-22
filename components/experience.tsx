"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      aria-labelledby="experience-heading"
      className="page py-24 md:py-32 scroll-mt-24"
    >
      <SectionHeading index="03" eyebrow="Ledger">
        <span id="experience-heading">
          Where the time has gone.
        </span>
      </SectionHeading>

      <ol className="rule-top">
        {experiencesData
          .slice()
          .reverse()
          .map((item, i, arr) => (
            <li
              key={`${item.title}-${i}`}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 rule-bottom"
            >
              <div className="col-span-12 md:col-span-2 label tabular text-ink-3 tabular-nums">
                <span className="text-accent">
                  {String(arr.length - i).padStart(2, "0")}
                </span>
                <span className="mx-2 text-rule-strong">/</span>
                <span>{item.date}</span>
              </div>

              <div className="col-span-12 md:col-span-4">
                <h3 className="text-xl md:text-2xl tracking-tight text-ink mb-1">
                  {item.title}
                </h3>
                <p className="label tabular text-ink-3">{item.location}</p>
              </div>

              <p className="col-span-12 md:col-span-6 text-ink-2 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
      </ol>
    </section>
  );
}
