'use client';

import { useDetailPhoto, useGetDiary } from '@/api';
import {
  DiaryPageHeader,
  DiaryContent,
  ImageSkeleton,
  DiaryContentSkeleton,
} from '@/components';
import { Emotion } from '@/types';
import Image from 'next/image';

interface Params {
  diaryId: string; // photoId와 같은 값
}

export default function DiaryPage({ params }: { params: Params }) {
  const { diaryId } = params;
  const { data, isLoading } = useDetailPhoto(parseInt(diaryId));
  const { data: diaryData, isLoading: isDiaryLoading } = useGetDiary(
    parseInt(diaryId)
  );

  return (
    <div className="h-[100vh] w-[100%]">
      <DiaryPageHeader photoId={parseInt(diaryId)} />
      <div className="relative w-[100%]">
        {!data && (
          <ImageSkeleton
            width={500}
            style={{ width: '100%', height: '500px' }}
          />
        )}

        {data && (
          <Image
            src={data?.signedUrl}
            width={200}
            height={160}
            alt={'현재 이미지'}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ width: '100%' }}
          />
        )}
        {(!data || !diaryData || isLoading) && (
          <DiaryContentSkeleton className="absolute z-[999] top-[300px] bg-white rounded-t-[15px] w-[100%]" />
        )}

        {data && diaryData && (
          <DiaryContent
            diaryContent={diaryData.diary}
            emotions={data.emotions}
            emotionList={
              data
                ? [...data.emotions.main, ...data.emotions.sub]
                : ([] as Emotion[])
            }
            className="absolute z-[999] top-[250px] bg-white rounded-t-[15px] w-[100%]"
            photoId={parseInt(diaryId)}
          />
        )}
      </div>
    </div>
  );
}
