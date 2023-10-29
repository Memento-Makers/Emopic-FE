import { photoAPI, photoKeys } from '@/api';
import { AllPhotoData } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';

const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

const useAllPhoto = () =>
  useInfiniteQuery<AllPhotoData>({
    queryKey: photoKeys.all(userId),
    queryFn: async ({ pageParam = 0 }) => {
      const res = await photoAPI.getAll(pageParam);
      return res;
    },
    getNextPageParam: lastPage => {
      const { last, currentPage } = lastPage;

      if (last) return undefined;
      return currentPage + 1;
    },
  });

export default useAllPhoto;
