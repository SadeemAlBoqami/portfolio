"use client";

import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { usePortfolio } from "./LanguageProvider";
import { CopyButton } from "./CopyButton";

export function Contact() {
  const { content: { contact, sections, ui } } = usePortfolio();
  return <section id="contact" aria-labelledby="contact-heading" className="border-t border-cyan/20 bg-background-alt/60">
    <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div>
        <p className="mb-4 text-sm font-medium text-emerald">{sections.contact}</p>
        <h2 id="contact-heading" className="max-w-lg font-display text-3xl font-semibold leading-tight text-heading sm:text-4xl">{ui.contactHeading}</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-body">{ui.contactDescription}</p>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted"><MapPin size={16} aria-hidden="true" />{contact.location}</p>
      </div>
      <div className="min-w-0 space-y-4">
        <div className="panel p-5">
          <p className="mb-3 text-xs text-muted">{ui.email}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a dir="ltr" className="break-all font-mono text-sm text-heading hover:text-cyan sm:text-base" href={`mailto:${contact.email}`}>{contact.email}</a>
            <CopyButton value={contact.email} label={ui.copyEmail} />
          </div>
        </div>
        <div className="panel p-5">
          <p className="mb-3 text-xs text-muted">{ui.phone}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a dir="ltr" className="font-mono text-sm text-heading hover:text-cyan sm:text-base" href={`tel:${contact.phoneCanonical}`}>{contact.phoneDisplay}</a>
            <CopyButton value={contact.phoneCanonical} label={ui.copyPhone} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="panel flex items-center gap-2 p-4 text-sm text-heading transition-colors hover:border-cyan/60"><Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={15} className="ms-auto" aria-hidden="true" /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="panel flex items-center gap-2 p-4 text-sm text-heading transition-colors hover:border-cyan/60"><Github size={17} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={15} className="ms-auto" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>;
}
