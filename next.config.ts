import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // emit a fully static /out directory
  trailingSlash: true,    // index.html per route — required for GH Pages
  images: {
    unoptimized: true,    // next/image without a Node server
  },
};

export default nextConfig;
