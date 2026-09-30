"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePortfolio } from "./LanguageProvider";
import { tapPress } from "@/lib/motion";

export function LanguageToggle() {
  const { locale, setLocale, content } = usePortfolio();
  const reducedMotion = useReducedMotion();
  return (
    <motion.button type="button" className="control-button" whileTap={reducedMotion ? undefined : tapPress}
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      aria-label={content.ui.switchLanguage} title={content.ui.switchLanguage}>
      <motion.span key={locale} initial={reducedMotion ? false : { opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }}
        lang={locale === "en" ? "ar" : "en"} className={locale === "en" ? "arabic-glyph" : "font-mono text-xs"}>
        {locale === "en" ? "ع" : "EN"}
      </motion.span>
    </motion.button>
  );
}
