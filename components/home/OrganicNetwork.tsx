"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

export interface NetworkNode {
  id: string;
  name: string;
  subtitle: string;
  destination: string;
  metric: string;
  accent: string;
  accentSubtle: string;
  x: number;
  y: number;
  radius: number;
  pillOffset: { x: number; y: number };
  pillWidth: number;
  pillHeight: number;
  icon: "user" | "folder" | "code" | "bot" | "cpu" | "send";
}

const MAJOR_NODES: readonly NetworkNode[] = [
  {
    id: "about",
    name: "About",
    subtitle: "Identity & Timeline",
    destination: "/about",
    metric: "CSIT 2026 · Dossier",
    accent: "#E2C08D",
    accentSubtle: "rgba(226, 192, 141, 0.16)",
    x: 480,
    y: 110,
    radius: 24,
    pillOffset: { x: 20, y: -16 },
    pillWidth: 96,
    pillHeight: 32,
    icon: "user",
  },
  {
    id: "projects",
    name: "Projects",
    subtitle: "Archival Systems",
    destination: "/projects",
    metric: "4 Systems · Case Studies",
    accent: "#5CA8FF",
    accentSubtle: "rgba(92, 168, 255, 0.18)",
    x: 710,
    y: 250,
    radius: 26,
    pillOffset: { x: 22, y: -16 },
    pillWidth: 108,
    pillHeight: 32,
    icon: "folder",
  },
  {
    id: "open-source",
    name: "Open Source",
    subtitle: "Ecosystem Contributions",
    destination: "/open-source",
    metric: "50+ Merged PRs · 3+ Mos",
    accent: "#45D6A0",
    accentSubtle: "rgba(69, 214, 160, 0.2)",
    x: 200,
    y: 340,
    radius: 30, // Larger visual weight
    pillOffset: { x: 24, y: -18 },
    pillWidth: 136,
    pillHeight: 36,
    icon: "code",
  },
  {
    id: "ai-agents",
    name: "AI / Agents",
    subtitle: "Autonomous Execution",
    destination: "/projects/tracekit",
    metric: "TraceKit CDP Engine",
    accent: "#9B7BFF",
    accentSubtle: "rgba(155, 123, 255, 0.2)",
    x: 470,
    y: 290,
    radius: 30, // Larger visual weight
    pillOffset: { x: 24, y: -18 },
    pillWidth: 126,
    pillHeight: 36,
    icon: "bot",
  },
  {
    id: "code-intel",
    name: "Code Intelligence",
    subtitle: "AST & Symbol Resolution",
    destination: "/open-source#graphify",
    metric: "AST Trees · 30+ PRs",
    accent: "#38BDF8",
    accentSubtle: "rgba(56, 189, 248, 0.16)",
    x: 300,
    y: 520,
    radius: 24,
    pillOffset: { x: 20, y: -16 },
    pillWidth: 156,
    pillHeight: 32,
    icon: "cpu",
  },
  {
    id: "connect",
    name: "Connect",
    subtitle: "Inquiries & Network",
    destination: "/connect",
    metric: "Open to SDE / AI Roles",
    accent: "#FF718C",
    accentSubtle: "rgba(255, 113, 140, 0.18)",
    x: 620,
    y: 510,
    radius: 26,
    pillOffset: { x: 22, y: -16 },
    pillWidth: 104,
    pillHeight: 32,
    icon: "send",
  },
];

interface CurvedEdge {
  id: string;
  from: string;
  to: string;
  path: string;
  accent: string;
  hasPulse?: boolean;
}

