"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="projects-heading"
      className="page py-24 md:py-32 scroll-mt-24"
    >
      <SectionHeading index="01" eyebrow="Selected work">
        <span id="projects-heading">
          Shipping apps that earn their place on the home screen.
        </span>
      </SectionHeading>

      <div className="flex flex-col gap-24 md:gap-40">
        {projectsData.map((project, i) => (
          <ProjectCase
            key={project.title}
            project={project}
            index={i + 1}
            mirrored={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projectsData)[number];

function ProjectCase({
  project,
  index,
  mirrored,
}: {
  project: Project;
  index: number;
  mirrored: boolean;
}) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article
      className="grid grid-cols-12 gap-6 md:gap-10 rule-top pt-10 md:pt-14"
      aria-labelledby={`project-${indexLabel}-title`}
    >
      {/* Meta column */}
      <header
        className={
          mirrored
            ? "col-span-12 md:col-span-5 md:col-start-8 md:row-start-1 md:sticky md:top-28 md:self-start order-2 md:order-none"
            : "col-span-12 md:col-span-5 md:sticky md:top-28 md:self-start"
        }
      >
        <p className="label tabular mb-6 flex items-center gap-3">
          <span className="text-accent">Project {indexLabel}</span>
          <span className="h-px w-5 bg-rule-strong" aria-hidden />
          <span className="tabular">{project.year}</span>
        </p>
        <h3
          id={`project-${indexLabel}-title`}
          className="display-sm text-ink text-[clamp(1.75rem,2.8vw+1rem,2.75rem)] mb-6"
        >
          {project.title}
        </h3>
        <p className="measure text-ink-2 text-lg leading-relaxed mb-8">
          {project.description}
        </p>
        <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 label tabular mb-8">
          <dt className="text-ink-3">Category</dt>
          <dd className="text-ink-2">{project.category}</dd>
          <dt className="text-ink-3">Status</dt>
          <dd className="text-ink-2 flex items-center gap-2">
            <span className="dot" aria-hidden />
            <span>{project.status}</span>
          </dd>
          <dt className="text-ink-3 pt-0.5">Stack</dt>
          <dd className="text-ink-2 flex flex-wrap gap-x-3 gap-y-1 normal-case tracking-normal leading-relaxed">
            {project.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {i < project.tags.length - 1 ? (
                  <span className="text-rule-strong" aria-hidden>
                    ·
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </dd>
        </dl>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-baseline gap-2"
        >
          View on the App Store <span aria-hidden>↗</span>
        </Link>
      </header>

      {/* Image column */}
      <div
        className={
          mirrored
            ? "col-span-12 md:col-span-7 md:row-start-1 order-1 md:order-none"
            : "col-span-12 md:col-span-7 md:col-start-6"
        }
      >
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — View on the App Store`}
          className="group block relative overflow-hidden rounded-sm ring-1 ring-rule bg-raised"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 56vw, 100vw"
              className="object-cover transition-transform duration-slow ease-out-quart group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
