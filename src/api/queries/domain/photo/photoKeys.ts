interface PhotoKeyType {
  upload: (userId: number, filename: string) => readonly string[];
  caption: (userId: number, photoId: number) => readonly string[];
  detail: (userId: number, photoId: number) => readonly string[];
  saveEmotion: (userId: number, photoId: number) => readonly string[];
  getDiary: (userId: number, photoId: number) => readonly string[];
  makeDiary: (
    userId: number,
    photoId: number,
    content: string
  ) => readonly string[];
  all: (userId: number) => readonly string[];
  uploadImage: (userId: number, formData: FormData) => readonly string[];
}

export const photoKeys: PhotoKeyType = {
  upload: (userId, filename) =>
    ['upload', userId.toString(), filename] as const,
  caption: (userId, photoId) =>
    ['caption', userId.toString(), photoId.toString()] as const,
  detail: (userId, photoId) =>
    ['detail', userId.toString(), photoId.toString()] as const,
  all: userId => ['all', userId.toString()] as const,
  saveEmotion: (userId, photoId) =>
    ['emotion', userId.toString(), photoId.toString()] as const,
  getDiary: (userId, photoId) =>
    ['diary', userId.toString(), photoId.toString()] as const,
  makeDiary: (userId, photoId, content) =>
    ['diary', userId.toString(), photoId.toString(), content] as const,
  // 이미지 업로드 신 버전
  uploadImage: (userId, formData) => [
    'uploadImage',
    userId.toString(),
    formData.toString(),
  ],
};
