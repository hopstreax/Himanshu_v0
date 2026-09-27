"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { useReducedMotion } from "motion/react";

export interface SystemNode {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  destination: string;
  domain: string;
  metric: string;
  thesis: string;
  x: number;
  y: number;
  labelPosition: "top" | "bottom";
  badge: string;
  accentHex: string;
  colorName: string;
}

// Canonical coordinate space: ViewBox 0 0 720 500, Center (360, 250)
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
    x: 360,
    y: 95,
    labelPosition: "top",
    badge: "SYS_AGENT",
    accentHex: "#9B7BFF",
    colorName: "AI / Agents",
  },
  {
    id: "code-intel",
    index: "02",
    name: "CODE INTELLIGENCE",
    subtitle: "AST & Graph Architecture",
    destination: "/open-source#graphify",
    domain: "AST Parsing, Tree-Sitter & Dependency Graphs",
    metric: "30+ Graphify PRs · Multi-Language",
    thesis:
      "Cross-file symbol table resolution, carried-hyperedge deduplication, and fail-closed parser resilience.",
    x: 555,
    y: 180,
    labelPosition: "bottom",
    badge: "AST_ENGINE",
    accentHex: "#5CA8FF",
    colorName: "Code Intelligence",
  },
  {
    id: "open-source",
    index: "03",
    name: "OPEN SOURCE",
    subtitle: "Ecosystem Contributions",
    destination: "/open-source",
    domain: "Core Contributions & Architecture Fixes",
    metric: "50+ Merged PRs · 3+ Months Record",
    thesis:
      "Sustained engineering contributions across Graphify, PDA, Continue, and Headroom.",
    x: 555,
    y: 320,
    labelPosition: "bottom",
    badge: "OSS_CONTRIB",
    accentHex: "#45D6A0",
    colorName: "Open Source",
  },
  {
    id: "projects",
    index: "04",
    name: "PROJECTS",
    subtitle: "Archive & Flagship Work",
    destination: "/projects",
    domain: "Autonomous Testing & Real-Time AI Systems",
    metric: "4 Systems · TraceKit & AI Interviewer",
    thesis:
      "Deterministic web testing engines, real-time interview simulators, and full-stack software applications.",
    x: 360,
    y: 405,
    labelPosition: "bottom",
    badge: "ARCHIVE",
    accentHex: "#FFB86B",
    colorName: "Systems / Projects",
  },
  {
    id: "about",
    index: "05",
    name: "ABOUT",
    subtitle: "Identity & Timeline",
    destination: "/about",
    domain: "Engineering Philosophy & Professional Timeline",
    metric: "ITER SOA (2026) · Celebal & Tata Steel",
    thesis:
      "B.Tech CSIT background, verified production internships, and core engineering discipline principles.",
    x: 165,
    y: 320,
    labelPosition: "bottom",
    badge: "IDENTITY",
    accentHex: "#818CF8",
    colorName: "Engineering Dossier",
  },
  {
    id: "connect",
    index: "06",
    name: "CONNECT",
    subtitle: "Discussions & Inquiries",
    destination: "/connect",
    domain: "Systems Discussions & Collaboration",
    metric: "Base: Jamshedpur, Jharkhand, India",
    thesis:
      "Direct communication channels for engineering inquiries, agent design, and collaboration.",
    x: 165,
    y: 180,
    labelPosition: "top",
    badge: "COMM_CHANNEL",
    accentHex: "#FF718C",
    colorName: "Personal / Human",
  },
];

const CENTER_COORDS = { x: 360, y: 250 };

const DEFAULT_TELEMETRY = {
  id: "core",
  index: "00",
  name: "HIMANSHU PATRO",
  subtitle: "ROOT / 00",
  destination: "/about",
  domain: "Systems, AI Agents & Code Intelligence",
  metric: "B.Tech CSIT · Class of 2026 · Jamshedpur, IN",
  thesis:
    "Software engineer building reliable systems around code, AI agents, developer tooling and open-source code intelligence.",
  badge: "ROOT_ORIGIN",
  accentHex: "#F4F1EA",
  colorName: "System Origin",
};

