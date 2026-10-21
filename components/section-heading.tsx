import React from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function SectionHeading({
  index,
  eyebrow,
  children,
}: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-2 mb-12 md:mb-16">
      <div className="flex items-baseline gap-3 label tabular">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-rule-strong self-center" aria-hidden />
        {eyebrow ? <span>{eyebrow}</span> : null}
      </div>
      <h2 className="display-sm text-ink text-[clamp(1.75rem,3.2vw+0.5rem,3rem)]">
        {children}
      </h2>
    </header>
  );
}
