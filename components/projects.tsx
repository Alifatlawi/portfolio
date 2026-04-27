"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView, useScrollReveal } from "@/lib/hooks";

type Project = (typeof projectsData)[number];

const GROUP_ORDER = ["Flagship", "iOS", "Web", "Client"] as const;
const GROUP_LABELS: Record<string, string> = {
  Flagship: "Flagship",
  iOS: "iOS Apps",
  Web: "Websites",
  Client: "Client Work",
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  const revealRef = useScrollReveal();

  const grouped = GROUP_ORDER.map((group) => ({
    group,
    label: GROUP_LABELS[group],
    projects: projectsData.filter((p) => p.group === group),
  }));

  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="projects-heading"
      className="page py-24 md:py-32 scroll-mt-24"
    >
      <div ref={revealRef}>
        <div data-reveal>
          <SectionHeading index="01" eyebrow="Selected work">
            <span id="projects-heading">
              Products shipped across web, iOS, and enterprise.
            </span>
          </SectionHeading>
        </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {grouped.map(({ group, label, projects }) =>
          projects.length === 0 ? null : (
            <div key={group} data-reveal>
              <div className="flex items-center gap-4 mb-10 md:mb-12">
                <p className="label tabular text-accent">{label}</p>
                <span className="h-px flex-1 bg-rule" aria-hidden />
              </div>

              {group === "Flagship" ? (
                <div className="flex flex-col gap-14 md:gap-20">
                  {projects.map((project, i) => (
                    <FlagshipCard
                      key={project.title}
                      project={project}
                      index={i + 1}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  {projects.map((project) => (
                    <CompactCard
                      key={`${project.group}-${project.title}`}
                      project={project}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
      </div>
    </section>
  );
}

function FlagshipCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article
      className="rule-top pt-10 md:pt-12"
      aria-labelledby={`flagship-${indexLabel}-title`}
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* Left: index + title + category */}
        <div className="col-span-12 md:col-span-4">
          <p className="label tabular mb-4 flex items-center gap-3">
            <span className="text-accent">Project {indexLabel}</span>
            <span className="h-px w-5 bg-rule-strong" aria-hidden />
            <span className="tabular">{project.year}</span>
          </p>
          <h3
            id={`flagship-${indexLabel}-title`}
            className="display-sm text-ink text-[clamp(1.75rem,2.5vw+0.75rem,2.5rem)] mb-3"
          >
            {project.title}
          </h3>
          <p className="label tabular text-ink-3">{project.category}</p>
        </div>

        {/* Right: description + metadata + link */}
        <div className="col-span-12 md:col-span-8">
          <p className="text-ink-2 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 label tabular mb-8">
            <dt className="text-ink-3">Status</dt>
            <dd className="text-ink-2 flex items-center gap-2">
              <span className="dot" aria-hidden />
              <span>{project.status}</span>
            </dd>
            <dt className="text-ink-3">Stack</dt>
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

          {project.url && project.linkLabel ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-baseline gap-2"
            >
              {project.linkLabel} <span aria-hidden>↗</span>
            </Link>
          ) : (
            <span className="label text-ink-3">Private platform</span>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  const content = (
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="display-sm text-ink text-xl leading-tight">
          {project.title}
        </h3>
        <span className="label tabular text-ink-3 shrink-0 pt-0.5">
          {project.year}
        </span>
      </div>
      <p className="label tabular text-accent mb-4">{project.category}</p>
      <p className="text-ink-2 text-sm leading-relaxed flex-1 mb-6">
        {project.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 rule-top">
        <div className="flex items-center gap-2 label tabular">
          <span className="dot" aria-hidden />
          <span className="text-ink-3">{project.status}</span>
        </div>
        {project.url && project.linkLabel ? (
          <span className="link-underline label tabular text-ink-2">
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </span>
        ) : null}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-sm ring-1 ring-rule bg-raised hover:ring-rule-strong transition-[box-shadow,ring-color] duration-base"
        aria-label={`${project.title} — ${project.linkLabel}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-sm ring-1 ring-rule bg-raised">{content}</div>
  );
}
