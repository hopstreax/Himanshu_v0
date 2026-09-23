"use client";

import React, { useEffect, useRef } from "react";

interface NodePoint {
  baseX: number;
  baseY: number;
  phaseX: number;
  phaseY: number;
  amplitudeX: number;
  amplitudeY: number;
  speedX: number;
  speedY: number;
  radius: number;
  baseAlpha: number;
  currPushX: number;
  currPushY: number;
}

export function GeometricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: NodePoint[] = [];

    // Pointer state
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isActive: false,
    };

    // Reduced motion preference
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = reducedMotionQuery.matches;

    // Helper: spawn node avoiding central navigation clearance
    const createNodes = (w: number, h: number): NodePoint[] => {
      // Determine node count by screen area (sparse density)
      const count = w < 640 ? 18 : w < 1024 ? 26 : 38;
      const result: NodePoint[] = [];

      const centerX = w / 2;
      const centerY = h / 2;
      const clearanceRadius = w < 640 ? 80 : 130;

      for (let i = 0; i < count; i++) {
        let x = 0;
        let y = 0;
        let attempts = 0;

        // Ensure nodes don't cluster directly over center navigation
        while (attempts < 20) {
          x = Math.random() * (w - 40) + 20;
          y = Math.random() * (h - 40) + 20;
          const distToCenter = Math.hypot(x - centerX, y - centerY);
          if (distToCenter > clearanceRadius) break;
          attempts++;
        }

        // Slow, organic harmonic oscillation parameters
        result.push({
          baseX: x,
          baseY: y,
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          amplitudeX: Math.random() * 8 + 4,
          amplitudeY: Math.random() * 8 + 4,
          speedX: (Math.random() * 0.0003 + 0.0002) * (Math.random() > 0.5 ? 1 : -1),
          speedY: (Math.random() * 0.0003 + 0.0002) * (Math.random() > 0.5 ? 1 : -1),
          radius: Math.random() * 0.6 + 0.75, // 0.75px to 1.35px
          baseAlpha: Math.random() * 0.15 + 0.18, // 0.18 to 0.33
          currPushX: 0,
          currPushY: 0,
        });
      }

      return result;
    };

    // Resize handler with High-DPI support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      nodes = createNodes(width, height);

      // If reduced motion is active, draw a single static frame
      if (isReducedMotion) {
        drawFrame(performance.now(), true);
      }
    };

    // Render single frame
    const drawFrame = (time: number, staticMode = false) => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = width < 640 ? 110 : 150;
      const mouseRadius = 120;
      const maxPush = 14;

      // Update positions
      const currentPositions = nodes.map((node) => {
        let posX = node.baseX;
        let posY = node.baseY;

        if (!staticMode) {
          // Harmonic gentle drift
          posX += Math.sin(time * node.speedX + node.phaseX) * node.amplitudeX;
          posY += Math.cos(time * node.speedY + node.phaseY) * node.amplitudeY;

          // Subtle cursor repulsion
          let targetPushX = 0;
          let targetPushY = 0;

          if (mouse.isActive) {
            const dx = posX - mouse.x;
            const dy = posY - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouseRadius && dist > 0.1) {
              const force = (1 - dist / mouseRadius) * maxPush;
              const angle = Math.atan2(dy, dx);
              targetPushX = Math.cos(angle) * force;
              targetPushY = Math.sin(angle) * force;
            }
          }

          // Smoothly ease cursor push offset
          node.currPushX += (targetPushX - node.currPushX) * 0.08;
          node.currPushY += (targetPushY - node.currPushY) * 0.08;
        }

        return {
          x: posX + node.currPushX,
          y: posY + node.currPushY,
          radius: node.radius,
          alpha: node.baseAlpha,
        };
      });

      // 1. Draw connecting lines (faint, warm gray, limited connectivity)
      ctx.lineWidth = 0.55;
      const nodeCount = currentPositions.length;

      for (let i = 0; i < nodeCount; i++) {
        let connections = 0;
        const p1 = currentPositions[i];

        for (let j = i + 1; j < nodeCount; j++) {
          if (connections >= 3) break; // Limit connectivity for a clean, sparse drawing

          const p2 = currentPositions[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const distRatio = 1 - dist / maxDist;
            // Quadratic falloff gives a very gentle fade-out, max ~0.08 opacity
            const alpha = distRatio * distRatio * 0.075;

            ctx.strokeStyle = `rgba(115, 113, 109, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            connections++;
          }
        }
      }

      // 2. Draw nodes (warm charcoal dots)
      for (let i = 0; i < nodeCount; i++) {
        const p = currentPositions[i];
        ctx.fillStyle = `rgba(17, 17, 17, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation Loop
    const loop = (time: number) => {
      drawFrame(time, false);
      animationFrameId = requestAnimationFrame(loop);
    };

    const startAnimation = () => {
      if (isReducedMotion) {
        drawFrame(performance.now(), true);
        return;
      }
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Event: Pointer tracking (attached to window since canvas has pointer-events: none)
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
    };

    // Event: Tab visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    // Event: Reduced motion preference changes
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        stopAnimation();
        drawFrame(performance.now(), true);
      } else {
        startAnimation();
      }
    };

    // Initialize
    handleResize();
    startAnimation();

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    // Cleanup on unmount
    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
