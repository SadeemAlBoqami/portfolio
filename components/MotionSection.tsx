"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionSection({ children, id, className = "" }: { children: ReactNode; id: string; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.section id={id} initial={false}
    whileInView={reducedMotion ? undefined : { y: [12, 0] }}
    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45 }}
    className={`border-b border-cyan/15 ${className}`}>{children}</motion.section>;
}
