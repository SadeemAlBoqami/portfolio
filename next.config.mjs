/** @type {import('next').NextConfig} */

// Set BASE_PATH in your GitHub Actions workflow when deploying to
// GitHub Pages (e.g. "/portfolio"). Leave unset for Vercel.
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  output: process.env.DEPLOY_TARGET === "github-pages" ? "export" : undefined,
  basePath,
  images: {
    unoptimized: process.env.DEPLOY_TARGET === "github-pages",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;