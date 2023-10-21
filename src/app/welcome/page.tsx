import { BasicHeader, Hero } from '@/components';
import { DUMMY_IMAGE } from '@/constants';

export default function WelcomePage() {
  return (
    <>
      <BasicHeader profileImage={DUMMY_IMAGE} />
      <main>
        <Hero />
      </main>
    </>
  );
}
