import React from "react";

export function EvidenceStrip() {
  const metrics = [
    {
      number: "50+",
      label: "Merged / Closed OSS PRs",
      scope: "Across 3+ months in Graphify, PDA, Continue, Headroom & ecosystem tools",
      annotation: "Verified Git Commits",
    },
    {
      number: "30+",
      label: "Graphify Core Merged PRs",
      scope: "Over ~2 months · AST parsing, Tree-Sitter resolvers & incremental graph merges",
      annotation: "Maintainer-Reviewed",
    },
    {
      number: "2026",
      label: "B.Tech CSIT Graduate",
      scope: "ITER, Siksha 'O' Anusandhan (SOA) University · Jamshedpur / Bhubaneswar",
      annotation: "Academic Foundation",
    },
  ];

  return (
    <div
      aria-label="Verified Engineering Signal"
      className="w-full border-y border-border-subtle/80 bg-canvas-subtle/30 py-8 sm:py-10"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-border-subtle/80">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`${idx > 0 ? "pt-6 md:pt-0 md:pl-10" : ""} space-y-2`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-semibold text-ink tracking-tight">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                  {item.annotation}
                </span>
              </div>
              <div className="text-[12px] sm:text-[13px] font-mono uppercase tracking-editorial text-ink font-medium">
                {item.label}
              </div>
              <p className="text-[12px] text-ink-muted leading-relaxed font-sans">
                {item.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
