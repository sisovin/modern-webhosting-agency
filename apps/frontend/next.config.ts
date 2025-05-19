/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  // Either use webpack OR turbopack, not both
  // If you want to use turbopack (recommended as it's now stable):
  turbopack: {
    // Turbopack configuration options can go here
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  // If you prefer webpack, keep this and remove turbopack above
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
     }
     return config;
   },
  experimental: {
    // Turbo moved out of experimental
  },
  allowedDevOrigins: ['localhost', '192.168.50.130', '192.168.1.108'],
};

export default nextConfig;
