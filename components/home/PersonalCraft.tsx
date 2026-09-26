import React from "react";
import { Compass, Music, Palette, PenTool } from "lucide-react";

export function PersonalCraft() {
  const crafts = [
    {
      index: "01",
      icon: <Music className="w-4 h-4 text-ink" />,
      title: "Vocal Training & Music",
      discipline: "Classical & Contemporary Indian Vocal Practice",
      reflection:
        "Dedicated vocal training across classical and contemporary Indian musical traditions. Regular practice sharpens auditory acuity, pitch precision, breath control, and deep concentration.",
    },
    {
      index: "02",
      icon: <Palette className="w-4 h-4 text-ink" />,
      title: "Painting & Visual Arts",
      discipline: "Traditional & Mixed-Media Fine Arts",
      reflection:
        "Exploring traditional and mixed-media painting. Studying composition, negative space, perspective, and harmonic color palettes directly informs my approach to balanced digital interfaces.",
    },
    {
      index: "03",
      icon: <PenTool className="w-4 h-4 text-ink" />,
      title: "Calligraphy & Lettering",
      discipline: "Hand Lettering & Formal Script",
      reflection:
        "Practicing formal calligraphy and hand lettering. Cultivates patience, fine motor control, and an appreciation for typographic rhythm, proportion, and deliberate weight.",
    },
  ];

  return (
    <div
      aria-label="Human Dimensions and Discipline Beyond Code"
      className="w-full space-y-8 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2 border-b border-border-subtle/80">
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
          <Compass className="w-3.5 h-3.5 text-ink" />
          <h2 className="font-medium text-ink">
            <span className="font-semibold">04</span>
            <span className="mx-1.5 opacity-60">/</span>
            <span>DISCIPLINE BEYOND CODE</span>
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
          CRAFT & AESTHETIC RIGOR
        </span>
      </div>

      {/* 3-Column Craft Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {crafts.map((craft) => (
          <div
            key={craft.index}
            className="p-6 rounded-xl border border-border-subtle/80 bg-canvas space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-canvas-subtle border border-border-subtle">
                  {craft.icon}
                </span>
                <span className="text-[10px] font-mono text-ink-subtle">
                  {craft.index}
                </span>
              </div>

              <div>
                <h3 className="text-[14px] font-mono font-semibold uppercase tracking-wider text-ink">
                  {craft.title}
                </h3>
                <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-editorial pt-0.5">
                  {craft.discipline}
                </div>
              </div>

              <p className="text-[13px] text-ink-muted leading-relaxed font-sans pt-1">
                {craft.reflection}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
