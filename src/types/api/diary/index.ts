import { BasicResponse, PhotoRequest } from '..';

// 일기장 생성
export interface DiaryGenerateRequest {
  content: string;
}

export interface DiaryData {
  diaryId: number;
}

export type DiaryResponse = BasicResponse<DiaryData>;
