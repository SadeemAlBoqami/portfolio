"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { usePortfolio } from "./LanguageProvider";

export function Navbar() {
  const { content } = usePortfolio();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-cyan/20 bg-background/90 backdrop-blur-md">
      <a href="#main-content" className="skip-link">{content.ui.skip}</a>
      <nav aria-label={content.ui.menu} className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-3">
          <Link href="/#top" dir="ltr" className="shrink-0 font-display text-sm font-semibold tracking-wide text-heading transition-colors hover:text-cyan sm:text-base">
            SADEEM<span className="text-cyan">.ALBOQAMI</span>
          </Link>
          <ul className="hidden items-center gap-5 text-sm font-medium xl:flex">
            {content.navigation.map((item) => <li key={item.id}><Link href={`/#${item.id}`} className="nav-link">{item.label}</Link></li>)}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button ref={menuButton} type="button" className="control-button xl:hidden" onClick={() => setOpen(!open)}
              aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? content.ui.closeMenu : content.ui.menu}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <ul id="mobile-navigation" hidden={!open} className="space-y-1 border-t border-cyan/15 py-3 xl:hidden">
          {content.navigation.map((item) => <li key={item.id}><Link onClick={() => setOpen(false)} href={`/#${item.id}`} className="nav-link block rounded px-3 py-3">{item.label}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
}
