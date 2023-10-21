import { basicFetch, mutateFetch } from '../fetchFunctions';
import { CurrentLocationPhoto, PhotoWithLocation } from '@/types';

export const locationAPI = {
  // 현재 위치에 따른 사진 정보
  getCurrentLocationPhoto: async (
    latitude: number,
    longitude: number
  ): Promise<CurrentLocationPhoto> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations/points?latitude=${latitude}&longitude=${longitude}`
    );

    const result = await response.json();
    return result.data;
  },
  //지도 전체 사진 조회
  getAllLocationPhoto: async (): Promise<PhotoWithLocation[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations`
    );

    const result = await response.json();
    return result.data;
  },
};
