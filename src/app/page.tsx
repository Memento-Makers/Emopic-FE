import Image from 'next/image';
import RootLayout from './layout';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard.woff"
          rel="stylesheet"
        />
      </Head>
      <RootLayout>
        <div className="w-[100%] h-[100%] bg-blue-600">임시 레이아웃 영역</div>
      </RootLayout>
    </>
  );
}
