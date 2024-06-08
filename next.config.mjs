// @ts-check

/** @type {import("next").NextConfig} */
export default {
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
