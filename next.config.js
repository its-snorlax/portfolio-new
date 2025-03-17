/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'portfolio-new'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}` : '',
  images: {
    unoptimized: true,
    path: isProduction ? `/${repoName}/_next/image` : '/_next/image'
  },
}

module.exports = nextConfig 