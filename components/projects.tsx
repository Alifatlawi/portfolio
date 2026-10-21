"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import SectionHead from "./section-head";
import { projectsData, siteSize, sizeOf, type Project } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { ArrowUpRight, LinkArrow } from "./icons";
import JoinMeta from "./join-meta";

const flagships = projectsData.filter((p) => p.group === "Flagship");
const apps = projectsData.filter((p) => p.group === "iOS");
const sites = projectsData.filter((p) => p.group === "Web" && p.site !== null);
const alsoBuilt = projectsData.filter(
  (p) => (p.group === "Web" && p.site === null) || p.group === "Client"
);

const liveApps = apps.filter((p) => p.status.startsWith("Live")).length;
const comingApps = apps.length - liveApps;

function isExternal(url: string) {
  return /^https?:\/\//.test(url);
}

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="work-heading"
      className="pt-24 md:pt-36 pb-28 md:pb-40"
    >
      <div className="page">
        <SectionHead id="work-heading" titleAr="الأعمال">
          Products shipped across web, iOS, and enterprise.
        </SectionHead>

        <Group id="platforms" title="Platforms" note={`${flagships.length} B2B platforms`}>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2">
            {flagships.map((p, i) => (
              <article
                key={p.title}
                aria-labelledby={`platform-${i}`}
                className={clsx(
                  "py-8 md:py-2",
                  i === 0
                    ? "md:pr-10 lg:pr-16"
                    : "border-t border-rule md:border-t-0 md:border-l md:border-rule-strong md:pl-10 lg:pl-16"
                )}
              >
                <h4
                  id={`platform-${i}`}
                  className="font-display font-bold text-[clamp(3rem,5.4vw,5rem)] leading-[0.9] tracking-[-0.03em]"
                >
                  {p.title}
                </h4>
                <p className="mt-6 text-lg leading-[1.6] text-ink-2 max-w-[54ch]">
                  {p.description}
                </p>
                <SpecPlate project={p} className="mt-8" />
              </article>
            ))}
          </div>
        </Group>

        <Group
          id="ios"
          title="iOS apps"
          note={`${liveApps} live on the App Store · ${comingApps} coming soon`}
        >
          <AppIndex />
        </Group>

        <Group id="websites" title="Websites" note={`${sites.length} live sites`}>
          {/* At lg both captures share one frame row and one caption row, so
              image bottoms and titles sit on common lines. */}
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-x-[var(--gutter)] gap-y-5">
            {sites.map((p, i) => (
              <SitePlate key={p.title} project={p} first={i === 0} />
            ))}
          </div>
        </Group>

        <Group id="also" title="Also built" note="No public link">
          <ul>
            {alsoBuilt.map((p) => (
              <li
                key={p.title}
                className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-2 py-6 border-b border-rule"
              >
                <h4 className="col-span-12 md:col-span-4 font-display font-bold text-xl leading-tight">
                  {p.title}
                </h4>
                <p className="col-span-12 md:col-span-5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {p.description}
                </p>
                <p className="col-span-12 md:col-span-3 md:text-right label text-ink-3">
                  <JoinMeta items={[p.year, p.status, p.category]} />
                </p>
              </li>
            ))}
          </ul>
        </Group>
      </div>
    </section>
  );
}

function Group({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`group-${id}`} className="mt-20 md:mt-28">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule-strong pb-3 mb-8 md:mb-10">
        <h3 id={`group-${id}`} className="text-2xl leading-tight">
          {title}
        </h3>
        <p className="label text-ink-3">{note}</p>
      </div>
      {children}
    </section>
  );
}

