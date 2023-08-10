import {
  CategoryInfo,
  ImageInfo,
  BasicResponse,
  PhotoRequest,
  PaginationInfo,
  SortInfo,
} from '@/types';

// 이미지 분류 결과 요청
export type CategoryRequest = PhotoRequest;

export interface CategoryData {
  // TODO: 추후 카테고리가 고정 될 여지가 있음 (백엔드와 상의가 필요)
  categories: string[];
}

export type CategoryResponse = BasicResponse<CategoryData>;

// 분류 결과 전체 조회
export interface CategoryResultRequest {
  size: number; // 받고 싶은 상위(사진이 많은 순) 클래스 개수
}

export interface CategoryResultData {
  categories: CategoryInfo[];
}

export type CategoryResultResponse = BasicResponse<CategoryResultData>;

// 분류 결과 세부 조회
export interface CategoryDetailRequest {
  size: number;
  page: number;
  order?: string; // order가 선택적이므로 optional로 정의
}

export interface DetailedCategoryData {
  content: ImageInfo[];
  pageable: PaginationInfo;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortInfo;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export type DetailedCategoryResponse = BasicResponse<DetailedCategoryData>;
