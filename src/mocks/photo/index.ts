import { randomDelay } from '@/utils';

export async function requestSignedURL(fileName: string) {
  await randomDelay();
  return {
    message: '이미지 업로드 signed_url 생성 성공',
    status: 200,
    data: {
      photoId: Math.floor(Math.random() * 1000),
      signedUrl: '이미지 업로드 경로',
    },
  };
}

export async function requestCaption(photoId: number) {
  await randomDelay();
  return {
    message: '캡셔닝 생성 완료',
    status: 200,
    data: {
      caption: '캡셔닝 내용',
    },
  };
}

export async function requestCategories(photoId: number) {
  await randomDelay();
  return {
    message: '분류 결과 조회 완료',
    status: 200,
    data: {
      categories: ['분류 1', '분류 2', '분류 3'],
    },
  };
}

export const fetchSignedURL = async (fileName: string) => {
  return await requestSignedURL(fileName);
};

export const fetchCaption = async (photoId: number) => {
  return await requestCaption(photoId);
};

export const fetchCategories = async (photoId: number) => {
  return await requestCategories(photoId);
};
