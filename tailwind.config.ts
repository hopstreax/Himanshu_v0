import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "var(--color-canvas, #F9F8F5)",
          subtle: "var(--color-canvas-subtle, #F4F2EC)",
        },
        ink: {
          DEFAULT: "var(--color-ink, #111111)",
          muted: "var(--color-ink-muted, #73716D)",
          subtle: "var(--color-ink-subtle, #8C8984)",
        },
        border: {
          subtle: "var(--color-border-subtle, #E5E2DA)",
          strong: "var(--color-border-strong, #D8D4C8)",
        },
        surface: {
          DEFAULT: "var(--color-surface, #F1EFEA)",
          hover: "var(--color-surface-hover, #EAE6DF)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.12em",
        editorial: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
