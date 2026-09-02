# Portfolio

Next.js (App Router) + TypeScript + Tailwind + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Editing content (no component changes needed)

All text on the page — hero copy, focus areas, projects, skills, and
certifications — lives in one file:

```
data/portfolio-content.json
```

Open it, edit the JSON, save. Examples:

- **Add a project**: copy an existing object inside the `"projects"`
  array, give it a unique `"id"`, and fill in the fields.
- **Remove a project**: delete its object from the `"projects"` array.
- **Add a skill**: append a string to the relevant array under
  `"skills"` (e.g. `"Frameworks": [..., "FastAPI"]`). To add a new
  skill category, add a new key — the Skills section renders whatever
  keys exist automatically.
- **Add a certification**: append an object to `"certifications"`.
  Order in the array is the order shown (most recent first is a
  reasonable convention, but nothing enforces it).

No file under `app/` or `components/` needs to change for any of this.
The JSON is validated against the TypeScript types in `lib/content.ts`
at build time — if a required field is missing, `npm run build` will
fail with a type error rather than silently rendering broken UI.

## Design tokens

Colors are CSS variables defined in `app/globals.css` (`:root` for
light mode, `.dark` for dark mode) and mapped to Tailwind color names
in `tailwind.config.ts`. To adjust the palette, edit the variables in
one place — every component already references the Tailwind names
(`bg-background`, `text-heading`, `border-accent`, etc.), not raw hex
values.

## Deployment

### Vercel (recommended, supports dynamic features)

Push to GitHub and import the repo at vercel.com/new. No config
needed — `next.config.mjs` only changes behavior when
`DEPLOY_TARGET=github-pages` is set.

### GitHub Pages (static export)

```bash
DEPLOY_TARGET=github-pages BASE_PATH=/your-repo-name npm run build
```

This produces a static site in `/out`. Add a GitHub Actions workflow
that runs the above command and publishes `/out` to the `gh-pages`
branch (or use the built-in "GitHub Pages" deploy source pointed at
the Actions artifact).
