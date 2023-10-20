'use client';

import './globals.css';

// TODO: 나중에 채워넣기
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Providers } from '@/components';
import { ToastContainer, toast } from 'react-toastify';
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
      <body data-theme="winter" className="container sm:mx-auto h-[100vh]">
        <Providers>
          {children}
          <ToastContainer />
          {!pathname.includes('/photos') && <MainBottomNavigation />}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
