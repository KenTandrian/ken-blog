import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    taint: true,
  },
  images: {
    remotePatterns: [
      { hostname: "links.papareact.com", protocol: "https" },
      { hostname: "cdn.sanity.io", protocol: "https" },
    ],
  },
};

export default nextConfig;
