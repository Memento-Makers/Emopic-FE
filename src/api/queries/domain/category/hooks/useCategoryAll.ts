import { useQuery, useQueryClient } from '@tanstack/react-query';
import { categoryAPI, categoryKeys } from '@/api';
import { CategoryAllData } from '@/types';

const useCategoryAll = (size?: number) => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;

  return useQuery<CategoryAllData>(categoryKeys.requestAll(userId), () =>
    categoryAPI.getCategoriesAll(size)
  );
};

export default useCategoryAll;
