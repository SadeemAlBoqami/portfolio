/** @type {import('next').NextConfig} */

// Set BASE_PATH in your GitHub Actions workflow when deploying to
// GitHub Pages (e.g. "/portfolio"). Leave unset for Vercel.
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");

const nextConfig = {
  output: process.env.DEPLOY_TARGET === "github-pages" ? "export" : undefined,
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: process.env.DEPLOY_TARGET === "github-pages",
  },
};

export default nextConfig;
