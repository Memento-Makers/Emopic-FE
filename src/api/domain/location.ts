import { basicFetch, mutateFetch } from '../fetchFunctions';
import { CurrentLocationPhoto, LatestLocationPhoto } from '@/types';

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
  // 가장 최근 사진 위치정보 조회
  getLatestLocationPhoto: async (): Promise<LatestLocationPhoto> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations/recent`
    );

    const result = await response.json();
    return result.data;
  },
};
