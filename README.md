# Portfolio

Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, and next-themes. The existing cyan/emerald/violet HUD identity supports dark and light themes.

## Local development and validation

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

English is the default, including statically rendered HTML and metadata. The language button switches curated Arabic copy, sets the document `lang`/`dir`, and saves `portfolio-language` in local storage. Theme preferences remain managed by next-themes. Both controls also work when storage is unavailable (without persistence).

## Content architecture

- `lib/content-types.ts`: strict reusable content, project, media, experience, and skills types.
- `data/portfolio-content.en.ts`: English copy and shared factual values, URLs, and technology names.
- `data/portfolio-content.ar.ts`: curated Arabic copy; shares identifiers and unchanged facts with English. Update both languages when editing content, including image alt text and captions.
- `lib/content.ts`: locale lookup, default metadata, and project lookup.
- `components/LanguageProvider.tsx`: language state; no translation services or server endpoints.
- `components/Portfolio.tsx`: homepage section composition.
- `app/projects/[slug]/page.tsx`: statically generated detail routes, with per-project English metadata.
- `lib/assets.ts`: deployment-prefix helper for public assets; Next Link handles internal routes separately.

The four project slugs are defined by `ProjectSlug`. To add another project, extend that union and supply a record in both content files. `generateStaticParams()` exports every project. Dates, result blocks, media, and external links are optional; absent values do not create empty controls. Keep real results in `results` and up to three highlights in `cardMetrics`.

Experience uses highlights rather than long paragraphs. Education is compact. Credentials in `preparation` are explicitly unearned; training is presented separately. Contact values and all interface labels live in the content files.

The previous JSON content file was replaced, not retained as a competing source. The existing ProjectCard is now the sole homepage card implementation. The old inline video modal and unused TelemetryBar were removed; decorative uptime/stack-count claims are gone. The generic inference-service card was replaced by the four requested case studies. Its external repository was not modified.

## Project media and CV

See [docs/PROJECT_MEDIA.md](docs/PROJECT_MEDIA.md) for the exact media inventory, optional asset paths, and schema. Existing Beam Data and PRECRASH files are connected; no media files or URLs were fabricated. Replace `public/cv/cv.pdf` if you have a newer CV; the button already uses a deployment-safe path.

## Visual system and accessibility

Color tokens and shared layout classes live in `app/globals.css`, with Tailwind mappings in `tailwind.config.ts`. English uses Inter, Space Grotesk, and IBM Plex Mono. Arabic uses IBM Plex Sans Arabic with tuned line heights, 400/500/600 weights, and logical spacing. Fonts are self-hosted by Next at build time; a first build needs access to Google Fonts.

Navigation has a keyboard-operable mobile disclosure, Escape handling, a skip link, and visible focus styles. Contact copy controls use the Clipboard API with live status feedback and a visible failure message. Reduced-motion preferences disable decorative motion and pointer glow. The content remains visible if JavaScript is disabled; language switching and copy actions require JavaScript.

## Deployment

For root-hosted deployments, run `npm run build`. No server APIs are required.

GitHub Pages / static export, Bash:

```sh
DEPLOY_TARGET=github-pages BASE_PATH=/your-repository npm run build
BASE_PATH=/your-repository npm run verify:export
```

PowerShell:

```powershell
$env:DEPLOY_TARGET = 'github-pages'
$env:BASE_PATH = '/your-repository'
npm run build
npm run verify:export
Remove-Item Env:DEPLOY_TARGET, Env:BASE_PATH
```

Publish the contents of `out/` with a GitHub Pages artifact workflow. If publishing via a branch, include `.nojekyll` so the `_next` directory is served. Trailing slashes emit nested `index.html` files for direct project URLs. Test the output with a static server mounted at the same `BASE_PATH`. Never hardcode the repository prefix in content or project links.

`verify:export` checks all emitted HTML for duplicate IDs, empty links, missing local files/anchors, and missing deployment prefixes. It also requires all four project pages and the CV to exist. Run it with the same `BASE_PATH` as the export build.

No build-error bypasses are enabled. Changes here do not commit, push, or deploy the site.
