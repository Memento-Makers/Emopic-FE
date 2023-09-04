import { useMutation, useQueryClient } from '@tanstack/react-query';
import { photoAPI } from '@/api';
import { photoKeys } from '@/api';

const useGetCaption = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  const queryClient = useQueryClient();

  const getCaption = useMutation(
    (photoId: number) => photoAPI.getCaption(photoId),
    {
      onSuccess: (data, variables) => {
        const photoId = variables as number;
        queryClient.invalidateQueries(photoKeys.caption(userId, photoId));
      },
    }
  );

  return getCaption;
};

export default useGetCaption;
