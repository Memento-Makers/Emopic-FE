import { BasicResponse, PhotoRequest } from '..';
import { Emotion, EmotionId } from '@/types';

// 전체 감정 조회
export interface EmotionData {
  main: Emotion[];
  sub: Emotion[];
}

// 전체 응답 타입
export type EmotionResponse = BasicResponse<EmotionData>;

// 감정 입력
export interface EmotionInputRequest {
  emotionId: number;
  childEmotions: EmotionId[];
}

export interface EmotionInputData {
  photoEmotionIds: EmotionId[];
}

export type EmotionInputResponse = BasicResponse<EmotionInputData>;
