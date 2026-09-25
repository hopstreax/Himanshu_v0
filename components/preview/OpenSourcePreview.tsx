import React from "react";
import Link from "next/link";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { graphifyStory } from "@/data/openSource";

export function OpenSourcePreview() {
  const primaryMetric = graphifyStory.metrics[0];

  return (
    <div className="flex flex-col space-y-4">
      {/* Section metadata badge & primary metric */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          03 / OPEN SOURCE
        </span>
        <div className="flex items-center space-x-1.5 text-[11px] font-mono text-ink font-medium">
          <GitPullRequest className="w-3.5 h-3.5 text-ink-muted" />
          <span>{primaryMetric.value} {primaryMetric.label.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Story: Graphify */}
      <div>
        <h2 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-ink">
          {graphifyStory.project}
        </h2>
        <p className="text-[11px] uppercase tracking-editorial text-ink-muted mt-0.5">
          {graphifyStory.role} · {graphifyStory.tagline}
        </p>
      </div>

      {/* Concise contribution summary */}
      <p className="text-[13px] text-ink-muted leading-relaxed">
        {graphifyStory.summary}
      </p>

      {/* Contribution areas teaser */}
      <div className="pt-2 border-t border-border-subtle/60">
        <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle mb-1.5">
          CORE FOCUS AREAS
        </div>
        <ul className="text-[12px] text-ink-muted space-y-1">
          {graphifyStory.coreAreas.slice(0, 3).map((area) => (
            <li key={area} className="flex items-center space-x-2">
              <span className="w-1 h-1 rounded-full bg-ink/40" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Link */}
      <div className="pt-1">
        <Link
          href="/open-source"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>VIEW OPEN SOURCE</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
