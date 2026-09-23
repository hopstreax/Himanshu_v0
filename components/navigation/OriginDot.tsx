"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface OriginDotProps {
  isActive?: boolean;
}

export function OriginDot({ isActive = false }: OriginDotProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={{
        scale: shouldReduceMotion ? 1 : isActive ? 1.3 : 1,
        opacity: isActive ? 0.65 : 0.4,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0.15 }
          : { type: "spring", stiffness: 380, damping: 25 }
      }
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ink pointer-events-none z-10"
    />
  );
}
