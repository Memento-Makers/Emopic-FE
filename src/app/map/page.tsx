'use client';

import { useAllLocationPhoto } from '@/api';
import { HeaderWithBackButton, PhotoLocationMap } from '@/components';

export default function MapPage() {
  const { data, isLoading } = useAllLocationPhoto();

  return (
    <>
      <HeaderWithBackButton />
      <div className="h-[100vh] w-[100%] flex flex-col">
        {!isLoading && data && <PhotoLocationMap photos={data} />}
      </div>
    </>
  );
}
