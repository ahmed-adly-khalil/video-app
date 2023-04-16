/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mongoURI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;
