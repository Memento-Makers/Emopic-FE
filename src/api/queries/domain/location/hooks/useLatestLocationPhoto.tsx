import { useQuery } from '@tanstack/react-query';
import { locationKeys, locationAPI } from '@/api';
import { LatestLocationPhoto } from '@/types';

const useLatestLocationPhoto = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<LatestLocationPhoto>(
    locationKeys.getLatestLocationPhoto(userId),
    () => locationAPI.getLatestLocationPhoto()
  );
};

export default useLatestLocationPhoto;
