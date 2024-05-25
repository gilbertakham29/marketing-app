/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/about",
      },
      {
        source: "/features",
        destination: "/features",
      },
    ];
  },
};

export default nextConfig;
