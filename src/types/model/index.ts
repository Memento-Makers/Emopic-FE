// 감정에 대한 기본 타입

// 1 : 긍정
// 101: 자랑스러운, 102: 감사한, 103: 즐거운, 104: 편안한, 105:들뜬
// 2 : 보통
// 3 : 부정
// 301: 슬픔, 302 : 화남, 303: 부끄러움, 304: 피곤함, 305: 초조한
import { EmotionData } from '@/types';
export interface Emotion {
  // TODO: 감정 데이터 확정 시, 재정의 해야함 (각각 unique한 데이터로 저장될 듯)
  emotionId: EmotionId;
  name: string;
}

// 각 카테고리의 정보를 담는 인터페이스
export interface CategoryInfo {
  categoryId: number;
  name: string;
  count: number;
  thumbnail: string;
}

// 개별 이미지 정보에 대한 인터페이스
export interface ImageInfo {
  photoId: number;
  signedUrl: string;
  emotions: EmotionData;
}

export type EmotionId =
  // main 감정
  | 1
  | 2
  | 3
  // sub 감정 (main 1에 연관)
  | 101
  | 102
  | 103
  | 104
  | 105
  // sub 감정 (main 3에 연관)
  | 301
  | 302
  | 303
  | 304
  | 305;
