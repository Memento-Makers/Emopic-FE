import Image from 'next/image';
import { BasicHeader, ImageUploadTitle, Spacer } from '@/components';
import RootLayout from '@/app/layout';

export default function Home() {
  return (
    <RootLayout>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main>
        <p className=" text-[24px] bg-sky-300">서버에서 결과 받아오는 중 UI</p>
        <Spacer size={12} />

        <ImageUploadTitle date={new Date()} isFetching={true} results={null} />

        <Spacer size={12} />
        <p className=" text-[24px] bg-sky-300">서버에서 결과 받은 후 UI</p>
        <Spacer size={12} />

        <ImageUploadTitle
          date={new Date()}
          isFetching={false}
          results={['커피', 'TV', '체인점']}
        />
      </main>
    </RootLayout>
  );
}
