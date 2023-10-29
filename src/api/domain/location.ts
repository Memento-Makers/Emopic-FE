import {
  CurrentLocationPhoto,
  LatestLocationPhoto,
  PhotoWithLocation,
  RepresentativePhoto,
  AllPhotoData,
} from '@/types';

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
  //지도 전체 사진 조회
  getAllLocationPhoto: async (): Promise<PhotoWithLocation[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations`
    );

    const result = await response.json();
    return result.data;
  },
  // 지역별 대표 사진 조회
  getRepresentativeLocation: async (): Promise<RepresentativePhoto[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations/city`
    );

    const result = await response.json();
    return result.data;
  },
  // 지역의 전체 사진 조회
  getCityPhoto: async (city: string, page: number): Promise<AllPhotoData> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/locations/city/photos?city=${city}&page=${page}`
    );

    const result = await response.json();
    return result.data;
  },
};
