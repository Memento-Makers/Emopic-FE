import { useInfiniteQuery } from '@tanstack/react-query';
import { locationKeys, locationAPI } from '@/api';
import { AllPhotoData } from '@/types';

const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

const useCityPhoto = (city: string) =>
  useInfiniteQuery<AllPhotoData>({
    queryKey: locationKeys.getCityPhoto(userId, city),
    queryFn: async ({ pageParam = 0 }) => {
      const res = await locationAPI.getCityPhoto(city, pageParam);
      return res;
    },
    getNextPageParam: lastPage => {
      const { last, currentPage } = lastPage;

      if (last) return undefined;
      return currentPage + 1;
    },
  });

export default useCityPhoto;
