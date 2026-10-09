import clsx from "clsx";

// Material Symbols ligature. Decorative only: every icon sits next to a text label.
// When adding a new name, also add it to ICON_NAMES in murafa-document.tsx.
export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={clsx("m-icon", className)}>
      {name}
    </span>
  );
}
