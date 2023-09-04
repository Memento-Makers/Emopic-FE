// TODO: 예시를 위한 더미 파일, 추후 목적에 맞게 구현하기

interface PhotoKeyType {
  upload: (userId: number, filename: string) => readonly string[];
  caption: (userId: number, photoId: number) => readonly string[];
  //   all: readonly string[];
  //   detail: (meetId: number, accessToken: string) => readonly string[];
  //   candidate: readonly string[];
}

export const photoKeys: PhotoKeyType = {
  upload: (userId, filename) =>
    ['upload', userId.toString(), filename] as const,
  caption: (userId, photoId) =>
    ['caption', userId.toString(), photoId.toString()] as const,
  //   all: ['meet'] as const,
  //   detail: (meetId, accessToken) =>
  //     [...mainKeys.all, 'detail', meetId.toString(), accessToken] as const,
  //   candidate: ['meet-candidate'] as const,
};
