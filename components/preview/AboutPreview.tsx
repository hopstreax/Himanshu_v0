import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { identity, education, experiences } from "@/data/about";

export function AboutPreview() {
  return (
    <div className="flex flex-col space-y-5">
      {/* Section metadata badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          01 / ABOUT
        </span>
        <span className="text-[11px] font-mono text-ink-subtle">
          2022 — 2026
        </span>
      </div>

      {/* Title & Core Positioning */}
      <div>
        <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-ink">
          {identity.name}
        </h2>
        <p className="text-[12px] uppercase tracking-editorial text-ink-muted mt-0.5">
          {identity.title}
        </p>
      </div>

      {/* Summary */}
      <p className="text-[13px] text-ink-muted leading-relaxed">
        {identity.summary}
      </p>

      {/* Education & Experience Highlights */}
      <div className="pt-2 border-t border-border-subtle/60 flex flex-col space-y-3">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            EDUCATION
          </div>
          <div className="text-[13px] font-medium text-ink mt-0.5">
            B.Tech in Information Technology
          </div>
          <div className="text-[12px] text-ink-muted">
            {education.institution}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            PREVIOUS INTERNSHIPS
          </div>
          <div className="text-[12px] text-ink-muted mt-0.5">
            {experiences.map((e) => e.company).join(" · ")}
          </div>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-2">
        <Link
          href="/about"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>VIEW ABOUT</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
