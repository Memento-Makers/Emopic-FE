// TODO: 예시를 위한 더미 파일, 추후 목적에 맞게 구현하기

interface MainKeyType {
  all: readonly string[];
  detail: (meetId: number, accessToken: string) => readonly string[];
  candidate: readonly string[];
}

export const mainKeys: MainKeyType = {
  all: ['meet'] as const,
  detail: (meetId, accessToken) =>
    [...mainKeys.all, 'detail', meetId.toString(), accessToken] as const,
  candidate: ['meet-candidate'] as const,
};
