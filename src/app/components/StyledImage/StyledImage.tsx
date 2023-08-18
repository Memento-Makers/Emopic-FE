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

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/epDqWsAAAAASUVORK5CYII=';

export const StyledImage = ({
  src,
  width,
  height,
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
