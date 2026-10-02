import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Clean URL for the Captain Cook Museum catalogue flipbook
      { source: "/smoking-coasts", destination: "/smoking-coasts-flipbook/index.html" },
    ];
  },
};

export default nextConfig;
