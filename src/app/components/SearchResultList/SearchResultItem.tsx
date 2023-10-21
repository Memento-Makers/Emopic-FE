import { StyledImage } from '@/components';

export interface searchResult {
  imageUrl: string; // 미리보기 썸네일 이미지
  id: number; // 이미지 개별 보기 리다이렉트를 위함
}

export interface SearchResultItemProps {
  searchResult: searchResult;
}

export const SearchResultItem = ({ searchResult }: SearchResultItemProps) => {
  return (
    <li>
      <div>
        <StyledImage
          src={searchResult.imageUrl}
          alt={`${searchResult.id}번 이미지`}
          width={135}
          height={135}
        />
      </div>
    </li>
  );
};