export function SystemConstellation() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeNode =
    SYSTEM_NODES.find((node) => node.id === activeNodeId) || DEFAULT_TELEMETRY;

  const handleNodeHover = useCallback((id: string | null) => {
    setActiveNodeId(id);
  }, []);

  const handleNodeSelect = useCallback((id: string) => {
    setActiveNodeId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div
      aria-label="Engineering System Constellation"
      className="w-full space-y-8 select-none"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-border-subtle">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            <Crosshair className="w-3.5 h-3.5 text-[#9B7BFF]" />
            <span>01 / ARCHITECTURE DIAGRAM</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-mono font-bold uppercase tracking-tight text-ink">
            SYSTEM CONSTELLATION
          </h2>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-ink-subtle">
          CANONICAL TOPOLOGY · 6 SUB-SYSTEMS
        </div>
      </div>

      {/* Main Interactive Diagram Canvas (Unified Canonical Coordinate Architecture) */}
      <div className="relative w-full border border-border-subtle bg-[#08090B] overflow-hidden">
        {/* Subtle coordinate ticks in corners */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-ink-subtle select-none z-10">
          + (000, 000)
        </div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-ink-subtle select-none z-10">
          + (720, 000)
        </div>
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-ink-subtle select-none z-10">
          + (000, 500)
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-ink-subtle select-none z-10">
          + (720, 500)
        </div>

        {/* Desktop Interactive SVG Visualization: Exactly Centered ViewBox */}
        <div className="hidden md:flex items-center justify-center relative w-full h-[500px]">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F4F1EA 1px, transparent 1px), linear-gradient(to bottom, #F4F1EA 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <svg
            className="w-full h-full"
            viewBox="0 0 720 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* SVG Defs for Glow Filter */}
            <defs>
              <filter id="glow-pulse" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Range markers / Orbital Rings centered at (360, 250) */}
            <circle
              cx={CENTER_COORDS.x}
              cy={CENTER_COORDS.y}
              r="155"
              fill="none"
              stroke="#242830"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle
              cx={CENTER_COORDS.x}
              cy={CENTER_COORDS.y}
              r="207"
              fill="none"
              stroke="#242830"
              strokeWidth="0.75"
              strokeDasharray="2 12"
            />

            {/* Coordinate Crosshairs centered at (360, 250) */}
            <line
              x1="60"
              y1={CENTER_COORDS.y}
              x2="660"
              y2={CENTER_COORDS.y}
              stroke="#242830"
              strokeWidth="0.75"
              strokeDasharray="3 6"
            />
            <line
              x1={CENTER_COORDS.x}
              y1="35"
              x2={CENTER_COORDS.x}
              y2="465"
              stroke="#242830"
              strokeWidth="0.75"
              strokeDasharray="3 6"
            />

            {/* Connecting lines from Center Root (360, 250) to each Node */}
            {SYSTEM_NODES.map((node) => {
              const isActive = activeNodeId === node.id;
              const hasActiveNode = activeNodeId !== null;
              const isOther = hasActiveNode && !isActive;

              return (
                <g key={`edge-${node.id}`}>
                  {/* Base connecting line */}
                  <line
                    x1={CENTER_COORDS.x}
                    y1={CENTER_COORDS.y}
                    x2={node.x}
                    y2={node.y}
                    stroke={isActive ? node.accentHex : isOther ? "#1B1F27" : "#343943"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    className="transition-colors duration-300"
                  />

                  {/* Active glowing beacon along the active path */}
                  {isActive && !shouldReduceMotion && (
                    <circle
                      r="3.5"
                      fill={node.accentHex}
                      filter="url(#glow-pulse)"
                    >
                      <animateMotion
                        path={`M ${CENTER_COORDS.x} ${CENTER_COORDS.y} L ${node.x} ${node.y}`}
                        dur="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Central Root Origin Node at (360, 250) */}
            <g
              className="cursor-pointer focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label="System Root: Himanshu Patro"
              onMouseEnter={() => handleNodeHover(null)}
              onClick={() => handleNodeHover(null)}
              onFocus={() => handleNodeHover(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNodeHover(null);
                }
              }}
            >
              {/* Outer decorative ring */}
              <circle
                cx={CENTER_COORDS.x}
                cy={CENTER_COORDS.y}
                r="34"
                fill="none"
                stroke="#9B7BFF"
                strokeWidth="1"
                strokeDasharray="3 6"
                opacity="0.3"
              />
              {/* Base origin disc */}
              <circle
                cx={CENTER_COORDS.x}
                cy={CENTER_COORDS.y}
                r="26"
                fill="#0D1014"
                stroke="#343943"
                strokeWidth="1.5"
                className="transition-all duration-200 hover:stroke-[#F4F1EA]"
              />
              {/* Center point */}
              <circle cx={CENTER_COORDS.x} cy={CENTER_COORDS.y} r="5" fill="#F4F1EA" />

              {/* Root Typography */}
              <text
                x={CENTER_COORDS.x}
                y={CENTER_COORDS.y + 44}
                textAnchor="middle"
                fill="#F4F1EA"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.08em"
                className="select-none pointer-events-none"
              >
                HIMANSHU PATRO
              </text>
              <text
                x={CENTER_COORDS.x}
                y={CENTER_COORDS.y + 58}
                textAnchor="middle"
                fill="#666B73"
                fontSize="9"
                fontFamily="monospace"
                letterSpacing="0.08em"
                className="select-none pointer-events-none"
              >
                ROOT / 00
              </text>
            </g>

            {/* Interactive Satellite Nodes (Rendered in SAME canonical SVG space) */}
            {SYSTEM_NODES.map((node) => {
              const isActive = activeNodeId === node.id;
              const hasActiveNode = activeNodeId !== null;
              const isOther = hasActiveNode && !isActive;

              return (
                <g
                  key={node.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`Inspect ${node.name} sub-system telemetry`}
                  className={`cursor-pointer focus:outline-none transition-opacity duration-300 ${
                    isOther ? "opacity-35" : "opacity-100"
                  }`}
                  onMouseEnter={() => handleNodeHover(node.id)}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => handleNodeSelect(node.id)}
                  onFocus={() => handleNodeHover(node.id)}
                  onBlur={() => handleNodeHover(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleNodeSelect(node.id);
                    }
                  }}
                >
                  {/* Invisible generous hover hit target */}
                  <circle cx={node.x} cy={node.y} r="36" fill="transparent" />

                  {/* Active highlight halo */}
                  {isActive && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="24"
                      fill={`${node.accentHex}18`}
                      stroke={node.accentHex}
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />
                  )}

                  {/* Node Circle Anchor */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="16"
                    fill="#0D1014"
                    stroke={isActive ? node.accentHex : "#343943"}
                    strokeWidth={isActive ? 2 : 1.5}
                    className="transition-colors duration-300"
                  />

                  {/* Node Index Number */}
                  <text
                    x={node.x}
                    y={node.y + 4}
                    textAnchor="middle"
                    fill={isActive ? node.accentHex : "#9A9DA3"}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    className="select-none pointer-events-none transition-colors duration-300"
                  >
                    {node.index}
                  </text>

                  {/* Node Label (Positioned top or bottom depending on quadrant) */}
                  <text
                    x={node.x}
                    y={node.labelPosition === "top" ? node.y - 28 : node.y + 34}
                    textAnchor="middle"
                    fill={isActive ? node.accentHex : "#F4F1EA"}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="0.08em"
                    className="select-none pointer-events-none transition-colors duration-300"
                  >
                    {node.name}
                  </text>

                  {/* Node Subtitle */}
                  <text
                    x={node.x}
                    y={node.labelPosition === "top" ? node.y - 15 : node.y + 48}
                    textAnchor="middle"
                    fill="#666B73"
                    fontSize="9"
                    fontFamily="monospace"
                    letterSpacing="0.08em"
                    className="select-none pointer-events-none"
                  >
                    {node.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile Diagram Flow (Interconnected vertical trunk line for touch screens) */}
        <div className="block md:hidden p-6 relative">
          {/* Vertical central trunk line */}
          <div className="absolute top-8 bottom-8 left-8 w-[1px] bg-border-subtle" />

          {/* Root marker */}
          <div className="relative pl-10 pb-8">
            <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-ink border-2 border-[#08090B]" />
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
              ROOT / 00
            </div>
            <div className="text-[15px] font-mono font-bold uppercase text-ink">
              HIMANSHU PATRO
            </div>
            <div className="text-[11px] font-mono text-ink-muted">
              SYSTEM ORIGIN & TELEMETRY
            </div>
          </div>

          {/* 6 Connected Nodes */}
          <div className="space-y-6">
            {SYSTEM_NODES.map((node) => {
              const isSelected = activeNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeSelect(node.id)}
                  className="relative pl-10 cursor-pointer group"
                >
                  {/* Connector node circle on trunk line */}
                  <div
                    className="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full border transition-colors"
                    style={{
                      borderColor: isSelected ? node.accentHex : "#666B73",
                      backgroundColor: isSelected ? node.accentHex : "#08090B",
                    }}
                  />

                  {/* Horizontal connecting hairline */}
                  <div
                    className="absolute left-0 top-2 w-7 h-[1px] transition-colors"
                    style={{
                      backgroundColor: isSelected ? node.accentHex : "#242830",
                    }}
                  />

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className="text-[10px] font-mono font-semibold"
                        style={{ color: node.accentHex }}
                      >
                        [{node.index}]
                      </span>
                      <span className="text-[13px] font-mono font-bold uppercase text-ink">
                        {node.name}
                      </span>
                    </div>
                    <p className="text-[12px] text-ink-muted leading-relaxed">
                      {node.thesis}
                    </p>
                    <Link
                      href={node.destination}
                      className="inline-flex items-center space-x-1 text-[10px] font-mono uppercase tracking-wider text-ink-subtle hover:text-ink pt-1"
                    >
                      <span>EXPLORE ARCHIVE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Readout & Telemetry Bar (Desktop & Tablet) */}
        <div className="border-t border-border-subtle bg-[#0D1014] p-5 sm:p-6 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Status indicator */}
            <div className="lg:col-span-3 space-y-1">
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: activeNode.accentHex }}
                />
                <span>STATUS: ACTIVE_NODE</span>
              </div>
              <div
                className="text-[13px] font-mono font-bold uppercase tracking-wider"
                style={{ color: activeNode.accentHex }}
              >
                [{activeNode.index}] {activeNode.name}
              </div>
              <div className="text-[11px] font-mono text-ink-subtle">
                {activeNode.metric}
              </div>
            </div>

            {/* Technical Thesis readout */}
            <div className="lg:col-span-7">
              <p className="text-[13px] text-ink-body font-sans leading-relaxed border-l border-border-subtle pl-4">
                {activeNode.thesis}
              </p>
            </div>

            {/* Direct navigation action */}
            <div className="lg:col-span-2 flex lg:justify-end">
              <Link
                href={activeNode.destination}
                className="inline-flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold px-4 py-2 border transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: activeNode.accentHex,
                  color: activeNode.accentHex,
                }}
              >
                <span>OPEN ARCHIVE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
