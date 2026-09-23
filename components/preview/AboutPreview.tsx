import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutPreview() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Section metadata badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          01 / ABOUT
        </span>
        <span className="text-[11px] font-mono text-ink-subtle">
          {aboutData.education.period}
        </span>
      </div>

      {/* Identity & Title */}
      <div>
        <h2 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-ink">
          {aboutData.name}
        </h2>
        <p className="text-[11px] uppercase tracking-editorial text-ink-muted mt-0.5">
          {aboutData.title}
        </p>
      </div>

      {/* Concise Introduction */}
      <p className="text-[13px] text-ink-muted leading-relaxed">
        {aboutData.shortBio}
      </p>

      {/* Education & Experience / Focus Teaser */}
      <div className="pt-2 border-t border-border-subtle/60 flex flex-col space-y-2.5">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            EDUCATION
          </div>
          <div className="text-[12px] font-medium text-ink mt-0.5">
            {aboutData.education.degree} in {aboutData.education.field}
          </div>
          <div className="text-[11px] text-ink-muted">
            {aboutData.education.institution}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            CURRENT FOCUS
          </div>
          <div className="text-[12px] text-ink-muted mt-0.5 leading-normal">
            {aboutData.currentFocus}
          </div>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-1">
        <Link
          href="/about"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>ABOUT ME</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
