import Image from 'next/image';
import { BasicHeader } from '@/components';
import RootLayout from '../layout';

export default function Home() {
  return (
    <RootLayout>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main data-theme="retro" className="bg-black h-[100vh]">
        <p className=" text-[48px] text-white font-semibold">이미지 업로드</p>
      </main>
    </RootLayout>
  );
}
