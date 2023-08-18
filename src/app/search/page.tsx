import Image from 'next/image';
import { BasicHeader, FloatingButton } from '@/components';

export default function Home() {
  return (
    <div className="h-[100vh] relative">
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main className="bg-black ">
        검색
        <FloatingButton />
      </main>
    </div>
  );
}
