"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export function EvidenceStrip() {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      number: "50+",
      label: "MERGED / CLOSED",
      sublabel: "OPEN SOURCE PRs",
      annotation: "3+ MONTHS HORIZON",
      detail:
        "Sustained contributions spanning Graphify, PDA, Agent Orchestrator, Headroom, and Continue.",
      accentClass: "text-[#45D6A0]",
      borderAccent: "group-hover:border-[#45D6A0]",
      dotClass: "bg-[#45D6A0]",
    },
    {
      number: "30+",
      label: "GRAPHIFY CORE",
      sublabel: "MERGED PRs",
      annotation: "~2 MONTHS FOCUS",
      detail:
        "Multi-language AST parsing, Tree-Sitter resolvers, and incremental graph merging deduplication.",
      accentClass: "text-[#5CA8FF]",
      borderAccent: "group-hover:border-[#5CA8FF]",
      dotClass: "bg-[#5CA8FF]",
    },
    {
      number: "2026",
      label: "B.TECH CSIT",
      sublabel: "GRADUATION",
      annotation: "ITER, SOA UNIVERSITY",
      detail:
        "Computer Science and Information Technology. Base: Jamshedpur, Jharkhand, India.",
      accentClass: "text-[#FFB86B]",
      borderAccent: "group-hover:border-[#FFB86B]",
      dotClass: "bg-[#FFB86B]",
    },
  ];

  return (
    <div
      aria-label="Verified Contribution Statistics"
      className="w-full border-y border-border-subtle bg-transparent py-10 sm:py-14"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-14">
        {/* Subtle section label */}
        <div className="flex items-center justify-between pb-6 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
          <span className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
            <span>00 / EVIDENCE & VERIFIED METRICS</span>
          </span>
          <span className="hidden sm:inline">NO FABRICATED METRICS · FACTUAL RECORD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group flex flex-col justify-between ${
                idx === 0
                  ? "pb-8 md:pb-0 md:pr-10"
                  : idx === 1
                  ? "py-8 md:py-0 md:px-10"
                  : "pt-8 md:pt-0 md:pl-10"
              }`}
            >
              {/* Top metadata annotation */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-ink-subtle pb-4">
                <span className="flex items-center space-x-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotClass} opacity-80`} />
                  <span>{item.annotation}</span>
                </span>
                <span className="text-border-strong">[{String(idx + 1).padStart(2, "0")}]</span>
              </div>

              {/* Oversized editorial number */}
              <div className="py-2">
                <div
                  className={`text-6xl sm:text-7xl lg:text-8xl font-mono font-light tracking-tighter ${item.accentClass} leading-none select-none transition-transform duration-300 group-hover:translate-x-1`}
                >
                  {item.number}
                </div>
              </div>

              {/* Labels and editorial description */}
              <div className="space-y-2 pt-4">
                <div className="text-[13px] sm:text-[14px] font-mono font-semibold uppercase tracking-wider text-ink">
                  <div>{item.label}</div>
                  <div className="text-ink-muted">{item.sublabel}</div>
                </div>
                <p className="text-[12px] text-ink-muted font-sans leading-relaxed max-w-xs">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
