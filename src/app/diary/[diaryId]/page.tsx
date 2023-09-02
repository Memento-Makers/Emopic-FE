'use client';

import { DiaryPageHeader, DetailBottomNavigation } from '@/components';
import { usePathname, useRouter } from 'next/navigation';

interface Params {
  diaryId: string; // photoId와 같은 값
}

export default function DiaryPage({ params }: { params: Params }) {
  const { diaryId } = params;

  return (
    <div className="relative h-[100vh]">
      <DiaryPageHeader photoId={parseInt(diaryId)} />

      <h1 className=" text-[64px] font-bold">일기장 페이지 {diaryId}</h1>
    </div>
  );
}
