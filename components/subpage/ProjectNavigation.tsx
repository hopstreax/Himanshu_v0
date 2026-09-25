import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || projects.length <= 1) return null;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Safeguard: Never link current project to itself
  const showPrev = prevProject && prevProject.slug !== currentSlug;
  const showNext = nextProject && nextProject.slug !== currentSlug;

  return (
    <nav
      aria-label="Case Study Navigation"
      className="mt-16 pt-8 border-t border-border-subtle/80 select-none"
    >
      <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-4 w-full">
        {/* Previous Project */}
        <div className="col-span-1 flex items-start sm:w-1/3">
          {showPrev ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start p-2.5 rounded-lg hover:bg-surface/60 transition-colors w-full sm:w-auto"
              aria-label={`Previous case study: ${prevProject.title}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 shrink-0" />
                <span>PREVIOUS</span>
              </span>
              <span className="text-[13px] font-medium text-ink mt-0.5 line-clamp-1 group-hover:text-ink transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-auto" aria-hidden="true" />
          )}
        </div>

        {/* Index link */}
        <div className="order-last sm:order-none col-span-2 sm:col-span-1 flex justify-center sm:w-1/3">
          <Link
            href="/projects"
            className="text-[11px] font-mono uppercase tracking-widest text-ink-muted hover:text-ink transition-colors flex items-center space-x-1.5 py-2 px-3.5 rounded-lg border border-border-subtle/60 hover:border-border-strong hover:bg-surface/50"
            aria-label="Return to all projects index"
          >
            <Grid className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <span>ALL PROJECTS</span>
          </Link>
        </div>

        {/* Next Project */}
        <div className="col-span-1 flex items-end sm:items-end justify-end sm:w-1/3 text-right">
          {showNext ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end p-2.5 rounded-lg hover:bg-surface/60 transition-colors w-full sm:w-auto"
              aria-label={`Next case study: ${nextProject.title}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle flex items-center space-x-1.5">
                <span>NEXT</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 shrink-0" />
              </span>
              <span className="text-[13px] font-medium text-ink mt-0.5 line-clamp-1 group-hover:text-ink transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="w-full sm:w-auto" aria-hidden="true" />
          )}
        </div>
      </div>
    </nav>
  );
}
