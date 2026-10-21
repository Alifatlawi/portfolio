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
        sans: ["var(--font-text)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Paper: the reading sections
        bg: "var(--bg)",
        raised: "var(--bg-raised)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        "lapis-text": "var(--lapis-text)",
        // Field: the lapis spot ink
        field: "var(--field)",
        "field-deep": "var(--field-deep)",
        "field-ink": "var(--field-ink)",
        "field-ink-2": "var(--field-ink-2)",
        "field-rule": "var(--field-rule)",
        // Second ink
        saffron: "var(--saffron)",
        "saffron-hover": "var(--saffron-hover)",
        "on-saffron": "var(--on-saffron)",
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
        header: "var(--header-h)",
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
        measure: "66ch",
        page: "90rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
