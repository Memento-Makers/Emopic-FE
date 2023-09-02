'use client';

import Image from 'next/image';
import { BasicHeader, SearchResultList, searchResult } from '@/components';
import RootLayout from '@/app/layout';
import { useSearchParams } from 'next/navigation';

// http://localhost:3000/search/result?query=검색어

// TODO: 더미데이터 만들기 용 함수 utils 에 분리하기
const generateDummyData = () => {
  const dummyData = [];

  for (let i = 0; i < 7; i++) {
    // 7일 동안 반복
    const date = new Date('2023-08-22');
    date.setDate(date.getDate() + i);

    const searchResults = [];
    const resultsCount = Math.floor(Math.random() * 6) + 5; // 5 ~ 10 사이의 랜덤한 수

    for (let j = 0; j < resultsCount; j++) {
      searchResults.push({
        imageUrl: `https://picsum.photos/300?${Math.random()}`, // 랜덤한 이미지 URL
        id: j + 1,
      });
    }

    dummyData.push({
      date,
      searchResults,
    });
  }

  return dummyData;
};

const dummyData = generateDummyData();

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('query');

  console.log(dummyData);

  return (
    <>
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main>
        {/* TODO: 임시 디자인 */}
        <p className=" text-[24px] text-red-700">{query}에 대한 검색 결과</p>
        {dummyData.map(({ date, searchResults }, index) => (
          <SearchResultList
            key={index}
            date={date}
            searchResults={searchResults as searchResult[]}
          />
        ))}
      </main>
    </>
  );
}
