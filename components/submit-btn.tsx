"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ArrowRight } from "./icons";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  // aria-disabled (not disabled) keeps focus on the button while the message
  // sends; repeat submits are swallowed instead.
  return (
    <button
      type="submit"
      aria-disabled={pending}
      onClick={(e) => {
        if (pending) e.preventDefault();
      }}
      className="btn-saffron aria-disabled:cursor-progress aria-disabled:bg-field-ink-2"
    >
      <span>{pending ? "Sending…" : "Send message"}</span>
      <ArrowRight size={16} />
    </button>
  );
}
