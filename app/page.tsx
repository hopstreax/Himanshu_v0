"use client";

import React from "react";
import { HeaderIdentity } from "@/components/layout/HeaderIdentity";
import { StatusFooter } from "@/components/layout/StatusFooter";
import { CenterCluster } from "@/components/navigation/CenterCluster";
import { GeometricCanvas } from "@/components/background/GeometricCanvas";
import { PreviewManager } from "@/components/preview/PreviewManager";
import { useHoverIntent } from "@/hooks/useHoverIntent";

export default function HomePage() {
  const {
    activeItem,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleKeyDown,
  } = useHoverIntent({ entryDelay: 90, exitDelay: 220 });

  return (
    <main className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none">
      {/* Background Ambient Geometric Canvas (z-0) */}
      <GeometricCanvas />

      {/* Top Section: Identity Anchor (z-10) */}
      <div className="relative z-10 w-full flex items-start justify-between">
        <HeaderIdentity />
      </div>

      {/* Center Section: Spatial Navigation Stage (z-10) */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto">
        <CenterCluster
          activeItem={activeItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Bottom Section: Status & Temporal Anchor (z-10) */}
      <div className="relative z-10 w-full flex items-end justify-end">
        <StatusFooter />
      </div>

      {/* Dynamic Hover Preview System (z-20) */}
      <PreviewManager
        activeItem={activeItem}
        onMouseEnter={() => {
          if (activeItem) {
            handleMouseEnter(activeItem);
          }
        }}
        onMouseLeave={handleMouseLeave}
      />
    </main>
  );
}
