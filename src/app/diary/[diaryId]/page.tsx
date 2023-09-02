'use client';

import { BasicHeader, DetailBottomNavigation } from '@/components';
import { usePathname, useRouter } from 'next/navigation';

interface Params {
  diaryId: string;
}

export default function DiaryPage({ params }: { params: Params }) {
  const { diaryId } = params;

  return (
    <div className="relative h-[100vh]">
      <BasicHeader profileImage="https://picsum.photos/200" />

      <h1 className=" text-[64px] font-bold">일기장 페이지 {diaryId}</h1>
    </div>
  );
}
