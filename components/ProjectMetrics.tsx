import type { ProjectMetric } from "@/lib/content-types";

export function ProjectMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  return <dl className={`grid grid-cols-2 gap-x-5 gap-y-5 ${metrics.length === 3 ? "sm:grid-cols-3" : ""}`}>
    {metrics.map((metric) => <div key={metric.label} className="min-w-0">
      <dt className="text-xs leading-relaxed text-muted">{metric.label}</dt>
      <dd className="mt-1 font-mono text-lg font-medium text-cyan"><bdi dir="ltr">{metric.value}</bdi></dd>
    </div>)}
  </dl>;
}
