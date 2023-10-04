// 전체 사진 조회

import { useQuery } from '@tanstack/react-query';
import { photoAPI, photoKeys } from '@/api';
import { ThumbnailPhotoData } from '@/types';

const useAllPhoto = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<ThumbnailPhotoData[]>(photoKeys.all(userId), () =>
    photoAPI.getAll()
  );
};

export default useAllPhoto;
