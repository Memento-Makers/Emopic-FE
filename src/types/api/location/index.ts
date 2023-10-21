export interface CurrentLocationPhoto {
  photoId: number; // 가장 최근에 찍은 사진 정보
  thumbnailUrl: string; // 썸네일 다운로드 경로",
  city: string; // 행정구역 명 (TODO: 추후 정의 )
  count: number; //  사진 개수
}

export interface LatestLocationPhoto
  extends Omit<CurrentLocationPhoto, 'count'> {
  latitude: number;
  longitude: number;
}

export interface PhotoWithLocation {
  photoId: number;
  thumbnailUrl: string;
}
