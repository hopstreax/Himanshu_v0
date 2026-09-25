import React from "react";

interface EditorialHeaderProps {
  sectionNumber: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export function EditorialHeader({
  sectionNumber,
  title,
  subtitle,
  badge,
}: EditorialHeaderProps) {
  return (
    <div className="pb-8 mb-10 border-b border-border-subtle/80 flex flex-col space-y-3 select-none">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          {sectionNumber}
        </span>
        {badge && (
          <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>

      <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold tracking-tight text-ink leading-tight">
        {title}
      </h1>

      <p className="text-[15px] sm:text-[17px] text-ink-muted leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}
