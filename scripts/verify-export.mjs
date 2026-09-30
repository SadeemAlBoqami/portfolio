import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

// Validate the actual deployment artifact, including paths emitted by Next itself.
const root = path.resolve("out");
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");
assert(existsSync(root), "Build the static export before running this check.");
const required = ["index.html", "cv/cv.pdf", ...["image-generation-infrastructure", "saudi-labor-rag", "precrash-ai", "smart-restaurant"].map(slug => `projects/${slug}/index.html`)];
for (const file of required) assert(existsSync(path.join(root, file)), `Missing export: ${file}`);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : file.endsWith(".html") ? [file] : [];
  });
}
let references = 0;
const htmlFiles = walk(root);
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs in ${file}`);
  for (const tag of html.matchAll(/<(?:a|link|script|img|video|source)\b[^>]*>/g)) {
    const match = tag[0].match(/\b(?:href|src)="([^"]*)"/);
    if (!match) continue;
    const url = match[1].replaceAll("&amp;", "&");
    assert(url.length, `Empty link or asset in ${file}`);
    if (!url.startsWith("/") && !url.startsWith("#")) continue;
    if (url.startsWith("//")) continue;
    const [pathname, fragment] = url.split("#");
    let target = file;
    if (pathname) {
      assert(!basePath || pathname === basePath || pathname.startsWith(`${basePath}/`), `Missing base path: ${url}`);
      const relative = decodeURIComponent(pathname.slice(basePath.length).split("?")[0]).replace(/^\//, "");
      target = path.resolve(root, relative);
      assert(target === root || target.startsWith(root + path.sep), `Path outside export: ${url}`);
      if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, "index.html");
      assert(existsSync(target), `Broken local reference in ${file}: ${url}`);
    }
    if (fragment && target.endsWith(".html")) {
      assert(readFileSync(target, "utf8").includes(`id="${fragment}"`), `Missing anchor: ${url}`);
    }
    references++;
  }
}
console.log(`Verified ${htmlFiles.length} HTML files, four project routes, CV, and ${references} local references under ${basePath || "/"}.`);
