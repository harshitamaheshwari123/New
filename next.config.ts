import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination:
          "https://buildingbharatresume.s3.ap-south-1.amazonaws.com/emailImages/bb1.png",
      },
      {
        source: "/favicon.png",
        destination:
          "https://buildingbharatresume.s3.ap-south-1.amazonaws.com/emailImages/bb1.png",
      },
      {
        source: "/favicon",
        destination:
          "https://buildingbharatresume.s3.ap-south-1.amazonaws.com/emailImages/bb1.png",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate, max-age=0",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
          { key: "Content-Type", value: "image/png" },
        ],
      },
      {
        source: "/logo.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate, max-age=0",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.uniindia.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
