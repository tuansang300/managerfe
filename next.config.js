/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  env: {
    WSCONNECT: process.env.WS_CONNECTION,
  },
};

module.exports = nextConfig;
