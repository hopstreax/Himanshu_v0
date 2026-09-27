"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import {
  BackgroundTheme,
  BackgroundThemeKey,
  BACKGROUND_THEMES,
} from "./themes";

interface AtmosphereContextValue {
  themeKey: BackgroundThemeKey;
  theme: BackgroundTheme;
  setAtmosphere: (themeKey: BackgroundThemeKey | null) => void;
  resetAtmosphere: () => void;
}

const AtmosphereContext = createContext<AtmosphereContextValue | null>(null);

function resolveThemeFromPath(pathname: string): BackgroundThemeKey {
  if (!pathname || pathname === "/") return "home";

  if (pathname.startsWith("/about")) return "about";

  if (pathname === "/projects") return "projects";
  if (pathname === "/projects/tracekit") return "tracekit";
  if (pathname === "/projects/ai-interviewer") return "ai-interviewer";
  if (pathname === "/projects/campus-lost-and-found") return "campus-lost-and-found";
  if (pathname === "/projects/e-pmsss") return "e-pmsss";
  if (pathname.startsWith("/projects/")) return "projects";

  if (pathname.startsWith("/open-source")) return "open-source";
  if (pathname.startsWith("/connect")) return "connect";

  return "home";
}

export function AtmosphereProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme?: BackgroundThemeKey;
}) {
  const pathname = usePathname();
  const defaultKey = useMemo(
    () => initialTheme || resolveThemeFromPath(pathname || "/"),
    [pathname, initialTheme]
  );

  const [overrideKey, setOverrideKey] = useState<BackgroundThemeKey | null>(null);

  // Clear any manual override whenever the user navigates between routes
  useEffect(() => {
    setOverrideKey(null);
  }, [pathname]);

  const activeKey: BackgroundThemeKey = overrideKey || defaultKey;
  const theme = BACKGROUND_THEMES[activeKey] || BACKGROUND_THEMES.home;

  const setAtmosphere = useCallback((newKey: BackgroundThemeKey | null) => {
    setOverrideKey(newKey);
  }, []);

  const resetAtmosphere = useCallback(() => {
    setOverrideKey(null);
  }, []);

  const value = useMemo(
    () => ({
      themeKey: activeKey,
      theme,
      setAtmosphere,
      resetAtmosphere,
    }),
    [activeKey, theme, setAtmosphere, resetAtmosphere]
  );

  return (
    <AtmosphereContext.Provider value={value}>
      {children}
    </AtmosphereContext.Provider>
  );
}

export function useAtmosphere(): AtmosphereContextValue {
  const context = useContext(AtmosphereContext);
  if (!context) {
    return {
      themeKey: "home",
      theme: BACKGROUND_THEMES.home,
      setAtmosphere: () => {},
      resetAtmosphere: () => {},
    };
  }
  return context;
}
