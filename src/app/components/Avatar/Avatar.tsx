import { StyledImage } from '@/components';

export interface AvatarProps {
  profileImage: string;
  width: number;
  height: number;
}

export const Avatar = ({ profileImage, width, height }: AvatarProps) => {
  return (
    <div className="avatar">
      <StyledImage
        src={profileImage}
        width={width}
        height={height}
        alt="사용자 프로필 이미지"
        className="rounded-full overflow-hidden"
      />
    </div>
  );
};
