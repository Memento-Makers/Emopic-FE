'use client';

import { useAllLocationPhoto } from '@/api';
import { HeaderWithBackButton, PhotoLocationMap } from '@/components';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function MapPage() {
  const { data, isLoading } = useAllLocationPhoto();

  useEffect(() => {
    toast.info('지도를 확대하여 개별 사진을 확인할 수 있습니다.', {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }, []);

  return (
    <>
      <HeaderWithBackButton title={'사진 분포 확인하기'} />

      <div className="h-[100vh] w-[100%] flex flex-col">
        {!isLoading && data && <PhotoLocationMap photos={data} />}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </>
  );
}
