import Image from 'next/image';
import { StyledImage } from '@/components';
import Link from 'next/link';

export interface LogoProps {
  width?: number | string;
  height?: number | string;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Link href="/">
      <StyledImage
        src={'/logo.png'}
        width={width}
        height={height}
        alt={'Emopic 로고 이미지'}
      />
    </Link>
  );
};
