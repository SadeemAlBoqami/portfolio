import type { SystemStatus } from "@/lib/content";
import { StatusIndicator } from "./StatusIndicator";

export function Footer({
  copyright = "Sadeem AlBoqami",
  status = { label: "SYSTEM STATUS", value: "ONLINE", detail: "ALL NODES ACTIVE" },
}: {
  copyright?: string;
  status?: SystemStatus;
}) {
  const safeStatus = status || { label: "SYSTEM STATUS", value: "ONLINE", detail: "ALL NODES ACTIVE" };

  return (
    <footer className="border-t border-cyan/15 px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 font-mono text-xs text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {copyright}</p>
        <StatusIndicator
          label={safeStatus.label}
          value={safeStatus.value}
          detail={safeStatus.detail}
          tone="emerald"
        />
      </div>
    </footer>
  );
}