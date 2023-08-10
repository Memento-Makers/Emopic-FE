export interface BasicResponse<T> {
  message: string;
  status: number;
  data: T;
}

// 사진 정보를 이용한 Request에 사용
export interface PhotoRequest {
  photoId: number;
}

// 페이지네이션 정보에 대한 인터페이스
export interface SortInfo {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface PaginationInfo {
  sort: SortInfo;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
