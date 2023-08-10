import { BasicResponse, PhotoRequest } from '..';
import { Emotion } from '@/types';

// 사진 업로드
export interface PhotoUploadRequest {
  filename: string;
}

export interface ImageUploadData {
  photoId: number;
  signedUrl: string;
}

export type ImageUploadResponse = BasicResponse<ImageUploadData>;

// 이미지 캡셔닝 요청
export type ImageCaptioningRequest = PhotoRequest;

export interface ImageCaptioningData {
  caption: string;
}

export type ImageCaptioningResponse = BasicResponse<ImageCaptioningData>;

// 개별 사진 조회
export interface IndividualPhotoData {
  photoId: number;
  signedUrl: string; // 이미지 다운로드 경로
  diaryId: number;
  diaryContent: string; // 일기장 내용
  classes: string[]; // ["분류 1","분류 2","분류 3"]
  emotions: Emotion[];
}

export type IndividualPhotoResponse = BasicResponse<IndividualPhotoData>;

// 사진 삭제 (명세 미완성)
