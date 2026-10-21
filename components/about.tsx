"use client";

import React from "react";
import Image from "next/image";
import SectionHead from "./section-head";
import JoinMeta from "./join-meta";
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
      className="bg-raised py-24 md:py-32"
    >
      <div className="page">
        <SectionHead id="about-heading" titleAr="نبذة">
          A software engineer, in the workshop sense of the word.
        </SectionHead>

        <div className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-14 pt-10 md:pt-14">
          <div className="col-span-12 lg:col-span-7 space-y-6 text-ink-2 max-w-[62ch]">
            <p className="text-xl leading-[1.55] text-ink">
              I&apos;m finishing a Software Engineering degree at Atılım
              University in Ankara, and I&apos;ve spent the past three years
              shipping real things to real people — mostly iOS apps in Swift
              and SwiftUI, sometimes the server that keeps them honest, and
              occasionally a web front-end when a project asks for one.
            </p>
            <p className="leading-[1.7]">
              Four of those are live on the App Store: a schedule manager
              adopted by 7,000 Atılım students, a learning platform for
              Libyan students, a mental-health companion in Arabic, and a
              sketching tool that turns any iPhone into a tracing tool.
              Each one taught me the same lesson — the interesting engineering
              happens <em>after</em> the demo works.
            </p>
            <p className="leading-[1.7]">
              I care about the small stuff: empty states, error copy, motion
              that means something, the shape of an API. And I care about
              shipping. I&apos;d rather publish a v1 that reads your
              reviews than polish a v0 that never leaves TestFlight.
            </p>
          </div>

          <aside className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 lg:col-start-9">
            <figure>
              {/* Duotone: the photograph printed in the lapis ink */}
              <div className="field aspect-square overflow-hidden">
                <Image
                  src="/IMG_8819.JPG"
                  alt="Portrait of Ali Al-Fatlawi"
                  width={640}
                  height={640}
                  sizes="(min-width: 1024px) 380px, 70vw"
                  className="block h-full w-full object-cover grayscale contrast-[1.15] mix-blend-screen"
                />
              </div>
              <figcaption className="mt-3 label text-ink-3">
                Ankara, Türkiye
              </figcaption>
            </figure>

            <h3 className="mt-10 text-xl">Working with</h3>
            <dl className="mt-3 grid grid-cols-[5.5rem_minmax(0,1fr)] text-[0.9375rem]">
              {stack.map((group) => (
                <div key={group.group} className="contents">
                  <dt className="label text-ink-3 py-2.5 border-t border-rule">
                    {group.group}
                  </dt>
                  <dd className="py-2.5 border-t border-rule text-ink">
                    <JoinMeta items={group.items} />
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
