import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/social";

export function ConnectPreview() {
  return (
    <div className="flex flex-col space-y-5">
      {/* Section metadata badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase px-2 py-0.5 rounded-full border border-border-subtle bg-canvas-subtle/80">
          04 / CONNECT
        </span>
        <span className="text-[11px] font-mono text-ink-subtle">
          DIRECTORY
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-ink">
          Let&apos;s build together
        </h3>
        <p className="text-[12px] uppercase tracking-editorial text-ink-muted mt-0.5">
          Available for engineering roles & open-source work
        </p>
      </div>

      {/* Directory of verified social links */}
      <div className="pt-2 border-t border-border-subtle/60 flex flex-col space-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between p-2 -mx-2 rounded hover:bg-surface/80 transition-colors group/link"
          >
            <span className="text-[13px] font-medium text-ink">
              {link.label}
            </span>
            <span className="text-[12px] font-mono text-ink-muted group-hover/link:text-ink transition-colors flex items-center space-x-1">
              <span>{link.handle}</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
            </span>
          </a>
        ))}
      </div>

      {/* Action Link */}
      <div className="pt-2 border-t border-border-subtle/60">
        <Link
          href="/connect"
          className="inline-flex items-center space-x-1.5 text-[11px] font-semibold tracking-widest uppercase text-ink hover:text-ink-muted transition-colors group"
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
