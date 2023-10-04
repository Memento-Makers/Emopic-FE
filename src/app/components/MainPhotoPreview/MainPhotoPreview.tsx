import { ThumbnailPhotoData } from '@/types';
import Link from 'next/link';
import { EmotionIcon, StyledImage } from '@/components';

interface MainPhotoPreviewProps {
  date: string; // 문자열로 변환된 날짜 스트링
  photos: ThumbnailPhotoData[];
}

const MainPhotoPreview = ({ date, photos }: MainPhotoPreviewProps) => {
  return (
    <div className="mb-[24px]">
      <p className=" text-[18px] font-bold mb-[16px]">{date}</p>
      <ul className=" grid grid-cols-3 gap-[2px]">
        {photos.map(photo => (
          <Link href={`/photos/${photo.photoId}`}>
            <div key={photo.photoId} className=" flex flex-col gap-[2px]">
              <StyledImage
                src={photo.thumbnailUrl}
                alt={'썸네일 이미지'}
                className={`rounded overflow-hidden`}
                width={145}
                height={145}
              />
              <div>
                {/* <EmotionIcon emotionId={photo.emotions.main[0].emotionId} />
                {photo.emotions.sub.slice(2).map(subEmotion => (
                  <EmotionIcon
                    key={`${photo.photoId}/emotion/${subEmotion.emotionId}`}
                    emotionId={subEmotion.emotionId}
                  />
                ))} */}
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainPhotoPreview;
