import { useQuery } from '@tanstack/react-query';
import { photoAPI, photoKeys } from '@/api';
import { DiaryContentData } from '@/types';

const useGetDiary = (photoId: number) => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<DiaryContentData>(photoKeys.getDiary(userId, photoId), () =>
    photoAPI.getDiary(photoId)
  );
};

export default useGetDiary;
