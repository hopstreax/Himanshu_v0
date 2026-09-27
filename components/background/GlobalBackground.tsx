"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useAtmosphere } from "./AtmosphereContext";

export function GlobalBackground() {
  const { theme } = useAtmosphere();
  const shouldReduceMotion = useReducedMotion();
  const [isInteractive, setIsInteractive] = useState(false);

  // Framer Motion spring physics for smooth cursor inertia (shifting 25-45px)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = useMemo(
    () => ({
      damping: 32,
      stiffness: 55,
      mass: 1.2,
    }),
    []
  );

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable cursor tracking on devices with fine pointer and no reduced-motion preference
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobileViewport = window.innerWidth < 768;

    if (!isTouch && !isMobileViewport && !shouldReduceMotion) {
      setIsInteractive(true);

      const handleMouseMove = (e: MouseEvent) => {
        const normX = (e.clientX / window.innerWidth - 0.5) * 60; // Max ±30px shift
        const normY = (e.clientY / window.innerHeight - 0.5) * 50; // Max ±25px shift
        cursorX.set(normX);
        cursorY.set(normY);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      setIsInteractive(false);
    }
  }, [cursorX, cursorY, shouldReduceMotion]);

  const intensityMultiplier = theme.intensity ?? 1.0;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        backgroundColor: "var(--color-canvas, #08090B)",
      }}
    >
      {/* 1. Underlying Atmospheric Dark Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 5%, #0D1014 0%, #08090B 75%, #050608 100%)",
        }}
      />

      {/* 2. Technical Infinite Grid (CSS Gradients with Major & Minor Axes) */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-[0.038] ${
          shouldReduceMotion ? "" : "technical-grid-animated"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line-major, rgba(244, 241, 234, 0.05)) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-major, rgba(244, 241, 234, 0.05)) 1px, transparent 1px),
            linear-gradient(to right, var(--grid-line-minor, rgba(244, 241, 234, 0.02)) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-minor, rgba(244, 241, 234, 0.02)) 1px, transparent 1px)
          `,
          backgroundSize: `
            var(--grid-size-major, 128px) var(--grid-size-major, 128px),
            var(--grid-size-major, 128px) var(--grid-size-major, 128px),
            var(--grid-size-minor, 32px) var(--grid-size-minor, 32px),
            var(--grid-size-minor, 32px) var(--grid-size-minor, 32px)
          `,
          maskImage:
            "radial-gradient(ellipse 95% 85% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 85% at 50% 35%, black 40%, transparent 95%)",
        }}
      />

      {/* 3. Multi-Layer Ambient Neon Aura Fields */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Field 1: Primary Dominant Aura (Upper-right quadrant) */}
        <div
          className="absolute -top-[12%] right-[5%] sm:right-[12%] w-[450px] sm:w-[650px] lg:w-[780px] h-[450px] sm:h-[650px] lg:h-[780px] rounded-full blur-[130px] sm:blur-[160px] transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${theme.primary} 0%, rgba(8,9,11,0) 70%)`,
            opacity: 0.14 * intensityMultiplier,
            willChange: "background, opacity",
          }}
        />

        {/* Field 2: Secondary Aura (Mid-left quadrant) */}
        <div
          className="absolute top-[32%] sm:top-[28%] -left-[15%] sm:-left-[8%] w-[400px] sm:w-[600px] lg:w-[700px] h-[400px] sm:h-[600px] lg:h-[700px] rounded-full blur-[120px] sm:blur-[150px] transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${theme.secondary} 0%, rgba(8,9,11,0) 70%)`,
            opacity: 0.12 * intensityMultiplier,
            willChange: "background, opacity",
          }}
        />

        {/* Field 3: Tertiary Ambient Accent (Bottom-right quadrant) */}
        <div
          className="absolute bottom-[-10%] sm:bottom-[-5%] right-[10%] sm:right-[20%] w-[380px] sm:w-[540px] lg:w-[640px] h-[380px] sm:h-[540px] lg:h-[640px] rounded-full blur-[120px] sm:blur-[140px] transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${theme.tertiary} 0%, rgba(8,9,11,0) 70%)`,
            opacity: 0.09 * intensityMultiplier,
            willChange: "background, opacity",
          }}
        />

        {/* Field 4: Mouse-Reactive Perspective Aura (Desktop only, inertia-driven) */}
        {isInteractive && !shouldReduceMotion ? (
          <motion.div
            className="absolute top-[20%] left-[30%] w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] rounded-full blur-[160px] pointer-events-none transition-colors duration-1000"
            style={{
              x: smoothX,
              y: smoothY,
              background: `radial-gradient(circle, ${theme.cursorAccent} 0%, rgba(8,9,11,0) 70%)`,
              opacity: 0.09 * intensityMultiplier,
              willChange: "transform, background",
            }}
          />
        ) : (
          <div
            className="absolute top-[25%] left-[30%] w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000"
            style={{
              background: `radial-gradient(circle, ${theme.cursorAccent} 0%, rgba(8,9,11,0) 70%)`,
              opacity: 0.06 * intensityMultiplier,
            }}
          />
        )}
      </div>
    </div>
  );
}
