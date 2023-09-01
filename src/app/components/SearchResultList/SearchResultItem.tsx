import { StyledImage } from '@/components';

export interface searchResult {
  imageUrl: string; // 미리보기 썸네일 이미지
  id: number; // 이미지 개별 보기 리다이렉트를 위함
}

export interface SearchResultItemProps {
  // TODO: 임시 데이터, 추후 API 명세에 따라 변경하기
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
        {/* TODO: 이미지에 저장된 감정 추가하기 부분 */}
      </div>
    </li>
  );
};
