export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-new' : '';
  return `${basePath}${path}`;
} 