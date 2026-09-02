const tones = {
  cyan: { dot: "bg-cyan", text: "text-cyan", pulse: "animate-pulse-glow" },
  emerald: { dot: "bg-emerald", text: "text-emerald", pulse: "animate-pulse-glow-emerald" },
} as const;

/** Live pulsing telemetry dot + status text, e.g. "SYSTEM STATUS: ONLINE". */
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
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full ${t.dot}`} />
        <span className={`absolute inline-flex h-full w-full rounded-full ${t.dot} ${t.pulse}`} />
      </span>
      {label && <span className="text-muted">{label}:</span>}
      <span className={t.text}>{value}</span>
      {detail && <span className="hidden text-muted sm:inline">// {detail}</span>}
    </div>
  );
}
