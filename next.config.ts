import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect 404 paths to chatslide.ai to reclaim backlink equity
      // Existing pages (/, /recommendations, /sponsors) are served natively
      {
        source: '/:path((?!recommendations|sponsors|_next|favicon).+)',
        destination: 'https://www.chatslide.ai/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
