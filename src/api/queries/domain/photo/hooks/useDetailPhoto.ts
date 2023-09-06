import { useQuery } from '@tanstack/react-query';
import { photoAPI, photoKeys } from '@/api';
import { IndividualPhotoData } from '@/types';

const useDetailPhoto = (photoId: number) => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<IndividualPhotoData>(photoKeys.detail(userId, photoId), () =>
    photoAPI.getDetail(photoId)
  );
};

export default useDetailPhoto;
