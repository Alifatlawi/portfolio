import React from "react";

export default function Footer() {
  return (
    <footer className="page rule-top py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 label tabular">
        <p className="text-ink-3">
          <span className="text-ink-2">Ali Al-Fatlawi</span>
          <span className="mx-2 text-rule-strong">·</span>
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-2 text-rule-strong">·</span>
          <span>Built in Ankara</span>
        </p>
        <p className="text-ink-3">
          Set in Bricolage Grotesque
          <span className="mx-2 text-rule-strong">&amp;</span>
          JetBrains Mono
        </p>
      </div>
    </footer>
  );
}
