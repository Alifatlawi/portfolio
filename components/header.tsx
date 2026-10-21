"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";
import { Close, Menu } from "./icons";

type SectionLink = (typeof links)[number];

// The header is a band of the lapis field printed across the top of every
// section. The Latin nav hangs from the left margin and an Arabic nav mirrors
// it from the right; the active section is marked by a saffron rule.
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Collapsed, the sheet is inert. Open, it covers the viewport, so the page
  // behind it goes inert instead (and stops scrolling). React 18's types
  // don't know `inert`, so it is set directly.
  useEffect(() => {
    const sheet = sheetRef.current;
    const behind = document.querySelectorAll(
      "#content, body > footer, a[href='#content']"
    );
    if (mobileOpen) {
      sheet?.removeAttribute("inert");
      behind.forEach((el) => el.setAttribute("inert", ""));
      document.body.style.overflow = "hidden";
    } else {
      sheet?.setAttribute("inert", "");
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
    }
    return () => {
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Hand focus back to the toggle before the sheet goes inert.
      if (sheetRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // The sheet only exists below md: close it when the viewport widens (e.g.
  // rotating a phone) so the scroll lock never outlives it.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    // Safari before 14 only has the deprecated addListener API
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const go = (name: SectionLink["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };

  const sections = links.filter((l) => l.name !== "Home");

  return (
    <header className="field fixed inset-x-0 top-0 z-50 border-b border-field-rule">
      <div className="page flex h-header items-center justify-between gap-6">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link
            href="#home"
            onClick={() => go("Home")}
            className="group flex items-baseline gap-3 py-2"
          >
            <span className="font-display font-bold text-xl leading-none text-saffron">
              A/F
            </span>
            <span className="sr-only sm:not-sr-only text-sm text-field-ink-2 group-hover:text-field-ink transition-colors duration-base">
              Ali Al-Fatlawi
            </span>
            <span className="sr-only">, back to top</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {sections.map((link) => (
                <li key={link.hash}>
                  <NavLink
                    link={link}
                    active={activeSection === link.name}
                    onNavigate={go}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* The Arabic mirror of the nav: a visual voice for pointer users.
              Keyboard and assistive tech use the Latin nav above. */}
          <ul
            lang="ar"
            dir="rtl"
            aria-hidden="true"
            className="hidden lg:flex items-center gap-1"
          >
            {sections.map((link) => (
              <li key={link.hash}>
                <NavLink
                  link={link}
                  active={activeSection === link.name}
                  onNavigate={go}
                  arabic
                />
              </li>
            ))}
          </ul>
          <ThemeSwitch />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:hidden -mr-2 inline-flex h-11 items-center gap-2 px-2 text-sm text-field-ink"
          >
            {mobileOpen ? <Close size={18} /> : <Menu size={18} />}
            <span>{mobileOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={sheetRef}
        className={clsx(
          "md:hidden grid transition-[grid-template-rows] duration-slow ease-out-quart",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Primary mobile"
            className="page min-h-[calc(100svh-var(--header-h))] pb-8 pt-2"
          >
            <ul>
              {sections.map((link) => {
                const active = activeSection === link.name;
                return (
                  <li key={link.hash} className="border-b border-field-rule">
                    <Link
                      href={link.hash}
                      onClick={() => go(link.name)}
                      aria-current={active ? "location" : undefined}
                      className="flex items-baseline justify-between gap-4 py-4 font-display font-bold text-[2rem] leading-none"
                    >
                      <span className={active ? "text-saffron" : "text-field-ink"}>
                        {link.label}
                      </span>
                      <span
                        lang="ar"
                        dir="rtl"
                        aria-hidden="true"
                        className={clsx(
                          "text-2xl font-medium",
                          active ? "text-saffron" : "text-field-ink-2"
                        )}
                      >
                        {link.labelAr}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  link,
  active,
  onNavigate,
  arabic = false,
}: {
  link: SectionLink;
  active: boolean;
  onNavigate: (name: SectionLink["name"]) => void;
  arabic?: boolean;
}) {
  return (
    <Link
      href={link.hash}
      onClick={() => onNavigate(link.name)}
      aria-current={!arabic && active ? "location" : undefined}
      tabIndex={arabic ? -1 : undefined}
      className={clsx(
        "relative inline-flex items-center px-3 py-2.5 transition-colors duration-base",
        arabic ? "font-display text-lg leading-none" : "text-sm",
        active ? "text-field-ink" : "text-field-ink-2 hover:text-field-ink"
      )}
    >
      {arabic ? link.labelAr : link.label}
      <span
        aria-hidden
        className={clsx(
          "absolute left-3 right-3 bottom-1 h-[2px] bg-saffron transition-transform duration-base ease-out-quart",
          arabic ? "origin-right" : "origin-left",
          active ? "scale-x-100" : "scale-x-0"
        )}
      />
    </Link>
  );
}
