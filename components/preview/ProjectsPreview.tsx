import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { flagshipProjects, secondaryProjects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Section metadata badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          02 / PROJECTS
        </span>
        <span className="text-[11px] font-mono text-ink-subtle">
          PRIMARY WORK
        </span>
      </div>

      {/* Flagship Projects Stack (TraceKit & AI Interviewer) */}
      <h2 className="sr-only">Selected Projects Preview</h2>
      <div className="flex flex-col space-y-3.5">
        {flagshipProjects.map((project) => (
          <div key={project.slug} className="group/item">
            <div className="flex items-center space-x-2">
              <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-surface text-ink-muted">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-ink-subtle">
                {project.year}
              </span>
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-ink mt-0.5">
              {project.title}
            </h3>
            <p className="text-[12px] text-ink-muted leading-relaxed mt-0.5">
              {project.tagline}
            </p>
          </div>
        ))}
      </div>

      {/* Subtle indicator for secondary / older works */}
      <div className="pt-2 border-t border-border-subtle/60 flex items-center justify-between text-[11px] font-mono text-ink-subtle">
        <span>ARCHIVED / SECONDARY</span>
        <span>+{secondaryProjects.length} Systems</span>
      </div>

      {/* Action Link */}
      <div className="pt-1">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>VIEW PROJECTS</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
