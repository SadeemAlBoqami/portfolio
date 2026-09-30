"use client";

import type { ReactNode, MouseEvent } from "react";

/** Reusable HUD surface: pointer glow uses CSS properties without rerenders. */
export function GlowCard({ className = "", children }: { className?: string; children: ReactNode }) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }
  return <div onMouseMove={handleMouseMove} className={`glow-card panel transition-[border-color,box-shadow] duration-250 hover:border-cyan/50 hover:shadow-glow-cyan ${className}`}>{children}</div>;
}
