"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-base ease-out-quart",
        scrolled
          ? "bg-bg/85 backdrop-blur-md rule-bottom"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="page flex h-14 md:h-16 items-center justify-between gap-6">
        <Link
          href="#home"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
          className="group flex items-baseline gap-2 text-ink hover:text-ink"
          aria-label="Ali Al-Fatlawi — home"
        >
          <span className="label-accent tabular">A/F</span>
          <span className="hidden sm:inline text-sm tracking-tight text-ink-2 group-hover:text-ink transition-colors duration-fast">
            Ali Al-Fatlawi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 label tabular">
            {links.map((link, i) => {
              const active = activeSection === link.name;
              return (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    aria-current={active ? "true" : undefined}
                    className={clsx(
                      "group relative inline-flex items-center gap-2 px-3 py-2 transition-colors duration-fast",
                      active
                        ? "text-ink"
                        : "text-ink-3 hover:text-ink"
                    )}
                  >
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                      {String(i).padStart(2, "0")}
                    </span>
                    <span>{link.name}</span>
                    {active ? (
                      <span
                        aria-hidden
                        className="absolute -bottom-px left-3 right-3 h-px bg-accent"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="md:hidden label tabular text-ink-2 hover:text-ink transition-colors"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={clsx(
          "md:hidden overflow-hidden transition-[grid-template-rows] duration-slow ease-out-quart grid",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav
            aria-label="Primary mobile"
            className="page rule-top pb-6 pt-4 bg-bg"
          >
            <ul className="flex flex-col">
              {links.map((link, i) => {
                const active = activeSection === link.name;
                return (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setMobileOpen(false);
                      }}
                      aria-current={active ? "true" : undefined}
                      className={clsx(
                        "flex items-baseline justify-between gap-4 py-4 rule-bottom transition-colors",
                        active ? "text-ink" : "text-ink-2"
                      )}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="label tabular text-ink-3">
                          {String(i).padStart(2, "0")}
                        </span>
                        <span className="text-xl">{link.name}</span>
                      </span>
                      {active ? <span className="dot" aria-hidden /> : null}
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
