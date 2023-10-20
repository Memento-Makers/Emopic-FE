'use client';

import { NavigationButton } from '@/components';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiCamera, HiOutlinePhotograph } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const MainBottomNavigation = () => {
  const router = useRouter();

  return (
    <>
      <div className="btm-nav fixed bottom-0 container sm:mx-auto">
        <NavigationButton
          Icon={HiCamera}
          label="사진"
          handleOnClick={() => router.push(`/`)}
        />

        <NavigationButton
          Icon={HiOutlinePhotograph}
          label="앨범"
          handleOnClick={() => router.push(`/search`)}
        />

        <NavigationButton
          Icon={AiOutlineSearch}
          label="검색"
          handleOnClick={() => router.push(`/search/result`)}
        />
      </div>
    </>
  );
};

export default MainBottomNavigation;
