import React from "react";
import clsx from "clsx";

type SectionHeadProps = {
  id: string;
  /** English heading, hung from the left margin */
  children: React.ReactNode;
  /** Arabic section title, set at wall scale from the right margin */
  titleAr: string;
  /** On the lapis field the Arabic title takes the saffron ink */
  onField?: boolean;
  className?: string;
};

/**
 * The bilingual section head: Latin from the left margin, Arabic from the
 * right, aligned on their last baselines above an ink rule (the Arabic
 * descenders hang into the space above the rule, never through it). The Arabic title is a
 * typographic voice for the same words, so it is hidden from assistive tech.
 */
export default function SectionHead({
  id,
  children,
  titleAr,
  onField = false,
  className,
}: SectionHeadProps) {
  return (
    <header
      className={clsx(
        "grid grid-cols-12 gap-x-[var(--gutter)] items-end md:[align-items:last_baseline] border-b pb-5 md:pb-6",
        onField ? "border-field-ink" : "border-rule-strong",
        className
      )}
    >
      <h2
        id={id}
        className="col-span-12 md:col-span-7 lg:col-span-6 text-3xl leading-[1.02]"
      >
        {children}
      </h2>
      <p
        lang="ar"
        dir="rtl"
        aria-hidden="true"
        className={clsx(
          "col-span-12 md:col-span-5 lg:col-span-6 order-first md:order-none justify-self-end font-display font-bold leading-[1.2] md:leading-[1.1] mb-2 md:mb-0 text-[clamp(4rem,11vw,10.5rem)] select-none",
          onField ? "text-saffron" : "text-lapis-text"
        )}
      >
        {titleAr}
      </p>
    </header>
  );
}
