'use client';

import { PiCaretLeftLight } from 'react-icons/pi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DiaryButton } from '@/components';
export interface PhotoDetailHeaderProps {
  categories: string[]; // 분류 결과 클래스 (3개 까지)
  uploadDate: string; // 사진 업로드 시간
  handleDiaryButtonClick: () => void;
}

const PhotoDetailHeader = ({
  categories,
  uploadDate,
  handleDiaryButtonClick,
}: PhotoDetailHeaderProps) => {
  const router = useRouter();

  return (
    <header
      data-theme="winter"
      className=" top-0 flex justify-between items-center p-3 w-[100%] relative"
    >
      <button
        className="button text-[48px] text-primary"
        onClick={() => router.back()}
      >
        <PiCaretLeftLight />
      </button>

      <div className=" flex justify-between items-center flex-col">
        <ul className="flex items-center gap-2 mb-3">
          {categories.map(category => (
            <li
              key={category}
              className="badge badge-primary badge-outline badge-lg text-[16px]"
            >
              {category}
            </li>
          ))}
        </ul>

        <p>{uploadDate}</p>
      </div>

      <DiaryButton className="" handleOnClick={handleDiaryButtonClick} />
    </header>
  );
};

export default PhotoDetailHeader;
