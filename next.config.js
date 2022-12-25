/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};
