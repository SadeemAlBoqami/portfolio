"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { tapPress } from "@/lib/motion";
import { usePortfolio } from "./LanguageProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { content } = usePortfolio();
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="control-button" aria-hidden="true" />;
  const isDark = resolvedTheme === "dark";
  const label = isDark ? content.ui.lightTheme : content.ui.darkTheme;
  return (
    <motion.button type="button" onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={reducedMotion ? undefined : tapPress} aria-label={label} title={label} className="control-button">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={isDark ? "sun" : "moon"}
          initial={reducedMotion ? false : { rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={reducedMotion ? undefined : { rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }} className="flex items-center justify-center">
          {isDark ? <Sun size={17} strokeWidth={1.75} /> : <Moon size={17} strokeWidth={1.75} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
