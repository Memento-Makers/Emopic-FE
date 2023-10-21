import { useQuery } from '@tanstack/react-query';
import { locationKeys, locationAPI } from '@/api';
import { CurrentLocationPhoto } from '@/types';

const useCurrentLocationPhoto = (latitude: number, longitude: number) => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<CurrentLocationPhoto>(
    locationKeys.getCurrentLocationPhoto(latitude, longitude, userId),
    () => locationAPI.getCurrentLocationPhoto(latitude, longitude)
  );
};

export default useCurrentLocationPhoto;
