import Image from 'next/image';
import { BasicHeader } from '@/components';

export default function Home() {
  return (
    <>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main data-theme="retro" className="bg-black h-[100vh]">
        검색
      </main>
    </>
  );
}
