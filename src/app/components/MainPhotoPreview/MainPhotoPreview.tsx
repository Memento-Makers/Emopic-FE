import { ThumbnailPhotoData } from '@/types';
import Link from 'next/link';
import { EmotionIconSmall, StyledImage } from '@/components';

interface MainPhotoPreviewProps {
  date: string; // 문자열로 변환된 날짜 스트링
  photos: ThumbnailPhotoData[];
}

const MainPhotoPreview = ({ date, photos }: MainPhotoPreviewProps) => {
  return (
    <div className="mb-[24px]">
      <p className=" text-[18px] font-bold mb-[16px]">{date}</p>
      <ul className=" grid grid-cols-3 gap-[2px]">
        {photos.map(photo => {
          return (
            <Link key={photo.photoId} href={`/photos/${photo.photoId}`}>
              <li className=" flex flex-col gap-[2px] relative">
                <StyledImage
                  src={photo.thumbnailUrl}
                  alt={'썸네일 이미지'}
                  className={`rounded overflow-hidden`}
                  width={145}
                  height={145}
                />
                <div className=" flex gap-[2px] absolute bottom-[2px] right-[4px]">
                  {photo.emotions.main.length !== 0 && (
                    <EmotionIconSmall
                      emotionId={photo.emotions.main[0].emotionId}
                    />
                  )}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MainPhotoPreview;
