'use client';

import { useAllPhoto, useUploadImage } from '@/api';
import './globals.css';
import {
  BasicHeader,
  FloatingButton,
  BeforeUploadToastContent,
  AfterFileUploadToastContent,
  MainPhotoPreview,
  MainPhotoPreviewSkeleton,
} from '@/components';
import { DUMMY_IMAGE } from '@/constants';
import { ThumbnailPhotoData } from '@/types';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { useInfiniteScroll } from '@/hooks';
import { RefObject, useEffect, useState } from 'react';

interface DateGroup {
  date: string;
  photos: ThumbnailPhotoData[];
}

const groupByDate = (photos: ThumbnailPhotoData[]): DateGroup[] => {
  const groupedMap: { [key: string]: ThumbnailPhotoData[] } = {};
  const groupedArray: DateGroup[] = [];

  photos.forEach(photo => {
    const date = dayjs(photo.uploadDateTime).format('YYYY년 M월 D일');

    if (!groupedMap[date]) {
      groupedMap[date] = [];
    }

    groupedMap[date].push(photo);
  });

  for (const date in groupedMap) {
    groupedArray.push({ date, photos: groupedMap[date] });
  }

  return groupedArray;
};

export default function Home() {
  const postImageUpload = useUploadImage();
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useAllPhoto();

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
      setGrouped(newGrouped); // 상태 업데이트
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

  const handleFileChange = async (files: File[]) => {
    if (files.length > 0) {
      toast(
        <BeforeUploadToastContent
          preview={files[0]}
          fileCount={files.length}
        />,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );

      try {
        const uploadPromises = files.map(async (file, index) => {
          const formData = new FormData();
          formData.append('image', file);
          const res = await postImageUpload.mutateAsync({ formData });
          return res;
        });

        const results = await Promise.all(uploadPromises);

        toast(<AfterFileUploadToastContent files={files} />, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (error) {
        toast.error('파일을 업로드하는데 문제가 발생하였습니다.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  return (
    <>
      <BasicHeader profileImage={DUMMY_IMAGE} />
      <FloatingButton
        handleFileChange={files => {
          handleFileChange(files);
        }}
      />
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
