// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
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
