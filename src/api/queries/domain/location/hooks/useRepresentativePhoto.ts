import { useQuery } from '@tanstack/react-query';
import { locationKeys, locationAPI } from '@/api';
import { RepresentativePhoto } from '@/types';

const useRepresentativePhoto = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<RepresentativePhoto[]>(
    locationKeys.getRepresentativePhoto(userId),
    () => locationAPI.getRepresentativeLocation()
  );
};

export default useRepresentativePhoto;
