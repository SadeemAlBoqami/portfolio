"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { usePortfolio } from "./LanguageProvider";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const { content: { ui } } = usePortfolio();
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    setBusy(true);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(value);
      setState("copied");
      timer.current = setTimeout(() => setState("idle"), 2500);
    } catch { setState("failed"); }
    finally { setBusy(false); }
  }
  return <div className="shrink-0">
    <button type="button" onClick={copy} disabled={busy} aria-label={label} title={label}
      className="inline-flex min-h-10 items-center gap-2 rounded border border-cyan/25 px-3 text-xs text-cyan transition-colors hover:border-cyan hover:bg-cyan/10 disabled:opacity-60">
      {state === "copied" ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      {state === "copied" ? ui.copied : ui.copy}
    </button>
    <span role="status" aria-live="polite" aria-atomic="true" className={state === "failed" ? "mt-2 block max-w-48 text-xs text-body" : "sr-only"}>
      {state === "copied" ? ui.copied : state === "failed" ? ui.copyFailed : ""}
    </span>
  </div>;
}
