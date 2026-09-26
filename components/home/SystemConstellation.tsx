"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, Crosshair, Terminal } from "lucide-react";

export interface SystemNode {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  destination: string;
  domain: string;
  metric: string;
  thesis: string;
  coordinates: { x: number; y: number };
  badge: string;
}

const SYSTEM_NODES: readonly SystemNode[] = [
  {
    id: "ai-agents",
    index: "01",
    name: "AI / AGENTS",
    subtitle: "Autonomous Execution",
    destination: "/projects/tracekit",
    domain: "Autonomous CDP Execution & Multimodal Reasoning",
    metric: "TraceKit Engine · 5-Stage Cycle",
    thesis:
      "Observe-Reason-Act-Verify loops pairing LLM reasoning with deterministic Chromium DOM assertions.",
    coordinates: { x: 0, y: -160 },
    badge: "SYS_AGENT",
  },
  {
    id: "projects",
    index: "02",
    name: "PROJECTS",
    subtitle: "Archive & Flagship Work",
    destination: "/projects",
    domain: "Autonomous Testing & Real-Time AI Systems",
    metric: "4 Case Studies · TraceKit & AI Interviewer",
    thesis:
      "Deterministic web testing engines, real-time interview simulators, and production platforms.",
    coordinates: { x: 230, y: -90 },
    badge: "ARCHIVE",
  },
  {
    id: "open-source",
    index: "03",
    name: "OPEN SOURCE",
    subtitle: "Ecosystem Contributions",
    destination: "/open-source",
    domain: "Core Contributions & Architecture Fixes",
    metric: "50+ Merged PRs · 370 Days Tracked",
    thesis:
      "Sustained engineering contributions across Graphify, PDA, Continue, and Headroom.",
    coordinates: { x: 230, y: 100 },
    badge: "OSS_CONTRIB",
  },
  {
    id: "code-intel",
    index: "04",
    name: "CODE INTELLIGENCE",
    subtitle: "AST & Graph Architecture",
    destination: "/open-source#graphify",
    domain: "AST Parsing, Tree-Sitter & Dependency Graphs",
    metric: "30+ Graphify PRs · Multi-Language",
    thesis:
      "Cross-file symbol table resolution, carried-hyperedge deduplication, and fail-closed parser resilience.",
    coordinates: { x: 0, y: 170 },
    badge: "AST_ENGINE",
  },
  {
    id: "connect",
    index: "05",
    name: "CONNECT",
    subtitle: "Discussions & Inquiries",
    destination: "/connect",
    domain: "Systems Discussions & Collaboration",
    metric: "Jamshedpur, Jharkhand, India",
    thesis:
      "Direct communication channels for engineering inquiries, agent design, and collaboration.",
    coordinates: { x: -230, y: 100 },
    badge: "COMM_CHANNEL",
  },
  {
    id: "about",
    index: "06",
    name: "ABOUT",
    subtitle: "Identity & Timeline",
    destination: "/about",
    domain: "Engineering Philosophy & Professional Timeline",
    metric: "ITER SOA (2026) · Celebal & Tata Steel",
    thesis:
      "B.Tech CSIT background, verified production internships, and core engineering discipline principles.",
    coordinates: { x: -230, y: -90 },
    badge: "IDENTITY",
  },
];

const DEFAULT_TELEMETRY = {
  id: "core",
  index: "00",
  name: "CORE ENGINE",
  subtitle: "Identity Anchor",
  destination: "/about",
  domain: "Himanshu Patro · Systems & Code Intelligence",
  metric: "B.Tech CSIT · Class of 2026 · Jamshedpur, IN",
  thesis:
    "Software engineer building reliable systems at the intersection of full-stack platforms, autonomous AI agents, and code intelligence.",
  badge: "ROOT_ORIGIN",
};

