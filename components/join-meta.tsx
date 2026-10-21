import React from "react";

/**
 * Sets a run of meta items ("2024 · Live · Next.js") so a line may end on a
 * separator but never start with one, and never breaks inside an item.
 */
export default function JoinMeta({
  items,
  separator = "·",
}: {
  items: readonly string[];
  separator?: string;
}) {
  return (
    <>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={`${item}-${i}`}>
            <span className="whitespace-nowrap">
              {item}
              {last ? null : ` ${separator}`}
            </span>
            {last ? null : " "}
          </React.Fragment>
        );
      })}
    </>
  );
}
