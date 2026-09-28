"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { PageShell } from "@/components/subpage/PageShell";
import { useAtmosphere } from "@/components/background/AtmosphereContext";
import { BackgroundThemeKey } from "@/components/background/themes";
import { projects } from "@/data/projects";

export function ProjectsView() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const { setAtmosphere } = useAtmosphere();

  const projectAccents: Record<string, string> = {
    tracekit: "#9B7BFF",
    "ai-interviewer": "#FFB86B",
    "campus-lost-and-found": "#45D6A0",
    "e-pmsss": "#5CA8FF",
  };

  return (
    <PageShell activeSection="projects">
      {/* Editorial Opening / Hero Statement */}
      <header className="pb-12 mb-16 border-b border-[#242830] space-y-8">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB86B]" />
            <span className="text-[#F4F1EA] font-semibold">WORK / 2026</span>
            <span>·</span>
            <span>INDEX & CASE STUDIES</span>
          </div>
          <span className="hidden sm:inline-block">
            4 ARCHIVAL SYSTEMS
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.96]">
            SELECTED<br />
            <span className="text-[#9A9DA3]">SYSTEMS</span>
          </h1>

          <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-3xl pt-2">
            Autonomous testing orchestration, generative AI simulation platforms, and full-stack software applications documented as deep engineering case studies.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#666B73] border-t border-[#242830]">
          <span>01 & 02: FLAGSHIP AGENTIC ARCHITECTURES</span>
          <span className="hidden sm:inline">·</span>
          <span>03 & 04: FULL-STACK PRODUCTION SYSTEMS</span>
          <span className="hidden sm:inline">·</span>
          <span>NO BOXED CARDS · PURE DIRECTORY</span>
        </div>
      </header>

      {/* The Editorial Project Archive (List Pattern, No Box Cards) */}
      <section aria-labelledby="archive-heading" className="space-y-4">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#666B73] pb-4">
          <div className="flex items-center space-x-2">
            <FolderGit2 className="w-3.5 h-3.5 text-[#F4F1EA]" />
            <h2 id="archive-heading">DIRECTORY · CHRONOLOGICAL INDEX</h2>
          </div>
          <span>TAP OR HOVER TO ILLUMINATE</span>
        </div>

        <div className="divide-y divide-[#242830] border-t-2 border-[#F4F1EA] border-b border-[#242830]">
          {projects.map((project, idx) => {
            const accent = projectAccents[project.slug] || "#9B7BFF";
            const isHovered = hoveredSlug === project.slug;

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => {
                  setHoveredSlug(project.slug);
                  setAtmosphere(project.slug as BackgroundThemeKey);
                }}
                onMouseLeave={() => {
                  setHoveredSlug(null);
                  setAtmosphere(null);
                }}
                className="group relative block py-10 sm:py-14 transition-transform duration-300 hover:translate-x-2"
              >
                {/* Subtle localized aura behind hovered project row - NO card borders, pure diffused light */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-8 -inset-y-4 rounded-3xl blur-[90px] pointer-events-none transition-opacity duration-700 -z-10"
                  style={{
                    background: accent,
                    opacity: isHovered ? 0.08 : 0,
                  }}
                />

                <div className="space-y-4">
                  {/* Meta Row: Number, Tier, Year */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center space-x-3">
                      <span
                        className="text-xl sm:text-2xl font-mono font-light tracking-tighter transition-colors duration-200"
                        style={{ color: isHovered ? accent : "#666B73" }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-[#343943]">/</span>
                      <span className="uppercase tracking-widest text-[#666B73]">
                        {project.category}
                      </span>
                      {project.tier === "flagship" && (
                        <span
                          className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border"
                          style={{
                            borderColor: accent,
                            color: accent,
                          }}
                        >
                          FLAGSHIP
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-[#666B73] group-hover:text-[#F4F1EA] transition-colors">
                      <span className="text-[11px] font-mono uppercase tracking-wider hidden sm:inline">
                        VIEW CASE STUDY
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: isHovered ? accent : "#9A9DA3" }}
                      />
                    </div>
                  </div>

                  {/* Project Title */}
                  <div className="space-y-1.5">
                    <h3
                      className="text-[clamp(2rem,4vw,3.75rem)] font-mono font-bold uppercase tracking-tight transition-colors duration-200"
                      style={{ color: isHovered ? accent : "#F4F1EA" }}
                    >
                      {project.title}
                    </h3>
                    <div className="text-[13px] sm:text-[15px] font-mono text-[#9A9DA3] uppercase tracking-wider">
                      {project.tagline}
                    </div>
                  </div>

                  {/* Architecture & Tech Stack Details */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
                    <div className="md:col-span-8">
                      <p className="text-[14px] sm:text-[15px] text-[#C5C8CE] leading-relaxed max-w-2xl font-sans">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="md:col-span-4 flex flex-wrap items-center md:justify-end gap-x-2 gap-y-1 text-[11px] font-mono text-[#666B73]">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[#9A9DA3]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
