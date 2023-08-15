import Image from 'next/image';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <div className="w-[100%] h-[100vh] bg-blue-600">임시 레이아웃 영역</div>
    </RootLayout>
  );
}
