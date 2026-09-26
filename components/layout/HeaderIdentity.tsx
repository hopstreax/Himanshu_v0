import React from "react";

export function HeaderIdentity() {
  return (
    <header
      className="w-full flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 select-none"
      role="banner"
    >
      <div className="space-y-1.5 max-w-md">
        <h1 className="text-[16px] sm:text-[17px] font-semibold tracking-editorial text-ink uppercase font-mono">
          HIMANSHU PATRO
        </h1>
        <p className="text-[13px] sm:text-[14px] text-ink-muted leading-relaxed font-sans">
          Software engineer building systems around code, agents, and reliable software.
        </p>
      </div>

      <div className="text-left sm:text-right font-mono text-[11px] text-ink-subtle shrink-0 space-y-0.5">
        <div className="text-ink-muted">Jamshedpur, Jharkhand, India</div>
        <div className="uppercase tracking-wider text-[10px]">
          B.Tech CSIT · Class of 2026
        </div>
      </div>
    </header>
  );
}
