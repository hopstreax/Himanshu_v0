"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { NavQuadrant } from "@/types/portfolio";
import { EditorialSheet } from "./EditorialSheet";
import { AboutPreview } from "./AboutPreview";
import { ProjectsPreview } from "./ProjectsPreview";
import { OpenSourcePreview } from "./OpenSourcePreview";
import { ConnectPreview } from "./ConnectPreview";

interface PreviewManagerProps {
  activeItem: NavQuadrant | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface ComputedPosition {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  transform?: string;
  alignment: "left" | "right";
}

export function PreviewManager({
  activeItem,
  onMouseEnter,
  onMouseLeave,
}: PreviewManagerProps) {
  const [position, setPosition] = useState<ComputedPosition>({
    alignment: "right",
  });

  const calculatePosition = useCallback((item: NavQuadrant): ComputedPosition => {
    if (typeof window === "undefined") {
      return { alignment: "right" };
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Mobile viewport (< 768px): center horizontally with safe margin
    if (vw < 768) {
      return {
        left: "50%",
        top: Math.max(76, Math.min(vh * 0.14, 110)),
        transform: "translateX(-50%)",
        alignment: "right",
      };
    }

    // Edge margin for desktop
    const edgeMargin = Math.max(28, Math.min(vw * 0.06, 96));
    const panelWidth = Math.min(vw * 0.32, 410);

    switch (item) {
      case "about":
        return {
          left: edgeMargin,
          top: Math.max(80, Math.min(vh * 0.22, 180)),
          alignment: "left",
        };

      case "projects":
        return {
          right: edgeMargin,
          top: Math.max(80, Math.min(vh * 0.22, 180)),
          alignment: "right",
        };

      case "open-source":
        return {
          left: edgeMargin,
          top: Math.max(100, Math.min(vh * 0.32, 240)),
          alignment: "left",
        };

      case "connect":
        return {
          right: edgeMargin,
          top: Math.max(100, Math.min(vh * 0.32, 240)),
          alignment: "right",
        };

      default:
        return { alignment: "right" };
    }
  }, []);

  useEffect(() => {
    if (!activeItem) return;

    setPosition(calculatePosition(activeItem));

    const handleResize = () => {
      setPosition(calculatePosition(activeItem));
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [activeItem, calculatePosition]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden={!activeItem}
    >
      <AnimatePresence mode="wait">
        {activeItem && (
          <div
            key={activeItem}
            style={{
              position: "absolute",
              left: position.left,
              right: position.right,
              top: position.top,
              bottom: position.bottom,
              transform: position.transform,
            }}
            className="w-[calc(100vw-36px)] sm:w-auto max-w-[420px]"
          >
            <EditorialSheet
              alignment={position.alignment}
              ariaLabel={`${activeItem} preview highlights`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {activeItem === "about" && <AboutPreview />}
              {activeItem === "projects" && <ProjectsPreview />}
              {activeItem === "open-source" && <OpenSourcePreview />}
              {activeItem === "connect" && <ConnectPreview />}
            </EditorialSheet>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
