"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface DirectionalPromptProps {
  text: string;
  alignment: "left" | "right";
}

export function DirectionalPrompt({ text, alignment }: DirectionalPromptProps) {
  const shouldReduceMotion = useReducedMotion();
  const isRight = alignment === "right";

  const initialX = shouldReduceMotion ? 0 : isRight ? -6 : 6;
  const exitX = shouldReduceMotion ? 0 : isRight ? -3 : 3;

  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: exitX }}
      transition={
        shouldReduceMotion
          ? { duration: 0.12 }
          : { type: "spring", stiffness: 420, damping: 28 }
      }
      className={`absolute pointer-events-none select-none whitespace-nowrap z-20
        text-[10px] font-semibold tracking-widest text-ink uppercase
        /* Desktop: positioned to the side */
        hidden sm:inline-flex items-center space-x-1
        ${
          isRight
            ? "left-full ml-3 md:ml-4 top-1/2 -translate-y-1/2"
            : "right-full mr-3 md:mr-4 top-1/2 -translate-y-1/2"
        }
      `}
    >
      <span>{text}</span>
    </motion.span>
  );
}
