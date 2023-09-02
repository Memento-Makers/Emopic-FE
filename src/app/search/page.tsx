'use client';

import {
  BasicHeader,
  FloatingButton,
  BeforeUploadToastContent,
  AfterFileUploadToastContent,
} from '@/components';
import { useMutation } from '@tanstack/react-query';
import { fetchSignedURL, fetchCaption, fetchCategories } from '@/mocks';
import { toast } from 'react-toastify';

// TODO: 현재는 메인 페이지를 SearchPage 로 사용하고 있으나,
// 이 후에 메인 페이지가 변화할 경우 플로팅 버튼과 관련된 로직을
// 해당 페이지로 옮겨야 한다.

export default function SearchPage() {
  const uploadMutation = useMutation(fetchSignedURL);
  const captionMutation = useMutation(fetchCaption);
  const categoriesMutation = useMutation(fetchCategories);

  const handleFileChange = async (files: File[]) => {
    if (files.length > 0) {
      toast(
        <BeforeUploadToastContent
          preview={files[0]}
          fileCount={files.length}
        />,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );

      try {
        const uploadPromises = files.map(async file => {
          // fetchSignedURL 실행
          const {
            data: { signedUrl, photoId },
          } = await uploadMutation.mutateAsync(file.name);

          // 실제 파일 업로드 로직
          // await uploadFile(signedUrl, file);

          // fetchCaption과 fetch Categories 실행
          const captionData = await captionMutation.mutateAsync(photoId);
          const categoriesData = await categoriesMutation.mutateAsync(photoId);

          return { captionData, categoriesData, photoId };
        });

        const results = await Promise.all(uploadPromises);

        toast(<AfterFileUploadToastContent files={files} />, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        // TODO: 확인용 콘솔, API 연결 후 지우기
        console.log('업로드 완료', results);
      } catch (error) {
        toast.error('파일을 업로드하는데 문제가 발생하였습니다.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  return (
    <div className="relative">
      <BasicHeader profileImage="https://picsum.photos/200" />
      <FloatingButton
        handleFileChange={files => {
          handleFileChange(files);
        }}
      />
      <main className="px-3">
        {/* {categories.map((category, index) => (
            <>
              <PreviewList
                key={index}
                images={category.images}
                title={category.title}
              />
              {index < categories.length - 1 && (
                <Spacer size={24} key={index} />
              )}
            </>
          ))} */}
      </main>
    </div>
  );
}
