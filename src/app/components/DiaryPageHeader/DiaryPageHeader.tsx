'use client';

import { PiCaretLeftLight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

interface DiaryPageHeaderProps {
  photoId: number;
}

const DiaryPageHeader = ({ photoId }: DiaryPageHeaderProps) => {
  const router = useRouter();

  return (
    <header className=" top-0 text-primary flex justify-center items-center p-3 w-[100%] relative">
      <button
        className="button absolute left-2"
        onClick={() => router.push(`/photos/${photoId}`)}
      >
        <PiCaretLeftLight className="text-[32px]" />
      </button>

      <p className="font-bold text-[24px]">일기장 확인하기</p>
    </header>
  );
};

export default DiaryPageHeader;
