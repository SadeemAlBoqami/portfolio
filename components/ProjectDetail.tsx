"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ExternalLink } from "lucide-react";
import type { ProjectSlug } from "@/lib/content-types";
import { assetPath } from "@/lib/assets";
import { usePortfolio } from "./LanguageProvider";
import { Badge } from "./Badge";
import { ProjectCover } from "./ProjectCover";
import { ProjectMetrics } from "./ProjectMetrics";

export function ProjectDetail({ slug }: { slug: ProjectSlug }) {
  const { content } = usePortfolio();
  const project = content.projects[slug];
  const { ui } = content;
  const media = project.media;
  const links = [
    { href: project.links?.github, label: ui.viewCode }, { href: project.links?.demo, label: ui.liveDemo },
    { href: media?.presentation, label: ui.presentation }, { href: media?.report, label: ui.report },
  ].filter((link) => Boolean(link.href));
  return <article className="section-shell !max-w-6xl !pt-10">
    <Link href="/#projects" className="mb-9 inline-flex min-h-10 items-center gap-2 text-sm text-cyan hover:underline"><ArrowLeft size={16} aria-hidden="true" className="rtl:rotate-180" />{ui.back}</Link>
    <header>
      <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
        <Badge tone="emerald">{ui.status[project.status]}</Badge>
        {project.period && <span className="text-muted">{project.period}</span>}
        {project.secondaryName && <bdi className="text-violet">{project.secondaryName}</bdi>}
      </div>
      <h1 className="max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-5xl">{project.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-body">{project.descriptor}</p>
      <ul className="my-7 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag}><Badge><bdi>{tag}</bdi></Badge></li>)}</ul>
      <div className="overflow-hidden rounded-xl border border-cyan/20"><ProjectCover image={media?.cover} /></div>
    </header>
    <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
      <div className="space-y-10">
        <section><h2 className="detail-heading">{ui.overview}</h2><p className="leading-relaxed">{project.overview}</p></section>
        <section><h2 className="detail-heading">{ui.built}</h2><ul className="list-disc space-y-3 ps-5 leading-relaxed marker:text-cyan">{project.built.map((item) => <li key={item}>{item}</li>)}</ul></section>
        {project.results && <section className="panel p-6"><h2 className="detail-heading">{ui.results}</h2>
          {project.results.summary && <p className="mb-5 text-sm leading-relaxed">{project.results.summary}</p>}
          {!!project.results.metrics?.length && <ProjectMetrics metrics={project.results.metrics} />}
        </section>}
      </div>
      {project.architecture && <section className="panel p-6">
        <h2 className="detail-heading">{ui.architecture}</h2>
        <ol className="space-y-2">{project.architecture.steps.map((step, index, steps) => <li key={step}>
          <div className="flex items-start gap-3 rounded border border-cyan/15 bg-background/70 p-3 text-sm leading-relaxed">
            <span aria-hidden="true" className="pt-0.5 font-mono text-xs text-cyan">{String(index + 1).padStart(2, "0")}</span><span>{step}</span>
          </div>
          {index < steps.length - 1 && <ArrowDown aria-hidden="true" size={15} className="mx-auto mt-2 text-cyan/50" />}
        </li>)}</ol>
        {project.architecture.note && <p className="mt-5 border-s-2 border-violet/50 ps-3 text-sm leading-relaxed text-muted">{project.architecture.note}</p>}
      </section>}
    </div>
    {media?.architectureImage && <figure className="panel mt-8 overflow-hidden">
      <Image src={assetPath(media.architectureImage.src)} alt={media.architectureImage.alt} width={media.architectureImage.width} height={media.architectureImage.height} unoptimized className="h-auto w-full" />
      {media.architectureImage.caption && <figcaption className="p-4 text-sm text-muted">{media.architectureImage.caption}</figcaption>}
    </figure>}
    {(!!media?.gallery?.length || media?.demoVideo || !!media?.demoVideos?.length) && <section className="mt-12">
      <h2 className="detail-heading">{ui.media}</h2>
      {!!media.gallery?.length && <div className="grid gap-6 sm:grid-cols-2">{media.gallery.map((image) => <figure key={image.src} className="panel overflow-hidden">
        <Image src={assetPath(image.src)} alt={image.alt} width={image.width} height={image.height} unoptimized className="h-auto w-full" />
        {image.caption && <figcaption className="p-4 text-sm text-muted">{image.caption}</figcaption>}
      </figure>)}</div>}
      {[...(media.demoVideo ? [media.demoVideo] : []), ...(media.demoVideos ?? [])].map((video) => <figure key={video.src} className="mt-6 overflow-hidden rounded-xl border border-cyan/20">
        {video.kind === "youtube" ? <iframe src={video.src} title={video.title} loading="lazy" className="aspect-video w-full border-0" allow="encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <video controls preload="metadata" aria-label={video.title} className="w-full" src={assetPath(video.src)} />}
        {video.caption && <figcaption className="p-4 text-sm text-muted">{video.caption}</figcaption>}
      </figure>)}
    </section>}
    {links.length > 0 && <section className="mt-12 border-t border-cyan/15 pt-8">
      <h2 className="detail-heading">{ui.links}</h2>
      <div className="flex flex-wrap gap-3">{links.map(({ href, label }) => href && <a key={label} href={assetPath(href)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded border border-cyan/30 px-4 py-2 text-sm text-cyan transition-colors hover:bg-cyan/10">{label}<ExternalLink size={15} aria-hidden="true" /></a>)}</div>
    </section>}
  </article>;
}
