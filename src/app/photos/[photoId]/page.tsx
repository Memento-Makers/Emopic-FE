'use client';

import { BasicHeader, DetailBottomNavigation } from '@/components';

interface Params {
  photoId: string;
}

export default function DetailPage({ params }: { params: Params }) {
  const { photoId } = params;

  return (
    <div className="relative h-[100vh]">
      <BasicHeader profileImage="https://picsum.photos/200" />

      <main className="px-3 w-[100%]"></main>
      <DetailBottomNavigation
        photoId={parseInt(photoId)}
        photoUrl={'/'}
        emotionList={[1, 101]}
      />
    </div>
  );
}