const CURVED_EDGES: readonly CurvedEdge[] = [
  // Perimeter geodesic ring
  {
    id: "edge-os-about",
    from: "open-source",
    to: "about",
    path: "M 200 340 C 230 190, 360 125, 480 110",
    accent: "#45D6A0",
    hasPulse: true,
  },
  {
    id: "edge-about-proj",
    from: "about",
    to: "projects",
    path: "M 480 110 C 580 120, 670 170, 710 250",
    accent: "#5CA8FF",
    hasPulse: false,
  },
  {
    id: "edge-proj-connect",
    from: "projects",
    to: "connect",
    path: "M 710 250 C 710 360, 680 450, 620 510",
    accent: "#FF718C",
    hasPulse: true,
  },
  {
    id: "edge-connect-ci",
    from: "connect",
    to: "code-intel",
    path: "M 620 510 C 510 550, 400 550, 300 520",
    accent: "#38BDF8",
    hasPulse: false,
  },
  {
    id: "edge-ci-os",
    from: "code-intel",
    to: "open-source",
    path: "M 300 520 C 240 470, 205 410, 200 340",
    accent: "#45D6A0",
    hasPulse: false,
  },
  // Hub connections to AI / Agents (center heart)
  {
    id: "edge-ai-about",
    from: "ai-agents",
    to: "about",
    path: "M 470 290 C 465 220, 475 160, 480 110",
    accent: "#9B7BFF",
    hasPulse: false,
  },
  {
    id: "edge-ai-os",
    from: "ai-agents",
    to: "open-source",
    path: "M 470 290 C 370 295, 280 320, 200 340",
    accent: "#9B7BFF",
    hasPulse: true,
  },
  {
    id: "edge-ai-proj",
    from: "ai-agents",
    to: "projects",
    path: "M 470 290 C 560 270, 640 260, 710 250",
    accent: "#5CA8FF",
    hasPulse: true,
  },
  {
    id: "edge-ai-ci",
    from: "ai-agents",
    to: "code-intel",
    path: "M 470 290 C 410 370, 350 450, 300 520",
    accent: "#38BDF8",
    hasPulse: false,
  },
  {
    id: "edge-ai-connect",
    from: "ai-agents",
    to: "connect",
    path: "M 470 290 C 530 370, 580 450, 620 510",
    accent: "#FF718C",
    hasPulse: false,
  },
  // Cross chords for organic sphere volume
  {
    id: "edge-os-connect",
    from: "open-source",
    to: "connect",
    path: "M 200 340 C 330 420, 490 475, 620 510",
    accent: "#45D6A0",
    hasPulse: false,
  },
  {
    id: "edge-about-ci",
    from: "about",
    to: "code-intel",
    path: "M 480 110 C 390 230, 330 370, 300 520",
    accent: "#E2C08D",
    hasPulse: false,
  },
];

// Deterministic ambient particles creating depth and celestial volume
interface AmbientNode {
  x: number;
  y: number;
  r: number;
  opacity: number;
  color: string;
}

const AMBIENT_NODES: readonly AmbientNode[] = [
  { x: 340, y: 150, r: 2.5, opacity: 0.55, color: "#E2C08D" },
  { x: 410, y: 190, r: 3.0, opacity: 0.7, color: "#9B7BFF" },
  { x: 570, y: 170, r: 2.0, opacity: 0.6, color: "#5CA8FF" },
  { x: 640, y: 180, r: 3.2, opacity: 0.65, color: "#5CA8FF" },
  { x: 300, y: 240, r: 2.5, opacity: 0.5, color: "#45D6A0" },
  { x: 370, y: 260, r: 3.5, opacity: 0.75, color: "#9B7BFF" },
  { x: 580, y: 280, r: 3.0, opacity: 0.7, color: "#5CA8FF" },
  { x: 670, y: 320, r: 2.0, opacity: 0.45, color: "#F4F1EA" },
  { x: 260, y: 380, r: 3.0, opacity: 0.65, color: "#45D6A0" },
  { x: 350, y: 360, r: 2.5, opacity: 0.55, color: "#9B7BFF" },
  { x: 430, y: 380, r: 3.0, opacity: 0.6, color: "#38BDF8" },
  { x: 520, y: 390, r: 3.5, opacity: 0.7, color: "#FF718C" },
  { x: 610, y: 380, r: 2.0, opacity: 0.45, color: "#5CA8FF" },
  { x: 680, y: 430, r: 2.5, opacity: 0.55, color: "#FF718C" },
  { x: 220, y: 440, r: 2.0, opacity: 0.4, color: "#45D6A0" },
  { x: 380, y: 450, r: 3.0, opacity: 0.65, color: "#38BDF8" },
  { x: 470, y: 470, r: 3.0, opacity: 0.65, color: "#FF718C" },
  { x: 550, y: 480, r: 2.0, opacity: 0.5, color: "#F4F1EA" },
  { x: 740, y: 480, r: 2.5, opacity: 0.45, color: "#FFB86B" },
  { x: 180, y: 260, r: 2.0, opacity: 0.4, color: "#F4F1EA" },
  { x: 250, y: 180, r: 2.0, opacity: 0.35, color: "#E2C08D" },
  { x: 480, y: 60, r: 3.0, opacity: 0.6, color: "#E2C08D" },
  { x: 530, y: 80, r: 2.0, opacity: 0.4, color: "#F4F1EA" },
  { x: 730, y: 190, r: 2.5, opacity: 0.45, color: "#5CA8FF" },
  { x: 780, y: 310, r: 2.0, opacity: 0.4, color: "#FFB86B" },
  { x: 680, y: 550, r: 2.0, opacity: 0.4, color: "#FF718C" },
  { x: 530, y: 560, r: 2.5, opacity: 0.45, color: "#FFB86B" },
  { x: 380, y: 560, r: 2.0, opacity: 0.4, color: "#38BDF8" },
  { x: 220, y: 510, r: 2.0, opacity: 0.35, color: "#45D6A0" },
  { x: 140, y: 380, r: 2.0, opacity: 0.3, color: "#F4F1EA" },
  { x: 150, y: 320, r: 2.5, opacity: 0.45, color: "#45D6A0" },
  { x: 320, y: 310, r: 1.5, opacity: 0.35, color: "#F4F1EA" },
  { x: 440, y: 220, r: 2.0, opacity: 0.5, color: "#9B7BFF" },
  { x: 510, y: 210, r: 2.5, opacity: 0.55, color: "#5CA8FF" },
  { x: 560, y: 340, r: 2.0, opacity: 0.45, color: "#F4F1EA" },
  { x: 410, y: 420, r: 2.0, opacity: 0.4, color: "#38BDF8" },
];

