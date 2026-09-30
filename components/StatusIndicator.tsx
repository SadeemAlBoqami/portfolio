const tones = {
  cyan: { dot: "bg-cyan", text: "text-cyan", pulse: "animate-pulse-glow" },
  emerald: { dot: "bg-emerald", text: "text-emerald", pulse: "animate-pulse-glow-emerald" },
} as const;

/** Subtle availability indicator. Never used for simulated operational metrics. */
export function StatusIndicator({
  label,
  value,
  detail,
  tone = "emerald",
}: {
  label?: string;
  value: string;
  detail?: string;
  tone?: keyof typeof tones;
}) {
  const t = tones[tone];
  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
        <span className={`absolute inline-flex h-full w-full rounded-full ${t.dot}`} />
        <span className={`absolute inline-flex h-full w-full rounded-full ${t.dot} ${t.pulse}`} />
      </span>
      {label && <span className="text-muted">{label}:</span>}
      <span className={t.text}>{value}</span>
      {detail && <span className="hidden text-muted sm:inline">· {detail}</span>}
    </div>
  );
}
