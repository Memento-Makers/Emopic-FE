import { searchResult } from './SearchResultItem';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SearchResultItem } from './SearchResultItem';
import { Spacer } from '@/components';

export interface SearchResultListProps {
  date: Date;
  // TODO: 임시 데이터, 추후 API 명세에 따라 변경하기
  searchResults: searchResult[];
}

export const SearchResultList = ({
  date,
  searchResults,
}: SearchResultListProps) => {
  const today = dayjs(date).locale('ko');

  return (
    <div className="  bg-base-200 px-2 py-2 mb-4">
      <span className=" font-bold text-[20px]">
        {today.format('YYYY년 M월 D일 (ddd)')}
      </span>
      <Spacer size={10} />
      <ul className=" grid row-auto grid-cols-3 gap-4 box-border">
        {searchResults.map((searchResult, index) => (
          <SearchResultItem key={index} searchResult={searchResult} />
        ))}
      </ul>
    </div>
  );
};
