import { useMutation, useQueryClient } from '@tanstack/react-query';
import { photoAPI, photoKeys } from '@/api';

const useMakeDiary = () => {
  const userId = parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1;
  const queryClient = useQueryClient();

  const makeDiary = useMutation(
    ({ photoId, content }: { photoId: number; content: string }) =>
      photoAPI.generateDiary(photoId, content),
    {
      onSuccess: (data, variables) => {
        const { photoId, content } = variables; // 여기에서 content를 추출
        queryClient.invalidateQueries(
          photoKeys.makeDiary(userId, photoId, content)
        );
      },
    }
  );

  return makeDiary;
};

export default useMakeDiary;
