import React from "react";
import { identity } from "@/data/about";

export function HeaderIdentity() {
  return (
    <header className="select-none" role="banner">
      <h1 className="text-[17px] font-medium tracking-tight text-ink">
        {identity.name}
      </h1>
      <p className="text-[13px] font-normal tracking-normal text-ink-muted mt-0.5">
        {identity.title}
      </p>
    </header>
  );
}
