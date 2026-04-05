import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // On GitHub Pages the site lives at /disha-training-academy/
  // basePath prefixes all routes; assetPrefix prefixes all _next/* assets
  basePath: isProd ? "/disha-training-academy" : "",
  assetPrefix: isProd ? "/disha-training-academy/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
