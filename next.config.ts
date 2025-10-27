import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO Optimization
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/webp", "image/avif"],
  },

  // Performance
  compress: true,

  // Headers za SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
