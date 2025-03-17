export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isProduction = process.env.NODE_ENV === 'production'
  const baseUrl = isProduction ? 'https://its-snorlax.github.io/portfolio-new' : ''
  return `${baseUrl}${src}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`
} 