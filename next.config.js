/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-new',
  assetPrefix: '/portfolio-new/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 