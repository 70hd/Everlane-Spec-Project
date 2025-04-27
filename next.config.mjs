/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
        domains: ['us.sunspel.com', 'media.everlane.com'],
      },
};

export default nextConfig;
