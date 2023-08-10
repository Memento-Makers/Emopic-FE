import { useQuery } from '@tanstack/react-query';
import { mainKeys } from './mainKeys';
import { fetchMain } from '@/api/domain/main';

// TODO: 예시를 위한 더미 파일, 추후 구현
export const useFetchMain = () =>
  useQuery(mainKeys.all, async () => {
    const result = await fetchMain();
    return result;
  });
