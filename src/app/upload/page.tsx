'use client';

import { useFileStore } from '@/stores';
import { BasicHeader } from '@/components';
import { useRouter } from 'next/navigation';

import RootLayout from '@/app/layout';

export default function UploadPage() {
  // TODO: 여기서 모든 작업이 끝나면 file을 clear 해줘야 함.
  const { files, addFiles, clearFiles } = useFileStore();

  console.log(files);
  const router = useRouter();

  if (files.length === 0) {
    router.push('/search');
  }

  return (
    <RootLayout>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main>
        {files.map(file => {
          const objectUrl = URL.createObjectURL(file);
          return <img src={objectUrl} />;
        })}
      </main>
    </RootLayout>
  );
}
