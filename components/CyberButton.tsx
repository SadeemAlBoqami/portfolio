"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { tapPress } from "@/lib/motion";

const variants = {
  primary: "border-cyan/60 bg-cyan/10 text-heading hover:bg-cyan/20 hover:shadow-glow-cyan",
  ghost: "border-border text-body hover:border-cyan/60 hover:text-cyan",
} as const;

/** Button with a cyber-bracket hover effect: "[ LABEL ]" brackets close in on hover. */
export function CyberButton({
  href,
  children,
  variant = "ghost",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <motion.a
      href={href}
      whileTap={tapPress}
      className={`group inline-flex items-center gap-1.5 border px-5 py-2.5 font-mono text-sm tracking-wide transition-colors duration-250 ${variants[variant]}`}
    >
      <span className="text-cyan opacity-40 transition-all duration-250 group-hover:-translate-x-0.5 group-hover:opacity-100">
        [
      </span>
      <span>{children}</span>
      <span className="text-cyan opacity-40 transition-all duration-250 group-hover:translate-x-0.5 group-hover:opacity-100">
        ]
      </span>
    </motion.a>
  );
}
