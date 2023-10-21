'use client';

import { useRouter } from 'next/navigation';
import { PiCaretLeftBold } from 'react-icons/pi';

interface HeaderWithBackButtonProps {
  title?: string;
}

const HeaderWithBackButton = ({ title }: HeaderWithBackButtonProps) => {
  const router = useRouter();

  return (
    <header className="top-0 p-3 w-[100%] block h-fit flex items-center justify-between text-primary">
      <button
        className="button text-[48px] text-primary"
        onClick={() => router.back()}
      >
        <PiCaretLeftBold />
      </button>

      <h2 className=" text-[24px]">{title}</h2>

      {/* 스타일을 위한 더미 요소  */}
      <div className="button text-[48px] text-primary opacity-0">
        <PiCaretLeftBold />
      </div>
    </header>
  );
};

export default HeaderWithBackButton;
