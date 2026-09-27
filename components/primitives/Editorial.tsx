import React from "react";

interface EditorialSectionProps {
  id?: string;
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
  hasTopRule?: boolean;
}

export function EditorialSection({
  id,
  labelledBy,
  children,
  className = "",
  hasTopRule = true,
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${hasTopRule ? "pt-12 sm:pt-16 border-t border-border-subtle" : ""} space-y-8 ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionIndexProps {
  id?: string;
  number: string;
  title: string;
  icon?: React.ReactNode;
  sideText?: string;
  accentClass?: string;
}

export function SectionIndex({
  id,
  number,
  title,
  icon,
  sideText,
  accentClass = "text-accent-ai",
}: SectionIndexProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-3 border-b border-border-subtle">
      <div className="flex items-center space-x-3">
        {icon && <span className={`${accentClass} shrink-0`}>{icon}</span>}
        <h2 id={id} className="font-mono font-bold text-[clamp(1.25rem,2.2vw,1.85rem)] text-ink uppercase tracking-tight flex items-baseline space-x-2">
          <span className={`text-[clamp(1rem,1.8vw,1.5rem)] font-bold ${accentClass}`}>{number}</span>
          <span className="text-border-strong font-light">/</span>
          <span>{title}</span>
        </h2>
      </div>
      {sideText && (
        <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          {sideText}
        </span>
      )}
    </div>
  );
}

interface StatementBlockProps {
  statement: string;
  attribution?: string;
  className?: string;
  accentClass?: string;
}

export function StatementBlock({
  statement,
  attribution,
  className = "",
  accentClass = "border-accent-ai",
}: StatementBlockProps) {
  return (
    <blockquote
      className={`pl-5 sm:pl-6 border-l-2 ${accentClass} space-y-2 py-1 ${className}`}
    >
      <p className="text-[16px] sm:text-[18px] text-ink italic font-normal leading-relaxed">
        &ldquo;{statement}&rdquo;
      </p>
      {attribution && (
        <cite className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle not-italic">
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}

interface MetadataRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function MetadataRow({ label, value, className = "" }: MetadataRowProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-3 border-b border-border-subtle/80 text-[12px] font-mono ${className}`}
    >
      <span className="uppercase tracking-widest text-ink-subtle font-medium">
        {label}
      </span>
      <span className="text-ink text-left sm:text-right">{value}</span>
    </div>
  );
}
