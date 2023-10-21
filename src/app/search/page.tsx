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
  // TODO: 추후에 SSR 적용하기
  const { data: categoryData, isLoading: isCategoryLoading } =
    useCategoryAll(10);

  return (
    <div className="relative h-[100vh] flex flex-col">
      <BasicHeader profileImage="https://picsum.photos/200" />

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
