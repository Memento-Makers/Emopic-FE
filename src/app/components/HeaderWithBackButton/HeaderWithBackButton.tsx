'use client';

import { useRouter } from 'next/navigation';
import { PiCaretLeftBold } from 'react-icons/pi';

const HeaderWithBackButton = () => {
  const router = useRouter();

  return (
    <header className=" top-0 p-3 w-[100%] relative block h-fit">
      <button
        className="button text-[48px] text-primary"
        onClick={() => router.back()}
      >
        <PiCaretLeftBold />
      </button>
    </header>
  );
};

export default HeaderWithBackButton;
