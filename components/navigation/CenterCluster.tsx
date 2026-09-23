"use client";

import React from "react";
import { Compass, FolderGit2, GitPullRequest, ArrowUpRight } from "lucide-react";
import { NavQuadrantItem } from "./NavQuadrantItem";
import { OriginDot } from "./OriginDot";
import { useHoverIntent } from "@/hooks/useHoverIntent";

export function CenterCluster() {
  const {
    activeItem,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleKeyDown,
  } = useHoverIntent({ entryDelay: 90, exitDelay: 190 });

  return (
    <nav
      aria-label="Main Navigation"
      className="relative z-10 flex items-center justify-center p-4"
    >
      <div className="relative grid grid-cols-2 gap-x-10 sm:gap-x-20 md:gap-x-28 gap-y-8 sm:gap-y-12 md:gap-y-16">
        {/* Central spatial anchor dot */}
        <OriginDot isActive={activeItem !== null} />

        {/* Quadrant 2: Top-Left -> About */}
        <div className="flex justify-end items-end">
          <NavQuadrantItem
            id="about"
            label="About"
            subtext="· Focus"
            href="/about"
            ariaLabel="Navigate to About section"
            icon={Compass}
            alignment="left"
            promptText="VIEW ABOUT →"
            isActive={activeItem === "about"}
            isDimmed={activeItem !== null && activeItem !== "about"}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus("about")}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Quadrant 1: Top-Right -> Projects */}
        <div className="flex justify-start items-end">
          <NavQuadrantItem
            id="projects"
            label="Projects"
            subtext="· Core"
            href="/projects"
            ariaLabel="Navigate to Projects section"
            icon={FolderGit2}
            alignment="right"
            promptText="VIEW PROJECTS →"
            isActive={activeItem === "projects"}
            isDimmed={activeItem !== null && activeItem !== "projects"}
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus("projects")}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Quadrant 3: Bottom-Left -> Open Source */}
        <div className="flex justify-end items-start">
          <NavQuadrantItem
            id="open-source"
            label="Open Source"
            subtext="· Graphify"
            href="/open-source"
            ariaLabel="Navigate to Open Source contributions"
            icon={GitPullRequest}
            alignment="left"
            promptText="VIEW OPEN SOURCE →"
            isActive={activeItem === "open-source"}
            isDimmed={activeItem !== null && activeItem !== "open-source"}
            onMouseEnter={() => handleMouseEnter("open-source")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus("open-source")}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Quadrant 4: Bottom-Right -> Connect */}
        <div className="flex justify-start items-start">
          <NavQuadrantItem
            id="connect"
            label="Connect"
            subtext="· Network"
            href="/connect"
            ariaLabel="Navigate to Connect and contact links"
            icon={ArrowUpRight}
            alignment="right"
            promptText="GET IN TOUCH →"
            isActive={activeItem === "connect"}
            isDimmed={activeItem !== null && activeItem !== "connect"}
            onMouseEnter={() => handleMouseEnter("connect")}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus("connect")}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </nav>
  );
}
