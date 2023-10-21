import { useQuery } from '@tanstack/react-query';
import { locationKeys, locationAPI } from '@/api';
import { PhotoWithLocation } from '@/types';

const useAllLocationPhoto = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<PhotoWithLocation[]>(
    locationKeys.getAllLocationPhoto(userId),
    () => locationAPI.getAllLocationPhoto()
  );
};

export default useAllLocationPhoto;
