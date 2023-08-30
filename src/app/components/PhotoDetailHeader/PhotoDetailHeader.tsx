'use client';

import { PiCaretLeftBold } from 'react-icons/pi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface PhotoDetailHeaderProps {
  categories: string[]; // 분류 결과 클래스 (3개 까지)
  uploadDate: string; // 사진 업로드 시간
}

export const PhotoDetailHeader = ({
  categories,
  uploadDate,
}: PhotoDetailHeaderProps) => {
  const router = useRouter();

  return (
    <header
      data-theme="winter"
      className=" top-0 flex justify-center items-center p-3 w-[100%] relative"
    >
      <button
        className="button text-[48px] absolute left-2 text-primary"
        onClick={() => router.back()}
      >
        <PiCaretLeftBold />
      </button>

      <div className=" flex justify-between items-center flex-col">
        <ul className="flex items-center gap-2 mb-3 w-[200px]">
          {categories.map(category => (
            <li
              key="category"
              className="badge badge-primary badge-outline badge-lg text-[16px]"
            >
              {category}
            </li>
          ))}
        </ul>

        <p>{uploadDate}</p>
      </div>
    </header>
  );
};
