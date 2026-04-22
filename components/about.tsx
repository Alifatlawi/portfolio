"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const stack = [
  { group: "Mobile", items: ["Swift", "SwiftUI", "UIKit", "Flutter"] },
  { group: "Web", items: ["TypeScript", "React", "Next.js", "Node.js"] },
  { group: "Data", items: ["Firebase", "PostgreSQL", "MongoDB"] },
  { group: "Practice", items: ["SOLID", "MVVM", "Testing", "Design reviews"] },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="page py-24 md:py-32 scroll-mt-24"
    >
      <SectionHeading index="02" eyebrow="Notes on the work">
        <span id="about-heading">
          A software engineer, in the workshop sense of the word.
        </span>
      </SectionHeading>

      <div className="grid grid-cols-12 gap-6 md:gap-10 rule-top pt-12 md:pt-16">
        <div className="col-span-12 md:col-span-7">
          <div className="measure space-y-6 text-lg leading-relaxed text-ink-2">
            <p>
              I&apos;m finishing a Software Engineering degree at Atılım
              University in Ankara, and I&apos;ve spent the past three years
              shipping real things to real people — mostly iOS apps in Swift
              and SwiftUI, sometimes the server that keeps them honest, and
              occasionally a web front-end when a project asks for one.
            </p>
            <p>
              Two of those apps are on the App Store: a schedule planner used
              daily by students across my university, and a community app
              that knits small groups together through messaging and files.
              Both taught me the same lesson — the interesting engineering
              happens <em>after</em> the demo works.
            </p>
            <p>
              I care about the small stuff: empty states, error copy, motion
              that means something, the shape of an API. And I care about
              shipping. I&apos;d rather publish a v1 that reads your
              reviews than polish a v0 that never leaves TestFlight.
            </p>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9">
          <p className="label tabular mb-6 text-ink-3">Working with</p>
          <dl className="flex flex-col gap-5">
            {stack.map((group) => (
              <div
                key={group.group}
                className="grid grid-cols-[5rem_1fr] gap-x-4 gap-y-1 rule-top pt-4 first:border-t-0 first:pt-0"
              >
                <dt className="label tabular text-ink-3 pt-1">{group.group}</dt>
                <dd className="text-ink-2 leading-relaxed">
                  {group.items.map((item, i) => (
                    <React.Fragment key={item}>
                      <span>{item}</span>
                      {i < group.items.length - 1 ? (
                        <span className="mx-2 text-rule-strong" aria-hidden>
                          ·
                        </span>
                      ) : null}
                    </React.Fragment>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
