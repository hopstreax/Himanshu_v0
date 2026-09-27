"use client";

import React, { useState } from "react";
import { Compass, Music, Palette, PenTool } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function PersonalCraft() {
  const [activeCraft, setActiveCraft] = useState<"music" | "painting" | "calligraphy">("music");
  const shouldReduceMotion = useReducedMotion();

  const crafts = {
    music: {
      name: "MUSIC",
      title: "Vocal Training & Music",
      discipline: "Classical & Contemporary Indian Vocal Practice",
      reflection:
        "Dedicated vocal training across classical and contemporary Indian musical traditions. Regular practice sharpens auditory acuity, pitch precision, breath control, and deep concentration.",
      accent: "#9B7BFF",
    },
    painting: {
      name: "PAINTING",
      title: "Painting & Visual Arts",
      discipline: "Traditional & Mixed-Media Fine Arts",
      reflection:
        "Exploring traditional and mixed-media painting. Studying composition, negative space, perspective, and harmonic color palettes directly informs my approach to balanced digital interfaces.",
      accent: "#FF718C",
    },
    calligraphy: {
      name: "CALLIGRAPHY",
      title: "Calligraphy & Lettering",
      discipline: "Hand Lettering & Formal Script",
      reflection:
        "Practicing formal calligraphy and hand lettering. Cultivates patience, fine motor control, and an appreciation for typographic rhythm, proportion, and deliberate weight.",
      accent: "#FFB86B",
    },
  };

  const current = crafts[activeCraft];

  return (
    <div
      aria-label="Human Dimensions and Discipline Beyond Code"
      className="w-full space-y-12 select-none"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 border-b border-border-subtle">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
            <Compass className="w-3.5 h-3.5 text-[#FF718C]" />
            <span>04 / DISCIPLINE BEYOND CODE</span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-mono font-bold uppercase tracking-tight text-ink">
            AESTHETIC & CREATIVE RIGOR
          </h2>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-ink-subtle">
          THREE LIFELONG DISCIPLINES
        </div>
      </div>

      {/* Large Typographic Split (Zero Cards!) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Enormous Typography List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
            BEYOND CODE /
          </div>

          <div className="space-y-2">
            {(["music", "painting", "calligraphy"] as const).map((key) => {
              const isSelected = activeCraft === key;
              const craft = crafts[key];
              return (
                <div
                  key={key}
                  onClick={() => setActiveCraft(key)}
                  onMouseEnter={() => setActiveCraft(key)}
                  className="cursor-pointer group flex items-baseline space-x-4 transition-transform duration-200 hover:translate-x-2"
                >
                  <span
                    className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-mono font-bold uppercase tracking-tighter transition-colors duration-200"
                    style={{
                      color: isSelected ? craft.accent : "#343943",
                    }}
                  >
                    {craft.name}
                  </span>
                  {isSelected && (
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border"
                      style={{
                        borderColor: craft.accent,
                        color: craft.accent,
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border-subtle text-[12px] font-mono text-ink-subtle max-w-md">
            Creative practices train observational patience, spatial composition, and acoustic precision that directly sharpen software architecture.
          </div>
        </div>

        {/* Right Column: Dynamic Abstract Visual Representation & Detailed Reflection */}
        <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-border-subtle lg:pl-10">
          {/* Abstract Interactive Canvas (Waveform / Composition Grid / Typographic Stroke) */}
          <div className="relative w-full h-44 sm:h-52 border border-border-subtle bg-[#08090B] flex items-center justify-center overflow-hidden">
            {activeCraft === "music" && (
              <svg className="w-full h-full p-6" viewBox="0 0 400 120">
                {/* Abstract Audio Waveform */}
                <path
                  d="M 10 60 Q 50 10, 100 60 T 190 60 T 280 60 T 380 60"
                  fill="none"
                  stroke="#9B7BFF"
                  strokeWidth="2"
                  className={shouldReduceMotion ? "" : "animate-pulse"}
                />
                <path
                  d="M 10 60 Q 60 110, 110 60 T 210 60 T 310 60 T 390 60"
                  fill="none"
                  stroke="#5CA8FF"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line x1="10" y1="60" x2="390" y2="60" stroke="#242830" strokeDasharray="3 6" />
                <text x="20" y="25" fill="#666B73" fontSize="9" fontFamily="monospace">
                  FREQ / HARMONIC RESONANCE 440Hz
                </text>
              </svg>
            )}

            {activeCraft === "painting" && (
              <svg className="w-full h-full p-6" viewBox="0 0 400 120">
                {/* Composition Grid & Golden Ratio Axes */}
                <rect x="30" y="15" width="340" height="90" fill="none" stroke="#343943" strokeWidth="1" />
                <line x1="160" y1="15" x2="160" y2="105" stroke="#FF718C" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="30" y1="65" x2="370" y2="65" stroke="#FF718C" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="160" cy="65" r="28" fill="none" stroke="#FFB86B" strokeWidth="1" opacity="0.7" />
                <circle cx="160" cy="65" r="4" fill="#FF718C" />
                <text x="40" y="32" fill="#666B73" fontSize="9" fontFamily="monospace">
                  COMPOSITION / PERSPECTIVE FOCAL AXIS
                </text>
              </svg>
            )}

            {activeCraft === "calligraphy" && (
              <svg className="w-full h-full p-6" viewBox="0 0 400 120">
                {/* Flowing Typographic Strokes */}
                <path
                  d="M 40 90 C 80 10, 140 110, 190 40 S 300 20, 360 85"
                  fill="none"
                  stroke="#FFB86B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 80 C 90 20, 150 100, 200 45 S 290 30, 350 80"
                  fill="none"
                  stroke="#F4F1EA"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <text x="20" y="25" fill="#666B73" fontSize="9" fontFamily="monospace">
                  PEN STROKE / WEIGHT & TYPOGRAPHIC DUCTUS
                </text>
              </svg>
            )}
          </div>

          {/* Detailed Reflection */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: current.accent }}
              />
              <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-ink">
                {current.title}
              </span>
            </div>
            <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest">
              {current.discipline}
            </div>
            <p className="text-[14px] text-ink-body font-sans leading-relaxed pt-1">
              {current.reflection}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
