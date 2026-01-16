import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // To export the site as static files
  // Optional: If your site is in a subfolder (e.g., domain.com/my-site/)
  // basePath: '/my-site',
  images: {
    unoptimized: true, // Required for static export unless using a third-party loader
  },
};

export default nextConfig;
