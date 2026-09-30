"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content } from "@/lib/content";
import type { Locale, PortfolioContent } from "@/lib/content-types";

const storageKey = "portfolio-language";
const LanguageContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; content: PortfolioContent } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("en");
  useEffect(() => {
    try { if (localStorage.getItem(storageKey) === "ar") updateLocale("ar"); } catch { /* Storage may be disabled. */ }
    function sync(event: StorageEvent) {
      if (event.key === storageKey) updateLocale(event.newValue === "ar" ? "ar" : "en");
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  const setLocale = useCallback((next: Locale) => {
    updateLocale(next);
    try { localStorage.setItem(storageKey, next); } catch { /* In-memory switching still works. */ }
  }, []);
  const value = useMemo(() => ({ locale, setLocale, content: content[locale] }), [locale, setLocale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function usePortfolio() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("usePortfolio requires LanguageProvider");
  return context;
}
