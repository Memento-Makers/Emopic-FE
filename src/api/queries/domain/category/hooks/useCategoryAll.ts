import { useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryAPI } from '@/api';
import { categoryKeys } from '@/api';

const useCategoryAll = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  const queryClient = useQueryClient();

  const getCategoryAll = useMutation(
    (photoId: number) => categoryAPI.getCategoriesAll(),
    {
      onSuccess: (data, variables) => {
        const photoId = variables as number;
        queryClient.invalidateQueries(categoryKeys.requestAll(userId));
      },
    }
  );

  return getCategoryAll;
};

export default useCategoryAll;
