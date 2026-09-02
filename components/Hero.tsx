"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import type { HeroContent } from "@/lib/content";
import { tapPress } from "@/lib/motion";
import { Badge } from "./Badge";
import { CyberButton } from "./CyberButton";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center border-b border-cyan/15 px-6 pt-12 pb-14"
    >
      <div className="mx-auto w-full max-w-content">
        {/* Status indicator badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 text-xs font-mono tracking-wider text-emerald"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          AVAILABLE FOR FULL-TIME ROLES & COLLABORATIONS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-muted">{hero.location}</p>

          <h1 className="text-glow-cyan font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-6xl md:text-7xl">
            {hero.name}
          </h1>

          <p className="mt-3 font-display text-xl font-semibold text-cyan sm:text-2xl">{hero.title}</p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {hero.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {hero.badges.map((badge, i) => (
              <li key={badge}>
                <Badge tone={["cyan", "emerald", "violet"][i % 3] as "cyan" | "emerald" | "violet"}>
                  {badge}
                </Badge>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CyberButton href="#projects" variant="primary">
              VIEW PROJECTS
            </CyberButton>
            <CyberButton href={hero.resumeUrl} variant="ghost">
              DOWNLOAD CV
            </CyberButton>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-2">
              <motion.a
                href={hero.social.github}
                target="_blank"
                rel="noreferrer"
                whileTap={tapPress}
                aria-label="GitHub"
                className="rounded-md border border-cyan/20 bg-background-alt p-2.5 text-muted transition-colors duration-200 hover:border-cyan hover:text-cyan"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={hero.social.linkedin}
                target="_blank"
                rel="noreferrer"
                whileTap={tapPress}
                aria-label="LinkedIn"
                className="rounded-md border border-cyan/20 bg-background-alt p-2.5 text-muted transition-colors duration-200 hover:border-cyan hover:text-cyan"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={hero.social.email}
                whileTap={tapPress}
                aria-label="Email"
                className="rounded-md border border-cyan/20 bg-background-alt p-2.5 text-muted transition-colors duration-200 hover:border-cyan hover:text-cyan"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}