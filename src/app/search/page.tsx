'use client';

import {
  BasicHeader,
  FloatingButton,
  BeforeUploadToastContent,
  AfterFileUploadToastContent,
  PreviewList,
  Spacer,
  PreviewListSkeleton,
} from '@/components';
import { toast } from 'react-toastify';

import {
  useGetSignedURL,
  useGetCaption,
  useGetClassification,
  uploadFile,
  useCategoryAll,
} from '@/api';
import dayjs from 'dayjs';
import { Fragment } from 'react';

import Link from 'next/link';

// TODO: 현재는 메인 페이지를 SearchPage 로 사용하고 있으나,
// 이 후에 메인 페이지가 변화할 경우 플로팅 버튼과 관련된 로직을
// 해당 페이지로 옮겨야 한다.

export default function SearchPage() {
  const getSignedURLMutation = useGetSignedURL();
  const getCaption = useGetCaption();
  const getClassification = useGetClassification();

  // TODO: 추후에 SSR 적용하기
  const { data: categoryData, isLoading: isCategoryLoading } =
    useCategoryAll(10);

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

  return (
    <div className="relative h-[100vh] flex flex-col">
      <BasicHeader profileImage="https://picsum.photos/200" />
      <FloatingButton
        handleFileChange={files => {
          handleFileChange(files);
        }}
      />
      <main className="px-3 flex-grow w-[100%]">
        <Link href="/search/result" className=" cursor-text">
          <div
            className="w-[100%] flex items-center px-3 rounded-full 
              border-[1px] border-solid h-[50px]  text-[18px] 
              outline-none px-3 py-2 shadow-md 
              transition ease-in duration-200 text-gray-400 mb-[24px]"
          >
            사진의 내용으로 검색해보세요.
          </div>
        </Link>

        {isCategoryLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <PreviewListSkeleton key={`preview/skeleton/${index}`} />
          ))}

        {!isCategoryLoading &&
          categoryData!.categories &&
          categoryData!.categories.map(({ categoryId, name, count }, index) => {
            if (categoryId === 80) return <div key={categoryId}></div>;

            return (
              <Fragment key={categoryId}>
                <PreviewList
                  key={`${categoryId}/${name}`}
                  title={name}
                  categoryId={categoryId}
                  count={count}
                />
                <Spacer size={24} key={`${categoryId}/${name}/${index}`} />
              </Fragment>
            );
          })}
      </main>
    </div>
  );
}
