import type { TelemetryStat } from "@/lib/content";

/** Compact telemetry strip used under the hero tagline. */
export function TelemetryBar({ stats }: { stats: TelemetryStat[] }) {
  return (
    <div className="flex flex-wrap divide-x divide-cyan/10 border border-cyan/15 bg-surface/60 backdrop-blur">
      {stats.map((stat) => (
        <div key={stat.label} className="min-w-[7.5rem] flex-1 px-4 py-3">
          <p className="font-mono text-[0.65rem] tracking-wider text-muted">{stat.label}</p>
          <p className="text-glow-cyan font-mono text-lg text-cyan">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
