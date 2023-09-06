'use client';

import { BasicHeader } from '@/components';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  SearchBoxProps,
} from 'react-instantsearch';
import { Hit } from 'instantsearch.js';

import Client from '@searchkit/instantsearch-client';
import dayjs from 'dayjs';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const searchClient = Client({
  url: '/api/search',
});

//새로운 날짜가 등장했는지 확인하는 용도
const dateSet = new Set<String>();
//이전에 view에 보여줬던 오브젝트가 있는지 확인하는 용도
const objectSet = new Set<String>();

// dict들 초기화 <- 검색할때마다 view를 새롭게 보여주기 위해
const initDict = () => {
  dateSet.clear();
  objectSet.clear();
};

// user_id 에 맞는 사진만 필터링 해서 가져옴
const user_id = process.env.NEXT_PUBLIC_DUMMY_USER_ID; // TODO: 더미 user_id 사용중
const defaultFilter = () => {
  return 'user_id:' + user_id;
};

//검색할때마다 동작하는 함수
const myQuery: SearchBoxProps['queryHook'] = (query, search) => {
  initDict();
  search(query);
};

const HitView = ({ hit }: { hit: Hit }) => {
  //검색 결과가 HitView 내용을 반복문 돌며 수행함
  const [hover, setHover] = useState(false);

  // const key = hit.snapped_at.split('T')[0]; // 날짜 데이터 중간에 T 들어가 있어서 그걸로 분리함
  const { objectID, snapped_at, caption, signed_url, class_list } = hit;

  const formattedDate = dayjs(snapped_at).format('YYYY년 M월 D일');

  if (objectSet.has(objectID)) {
    initDict();
  } else {
    objectSet.add(objectID);
  }

  // const isNewDate = !dateSet.has(key);
  // if (isNewDate) dateSet.add(key);

  return (
    <Link href={`/photos/${objectID}`}>
      <div
        className="card w-96 bg-base-100 shadow-xl my-[20px] cursor-pointer"
        key={objectID}
      >
        <figure
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative"
        >
          <img
            src={signed_url}
            className={`${
              hover ? 'brightness-75' : 'brightness-100'
            } w-[100%] h-[200px] object-cover`}
            alt="분류 이미지"
          />
          {hover && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 line-clamp-3">
              {caption}
            </div>
          )}
        </figure>
        <div className="card-body">
          <div className=" flex gap-2">
            {class_list &&
              class_list.map((image_class: string) => (
                <div
                  key={`${objectID}/${image_class}`}
                  className="badge badge-outline badge-primary"
                >
                  {image_class}
                </div>
              ))}
          </div>
          <p>{formattedDate}</p>
          {/* <p>{caption}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default function SearchPage() {
  return (
    <div className="relative flex flex-col">
      <BasicHeader profileImage="https://picsum.photos/200" />

      <main className="px-3 flex-grow w-[100%]">
        <InstantSearch
          indexName="nori_ngram_photo"
          searchClient={searchClient}
          routing
        >
          <Configure hitsPerPage={15} />
          <div className="container">
            <div
              className="w-[100%] flex items-center px-3 rounded-full 
              border-[1px] border-solid h-[50px]  text-[18px] 
               placeholder:text-gray-400
              outline-none px-3 py-2 shadow-md 
              transition ease-in duration-200 "
            >
              <SearchBox
                queryHook={myQuery}
                onSubmit={initDict}
                searchAsYouType={false}
                className=" flex-grow"
                placeholder="사진의 내용으로 검색해보세요."
                submitIconComponent={() => <></>}
                resetIconComponent={() => <></>}
                loadingIconComponent={() => <></>}
              />
            </div>

            <Hits hitComponent={HitView} />
          </div>
        </InstantSearch>
      </main>
    </div>
  );
}
