"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "./Badge";

function getYouTubeEmbedUrl(url?: string | null): string {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
    : url;
}

export function Projects({ projects }: { projects: Project[] }) {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="border-b border-cyan/15 px-6 py-16">
      <div className="mx-auto w-full max-w-content">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Featured Projects
          </h2>
          <span className="font-mono text-xs text-muted">
            {String(projects.length).padStart(2, "0")} LOGS FOUND
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-cyan/20 bg-background-alt/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-cyan/10 pb-3 font-mono text-xs text-muted">
                  <span className="text-cyan/80 font-medium">~/projects/{project.id}.log</span>
                  <span className="rounded bg-emerald/10 px-2 py-0.5 text-xs font-semibold text-emerald">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-heading transition-colors group-hover:text-cyan">
                  {project.title}
                </h3>

                <p className="mt-3.5 text-base leading-relaxed text-body">
                  {project.problem}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge tone="cyan">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-cyan/10 pt-5">
                {project.metrics && project.metrics.length > 0 && (
  <div className="mb-6 grid grid-cols-2 gap-4">
    {project.metrics.map((m, mIdx) => (
      <div key={m?.label || mIdx}>
        <div className="font-mono text-xs uppercase tracking-wider text-muted">
          {m?.label || "METRIC"}
        </div>
        <div className="mt-1 font-mono text-base font-bold text-cyan">
          {m?.value || "-"}
        </div>
      </div>
    ))}
  </div>
)}

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/5 px-4 py-2 font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
                    >
                      [ VIEW CODE ]
                    </a>
                  )}

                  {project.links?.demo && (
                    <button
                      type="button"
                      onClick={() => {
                        const demoUrl = project.links?.demo;
                        if (demoUrl) {
                          setActiveVideo({
                            url: getYouTubeEmbedUrl(demoUrl),
                            title: project.title,
                          });
                        }
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald/30 bg-emerald/10 px-4 py-2 font-semibold text-emerald transition-colors hover:bg-emerald hover:text-black"
                    >
                      <Play size={14} className="fill-current" />
                      [ LIVE DEMO ]
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border border-cyan/40 bg-background-alt shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            >
              <div className="flex items-center justify-between border-b border-cyan/20 bg-background px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                  <span className="font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                    FEED_MONITOR // {activeVideo.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded p-1 text-muted transition-colors hover:bg-cyan/10 hover:text-cyan"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}