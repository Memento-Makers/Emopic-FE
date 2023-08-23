import Image from 'next/image';
import { BLUR_DATA_URL } from '@/constants';

import {
  BasicHeader,
  ImageUploadTitle,
  ImageCaptionSection,
  Spacer,
  StyledImage,
} from '@/components';
import RootLayout from '@/app/layout';

const dummy =
  '너무나 슬퍼하는 하나에 걱정도 하나에 비둘기, 까닭입니다. 별이 하나의 라이너 사랑과 말 패, 별 계십니다. 이웃 청춘이 묻힌 다 무엇인지 이런 소녀들의 딴은 토끼, 까닭입니다. 릴케 잠, 새워 마리아 거외다. 소녀들의 언덕 별빛이 있습니다. 그러나 풀이 무엇인지 내일 벌써 보고, 있습니다. 묻힌 노루, 오는 말 봅니다. 추억과 ';
export default function Home() {
  return (
    <RootLayout>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main>
        <p className=" text-[24px] bg-sky-300">서버에서 결과 받아오는 중 UI</p>
        <Spacer size={12} />

        <ImageUploadTitle date={new Date()} isFetching={true} results={null} />

        <Spacer size={24} />

        <Image
          src="https://picsum.photos/500"
          alt="사용자가 업로드한 이미지"
          sizes="100vw"
          placeholder="blur"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          blurDataURL={BLUR_DATA_URL}
        />

        <Spacer size={24} />

        <ImageCaptionSection isFetching={true} content={null} />

        <Spacer size={100} />

        <p className=" text-[24px] bg-sky-300">서버에서 결과 받은 후 UI</p>
        <Spacer size={12} />
        <ImageUploadTitle
          date={new Date()}
          isFetching={false}
          results={['커피', 'TV', '체인점']}
        />

        <Spacer size={24} />

        <Image
          src="https://picsum.photos/500"
          alt="사용자가 업로드한 이미지"
          sizes="100vw"
          placeholder="blur"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          blurDataURL={BLUR_DATA_URL}
        />

        <Spacer size={24} />

        <ImageCaptionSection isFetching={false} content={dummy} />
      </main>
    </RootLayout>
  );
}
