import { StyledImage } from '@/components';

export interface PreviewListItemProps {
  imageUrl: string;
}

export const PreviewListItem = ({ imageUrl }: PreviewListItemProps) => {
  return (
    <div className="carousel-item">
      <StyledImage
        width={140}
        height={140}
        src={imageUrl}
        alt={'이미지 미리보기'}
        className="rounded-box"
      />
    </div>
  );
};
