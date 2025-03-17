/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'portfolio-new'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
}

module.exports = nextConfig 