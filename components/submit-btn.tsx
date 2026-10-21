"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center gap-3 bg-ink text-bg px-5 py-3 min-h-[44px] text-sm tracking-tight transition-colors duration-base ease-out-quart hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <span>{pending ? "Sending…" : "Send message"}</span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        className="transition-transform duration-base ease-out-quart group-hover:translate-x-0.5"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </button>
  );
}
