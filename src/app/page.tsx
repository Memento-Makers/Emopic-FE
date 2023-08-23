import RootLayout from './layout';
import Head from 'next/head';
import './globals.css';
import { BasicHeader, FloatingButton, Hero } from '@/components';
import { DUMMY_IMAGE } from '@/constants';

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
        <BasicHeader profileImage={DUMMY_IMAGE} />
        <main>
          <Hero />
        </main>
      </RootLayout>
    </>
  );
}
