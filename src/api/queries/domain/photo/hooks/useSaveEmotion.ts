import { useMutation, useQueryClient } from '@tanstack/react-query';
import { photoAPI } from '@/api'; // addEmotion import
import { EmotionInputRequest } from '@/types';

const useSaveEmotion = () => {
  const queryClient = useQueryClient();

  const getSaveEmotionMutation = useMutation(
    (variables: { photoId: number; emotion: EmotionInputRequest }) =>
      photoAPI.addEmotion(variables.photoId, variables.emotion),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(['someQueryKey', variables.photoId]); // 캐시 무효화
      },
    }
  );

  return getSaveEmotionMutation;
};

export default useSaveEmotion;
