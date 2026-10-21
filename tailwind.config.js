/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        raised: "var(--bg-raised)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)",
        // Murafa'a product site (/murafa) — fixed palette, no dark mode
        murafa: {
          green: "#1D5A4C",
          "green-deep": "#123D33",
          mint: "#E1ECE7",
          gold: "#E2B456",
          "gold-text": "#EBC46E",
          amber: "#8A5300",
          "amber-soft": "#FAEBD2",
          paper: "#F3F1EC",
          sand: "#EAE7E0",
          stone: "#ECEAE4",
          ink: "#18201D",
          "ink-2": "#4E5551",
          "ink-3": "#5F6662",
          rule: "#E3E0D9",
          line: "#EEEBE5",
          border: "#D6D2C9",
          teal: "#6CC0A8",
        },
      },
      fontSize: {
        xs: "var(--fs-xs)",
        sm: "var(--fs-sm)",
        base: "var(--fs-base)",
        lg: "var(--fs-lg)",
        xl: "var(--fs-xl)",
        "2xl": "var(--fs-2xl)",
        "3xl": "var(--fs-3xl)",
        "4xl": "var(--fs-4xl)",
      },
      spacing: {
        "page-x": "var(--page-pad-x)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "220ms",
        slow: "480ms",
      },
      maxWidth: {
        measure: "62ch",
        page: "78rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
