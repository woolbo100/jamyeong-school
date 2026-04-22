import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
