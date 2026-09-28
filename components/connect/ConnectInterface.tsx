"use client";

import React from "react";
import { ArrowUpRight, MapPin, Radio, ShieldCheck, Terminal, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SignalNetwork } from "./SignalNetwork";
import { connectData } from "@/data/social";

export function ConnectInterface() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full relative select-none">
      {/* =================================================================== */}
      {/* TWO-PART ASYMMETRICAL COMPOSITION (Left: ~55% / Right: ~45%)        */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* ================================================================= */}
        {/* LEFT COLUMN: Editorial Typography & Engineering Positioning (~42%)*/}
        {/* ================================================================= */}
        <div className="lg:col-span-5 space-y-8 lg:space-y-10">
          {/* Small Technical Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2.5 text-[11px] font-mono uppercase tracking-widest text-[#666B73]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF718C]" />
              <span className="text-[#F4F1EA] font-semibold">CONNECT / 04</span>
              <span>·</span>
              <span>OPEN CHANNEL</span>
            </div>
            <div className="w-16 h-px bg-[#343943]" />
          </motion.div>

          {/* Large Editorial Heading (Controlled, Sophisticated Display Scale) */}
          <div className="space-y-1">
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.75rem,5.2vw,4.5rem)] font-mono font-bold uppercase tracking-tight text-[#F4F1EA] leading-[0.98]"
            >
              LET&apos;S<br />
              BUILD<br />
              SOMETHING<br />
              <span className="text-[#FF7C9A]">
                USEFUL.
              </span>
            </motion.h1>
          </div>

          {/* Concise Supporting Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.05rem,1.6vw,1.25rem)] text-[#C5C8CE] font-sans font-light leading-relaxed max-w-lg"
          >
            I&apos;m interested in engineering roles, ambitious products, developer tooling, AI systems, and interesting technical problems.
          </motion.p>

          {/* Active Availability Indicator */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2.5 px-3 py-1.5 border border-[#1F523E] bg-[#0D2119]/60 text-[11px] font-mono uppercase tracking-widest text-[#45D6A0]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45D6A0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#45D6A0]" />
            </span>
            <span className="font-semibold">AVAILABLE FOR ENGINEERING WORK</span>
          </motion.div>

          {/* Technical Metadata Anchors */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 border-t border-[rgba(255,255,255,0.12)] space-y-3 text-[11px] font-mono text-[#8F96A3]"
          >
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <div>
                <span className="text-[#666B73] block text-[9.5px]">SIGNAL ID</span>
                <span className="text-[#CBD2DE]">SIGNAL / 04</span>
              </div>
              <div>
                <span className="text-[#666B73] block text-[9.5px]">NETWORK</span>
                <span className="text-[#CBD2DE]">HUMAN / SDE</span>
              </div>
              <div>
                <span className="text-[#666B73] block text-[9.5px]">MODE</span>
                <span className="text-[#CBD2DE]">DIRECT TRANSMISSION</span>
              </div>
              <div>
                <span className="text-[#666B73] block text-[9.5px]">COORDINATES</span>
                <span className="text-[#CBD2DE]">+ 720, 000 / + 720, 820</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-2 text-[#CBD2DE]">
              <MapPin className="w-3.5 h-3.5 text-[#FFB86B]" />
              <span>BASE: JAMSHEDPUR, JHARKHAND, INDIA</span>
            </div>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: Signal Network & Communication Interface (~58%)     */}
        {/* ================================================================= */}
        <div className="lg:col-span-7 relative">
          <SignalNetwork />
        </div>
      </div>

      {/* =================================================================== */}
      {/* SECONDARY CHANNELS & CLOSING TELEMETRY (Seamless Continuity)        */}
      {/* =================================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 sm:mt-20 pt-8 border-t border-[rgba(255,255,255,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[11px] font-mono text-[#8F96A3]"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>TIMEZONE: IST (UTC+5:30)</span>
          <span className="text-[#4D5564]">·</span>
          <span>LATENCY: DIRECT</span>
          <span className="text-[#4D5564]">·</span>
          <span>CLASS OF 2026</span>
        </div>

        {/* Secondary Links (Notion, Instagram) */}
        <div className="flex items-center space-x-5">
          {connectData.secondaryLinks?.map((sec) => (
            <a
              key={sec.label}
              href={sec.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9A9DA3] hover:text-[#F4F1EA] transition-colors inline-flex items-center space-x-1"
            >
              <span>{sec.label.toUpperCase()}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
