import { basicFetch, mutateFetch } from '../fetchFunctions';
import {
  EmotionInputRequest,
  IndividualPhotoData,
  EmotionInputData,
  DiaryContentData,
  AllPhotoData,
} from '@/types';

export const photoAPI = {
  // 사진 업로드
  getSignedURL: async (fileName: string) => {
    const result = await mutateFetch('api/v1/photos', 'POST', {
      fileName,
    });
    return result.data;
  },
  // 이미지 캡셔닝 요청
  getCaption: async (photoId: number) => {
    const result = await mutateFetch('api/v1/photos/caption', 'POST', {
      photoId,
    });
    return result.data;
  },
  // 개별 사진 조회
  getDetail: async (photoId: number): Promise<IndividualPhotoData> => {
    const result = await basicFetch<IndividualPhotoData>(
      `api/v1/photos/${photoId}`
    );
    return result.data;
  },
  // 전체 사진 조회 (새로운 버전)
  getAll: async (page?: number): Promise<AllPhotoData> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/photos?page=${page}`
    );

    const result = await response.json();
    return result.data;
  },
  // 감정 입력
  addEmotion: async (
    photoId: number,
    emotion: EmotionInputRequest
  ): Promise<EmotionInputData> => {
    const result = await mutateFetch(
      `api/v1/photos/${photoId}/emotions`,
      'POST',
      {
        ...emotion,
      }
    );
    return result.data;
  },

  // 일기장 생성
  generateDiary: async (photoId: number, content: string) => {
    const result = await mutateFetch(
      `api/v1/photos/${photoId}/diaries`,
      'POST',
      {
        content,
      }
    );
    return result.data;
  },

  // 일기장 조회
  getDiary: async (photoId: number) => {
    const result = await basicFetch<DiaryContentData>(
      `api/v1/photos/${photoId}/diaries`
    );
    return result.data;
  },

  // 이미지 업로드 (신버전)
  uploadImage: async (formData: FormData) => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_DEV}api/v1/photos`,
      {
        method: 'POST',
        body: formData,
      }
    );

    return result;
  },
};
