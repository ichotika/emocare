/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverComponentsExternalPackages: ["mongoose"],
  },
  env: {},
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "lh3.googleusercontent.com",
          },
          {
              protocol: "https",
              hostname: "images.ctfassets.net",
          },
      ],
  },
  webpack(config) {
      config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
      };
      return config;
  },
};

module.exports = nextConfig;
