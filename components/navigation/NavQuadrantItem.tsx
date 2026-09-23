"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { DirectionalPrompt } from "./DirectionalPrompt";

interface NavQuadrantItemProps {
  id: string;
  label: string;
  subtext: string;
  href: string;
  ariaLabel: string;
  icon: LucideIcon;
  alignment?: "left" | "right";
  promptText: string;
  isActive: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export function NavQuadrantItem({
  label,
  subtext,
  href,
  ariaLabel,
  icon: Icon,
  alignment = "left",
  promptText,
  isActive,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
}: NavQuadrantItemProps) {
  const shouldReduceMotion = useReducedMotion();

  // Determine motion values based on active/dimmed/idle state
  const targetScale = shouldReduceMotion ? 1 : isActive ? 1.07 : 1;
  const targetY = shouldReduceMotion ? 0 : isActive ? -2 : 0;
  const targetOpacity = isActive ? 1 : isDimmed ? 0.34 : 0.75;

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-lg
          w-24 sm:w-28 md:w-32 min-h-[64px]
          focus:outline-none focus-visible:ring-1.5 focus-visible:ring-ink/60 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas
          select-none`}
      >
        <motion.div
          animate={{
            scale: targetScale,
            y: targetY,
            opacity: targetOpacity,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 400, damping: 26 }
          }
          className="flex flex-col items-center space-y-1.5 w-full"
        >
          <Icon
            className={`w-[19px] h-[19px] transition-colors duration-150 ${
              isActive ? "text-ink" : "text-ink-muted"
            }`}
            strokeWidth={isActive ? 1.55 : 1.35}
            aria-hidden="true"
          />

          <div className="flex flex-col items-center text-center w-full">
            <span
              className={`text-[11px] uppercase tracking-editorial transition-colors duration-150 ${
                isActive ? "font-semibold text-ink" : "font-medium text-ink-muted"
              }`}
            >
              {label}
            </span>
            <span
              className={`text-[10px] font-normal tracking-normal mt-0.5 transition-colors duration-150 ${
                isActive ? "text-ink-muted" : "text-ink-subtle/80"
              }`}
            >
              {subtext}
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Directional Prompt (Inline micro-indicator with zero layout shift) */}
      <AnimatePresence>
        {isActive && (
          <DirectionalPrompt text={promptText} alignment={alignment} />
        )}
      </AnimatePresence>
    </div>
  );
}
