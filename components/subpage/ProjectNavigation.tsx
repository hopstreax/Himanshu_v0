import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <nav
      aria-label="Case Study Navigation"
      className="mt-16 pt-8 border-t border-border-subtle/80 flex flex-col sm:flex-row items-center justify-between gap-4 select-none"
    >
      {/* Previous Project */}
      <Link
        href={`/projects/${prevProject.slug}`}
        className="group flex flex-col items-start w-full sm:w-auto p-3 -m-3 rounded hover:bg-surface/50 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          <span>PREVIOUS</span>
        </span>
        <span className="text-[13px] font-medium text-ink mt-0.5">
          {prevProject.title}
        </span>
      </Link>

      {/* Index link */}
      <Link
        href="/projects"
        className="text-[11px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors flex items-center space-x-1.5 py-2 px-3 rounded hover:bg-surface/50"
      >
        <Grid className="w-3.5 h-3.5 opacity-60" />
        <span>ALL PROJECTS</span>
      </Link>

      {/* Next Project */}
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group flex flex-col items-end w-full sm:w-auto p-3 -m-3 rounded hover:bg-surface/50 transition-colors text-right"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
          <span>NEXT</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="text-[13px] font-medium text-ink mt-0.5">
          {nextProject.title}
        </span>
      </Link>
    </nav>
  );
}
