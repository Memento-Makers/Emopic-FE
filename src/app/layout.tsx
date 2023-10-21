'use client';

import './globals.css';

// TODO: 나중에 채워넣기
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Providers } from '@/components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// if (process.env.NODE_ENV === 'development') {
//   console.log('MSW 실행중!');
//   server.listen();
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body data-theme="winter" className="container sm:mx-auto h-[100vh]">
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services,clusterer,autoload=false`}
          strategy="beforeInteractive"
        />

        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
