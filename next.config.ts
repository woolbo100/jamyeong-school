import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/courses/metal',
        destination: '/courses/air',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
