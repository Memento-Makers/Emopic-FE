import Image from 'next/image';
import { server } from '../mocks/server';

// if (process.env.NODE_ENV === 'development') {
//   server.listen();
// }

import './globals.css';
import { BasicHeader, FloatingButton, Hero } from '@/components';
import { DUMMY_IMAGE } from '@/constants';

export default function Home() {
  return (
    <>
      <BasicHeader profileImage={DUMMY_IMAGE} />
      <main>
        <Hero />
      </main>
    </>
  );
}
