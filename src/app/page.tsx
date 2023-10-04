'use client';

import { useAllPhoto } from '@/api';
import './globals.css';
import {
  BasicHeader,
  FloatingButton,
  // Hero,
  // MainPhotoPreview,
  BeforeUploadToastContent,
  AfterFileUploadToastContent,
} from '@/components';
import { DUMMY_IMAGE } from '@/constants';
import { ThumbnailPhotoData } from '@/types';
import dayjs from 'dayjs';

import { toast } from 'react-toastify';

import {
  useGetSignedURL,
  useGetCaption,
  useGetClassification,
  uploadFile,
} from '@/api';

import MainPhotoPreview from './components/MainPhotoPreview/MainPhotoPreview';
interface DateGroup {
  date: string;
  photos: ThumbnailPhotoData[];
}

const groupByDate = (photos: ThumbnailPhotoData[]): DateGroup[] => {
  const groupedMap: { [key: string]: ThumbnailPhotoData[] } = {};
  const groupedArray: DateGroup[] = [];

  photos.forEach(photo => {
    const date = dayjs(photo.uploadDateTime).format('YYYY년 MM월 DD일');

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
  // 1. 데이터를 받아온다.
  const getSignedURLMutation = useGetSignedURL();
  const getCaption = useGetCaption();
  const getClassification = useGetClassification();

  const { data, isLoading } = useAllPhoto();

  let grouped = [] as DateGroup[];

  // if (data.content) {
  //   grouped = groupByDate(data.content);
  // }

  if (!isLoading) {
    grouped = groupByDate(data.content);
  }

  console.log('grouped', grouped);
  console.log('data', data);

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
          // fetchSignedURL 실행
          const fileName =
            dayjs().format('YYYYMMDDHHmmssSSS') +
            process.env.NEXT_PUBLIC_DUMMY_USER_ID +
            index;

          const { photoId, signedUrl } = await getSignedURLMutation.mutateAsync(
            fileName
          );

          // 실제 파일 업로드 로직
          await uploadFile(signedUrl, file);

          // 이미지 캡션 요청
          const { caption } = await getCaption.mutateAsync(photoId);

          // 이미지 분류 요청
          const { categories } = await getClassification.mutateAsync(photoId);

          return { caption, categories, photoId };
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

  // 받아온 데이터를 날짜별로 그룹화 한다.
  return (
    <>
      <BasicHeader profileImage={DUMMY_IMAGE} />
      <FloatingButton
        handleFileChange={files => {
          handleFileChange(files);
        }}
      />
      <main>
        {/* <Hero /> */}
        {!isLoading &&
          grouped.map(group => (
            <MainPhotoPreview
              key={group.date}
              date={group.date}
              photos={group.photos}
            />
          ))}
      </main>
    </>
  );
}
