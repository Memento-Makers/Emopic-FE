import { basicFetch, mutateFetch } from '../fetchFunctions';
import { CategoryDetailData, CategoryAllData } from '@/types';

export const categoryAPI = {
  // 이미지 분류 결과 요청 (분류 결과 조회)
  getClass: async (photoId: number) => {
    const result = await mutateFetch('api/v1/photos/categories', 'POST', {
      photoId,
    });
    return result.data;
  },
  // 분류 결과 세부 조회
  getCategoryDetail: async (
    categoryId: number,
    size?: number
  ): Promise<CategoryDetailData> => {
    const result = await basicFetch<CategoryDetailData>(
      `api/v1/photos/categories/${categoryId}?size=${size ? size : '10'}`
    );

    return result.data;
  },
  // 분류 결과 전체 조회
  getCategoriesAll: async (size?: number) => {
    const result = await basicFetch<CategoryAllData>(
      `api/v1/photos/categories?size=${size ? size : '6'}`
    );
    return result.data;
  },
};
