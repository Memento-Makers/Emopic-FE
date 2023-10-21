'use client';

import './globals.css';

// TODO: 나중에 채워넣기
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Providers } from '@/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainBottomNavigation } from '@/components';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// if (process.env.NODE_ENV === 'development') {
//   console.log('MSW 실행중!');
//   server.listen();
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() || '';

  return (
    <html lang="ko">
      <head>
        <script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services,clusterer&autoload=false`}
        />
      </head>

      <body data-theme="winter" className="container sm:mx-auto h-[100vh]">
        {!pathname.includes('/photos') && <MainBottomNavigation />}
        <Providers>
          {children}

          <ToastContainer />
        </Providers>

        <div className="w-[100%] h-[75px] "></div>
      </body>
    </html>
  );
};

export default RootLayout;
