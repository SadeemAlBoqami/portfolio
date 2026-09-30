# Project media

All media is optional. The repository currently includes Beam Data presentation JPGs and PRECRASH AI photos, a simulation screenshot, poster PDF, and local MP4. Saudi Labor RAG and Smart Restaurant currently have no media files. The grid on a fallback cover is decoration, not an architecture diagram or a measured result.

Place real files in the directories below, then add the corresponding `media` fields to the project in `data/portfolio-content.en.ts` and curated Arabic alt text/captions in `data/portfolio-content.ar.ts`. Files alone do not enable media. Do not add a field until the referenced file exists.

These are the exact suggested paths if you choose to provide each asset:

| Project | Cover | Screenshot | Architecture diagram | Presentation |
| --- | --- | --- | --- | --- |
| Image generation / Beam Data | `public/projects/beam-data/cover.webp` | `public/projects/beam-data/overview.webp` | `public/projects/beam-data/architecture.webp` | `public/projects/beam-data/presentation.pdf` |
| Saudi Labor RAG | `public/projects/saudi-labor-rag/cover.webp` | `public/projects/saudi-labor-rag/overview.webp` | `public/projects/saudi-labor-rag/architecture.webp` | `public/projects/saudi-labor-rag/presentation.pdf` |
| PRECRASH AI | `public/projects/precrash-ai/cover.webp` | `public/projects/precrash-ai/overview.webp` | `public/projects/precrash-ai/architecture.webp` | `public/projects/precrash-ai/presentation.pdf` |
| Smart Restaurant | `public/projects/smart-restaurant/cover.webp` | `public/projects/smart-restaurant/overview.webp` | `public/projects/smart-restaurant/architecture.webp` | `public/projects/smart-restaurant/presentation.pdf` |

Currently connected files:

- Beam Data: `GTM_Image_Generation_Team3_page-0001.jpg` is the cover; `page-0031.jpg` is the architecture image; `page-0008.jpg`, `page-0032.jpg`, `page-0033.jpg`, and `page-0034.jpg` are gallery images.
- PRECRASH AI: `20260502_093135000_iOS.jpg` is the cover; `20260502_063108000_iOS.jpg` and `20260510_151833000_iOS.png` are gallery images; `CP2 Poster - Road Safety.pdf` is the presentation action; `FULL SIM DEMO.mp4` is a local video alongside the preserved YouTube demo.
- Saudi Labor RAG and Smart Restaurant: no project media files are currently connected.

Optional reports: `public/projects/beam-data/report.pdf`, `public/projects/saudi-labor-rag/report.pdf`, `public/projects/precrash-ai/report.pdf`, `public/projects/smart-restaurant/report.pdf`.

Optional local videos: `public/projects/beam-data/demo.mp4`, `public/projects/saudi-labor-rag/demo.mp4`, `public/projects/precrash-ai/demo.mp4`, `public/projects/smart-restaurant/demo.mp4`. PRECRASH already uses its supplied YouTube video, so no local video is needed for it. Supply captions or a transcript for videos containing speech; a written transcript can also be linked using `report`.

Use WebP, PNG, or JPG for images. The names above are a convention, not a requirement; update `src` if using another extension. Use the image's actual pixel dimensions and a meaningful description. The homepage crops a cover to 3:1; the detail page preserves its full image. Keep important content away from cover edges. Galleries preserve image proportions on mobile.

Example field structure (replace the descriptions and dimensions with actual image information before adding it):

```ts
media: {
  cover: { src: "/projects/beam-data/cover.webp", alt: "Describe the actual cover", width: 1600, height: 900 },
  gallery: [
    { src: "/projects/beam-data/overview.webp", alt: "Describe the actual screenshot", width: 1600, height: 900, caption: "Explain what the screenshot shows" },
    { src: "/projects/beam-data/architecture.webp", alt: "Describe the actual diagram", width: 1600, height: 900 },
  ],
  demoVideo: { kind: "file", src: "/projects/beam-data/demo.mp4", title: "Project demonstration" },
  presentation: "/projects/beam-data/presentation.pdf",
  report: "/projects/beam-data/report.pdf",
}
```

The Arabic project should share the real file paths and supply Arabic descriptions. Spreading an English project's `media` and replacing its `cover.alt`/`gallery`/video title is fine. PRECRASH currently has an explicit Arabic `media` object; update that object too when adding its assets.

Use site-root asset paths without a deployment prefix. `assetPath()` supplies `BASE_PATH`; never add `/portfolio` to content. `next/link` handles the prefix for project routes separately. External media/links retain their full URL. A YouTube video uses `kind: "youtube"` with a verified `https://www.youtube-nocookie.com/embed/VIDEO_ID` URL. Videos never autoplay. Presentation and report files appear as links, avoiding large homepage embeds.

The current CV is `public/cv/cv.pdf`; it was replaced manually with the approved two-page PDF. The download button remains valid on root and subpath deployments. The PRECRASH date (September 2025–June 2026) is also reflected in the portfolio content.
