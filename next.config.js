/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
