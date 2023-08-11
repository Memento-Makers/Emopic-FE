// 감정에 대한 기본 타입
export interface Emotion {
  // TODO: 감정 데이터 확정 시, 재정의 해야함 (각각 unique한 데이터로 저장될 듯)
  emotionId: number;
  name: string;
}

// 각 카테고리의 정보를 담는 인터페이스
export interface CategoryInfo {
  category: string;
  count: number;
  thumbnail: string;
}

// 개별 이미지 정보에 대한 인터페이스
export interface ImageInfo {
  photoId: number;
  signedUrl: string;
  emotionId: number;
  name: string;
}
