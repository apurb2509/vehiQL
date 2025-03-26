import { Value } from "@radix-ui/react-select";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roszsdaennohwkjdznng.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://vehiql-waitinglist.created.app/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

