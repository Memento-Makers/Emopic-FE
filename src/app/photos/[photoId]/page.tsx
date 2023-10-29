'use client';

import {
  DetailBottomNavigation,
  ImageSkeleton,
  PhotoDetailHeader,
  PhotoDetailHeaderSkeleton,
  DetailBottomNavigationSkeleton,
} from '@/components';
import Image from 'next/image';

interface Params {
  photoId: string;
}

import { useDetailPhoto } from '@/api';
import dayjs from 'dayjs';
import { Emotion } from '@/types';

export default function DetailPage({ params }: { params: Params }) {
  const { photoId } = params;
  const { data, isLoading } = useDetailPhoto(parseInt(photoId));

  return (
    <div className="relative h-[100%] flex flex-col">
      {!data && <PhotoDetailHeaderSkeleton />}
      {data && (
        <PhotoDetailHeader
          categories={data.categories}
          uploadDate={dayjs(data.uploadDateTime).format('YYYY년 M월 D일')}
        />
      )}

      <main className="bg-neutral flex flex-grow items-center justify-center max-h-[100vh]">
        {(isLoading || !data) && (
          <ImageSkeleton
            width={500}
            style={{ width: '100%', height: '400px' }}
          />
        )}
        {data && (
          <img
            src={data.signedUrl}
            width={200}
            height={160}
            alt={'현재 이미지'}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ width: '100%' }}
            className="max-h-[80vh]"
          />
        )}
      </main>

      {(!data || isLoading) && <DetailBottomNavigationSkeleton />}

      {data && (
        <DetailBottomNavigation
          photoId={parseInt(photoId)}
          photoUrl={data.signedUrl}
          emotionList={
            data
              ? [...data.emotions.main, ...data.emotions.sub]
              : ([] as Emotion[])
          }
          caption={data?.diaryContent as string}
        />
      )}
    </div>
  );
}
