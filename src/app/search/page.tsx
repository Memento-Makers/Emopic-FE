'use client';

import {
  BasicHeader,
  PreviewList,
  Spacer,
  PreviewListSkeleton,
  LocationPhoto,
  CurrentLocationPhoto,
} from '@/components';

import { useLatestLocationPhoto, useCategoryAll } from '@/api';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { DUMMY_IMAGE } from '@/constants';

import { RxTriangleUp, RxTriangleRight } from 'react-icons/rx';
import { GrGallery } from 'react-icons/gr';
import { FaLocationDot } from 'react-icons/fa6';

export default function SearchPage() {
  const { data: categoryData, isLoading: isCategoryLoading } =
    useCategoryAll(10);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const { data: locationPhotoData, isLoading: isLocationPhotoLoading } =
    useLatestLocationPhoto();

  return (
    <div className="relative h-[100vh] flex flex-col">
      <BasicHeader profileImage={DUMMY_IMAGE} />

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

        <section>
          <div className="flex gap-[5px] items-center mb-[15px]">
            <h2 className=" text-[24px] font-bold flex gap-[5px] items-center">
              <GrGallery />
              분류 별 앨범
            </h2>

            <button
              onClick={toggleShowAll}
              className="text-primary text-[16px]"
            >
              {showAll ? (
                <span className="flex gap-[5px] items-center">
                  <RxTriangleUp className="text-[24px]" />
                  접기
                </span>
              ) : (
                <span className="flex gap-[5px] items-center">
                  <RxTriangleRight className="text-[24px]" />
                  분류 더 보기
                </span>
              )}
            </button>
          </div>

          {isCategoryLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <PreviewListSkeleton key={`preview/skeleton/${index}`} />
            ))}

          {!isCategoryLoading && categoryData!.categories && (
            <>
              {(showAll
                ? categoryData!.categories
                : categoryData!.categories.slice(0, 3)
              ).map(({ categoryId, name, count }, index) => {
                return (
                  <Fragment key={categoryId}>
                    <PreviewList
                      key={`${categoryId}/${name}`}
                      title={name}
                      categoryId={categoryId}
                      count={count}
                    />
                    <Spacer size={16} key={`${categoryId}/${name}/${index}`} />
                  </Fragment>
                );
              })}
            </>
          )}
        </section>

        <section>
          <h2 className="text-[24px] font-bold flex gap-[5px] items-center mb-[15px]">
            <FaLocationDot />
            장소 별 앨범
          </h2>

          <div className=" flex gap-[10px] mb-[80px] ">
            <CurrentLocationPhoto />

            {isLocationPhotoLoading && (
              <div className="animate-pulse bg-gray-400 w-[190px] h-[190px] animate-pulse rounded-lg"></div>
            )}

            {!isLocationPhotoLoading && locationPhotoData && (
              <LocationPhoto photo={locationPhotoData} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
