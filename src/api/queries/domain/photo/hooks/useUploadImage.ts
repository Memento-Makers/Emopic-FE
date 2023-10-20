import { useMutation, useQueryClient } from '@tanstack/react-query';
import { photoAPI, photoKeys } from '@/api';

const useUploadImage = () => {
  const queryClient = useQueryClient();

  const getUploadImageMutation = useMutation(
    (variables: { formData: FormData }) =>
      photoAPI.uploadImage(variables.formData),
    {
      onSuccess: (_, variables) => {
        const formData = variables.formData;
        queryClient.invalidateQueries(
          photoKeys.uploadImage(
            parseInt(process.env.NEXT_PUBLIC_DUMMY_USER_ID as string) || 1,
            formData
          )
        );
      },
    }
  );

  return getUploadImageMutation;
};

export default useUploadImage;
