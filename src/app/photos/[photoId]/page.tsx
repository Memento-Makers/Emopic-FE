'use client';

import { DetailBottomNavigation, PhotoDetailHeader } from '@/components';
import Image from 'next/image';

interface Params {
  photoId: string;
}

const dummyCategory = ['분류1', '분류2', '분류3'];

export default function DetailPage({ params }: { params: Params }) {
  const { photoId } = params;

  // TODO: UploadDate의 경우, 백엔드에서 보내준 UTC String 에서 변환해야한다
  return (
    <div className="relative h-[100vh] flex flex-col">
      <PhotoDetailHeader
        categories={dummyCategory}
        uploadDate={'2092년 9월 2일'}
      />

      <main className="bg-neutral flex flex-grow items-center justify-center">
        <Image
          src={'https://picsum.photos/300'}
          width={200}
          height={160}
          alt={'현재 이미지'}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ width: '100%' }}
        />
      </main>

      <DetailBottomNavigation
        photoId={parseInt(photoId)}
        photoUrl={'/'}
        emotionList={[1, 101]}
      />
    </div>
  );
}