/** The label plate: the same fields in the same order on every project. */
function SpecPlate({ project, className }: { project: Project; className?: string }) {
  const rows: [string, React.ReactNode][] = [
    ["Year", project.year],
    ["Status", project.status],
    ["Type", project.category],
    ["Stack", <JoinMeta key="stack" items={project.tags} />],
    [
      "Link",
      project.url && project.linkLabel ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex items-center gap-1.5"
        >
          {project.linkLabel}
          <ArrowUpRight size={13} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        <span className="text-ink-3">Private platform, no public link</span>
      ),
    ],
  ];

  return (
    <dl className={clsx("grid grid-cols-[5.5rem_minmax(0,1fr)] text-[0.9375rem]", className)}>
      {rows.map(([term, value]) => (
        <div key={term} className="contents">
          <dt className="label text-ink-3 py-2.5 border-t border-rule">{term}</dt>
          <dd className="py-2.5 border-t border-rule text-ink tabular">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * The iOS index. Pointing at or focusing a row isolates it as a band of the
 * lapis field and dims the rest; its screens appear in the pinned viewer.
 * Below lg the viewer is gone and each row carries its own screens.
 */
function AppIndex() {
  const [active, setActive] = useState(0);
  const [engaged, setEngaged] = useState(false);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-x-[var(--gutter)]">
      <ol
        className="lg:col-span-7 lg:flex lg:flex-col"
        onMouseEnter={() => setEngaged(true)}
        onMouseLeave={() => setEngaged(false)}
        onFocus={() => setEngaged(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEngaged(false);
        }}
      >
        {apps.map((p, i) => {
          const isActive = i === active;
          // Isolation steps the other rows down to the tertiary ink (still
          // AA) instead of fading them with opacity.
          const dimmed = engaged && !isActive;
          const external = isExternal(p.url ?? "");
          return (
            <li key={p.title} className="border-b border-rule lg:flex lg:flex-1 lg:flex-col">
              <a
                href={p.url ?? "#"}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-describedby={`app-${i}-about`}
                className={clsx(
                  "group grid lg:flex-1 lg:content-center grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_3rem_8.5rem_6.5rem] xl:grid-cols-[minmax(0,1fr)_3.5rem_9.5rem_7.5rem] items-baseline gap-x-5 lg:gap-x-4 xl:gap-x-5 gap-y-1 py-5 lg:py-6 lg:px-4 xl:px-5 transition-colors duration-base ease-out-quart",
                  isActive ? "lg:bg-field lg:text-field-ink" : "lg:hover:bg-raised",
                  dimmed && "lg:text-ink-3"
                )}
              >
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className={clsx(
                      "font-display font-bold text-[clamp(1.5rem,2.2vw,2.5rem)] leading-none tracking-[-0.02em] transition-colors duration-base",
                      isActive && "lg:text-saffron"
                    )}
                  >
                    {p.title}
                  </span>
                  {p.titleAr ? (
                    <span
                      lang="ar"
                      dir="rtl"
                      className={clsx(
                        "font-display font-medium text-2xl leading-none",
                        "transition-colors duration-base",
                        isActive
                          ? "lg:text-field-ink-2 text-lapis-text"
                          : dimmed
                            ? "text-lapis-text lg:text-ink-3"
                            : "text-lapis-text"
                      )}
                    >
                      {p.titleAr}
                    </span>
                  ) : null}
                </span>
                <span className="hidden lg:block label tabular">{p.year}</span>
                <span
                  className={clsx(
                    "hidden lg:block label",
                    isActive ? "text-field-ink-2" : "text-ink-3"
                  )}
                >
                  {p.status}
                </span>
                <span className="inline-flex items-center justify-end gap-1.5 label">
                  {p.linkLabel}
                  <LinkArrow href={p.url ?? ""} size={13} />
                  {external ? <span className="sr-only">(opens in a new tab)</span> : null}
                </span>
                <span className="lg:hidden col-span-2 label text-ink-3">
                  <JoinMeta items={[p.year, p.status]} />
                </span>
              </a>

              <div id={`app-${i}-about`} className="lg:sr-only pb-7">
                <p className="text-ink-2 leading-relaxed max-w-[60ch]">{p.description}</p>
                <p className="mt-2 label text-ink-3">
                  <JoinMeta items={p.tags} />
                </p>
              </div>
              {p.screens.length > 0 && p.points ? <ScreenStrip project={p} /> : null}
            </li>
          );
        })}
      </ol>

      <aside aria-hidden="true" className="hidden lg:block lg:col-span-5">
        <div className="field grid h-full">
          {apps.map((p, i) => (
            <ViewerPlate key={p.title} project={p} visible={i === active} />
          ))}
        </div>
      </aside>
    </div>
  );
}

/**
 * One app's page in the viewer. All are stacked; only one shows. The screen
 * area is sized from the viewport height so the whole plate (screens, name,
 * description) fits under the header even on short laptops.
 */
function ViewerPlate({ project, visible }: { project: Project; visible: boolean }) {
  const screens = project.screens.slice(0, 2);
  const plus = project.points !== null && project.points.h < 800;
  return (
    <div
      className={clsx(
        "col-start-1 row-start-1 flex flex-col px-8 pt-10 pb-6 transition-[opacity,visibility] duration-base ease-out-quart",
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="relative flex items-end justify-center gap-5 h-[clamp(15rem,calc(100vh-var(--header-h)-22rem),27rem)] border-b border-field-ink">
        {screens.length > 0 && project.points ? (
          screens.map((src) => {
            const { width, height } = sizeOf(src);
            return (
              <Image
                key={src}
                src={src}
                width={width}
                height={height}
                alt=""
                sizes="240px"
                className={clsx("screen !w-auto !h-auto max-w-[46%]", plus ? "max-h-[79%]" : "max-h-full")}
                data-device={plus ? "plus" : undefined}
              />
            );
          })
        ) : (
          <Image
            src="/murafa/og-en.png"
            width={1200}
            height={514}
            alt=""
            sizes="420px"
            className="w-full h-auto mb-10"
          />
        )}
      </div>
      <div className="flex items-baseline justify-between gap-6 pt-4">
        <p className="font-display font-bold text-xl text-field-ink">{project.title}</p>
        <p className="label text-field-ink-2 text-right">
          <JoinMeta items={project.tags} />
        </p>
      </div>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-field-ink-2">
        {project.description}
      </p>
    </div>
  );
}

/** Below lg each app row carries its own horizontally scrolling screens. */
function ScreenStrip({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState(false);

  // Only a strip that actually scrolls needs to be a keyboard stop.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setScrolls(el.scrollWidth > el.clientWidth + 1);
    check();
    // Safari before 13.1 has no ResizeObserver; fall back to window resizes.
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const plus = project.points !== null && project.points.h < 800;
  return (
    <div
      ref={ref}
      role="group"
      aria-label={`${project.title} screens`}
      tabIndex={scrolls ? 0 : undefined}
      className="lg:hidden -mx-[var(--page-pad-x)] -mt-2 -mb-8 overflow-x-auto [scrollbar-width:none] focus-visible:outline-offset-[-2px]"
    >
      <div className="flex items-end gap-3 w-max px-[var(--page-pad-x)] pt-2 pb-14">
        {project.screens.map((src) => {
          const { width, height } = sizeOf(src);
          return (
            <Image
              key={src}
              src={src}
              width={width}
              height={height}
              alt=""
              sizes="150px"
              className="screen shrink-0"
              style={{ width: `${(project.points?.w ?? 430) * 0.34}px` }}
              data-device={plus ? "plus" : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

function SitePlate({ project, first }: { project: Project; first: boolean }) {
  if (!project.site || !project.url) return null;
  const { width, height } = siteSize[project.site];
  // Tags already named in the category ("Web · AI Tool" / "AI") are dropped.
  const tags = (project.tags as readonly string[]).filter((t) => !project.category.includes(t));
  const columns = first ? "lg:col-start-1 lg:col-span-7" : "lg:col-start-8 lg:col-span-5";
  return (
    <>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={clsx(
          "group block overflow-hidden border border-rule-strong lg:row-start-1",
          columns,
          !first && "mt-11 lg:mt-0"
        )}
      >
        <Image
          src={project.site}
          width={width}
          height={height}
          alt=""
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="block w-full h-auto lg:h-full lg:object-cover lg:object-top transition-transform duration-slow ease-out-expo group-hover:scale-[1.015]"
        />
      </a>
      <div className={clsx("lg:row-start-2", columns)}>
        <div className="flex items-baseline justify-between gap-4">
          <h4 id={`site-${project.title}`} className="text-2xl leading-tight">
            {project.title}
          </h4>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1.5 label text-ink"
          >
            {project.linkLabel}
            <ArrowUpRight size={13} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-2 text-ink-2 leading-relaxed max-w-[58ch]">{project.description}</p>
        <p className="mt-3 label text-ink-3">
          <JoinMeta items={[project.year, project.status, project.category, ...tags]} />
        </p>
      </div>
    </>
  );
}
