"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { NavQuadrant } from "@/types/portfolio";

interface UseHoverIntentOptions {
  entryDelay?: number;
  exitDelay?: number;
}

export function useHoverIntent({
  entryDelay = 90,
  exitDelay = 190,
}: UseHoverIntentOptions = {}) {
  const [activeItem, setActiveItem] = useState<NavQuadrant | null>(null);

  const entryTimerRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const activeItemRef = useRef<NavQuadrant | null>(null);

  // Keep ref synchronized
  useEffect(() => {
    activeItemRef.current = activeItem;
  }, [activeItem]);

  const clearTimers = useCallback(() => {
    if (entryTimerRef.current) {
      clearTimeout(entryTimerRef.current);
      entryTimerRef.current = null;
    }
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (id: NavQuadrant) => {
      // Cancel pending exit
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }

      // If an item is already active, transition quickly
      const delay = activeItemRef.current !== null ? 40 : entryDelay;

      if (entryTimerRef.current) {
        clearTimeout(entryTimerRef.current);
      }

      entryTimerRef.current = setTimeout(() => {
        setActiveItem(id);
        entryTimerRef.current = null;
      }, delay);
    },
    [entryDelay]
  );

  const handleMouseLeave = useCallback(() => {
    if (entryTimerRef.current) {
      clearTimeout(entryTimerRef.current);
      entryTimerRef.current = null;
    }

    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
    }

    exitTimerRef.current = setTimeout(() => {
      setActiveItem(null);
      exitTimerRef.current = null;
    }, exitDelay);
  }, [exitDelay]);

  // Keyboard focus is intentional, activate immediately
  const handleFocus = useCallback(
    (id: NavQuadrant) => {
      clearTimers();
      setActiveItem(id);
    },
    [clearTimers]
  );

  const handleBlur = useCallback(() => {
    clearTimers();
    // Short grace period to see if focus transfers to another quadrant item
    exitTimerRef.current = setTimeout(() => {
      setActiveItem(null);
      exitTimerRef.current = null;
    }, 60);
  }, [clearTimers]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveItem(null);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  return {
    activeItem,
    setActiveItem,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleKeyDown,
  };
}
