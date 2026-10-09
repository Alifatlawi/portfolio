export default function Logo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="100" height="100" rx="22.5" fill="#1D5A4C" />
      <circle cx="56" cy="44" r="13" fill="none" stroke="#fff" strokeWidth="8" />
      <path
        d="M43 46 C40 60 34 66 26 66"
        fill="none"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M24 78 H76" stroke="#E2B456" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}
