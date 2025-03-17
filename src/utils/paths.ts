export const REPO_NAME = 'portfolio-new'

export function getImagePath(path: string): string {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // If not on localhost, we're on GitHub Pages
    return window.location.hostname !== 'localhost' 
      ? `/${REPO_NAME}${path}` 
      : path;
  }
  
  // Server-side rendering fallback
  return process.env.NODE_ENV === 'production' 
    ? `/${REPO_NAME}${path}` 
    : path;
}

// Helper for other static assets if needed
export function getAssetPath(path: string): string {
  return getImagePath(path);
} 