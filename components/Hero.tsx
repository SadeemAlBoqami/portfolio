"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { usePortfolio } from "./LanguageProvider";
import { assetPath } from "@/lib/assets";
import { Badge } from "./Badge";
import { CyberButton } from "./CyberButton";
import { StatusIndicator } from "./StatusIndicator";

const tones = ["cyan", "emerald", "violet"] as const;

export function Hero() {
  const { content: { hero, contact, ui } } = usePortfolio();
  const reducedMotion = useReducedMotion();
  return (
    <section id="top" className="relative border-b border-cyan/15 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-content">
        <div className="mb-7 inline-flex max-w-full rounded-full border border-emerald/25 bg-emerald/5 px-4 py-2">
          <StatusIndicator value={hero.availability} tone="emerald" />
        </div>
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-3 text-sm text-muted">{hero.location}</p>
          <h1 className="hero-name font-display text-5xl font-semibold leading-[1.1] tracking-tight text-heading sm:text-6xl lg:text-7xl">{hero.name}</h1>
          <p className="mt-5 max-w-4xl font-display text-xl font-medium leading-relaxed text-cyan sm:text-2xl">{hero.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{hero.tagline}</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {hero.badges.map((badge, index) => <li key={badge}><Badge tone={tones[index % tones.length]}><bdi>{badge}</bdi></Badge></li>)}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CyberButton href="#projects" variant="primary">{ui.viewProjects}</CyberButton>
            <CyberButton href={assetPath(hero.resumeUrl)}>{ui.downloadCV}</CyberButton>
            <div className="flex items-center gap-2 sm:ms-2">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="control-button"><Github size={18} /></a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="control-button"><Linkedin size={18} /></a>
              <a href={`mailto:${contact.email}`} aria-label={ui.email} title={ui.email} className="control-button"><Mail size={18} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
