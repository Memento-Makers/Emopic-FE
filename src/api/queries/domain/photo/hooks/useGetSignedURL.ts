import { useMutation, useQueryClient } from '@tanstack/react-query';
import { photoAPI } from '@/api';
import { photoKeys } from '@/api';

const useGetSignedURL = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  const queryClient = useQueryClient();

  const getSignedURLMutation = useMutation(
    (fileName: string) => photoAPI.getSignedURL(fileName),
    {
      onSuccess: (data, variables) => {
        const fileName = variables as string;
        queryClient.invalidateQueries(photoKeys.upload(userId, fileName));
      },
    }
  );

  return getSignedURLMutation;
};

export default useGetSignedURL;
