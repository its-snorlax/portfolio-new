import Image, { ImageProps } from 'next/image'
import { getImagePath } from '@/utils/paths'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  return (
    <Image
      src={getImagePath(src)}
      {...props}
    />
  );
} 