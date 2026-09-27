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
          DEFAULT: "var(--color-canvas, #08090B)",
          subtle: "var(--color-canvas-subtle, #0D1014)",
        },
        ink: {
          DEFAULT: "var(--color-ink, #F4F1EA)",
          muted: "var(--color-ink-muted, #9A9DA3)",
          subtle: "var(--color-ink-subtle, #666B73)",
          body: "var(--color-ink-body, #C5C8CE)",
        },
        border: {
          subtle: "var(--color-border-subtle, #242830)",
          strong: "var(--color-border-strong, #343943)",
        },
        surface: {
          DEFAULT: "var(--color-surface, #0E1217)",
          hover: "var(--color-surface-hover, #141920)",
        },
        accent: {
          ai: {
            DEFAULT: "var(--accent-ai, #9B7BFF)",
            subtle: "var(--accent-ai-subtle, #171328)",
            border: "var(--accent-ai-border, #352B57)",
          },
          code: {
            DEFAULT: "var(--accent-code, #5CA8FF)",
            subtle: "var(--accent-code-subtle, #101B2B)",
            border: "var(--accent-code-border, #233E63)",
          },
          oss: {
            DEFAULT: "var(--accent-oss, #45D6A0)",
            subtle: "var(--accent-oss-subtle, #0D2119)",
            border: "var(--accent-oss-border, #1F523E)",
          },
          build: {
            DEFAULT: "var(--accent-build, #FFB86B)",
            subtle: "var(--accent-build-subtle, #251B10)",
            border: "var(--accent-build-border, #5C4124)",
          },
          craft: {
            DEFAULT: "var(--accent-craft, #FF718C)",
            subtle: "var(--accent-craft-subtle, #251217)",
            border: "var(--accent-craft-border, #5C2733)",
          },
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
