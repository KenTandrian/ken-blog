// @ts-check

/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      { hostname: "links.papareact.com", protocol: "https" },
      { hostname: "cdn.sanity.io", protocol: "https" },
    ],
  },
};
