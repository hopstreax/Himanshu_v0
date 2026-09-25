"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 6, scale: 0.998 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.08 }
          : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
      }
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
