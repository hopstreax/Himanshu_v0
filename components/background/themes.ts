export type BackgroundThemeKey =
  | "home"
  | "about"
  | "projects"
  | "tracekit"
  | "graphify"
  | "ai-interviewer"
  | "campus-lost-and-found"
  | "e-pmsss"
  | "open-source"
  | "connect";

export interface BackgroundTheme {
  name: string;
  primary: string;       // Primary dominant atmospheric aura
  secondary: string;     // Secondary atmospheric glow
  tertiary: string;      // Tertiary ambient accent
  cursorAccent: string;  // Gentle cursor reactive glow color
  intensity?: number;    // Multiplier for glow intensity
}

export const BACKGROUND_THEMES: Record<BackgroundThemeKey, BackgroundTheme> = {
  home: {
    name: "AI & Systems Atmosphere",
    primary: "#9B7BFF",       // Electric Violet (AI / Agents)
    secondary: "#5CA8FF",     // Electric Blue (Code Intelligence)
    tertiary: "#38BDF8",      // Cyan (Systems)
    cursorAccent: "#9B7BFF",
    intensity: 1.0,
  },
  about: {
    name: "Human & Identity",
    primary: "#9B7BFF",       // Violet (Engineering foundation)
    secondary: "#E2C08D",     // Warm Amber / Gold (Identity / Timeline)
    tertiary: "#FF718C",      // Rose (Personal craft)
    cursorAccent: "#E2C08D",
    intensity: 0.95,
  },
  projects: {
    name: "Engineering & Archival Systems",
    primary: "#5CA8FF",       // Blue (Engineering & Infrastructure)
    secondary: "#9B7BFF",     // Violet (Agentic Systems)
    tertiary: "#38BDF8",      // Sky Blue (Telemetry)
    cursorAccent: "#5CA8FF",
    intensity: 1.0,
  },
  tracekit: {
    name: "TraceKit CDP Engine",
    primary: "#9B7BFF",       // Violet (Agentic execution)
    secondary: "#5CA8FF",     // Blue (Chrome DevTools Protocol)
    tertiary: "#38BDF8",      // Cyan (Network telemetry)
    cursorAccent: "#9B7BFF",
    intensity: 1.05,
  },
  graphify: {
    name: "Graphify AST & Code Intelligence",
    primary: "#5CA8FF",       // Blue (Graphify AST extraction)
    secondary: "#38BDF8",     // Cyan (Symbol resolution)
    tertiary: "#45D6A0",      // Mint (Parser builds)
    cursorAccent: "#38BDF8",
    intensity: 1.05,
  },
  "ai-interviewer": {
    name: "AI Interviewer Simulation",
    primary: "#FF718C",       // Rose / Coral (Human interaction)
    secondary: "#9B7BFF",     // Violet (LLM reasoning)
    tertiary: "#FFB86B",      // Amber (Evaluation metrics)
    cursorAccent: "#FF718C",
    intensity: 1.0,
  },
  "campus-lost-and-found": {
    name: "Campus Lost and Found",
    primary: "#45D6A0",       // Emerald (Campus verification)
    secondary: "#5CA8FF",     // Blue (Realtime synchronization)
    tertiary: "#FFB86B",      // Warm amber
    cursorAccent: "#45D6A0",
    intensity: 0.95,
  },
  "e-pmsss": {
    name: "E-PMSSS Scholarship Portal",
    primary: "#5CA8FF",       // Blue (Institutional scale)
    secondary: "#45D6A0",     // Mint (Approval pipeline)
    tertiary: "#9B7BFF",      // Violet
    cursorAccent: "#5CA8FF",
    intensity: 0.95,
  },
  "open-source": {
    name: "Ecosystem & Open Source",
    primary: "#45D6A0",       // Emerald Mint (Community & PRs)
    secondary: "#38BDF8",     // Cyan (Code Intelligence)
    tertiary: "#5CA8FF",      // Blue (Multi-language AST)
    cursorAccent: "#45D6A0",
    intensity: 1.05,
  },
  connect: {
    name: "Collaboration & Inquiries",
    primary: "#FFB86B",       // Warm Amber (Direct communication)
    secondary: "#FF718C",     // Coral Rose (Signal)
    tertiary: "#9B7BFF",      // Violet (Engineering network)
    cursorAccent: "#FFB86B",
    intensity: 1.0,
  },
};