export function SystemConstellation() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const activeNode =
    SYSTEM_NODES.find((node) => node.id === activeNodeId) || DEFAULT_TELEMETRY;

  const handleNodeSelect = useCallback((id: string) => {
    setActiveNodeId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div
      aria-label="Engineering System Constellation"
      className="w-full space-y-6 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2 border-b border-border-subtle/80">
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
          <Crosshair className="w-3.5 h-3.5 text-ink" />
          <h2 className="font-medium text-ink">
            <span className="font-semibold">01</span>
            <span className="mx-1.5 opacity-60">/</span>
            <span>SYSTEM CONSTELLATION & MAP</span>
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
          INTERACTIVE ARCHITECTURE NETWORK
        </span>
      </div>

      {/* Desktop & Tablet Interactive Canvas (hidden on small mobile) */}
      <div className="hidden md:block relative w-full h-[520px] bg-canvas-subtle/40 rounded-2xl border border-border-subtle/80 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#111111 1px, transparent 1px), radial-gradient(#111111 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "0 0, 14px 14px",
          }}
        />

        {/* SVG Vector Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-360 -260 720 520"
        >
          {/* Orbital Coordinate Circles */}
          <circle
            cx="0"
            cy="0"
            r="165"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="text-border-subtle/70"
          />
          <circle
            cx="0"
            cy="0"
            r="245"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 10"
            className="text-border-subtle/50"
          />

          {/* Coordinate Crosshairs */}
          <line
            x1="-340"
            y1="0"
            x2="340"
            y2="0"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 6"
            className="text-border-subtle/60"
          />
          <line
            x1="0"
            y1="-240"
            x2="0"
            y2="240"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 6"
            className="text-border-subtle/60"
          />

          {/* Connection Lines from Center to Each Node */}
          {SYSTEM_NODES.map((node) => {
            const isHovered = activeNodeId === node.id;
            const isAnyHovered = activeNodeId !== null;

            return (
              <g key={node.id}>
                {/* Base connection vector */}
                <line
                  x1="0"
                  y1="0"
                  x2={node.coordinates.x}
                  y2={node.coordinates.y}
                  stroke="currentColor"
                  strokeWidth={isHovered ? "1.75" : "1"}
                  strokeDasharray={isHovered ? "5 3" : "2 5"}
                  className={`transition-all duration-300 ${
                    isHovered
                      ? "text-ink"
                      : isAnyHovered
                      ? "text-border-subtle/40"
                      : "text-border-subtle"
                  }`}
                />

                {/* Pulsing flow particle when active */}
                {isHovered && (
                  <circle
                    cx={node.coordinates.x * 0.5}
                    cy={node.coordinates.y * 0.5}
                    r="2.5"
                    className="fill-ink animate-pulse"
                  />
                )}
              </g>
            );
          })}

          {/* Center Origin Node Halo */}
          <circle
            cx="0"
            cy="0"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-border-subtle/90 animate-pulse"
          />
        </svg>

        {/* Central Identity Hub Node */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
          role="status"
          aria-label="Central Identity Hub"
        >
          <div className="relative group cursor-default">
            <div className="px-3.5 py-1.5 rounded-full bg-ink text-canvas border border-ink shadow-sm flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-editorial">
                HIMANSHU PATRO
              </span>
            </div>
            <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-ink-subtle uppercase tracking-widest text-center">
              SYSTEM ROOT · [0, 0]
            </div>
          </div>
        </div>

        {/* Orbiting HTML Node Badges (Precise positions mapped to 720x520 canvas) */}
        {SYSTEM_NODES.map((node) => {
          const isSelected = activeNodeId === node.id;
          const isAnySelected = activeNodeId !== null;

          // Convert viewBox coordinate (-360..360, -260..260) to CSS percentage
          const leftPercent = ((node.coordinates.x + 360) / 720) * 100;
          const topPercent = ((node.coordinates.y + 260) / 520) * 100;

          return (
            <div
              key={node.id}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 ${
                isSelected
                  ? "scale-105 z-40 opacity-100"
                  : isAnySelected
                  ? "opacity-45 hover:opacity-90"
                  : "opacity-100 hover:scale-102"
              }`}
            >
              <Link
                href={node.destination}
                onMouseEnter={() => setActiveNodeId(node.id)}
                onMouseLeave={() => setActiveNodeId(null)}
                onFocus={() => setActiveNodeId(node.id)}
                onBlur={() => setActiveNodeId(null)}
                className={`group flex items-center space-x-2.5 px-3 py-2 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-ink text-canvas border-ink shadow-md"
                    : "bg-canvas text-ink border-border-subtle hover:border-ink/60"
                }`}
                aria-label={`${node.name}: ${node.subtitle}`}
              >
                <span
                  className={`text-[10px] font-mono font-medium ${
                    isSelected ? "text-canvas/80" : "text-ink-subtle"
                  }`}
                >
                  {node.index}
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[12px] font-mono font-semibold uppercase tracking-editorial leading-tight">
                    {node.name}
                  </span>
                  <span
                    className={`text-[9px] font-sans truncate max-w-[130px] leading-tight ${
                      isSelected ? "text-canvas/70" : "text-ink-muted"
                    }`}
                  >
                    {node.subtitle}
                  </span>
                </div>
                <ArrowUpRight
                  className={`w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isSelected ? "text-canvas" : "text-ink-subtle"
                  }`}
                />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Mobile Touch-Friendly Matrix Layout (shown on < md screens) */}
      <div className="md:hidden space-y-3">
        <div className="p-3 bg-canvas-subtle/50 rounded-xl border border-border-subtle/80 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-mono font-semibold uppercase text-ink">
              HIMANSHU PATRO
            </span>
          </div>
          <span className="text-[9px] font-mono text-ink-subtle uppercase">
            6 SYSTEM NODES
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {SYSTEM_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => handleNodeSelect(node.id)}
                className={`p-3 text-left rounded-xl border transition-all flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? "bg-ink text-canvas border-ink shadow-sm"
                    : "bg-canvas text-ink border-border-subtle"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[9px] font-mono ${
                      isSelected ? "text-canvas/70" : "text-ink-subtle"
                    }`}
                  >
                    {node.index}
                  </span>
                  <ArrowUpRight
                    className={`w-3 h-3 ${
                      isSelected ? "text-canvas" : "text-ink-subtle"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider leading-tight">
                    {node.name}
                  </div>
                  <div
                    className={`text-[10px] font-sans truncate ${
                      isSelected ? "text-canvas/80" : "text-ink-muted"
                    }`}
                  >
                    {node.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Telemetry / Subsystem HUD Inspector */}
      <div
        className="w-full p-5 sm:p-6 bg-canvas rounded-xl border border-border-subtle/80 shadow-xs space-y-4"
        role="region"
        aria-live="polite"
        aria-label="Active Subsystem Telemetry"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-border-subtle/60">
          <div className="flex items-center space-x-2.5">
            <Terminal className="w-4 h-4 text-ink shrink-0" />
            <div className="flex items-baseline space-x-2">
              <span className="text-[11px] font-mono text-ink-subtle uppercase">
                TELEMETRY:
              </span>
              <span className="text-[12px] font-mono font-semibold text-ink uppercase tracking-wider">
                [{activeNode.index}] {activeNode.name}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-canvas-subtle rounded border border-border-subtle text-ink-muted self-start sm:self-auto">
            {activeNode.metric}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="md:col-span-3 space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
              {activeNode.domain}
            </div>
            <p className="text-[13px] sm:text-[14px] text-ink leading-relaxed font-sans">
              {activeNode.thesis}
            </p>
          </div>

          <div className="md:col-span-1 flex justify-start md:justify-end">
            <Link
              href={activeNode.destination}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-ink text-canvas hover:bg-ink-muted transition-colors text-[11px] font-mono uppercase tracking-editorial"
            >
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
