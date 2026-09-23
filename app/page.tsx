import React from "react";
import { HeaderIdentity } from "@/components/layout/HeaderIdentity";
import { StatusFooter } from "@/components/layout/StatusFooter";
import { CenterCluster } from "@/components/navigation/CenterCluster";
import { GeometricCanvas } from "@/components/background/GeometricCanvas";

export default function HomePage() {
  return (
    <main className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none">
      {/* Background Ambient Geometric Canvas */}
      <GeometricCanvas />

      {/* Top Section: Identity Anchor */}
      <div className="relative z-10 w-full flex items-start justify-between">
        <HeaderIdentity />
      </div>

      {/* Center Section: Spatial Navigation Stage */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto">
        <CenterCluster />
      </div>

      {/* Bottom Section: Status & Temporal Anchor */}
      <div className="relative z-10 w-full flex items-end justify-end">
        <StatusFooter />
      </div>
    </main>
  );
}
