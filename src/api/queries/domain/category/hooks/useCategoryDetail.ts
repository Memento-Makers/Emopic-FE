import { useQuery, useQueryClient } from '@tanstack/react-query';
import { categoryAPI, categoryKeys } from '@/api';
import { CategoryDetailData } from '@/types';

const useCategoryDetail = (categoryId: number, size?: number) => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  // const queryClient = useQueryClient();

  return useQuery<CategoryDetailData>(
    categoryKeys.requestDetail(categoryId, userId),
    () => categoryAPI.getCategoryDetail(categoryId, size)
  );
};

export default useCategoryDetail;
