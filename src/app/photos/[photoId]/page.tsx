'use client';

import {
  DetailBottomNavigation,
  ImageSkeleton,
  PhotoDetailHeader,
  PhotoDetailHeaderSkeleton,
} from '@/components';
import Image from 'next/image';

interface Params {
  photoId: string;
}

import { useDetailPhoto } from '@/api';
import dayjs from 'dayjs';
import { EmotionId } from '@/types';

export default function DetailPage({ params }: { params: Params }) {
  const { photoId } = params;
  const { data, isLoading } = useDetailPhoto(parseInt(photoId));

  // TODO: UploadDate의 경우, 백엔드에서 보내준 UTC String 에서 변환해야한다
  return (
    <div className="relative h-[100vh] flex flex-col">
      {!data && <PhotoDetailHeaderSkeleton />}
      {data && (
        <PhotoDetailHeader
          categories={data.categories}
          uploadDate={dayjs(data.uploadDateTime).format('YYYY년 MM월 DD일')}
        />
      )}

      <main className="bg-neutral flex flex-grow items-center justify-center">
        {(isLoading || !data) && (
          <ImageSkeleton
            width={500}
            style={{ width: '100%', height: '400px' }}
          />
        )}
        {data && (
          // TODO: 데이터 정제 이후에 next/image로 바꾸기
          <img
            src={data.signedUrl}
            width={200}
            height={160}
            alt={'현재 이미지'}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ width: '100%' }}
          />
        )}
      </main>

      <DetailBottomNavigation
        photoId={parseInt(photoId)}
        photoUrl={'/'}
        emotionList={
          data
            ? [...data.emotions.main, ...data.emotions.sub]
            : ([] as EmotionId[])
        }
      />
    </div>
  );
}
