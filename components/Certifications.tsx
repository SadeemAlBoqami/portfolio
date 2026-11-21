import type { PortfolioContent } from "@/lib/content-types";
import { SectionHeading } from "./SectionHeading";
import { Award, BookOpenCheck, BadgeCheck } from "lucide-react";

export function Certifications({ content }: { content: PortfolioContent }) {
  const { credentials, sections, ui } = content;
  return <div className="section-shell">
    <SectionHeading title={sections.credentials} number="05" />
    <div className="grid gap-8 lg:grid-cols-2">
      <CredentialGroup title={ui.professionalCertifications} items={credentials.professional} icon="award" />
      <CredentialGroup title={ui.plannedCertifications} items={credentials.planned} icon="planned" plannedLabel={ui.plannedLabel} />
      <div className="lg:col-span-2">
        <h3 className="font-display text-xl font-medium text-heading">{ui.training}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{credentials.courses.map((item) => <li key={item.id} className="panel p-5">
          <div className="flex items-center justify-between gap-3 text-xs text-muted"><span>{ui.trainingLabel}</span>{item.date && <time className="date-pill">{item.date}</time>}</div>
          <h4 className="mt-3 font-display text-base font-medium text-heading">{item.title}</h4>
          <p className="mt-2 text-sm text-muted">{item.issuer}</p>
        </li>)}</ul>
      </div>
    </div>
  </div>;
}

function CredentialGroup({title,items,icon,plannedLabel}:{title:string;items:PortfolioContent["credentials"]["professional"];icon:"award"|"planned";plannedLabel?:string}) {const Icon=icon==="award"?Award:BadgeCheck;return <div><h3 className="font-display text-xl font-medium text-heading">{title}</h3><ul className="mt-5 grid gap-3">{items.map(item=><li key={item.id} className="panel flex gap-4 p-5"><Icon className="mt-1 shrink-0 text-emerald" size={22}/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><h4 dir="auto" className="font-display font-medium text-heading">{item.title}</h4>{item.date&&<time className="date-pill">{item.date}</time>}</div><p className="mt-2 text-sm text-muted">{item.issuer}</p>{plannedLabel&&<span className="mt-3 inline-block text-xs text-muted"><BookOpenCheck className="me-1 inline" size={14}/>{plannedLabel}</span>}</div></li>)}</ul></div>}
