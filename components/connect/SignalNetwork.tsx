"use client";

import React, { useState } from "react";
import { ArrowUpRight, Radio } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export interface ChannelItem {
  id: string;
  num: string;
  name: string;
  scope: string;
  handle: string;
  href: string;
  accent: string;
  accentSubtle: string;
  signalType: string;
}

export const PRIMARY_CHANNELS: readonly ChannelItem[] = [
  {
    id: "github",
    num: "01",
    name: "GITHUB",
    scope: "Code / open source",
    handle: "@hopstreax",
    href: "https://github.com/hopstreax",
    accent: "#6EA8FF", // Electric Blue signal
    accentSubtle: "rgba(110, 168, 255, 0.10)",
    signalType: "SRC / REPOSITORIES",
  },
  {
    id: "linkedin",
    num: "02",
    name: "LINKEDIN",
    scope: "Professional / engineering",
    handle: "in/himanshupatro",
    href: "https://www.linkedin.com/in/himanshupatro/",
    accent: "#A78BFA", // Violet signal
    accentSubtle: "rgba(167, 139, 250, 0.10)",
    signalType: "NET / IDENTITY",
  },
  {
    id: "email",
    num: "03",
    name: "EMAIL",
    scope: "Direct communication",
    handle: "himanshupatro4@gmail.com",
    href: "mailto:himanshupatro4@gmail.com",
    accent: "#4DE1B2", // Mint signal
    accentSubtle: "rgba(77, 225, 178, 0.10)",
    signalType: "INBOX / DIRECT",
  },
  {
    id: "x",
    num: "04",
    name: "X",
    scope: "Thoughts / building in public",
    handle: "@hopstreax",
    href: "https://x.com/hopstreax",
    accent: "#FF7C9A", // Coral signal
    accentSubtle: "rgba(255, 124, 154, 0.10)",
    signalType: "PUB / SIGNALS",
  },
] as const;

