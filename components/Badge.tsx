import type { ReactNode } from "react";

const toneClasses = {
  cyan: "border-cyan/30 text-cyan hover:border-cyan/70",
  emerald: "border-emerald/30 text-emerald hover:border-emerald/70",
  violet: "border-violet/30 text-violet hover:border-violet/70",
} as const;

/**
 * Small HUD tag pill used for tech-stack tags and skills. Has a
 * scanline sweep on hover (the ".scanline" utility is defined once in
 * globals.css and reused here and on cards).
 */
export function Badge({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: keyof typeof toneClasses;
}) {
  return (
    <span
      className={`group relative inline-flex items-center overflow-hidden border px-2.5 py-1 font-mono text-xs transition-colors duration-250 ${toneClasses[tone]}`}
    >
      <span className="scanline" aria-hidden="true" />
      <span className="relative">{children}</span>
    </span>
  );
}
