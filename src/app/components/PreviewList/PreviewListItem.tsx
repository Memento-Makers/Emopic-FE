import Link from 'next/link';
export interface PreviewListItemProps {
  imageUrl: string;
  photoId: number;
}

export const PreviewListItem = ({
  imageUrl,
  photoId,
}: PreviewListItemProps) => {
  return (
    <Link href={`photos/${photoId}`}>
      <div className="carousel-item w-[120px] h-[120px]">
        <img
          width={120}
          height={120}
          src={imageUrl}
          alt={'이미지 미리보기'}
          className="rounded object-cover "
        />
      </div>
    </Link>
  );
};
