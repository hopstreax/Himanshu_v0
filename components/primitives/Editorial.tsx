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
      className={`${hasTopRule ? "pt-10 border-t border-border-subtle/80" : ""} space-y-6 ${className}`}
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
}

export function SectionIndex({
  id,
  number,
  title,
  icon,
  sideText,
}: SectionIndexProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
        {icon && <span className="text-ink">{icon}</span>}
        <h2 id={id} className="font-medium">
          <span className="text-ink font-semibold">{number}</span>
          <span className="mx-1.5 opacity-60">/</span>
          <span>{title}</span>
        </h2>
      </div>
      {sideText && (
        <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">
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
}

export function StatementBlock({
  statement,
  attribution,
  className = "",
}: StatementBlockProps) {
  return (
    <blockquote
      className={`p-6 sm:p-7 rounded-xl border-l-2 border-ink bg-canvas-subtle/40 space-y-2.5 ${className}`}
    >
      <p className="text-[15px] sm:text-[17px] text-ink italic leading-relaxed">
        “{statement}”
      </p>
      {attribution && (
        <cite className="block text-[11px] font-mono uppercase tracking-widest text-ink-subtle not-italic">
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
    <div className={`space-y-1 ${className}`}>
      <span className="block text-[10px] font-mono uppercase tracking-widest text-ink-subtle">
        {label}
      </span>
      <div className="text-[13px] sm:text-[14px] font-medium text-ink leading-snug">
        {value}
      </div>
    </div>
  );
}

export function EditorialRule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-border-subtle/80 my-8 ${className}`} />;
}
