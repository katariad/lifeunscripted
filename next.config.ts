import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [278, 556, 768, 1024, 1200], // Match your sizes
    imageSizes: [278, 300, 556], // Specific image sizes
    minimumCacheTTL: 3600, // Cache images for 1 hour
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
};

export default nextConfig;
