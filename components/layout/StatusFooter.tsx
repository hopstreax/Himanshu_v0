import React from "react";

export function StatusFooter() {
  return (
    <footer
      className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 select-none text-[10px] sm:text-[11px] font-mono text-ink-subtle border-t border-border-subtle/40 pt-3"
      role="contentinfo"
    >
      <span>ENGINEERING NOTEBOOK & CASE-STUDY ARCHIVE</span>
      <div className="flex items-center space-x-2">
        <span>LEARNING IN PUBLIC</span>
        <span className="opacity-60">·</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
