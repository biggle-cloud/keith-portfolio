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
      // Jacklin's restaurant website concept — shared by link only, not in site nav
      { source: "/jacklins", destination: "/jacklins-concept/index.html" },
      { source: "/jacklins/menu", destination: "/jacklins-concept/menu.html" },
      { source: "/jacklins/fluid", destination: "/jacklins-fluid/index.html" },
      { source: "/jacklins/fluid/menu", destination: "/jacklins-fluid/menu.html" },
      // Joplins (correct name for the concept above) — same pages
      { source: "/joplins", destination: "/jacklins-concept/index.html" },
      { source: "/joplins/menu", destination: "/jacklins-concept/menu.html" },
      { source: "/joplins/fluid", destination: "/jacklins-fluid/index.html" },
      { source: "/joplins/fluid/menu", destination: "/jacklins-fluid/menu.html" },
      // Brokk Hire UK website concept — shared by link only, not in site nav
      { source: "/brokksite", destination: "/brokk-site/index.html" },
      { source: "/brokksite/for-sale", destination: "/brokk-site/for-sale.html" },
      ...["70", "110", "170", "200", "300", "500", "800"].map((n) => ({
        source: `/brokksite/hire/brokk-${n}`,
        destination: `/brokk-site/hire/brokk-${n}.html`,
      })),
    ];
  },
};

export default nextConfig;
