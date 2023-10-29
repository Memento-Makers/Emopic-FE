'use client';

import { useCityPhoto } from '@/api';
import {
  HeaderWithBackButton,
  MainPhotoPreview,
  MainPhotoPreviewSkeleton,
} from '@/components';
import { ThumbnailPhotoData } from '@/types';
import { useInfiniteScroll } from '@/hooks';
import { RefObject, useEffect, useState } from 'react';
import { groupByDate, DateGroup } from '@/utils';

interface Params {
  cityName: string;
}

export default function CityPage({ params }: { params: Params }) {
  const { cityName } = params;
  const city = decodeURIComponent(cityName);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useCityPhoto(city);

  const [grouped, setGrouped] = useState<DateGroup[]>([]);

  const handleInfiniteScroll = async () => {
    if (!hasNextPage) {
      return;
    }

    if (isFetching) {
      return;
    }

    if (hasNextPage && !isFetching) {
      await fetchNextPage();

      const newData = data?.pages
        .map(page => page.content.flat())
        .flat() as ThumbnailPhotoData[];

      const newGrouped = groupByDate(newData);
      setGrouped(newGrouped);
    }
  };

  const [loader, isScrollFetching] = useInfiniteScroll(() => {
    handleInfiniteScroll();
  });

  useEffect(() => {
    if (!isLoading && data) {
      const newData = data?.pages
        .map(page => page.content)
        .flat() as ThumbnailPhotoData[];

      const newGrouped = groupByDate(newData);
      setGrouped(newGrouped);
    }
  }, [isLoading, data]);

  return (
    <>
      <HeaderWithBackButton title={`${city}의 사진`} />

      <main>
        {isLoading && <MainPhotoPreviewSkeleton />}

        {!isLoading &&
          grouped.map(group => (
            <MainPhotoPreview
              key={`previewlist/${group.date}`}
              date={group.date}
              photos={group.photos}
            />
          ))}

        {!isLoading && hasNextPage && (
          <div
            className="w-[100%] mb-[24px]"
            ref={loader as RefObject<HTMLDivElement>}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="loading loading-ring text-primary w-[50px]"></div>
              <p className=" text-primary text-bold my-1">
                사진을 불러오는 중...
              </p>
            </div>
          </div>
        )}
      </main>
      <div className="w-[100%] h-[75px] "></div>
    </>
  );
}
