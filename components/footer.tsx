import React from "react";

// The colophon: printed on the same lapis field as the contact close.
export default function Footer() {
  return (
    <footer className="field border-t border-field-rule">
      <div className="page flex flex-col md:flex-row md:items-baseline justify-between gap-3 py-8 label text-field-ink-2">
        <p>
          <span className="text-field-ink">Ali Al-Fatlawi</span> · &copy;{" "}
          {new Date().getFullYear()} · Built in Ankara
        </p>
        <p className="flex items-baseline gap-3">
          <span>Set in Reem Kufi and Readex Pro</span>
          <span lang="ar" dir="rtl" className="font-display text-lg leading-none text-field-ink">
            علي الفتلاوي
          </span>
        </p>
      </div>
    </footer>
  );
}
