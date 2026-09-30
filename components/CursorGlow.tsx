"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const move = (event: PointerEvent) => {
      if (!query.matches || !ref.current) return;
      ref.current.style.setProperty("--cursor-x", `${event.clientX}px`);
      ref.current.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} aria-hidden="true" className="cursor-glow pointer-events-none fixed inset-0 z-10" />;
}
