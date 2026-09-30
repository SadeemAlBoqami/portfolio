"use client";

import { usePortfolio } from "./LanguageProvider";
import { StatusIndicator } from "./StatusIndicator";

export function Footer() {
  const { content } = usePortfolio();
  return <footer className="border-t border-cyan/15 px-4 py-7 sm:px-6">
    <div className="mx-auto flex max-w-content flex-col justify-between gap-4 text-xs text-muted sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} {content.footer.copyright}</p>
      <StatusIndicator value={content.footer.status} tone="emerald" />
    </div>
  </footer>;
}