// Ambient web filaments linking particles
const AMBIENT_FILAMENTS: readonly [number, number, number, number][] = [
  [340, 150, 410, 190],
  [410, 190, 570, 170],
  [570, 170, 640, 180],
  [300, 240, 370, 260],
  [370, 260, 410, 190],
  [410, 190, 440, 220],
  [440, 220, 510, 210],
  [510, 210, 580, 280],
  [580, 280, 670, 320],
  [260, 380, 350, 360],
  [350, 360, 430, 380],
  [430, 380, 520, 390],
  [520, 390, 610, 380],
  [610, 380, 680, 430],
  [380, 450, 470, 470],
  [470, 470, 550, 480],
  [480, 60, 530, 80],
  [530, 80, 570, 170],
  [250, 180, 340, 150],
  [220, 440, 380, 450],
];

export function OrganicNetwork() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouseOffset({ x: relX, y: relY });
    },
    [shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredNodeId(null);
    setMouseOffset({ x: 0, y: 0 });
  }, []);

  const activeConnectedIds = useMemo(() => {
    if (!hoveredNodeId) return new Set<string>();
    const ids = new Set<string>([hoveredNodeId]);
    for (const edge of CURVED_EDGES) {
      if (edge.from === hoveredNodeId) ids.add(edge.to);
      if (edge.to === hoveredNodeId) ids.add(edge.from);
    }
    return ids;
  }, [hoveredNodeId]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center select-none overflow-visible"
      aria-label="Interactive Knowledge & Engineering Ecosystem"
    >
      {/* Diffuse Ambient Color Fields Behind Network */}
      <div
        className="absolute top-[12%] right-[24%] w-[260px] h-[260px] rounded-full blur-[110px] pointer-events-none opacity-20"
        style={{ background: "#9B7BFF" }}
      />
      <div
        className="absolute bottom-[16%] left-[18%] w-[280px] h-[280px] rounded-full blur-[120px] pointer-events-none opacity-15"
        style={{ background: "#45D6A0" }}
      />
      <div
        className="absolute top-[28%] right-[10%] w-[240px] h-[240px] rounded-full blur-[110px] pointer-events-none opacity-15"
        style={{ background: "#5CA8FF" }}
      />
      <div
        className="absolute bottom-[20%] right-[20%] w-[220px] h-[220px] rounded-full blur-[100px] pointer-events-none opacity-12"
        style={{ background: "#FF718C" }}
      />

      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 900 680"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="particle-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* LAYER 1: Parallax Ambient Dust & Geodesic Net                */}
        {/* ============================================================ */}
        <g
          transform={`translate(${mouseOffset.x * -8}, ${mouseOffset.y * -8})`}
          className="transition-transform duration-300 ease-out"
        >
          {/* Subtle celestial orbit arcs */}
          <ellipse
            cx="480"
            cy="330"
            rx="350"
            ry="180"
            transform="rotate(-14 480 330)"
            fill="none"
            stroke="#9A9DA3"
            strokeWidth="0.8"
            strokeDasharray="2 8"
            opacity="0.12"
          />
          <ellipse
            cx="470"
            cy="320"
            rx="290"
            ry="220"
            transform="rotate(22 470 320)"
            fill="none"
            stroke="#5CA8FF"
            strokeWidth="0.6"
            strokeDasharray="3 10"
            opacity="0.08"
          />

          {/* Ambient geodesic filament lines */}
          {AMBIENT_FILAMENTS.map(([x1, y1, x2, y2], idx) => (
            <line
              key={`filament-${idx}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#666B73"
              strokeWidth="0.6"
              opacity="0.16"
            />
          ))}

          {/* Ambient Particles */}
          {AMBIENT_NODES.map((pt, idx) => (
            <circle
              key={`ambient-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r={pt.r}
              fill={pt.color}
              opacity={pt.opacity}
              filter={pt.r > 2.8 ? "url(#particle-glow)" : undefined}
            />
          ))}
        </g>

        {/* ============================================================ */}
        {/* LAYER 2: Organic Curved Connection Paths                     */}
        {/* ============================================================ */}
        <g
          transform={`translate(${mouseOffset.x * 6}, ${mouseOffset.y * 6})`}
          className="transition-transform duration-300 ease-out"
        >
          {CURVED_EDGES.map((edge) => {
            const isRelated =
              hoveredNodeId !== null &&
              (edge.from === hoveredNodeId || edge.to === hoveredNodeId);
            const isUnrelated =
              hoveredNodeId !== null &&
              edge.from !== hoveredNodeId &&
              edge.to !== hoveredNodeId;

            return (
              <g key={edge.id}>
                {/* Background glow stroke when connected */}
                {isRelated && (
                  <path
                    d={edge.path}
                    fill="none"
                    stroke={edge.accent}
                    strokeWidth="3.5"
                    opacity="0.45"
                    filter="url(#soft-glow)"
                    className="transition-all duration-300"
                  />
                )}

                {/* Primary curve path */}
                <path
                  d={edge.path}
                  fill="none"
                  stroke={isRelated ? edge.accent : isUnrelated ? "#1A1E26" : "#2E3440"}
                  strokeWidth={isRelated ? 1.8 : 1}
                  strokeDasharray={isRelated ? "none" : "3 5"}
                  opacity={isRelated ? 0.95 : isUnrelated ? 0.2 : 0.65}
                  className="transition-all duration-300"
                />

                {/* Traveling glowing beacon along primary paths */}
                {edge.hasPulse && !shouldReduceMotion && (
                  <circle r="2.8" fill={edge.accent} filter="url(#particle-glow)">
                    <animateMotion
                      path={edge.path}
                      dur="3.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </g>

        {/* ============================================================ */}
        {/* LAYER 3: Interactive Major Semantic Nodes & Labels           */}
        {/* ============================================================ */}
        <g
          transform={`translate(${mouseOffset.x * 14}, ${mouseOffset.y * 14})`}
          className="transition-transform duration-300 ease-out"
        >
          {MAJOR_NODES.map((node) => {
            const isHovered = hoveredNodeId === node.id;
            const isConnected = activeConnectedIds.has(node.id);
            const isDimmed = hoveredNodeId !== null && !isConnected;

            const pillX = node.x + node.pillOffset.x;
            const pillY = node.y + node.pillOffset.y;

            return (
              <g
                key={node.id}
                tabIndex={0}
                role="link"
                aria-label={`${node.name}: ${node.subtitle}`}
                onClick={() => router.push(node.destination)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(node.destination);
                  }
                }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className={`cursor-pointer focus:outline-none transition-all duration-300 ${
                  isDimmed ? "opacity-35" : "opacity-100"
                }`}
              >
                {/* Generous invisible hover target */}
                <circle cx={node.x} cy={node.y} r={node.radius + 20} fill="transparent" />

                {/* Outer halo / drop-shadow glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius + (isHovered ? 18 : 10)}
                  fill={node.accent}
                  opacity={isHovered ? 0.38 : 0.12}
                  filter="url(#soft-glow)"
                  className="transition-all duration-300"
                />

                {/* Capsule / Pill for Node Label (Matching Reference Image) */}
                <rect
                  x={pillX}
                  y={pillY}
                  width={node.pillWidth}
                  height={node.pillHeight}
                  rx={node.pillHeight / 2}
                  ry={node.pillHeight / 2}
                  fill="#0D1014"
                  stroke={isHovered ? node.accent : "#242830"}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-colors duration-200"
                  style={{
                    filter: isHovered
                      ? `drop-shadow(0 0 12px ${node.accentSubtle})`
                      : undefined,
                  }}
                />

                {/* Pill Text Label */}
                <text
                  x={pillX + 16}
                  y={pillY + (node.pillHeight === 36 ? 22 : 20)}
                  fill={isHovered ? "#F4F1EA" : "#D1D5DB"}
                  fontSize="12"
                  fontFamily="monospace"
                  fontWeight="bold"
                  letterSpacing="0.04em"
                  className="select-none pointer-events-none transition-colors duration-200"
                >
                  {node.name}
                </text>

                {/* Circular Glass Anchor Disc */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius}
                  fill="#090B0E"
                  stroke={isHovered ? node.accent : "#343943"}
                  strokeWidth={isHovered ? 2 : 1.5}
                  className="transition-all duration-200"
                />

                {/* Inner soft core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius - 5}
                  fill={node.accentSubtle}
                  opacity={isHovered ? 0.9 : 0.5}
                  className="transition-opacity duration-200"
                />

                {/* Custom SVG Icon Glyphs inside Node Anchor */}
                {node.icon === "user" && (
                  <g
                    transform={`translate(${node.x - 7}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 14v-1a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v1" />
                    <circle cx="7" cy="4" r="3" />
                  </g>
                )}

                {node.icon === "folder" && (
                  <g
                    transform={`translate(${node.x - 7}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h3l2 2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                  </g>
                )}

                {node.icon === "code" && (
                  <g
                    transform={`translate(${node.x - 8}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="4 2 0 7 4 12" />
                    <polyline points="12 2 16 7 12 12" />
                  </g>
                )}

                {node.icon === "bot" && (
                  <g
                    transform={`translate(${node.x - 7}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="10" height="9" rx="2" />
                    <line x1="7" y1="0" x2="7" y2="3" />
                    <circle cx="5" cy="7" r="0.75" fill={node.accent} />
                    <circle cx="9" cy="7" r="0.75" fill={node.accent} />
                  </g>
                )}

                {node.icon === "cpu" && (
                  <g
                    transform={`translate(${node.x - 7}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="8" height="8" rx="1" />
                    <line x1="7" y1="0" x2="7" y2="3" />
                    <line x1="7" y1="11" x2="7" y2="14" />
                    <line x1="0" y1="7" x2="3" y2="7" />
                    <line x1="11" y1="7" x2="14" y2="7" />
                  </g>
                )}

                {node.icon === "send" && (
                  <g
                    transform={`translate(${node.x - 7}, ${node.y - 7})`}
                    stroke={node.accent}
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="14" y1="0" x2="6" y2="8" />
                    <polygon points="14 0 9.5 14 6 8 0 4.5 14 0" />
                  </g>
                )}

                {/* Contextual Floating Metadata Chip on Hover */}
                {isHovered && (
                  <g className="transition-opacity duration-200">
                    <rect
                      x={pillX}
                      y={pillY + node.pillHeight + 6}
                      width={node.pillWidth + 24}
                      height="22"
                      rx="4"
                      fill="#08090B"
                      stroke={node.accent}
                      strokeWidth="0.75"
                    />
                    <text
                      x={pillX + 8}
                      y={pillY + node.pillHeight + 20}
                      fill={node.accent}
                      fontSize="9.5"
                      fontFamily="monospace"
                      letterSpacing="0.03em"
                      fontWeight="bold"
                      className="select-none pointer-events-none"
                    >
                      {node.metric}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Hand-drawn / Editorial Annotation (Matching Reference Image) */}
          <g
            transform="translate(710, 580)"
            className="select-none pointer-events-none opacity-60"
          >
            {/* Subtle curved arrow pointing to network */}
            <path
              d="M 12 18 C 6 2, -10 -4, -26 4"
              fill="none"
              stroke="#9A9DA3"
              strokeWidth="0.85"
              strokeLinecap="round"
            />
            <path
              d="M -23 -1 L -28 4 L -21 8"
              fill="none"
              stroke="#9A9DA3"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Editorial handwriting style text */}
            <text
              x="18"
              y="22"
              fill="#9A9DA3"
              fontSize="11"
              fontFamily="sans-serif"
              fontStyle="italic"
              letterSpacing="0.02em"
            >
              Different parts,
            </text>
            <text
              x="32"
              y="36"
              fill="#9A9DA3"
              fontSize="11"
              fontFamily="sans-serif"
              fontStyle="italic"
              letterSpacing="0.02em"
            >
              same story.
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
