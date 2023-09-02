'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components';
import { server } from '@/mocks/server';

const inter = Inter({ subsets: ['latin'] });

// if (process.env.NODE_ENV === 'development') {
//   console.log('MSW 실행중!');
//   server.listen();
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body data-theme="winter" className="container sm:mx-auto h-[100vh]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
