import { useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryAPI } from '@/api';
import { categoryKeys } from '@/api';

const useGetClassification = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  const queryClient = useQueryClient();

  const getClassification = useMutation(
    (photoId: number) => categoryAPI.getClass(photoId),
    {
      onSuccess: (data, variables) => {
        const photoId = variables as number;
        queryClient.invalidateQueries(
          categoryKeys.requestIndividual(userId, photoId)
        );
      },
    }
  );

  return getClassification;
};

export default useGetClassification;
