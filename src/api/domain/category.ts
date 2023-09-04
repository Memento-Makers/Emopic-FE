import { basicFetch, mutateFetch } from '../fetchFunctions';
import { DetailedCategoryResponse, CategoryAllResponse } from '@/types';

export const categoryAPI = {
  // 이미지 분류 결과 요청 (분류 결과 조회)
  getClass: async (photoId: number) => {
    const result = await mutateFetch('api/v1/photos/categories', 'POST', {
      photoId,
    });
    return result.data;
  },
  // 분류 결과 세부 조회
  getCategories: async (
    categoryId: number
  ): Promise<DetailedCategoryResponse> => {
    const result = await basicFetch<DetailedCategoryResponse>(
      `api/v1/photos/categories/${categoryId}`
    );
    return result.data;
  },
  // 분류 결과 전체 조회
  getCategoriesAll: async (size?: number): Promise<CategoryAllResponse> => {
    const result = await basicFetch<CategoryAllResponse>(
      `/api/v1/photos/catgories?size=${size ? size : ''}`
    );
    return result.data;
  },
};
