"use client";

import { useRef } from "react";
import { motion, type MotionProps } from "framer-motion";

interface GlowCardProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article";
}

/**
 * Bordered HUD panel: border glows cyan on hover, and a soft radial
 * gradient follows the cursor across the panel's surface (tracked via
 * CSS custom properties written directly to the element — no React
 * state, so it doesn't re-render on every mouse move).
 */
export function GlowCard({ className = "", children, as = "div", ...motionProps }: GlowCardProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const MotionTag = (as === "article" ? motion.article : motion.div) as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden border border-cyan/20 bg-surface transition-[border-color,box-shadow] duration-250 hover:border-cyan/60 hover:shadow-glow-cyan ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(260px circle at var(--mx, 50%) var(--my, -20%), rgb(var(--color-cyan) / 0.09), transparent 70%)",
      }}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}
