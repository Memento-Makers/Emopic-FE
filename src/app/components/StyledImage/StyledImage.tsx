import { BLUR_DATA_URL } from '@/constants';
import Image from 'next/image';

interface StyledImageProps {
  src: string;
  width?: number | string;
  height?: number | string;
  alt: string;
  className?: string;
  style?: object;
  placeholder?: 'blur' | 'empty' | undefined;
}

export const StyledImage = ({
  src,
  width = 'auto',
  height = 'auto',
  alt,
  className,
  style,
  placeholder = 'blur',
}: StyledImageProps) => {
  return (
    <div
      className={`${className} overflow-hidden relative`}
      style={{ ...style, width, height, objectFit: 'cover' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={placeholder && BLUR_DATA_URL}
      />
    </div>
  );
};
