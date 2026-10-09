"use client";

import { useState } from "react";
import Icon from "./icon";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-[22px] py-[18px] text-start text-murafa-ink"
              >
                <span className="text-[17px] font-semibold">{item.q}</span>
                <Icon
                  name={isOpen ? "remove" : "add"}
                  className="text-[22px] text-murafa-green"
                />
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              hidden={!isOpen}
              className="px-[22px] pb-5 text-[16px] leading-[1.7] text-murafa-ink-2"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