export function SignalNetwork() {
  const shouldReduceMotion = useReducedMotion();
  const [activeChannelId, setActiveChannelId] = useState<string | null>(null);

  const activeChannel = PRIMARY_CHANNELS.find((c) => c.id === activeChannelId);

  return (
    <div className="relative w-full select-none">
      {/* =================================================================== */}
      {/* 1. CONTROLLED NEON AURA (Outer / Background Atmosphere)            */}
      {/* Violet / Blue / Mint / Coral glowing softly behind the content     */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[460px] sm:w-[540px] h-[460px] sm:h-[540px] rounded-full blur-[130px] pointer-events-none opacity-[0.14] transition-all duration-700 -z-20"
        style={{
          background: activeChannel
            ? activeChannel.accent
            : "radial-gradient(circle, #6EA8FF 0%, #A78BFA 60%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-8 w-[380px] sm:w-[440px] h-[380px] sm:h-[440px] rounded-full blur-[120px] pointer-events-none opacity-[0.12] -z-20"
        style={{
          background: "radial-gradient(circle, #FF7C9A 0%, #A78BFA 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-28 w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full blur-[115px] pointer-events-none opacity-[0.10] -z-20"
        style={{
          background: "radial-gradient(circle, #4DE1B2 0%, #38BDF8 60%, transparent 80%)",
        }}
      />

      {/* =================================================================== */}
      {/* 2. SUBTLE DARK RADIAL FALLOFF BEHIND CHANNEL INTERFACE              */}
      {/* Seamless radial vignette: feather-fades to 0% opacity. NO BORDERS, */}
      {/* NO CARD EDGES, NO ROUNDED CONTAINER SILHOUETTE.                    */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 sm:-inset-16 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(8, 9, 11, 0.96) 20%, rgba(8, 9, 11, 0.70) 55%, transparent 100%)",
        }}
      />

      {/* =================================================================== */}
      {/* 3. CENTRAL SIGNAL NODE / TERMINAL BEACON (Open Hairline Bar, No Box)*/}
      {/* =================================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pb-4 mb-6 sm:mb-8 border-b border-[rgba(255,255,255,0.10)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Signal Emitter Core */}
          <div className="flex items-center space-x-3.5">
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-[rgba(255,255,255,0.18)] bg-[#08090B] flex-shrink-0">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-25"
                style={{
                  background: activeChannel ? activeChannel.accent : "#4DE1B2",
                }}
              />
              <span
                className="w-2 h-2 rounded-full transition-colors duration-250"
                style={{
                  background: activeChannel ? activeChannel.accent : "#4DE1B2",
                  boxShadow: `0 0 8px ${
                    activeChannel ? activeChannel.accent : "#4DE1B2"
                  }`,
                }}
              />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[10.5px] font-mono tracking-widest uppercase">
                <span className="text-[#F4F1EA] font-semibold">OPEN CHANNEL</span>
                <span className="text-[#3E4554]">·</span>
                <span className="text-[#4DE1B2] font-medium">01 / SIGNAL READY</span>
              </div>
              <div className="text-[11px] font-mono text-[#8F96A3] pt-0.5">
                {activeChannel ? (
                  <span className="text-[#F4F1EA] font-semibold transition-colors duration-200">
                    SYSTEM SIGNAL →{" "}
                    <span style={{ color: activeChannel.accent }}>
                      {activeChannel.scope.toUpperCase()}
                    </span>
                  </span>
                ) : (
                  <span>LATENCY: DIRECT · TLS 1.3 · ALL CIRCUITS OPERATIONAL</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Signal Indicator */}
          <div className="flex items-center space-x-2 text-[10px] font-mono text-[#8F96A3] sm:text-right flex-shrink-0">
            <Radio className="w-3.5 h-3.5 text-[#6EA8FF]" />
            <span>PORT 443 / ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* =================================================================== */}
      {/* 4. ASYMMETRIC TOPOLOGY & CONTACT CHANNEL ENDPOINTS (NO CARDS)       */}
      {/* Open editorial rows, high contrast, warm white text                */}
      {/* =================================================================== */}
      <div className="relative">
        {/* Desktop Left-Rail SVG Signal Bus Conduit */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -left-8 top-0 bottom-0 w-8 pointer-events-none"
        >
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 32 336"
            preserveAspectRatio="none"
          >
            {/* Base Vertical Spine */}
            <line
              x1="6"
              y1="14"
              x2="6"
              y2="322"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Dynamic Branch Lines to Each Channel */}
            {PRIMARY_CHANNELS.map((channel, i) => {
              const y = 42 + i * 84;
              const isActive = activeChannelId === channel.id;

              return (
                <g key={channel.id}>
                  {/* Branch curve */}
                  <path
                    d={`M 6 ${y} C 18 ${y}, 24 ${y}, 32 ${y}`}
                    fill="none"
                    stroke={isActive ? channel.accent : "rgba(255, 255, 255, 0.12)"}
                    strokeWidth={isActive ? "2" : "1"}
                    style={{
                      filter: isActive ? `drop-shadow(0 0 5px ${channel.accent})` : "none",
                    }}
                    className="transition-colors duration-200"
                  />
                  {/* Spine connection node */}
                  <circle
                    cx="6"
                    cy={y}
                    r={isActive ? "3.5" : "2"}
                    fill={isActive ? channel.accent : "rgba(255, 255, 255, 0.35)"}
                    className="transition-all duration-200"
                  />
                  {/* Traveling Signal Pulse on Hover */}
                  {isActive && !shouldReduceMotion && (
                    <circle r="2.5" fill="#FFFFFF">
                      <animateMotion
                        path={`M 6 ${y} C 18 ${y}, 24 ${y}, 32 ${y}`}
                        dur="0.65s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Channel Links List: Open Editorial Rows Separated by Hairlines */}
        <div className="space-y-0 border-t border-b border-[rgba(255,255,255,0.10)]">
          {PRIMARY_CHANNELS.map((channel, idx) => {
            const isActive = activeChannelId === channel.id;

            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target={channel.id === "email" ? undefined : "_blank"}
                rel={channel.id === "email" ? undefined : "noopener noreferrer"}
                onMouseEnter={() => setActiveChannelId(channel.id)}
                onMouseLeave={() => setActiveChannelId(null)}
                onFocus={() => setActiveChannelId(channel.id)}
                onBlur={() => setActiveChannelId(null)}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative block py-5 sm:py-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CBD2DE]"
                aria-label={`${channel.name} channel: ${channel.scope}`}
              >
                {/* Subtle Horizontal Backlight on Hover (Restrained, Zero Box) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none transition-opacity duration-200 -z-10"
                  style={{
                    background: `linear-gradient(90deg, ${channel.accentSubtle} 0%, transparent 65%)`,
                    opacity: isActive ? 0.6 : 0,
                  }}
                />

                <div className="flex items-center justify-between gap-4">
                  {/* Left: Endpoint Marker + Number + Name + Handle + Scope */}
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    {/* Controlled Two-Layer Endpoint Marker */}
                    <div
                      aria-hidden="true"
                      className="relative w-3.5 h-3.5 flex items-center justify-center flex-shrink-0"
                    >
                      {/* Outer Ring */}
                      <span
                        className="absolute inset-0 rounded-full border transition-all duration-200"
                        style={{
                          borderColor: isActive
                            ? channel.accent
                            : "rgba(255, 255, 255, 0.22)",
                          boxShadow: isActive ? `0 0 10px ${channel.accent}` : "none",
                        }}
                      />
                      {/* Inner Point */}
                      <span
                        className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                        style={{
                          backgroundColor: isActive
                            ? channel.accent
                            : "rgba(255, 255, 255, 0.45)",
                        }}
                      />
                    </div>

                    {/* Numeric Index */}
                    <span
                      className="text-[11px] font-mono transition-colors duration-200 flex-shrink-0"
                      style={{ color: isActive ? channel.accent : "#8F96A3" }}
                    >
                      {channel.num}
                    </span>

                    {/* Channel Title, Handle, Description with Framer Motion horizontal shift */}
                    <motion.div
                      animate={{ x: isActive && !shouldReduceMotion ? 5 : 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="min-w-0"
                    >
                      <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-2.5 min-w-0">
                        {/* Primary Channel Name: Warm-White #F4F1EA at rest, always crisp */}
                        <span className="text-[18px] sm:text-[21px] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] flex-shrink-0 transition-colors duration-200">
                          {channel.name}
                        </span>

                        {/* Distinguishable Cool Gray Handle: #8F96A3 -> #CBD2DE on hover */}
                        <span
                          className="text-[11.5px] sm:text-[12.5px] font-mono transition-colors duration-200 truncate"
                          style={{
                            color: isActive ? "#CBD2DE" : "#8F96A3",
                          }}
                        >
                          <span className="text-[#4E5664] mr-1">/</span>
                          {channel.handle}
                        </span>
                      </div>

                      {/* Readable Body Contrast: #C5C8CE */}
                      <div className="text-[12.5px] sm:text-[13.5px] font-sans text-[#C5C8CE] pt-0.5 leading-normal">
                        {channel.scope}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right: Technical Instrumentation Tag + Action Arrow */}
                  <div className="flex items-center space-x-3.5 flex-shrink-0">
                    {/* Technical Instrumentation Tag */}
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest hidden md:inline-block px-2.5 py-0.5 rounded-[2px] transition-all duration-200"
                      style={{
                        background: isActive
                          ? channel.accentSubtle
                          : "rgba(255, 255, 255, 0.035)",
                        border: `1px solid ${
                          isActive ? channel.accent : "rgba(255, 255, 255, 0.14)"
                        }`,
                        color: isActive ? channel.accent : "#AEB5C2",
                      }}
                    >
                      {channel.signalType}
                    </span>

                    {/* Arrow: #8F96A3 -> channel.accent with subtle diagonal shift */}
                    <motion.div
                      animate={
                        isActive && !shouldReduceMotion
                          ? { x: 3, y: -3 }
                          : { x: 0, y: 0 }
                      }
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        color: isActive ? channel.accent : "#8F96A3",
                      }}
                      className="transition-colors duration-200"
                    >
                      <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Hairline Divider with Subtle Accent Illumination */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-200"
                  style={{
                    background: isActive
                      ? `linear-gradient(90deg, ${channel.accent} 0%, rgba(255, 255, 255, 0.06) 100%)`
                      : "rgba(255, 255, 255, 0.10)",
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
