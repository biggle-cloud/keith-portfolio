import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Clean URLs for the Captain Cook Museum catalogue flipbooks
      { source: "/smoking-coasts", destination: "/smoking-coasts-flipbook/index.html" },
      { source: "/fish-and-ships", destination: "/fish-and-ships-flipbook/index.html" },
      { source: "/whitby-time-of-cook", destination: "/whitby-time-of-cook-flipbook/index.html" },
      { source: "/ice", destination: "/ice-flipbook/index.html" },
      { source: "/my-life", destination: "/my-life-flipbook/index.html" },
    ];
  },
};

export default nextConfig;
