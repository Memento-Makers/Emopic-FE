import { photoAPI, photoKeys } from '@/api';
import { AllPhotoData } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';

const useAllPhoto = () =>
  useInfiniteQuery<AllPhotoData>({
    queryKey: photoKeys.all(1),
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
