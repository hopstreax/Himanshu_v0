"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface EditorialSheetProps {
  children: React.ReactNode;
  alignment: "left" | "right";
  ariaLabel: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export function EditorialSheet({
  children,
  alignment,
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
  className = "",
}: EditorialSheetProps) {
  const shouldReduceMotion = useReducedMotion();
  const isRight = alignment === "right";

  const initialX = shouldReduceMotion ? 0 : isRight ? 12 : -12;
  const exitX = shouldReduceMotion ? 0 : isRight ? 8 : -8;

  return (
    <motion.aside
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
      initial={{ opacity: 0, x: initialX, scale: shouldReduceMotion ? 1 : 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: exitX, scale: shouldReduceMotion ? 1 : 0.985 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.12 }
          : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`pointer-events-auto select-text
        w-full max-w-[410px]
        bg-canvas/95 backdrop-blur-sm
        border border-border-subtle
        rounded-xl
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]
        p-6 sm:p-7 md:p-8
        transition-colors duration-200
        ${className}`}
    >
      {children}
    </motion.aside>
  );
}
