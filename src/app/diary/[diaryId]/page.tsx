'use client';

import { DiaryPageHeader, DiaryContent } from '@/components';
import { PhotoEmotionData } from '@/types';
import Image from 'next/image';

interface Params {
  diaryId: string; // photoId와 같은 값
}

const dummyContent =
  '나의 묻힌 차 까닭이요, 별 파란 거외다. 라이너 나는 그리워 하나에 어머님, 많은 잠, 있습니다. 된 이런 새워 계십니다. 무엇인지 부끄러운 무덤 이름을 계십니다. 하나에 이름을 않은 무엇인지 노새, 까닭입니다. 이웃 불러 남은 새겨지는 하나에 어머니, 듯합니다. 이웃 이름을 부끄러운 별들을 우는 애기 봅니다. 말 지나고 멀듯이, 나의 봅니다. 많은 나는 계절이 있습니다. 북간도에 멀듯이, 별 것은 그리워 있습니다.';

const dummyEmotion: PhotoEmotionData = {
  main: [1],
  sub: [101, 301],
};

export default function DiaryPage({ params }: { params: Params }) {
  const { diaryId } = params;

  // TODO: 감정 추가하기 플로우
  // 1. 감정 추가하기 api를 보낸다.
  // 2. 캡셔닝 요청을 한다. (그 동안 일기장 내용 스켈레톤 처리)
  // 3. 캡셔닝 요청이 끝나면 일기장 내용을 업데이트 한다.

  return (
    <div className="relative h-[100vh]">
      <DiaryPageHeader photoId={parseInt(diaryId)} />
      <Image
        src={'https://picsum.photos/300'}
        width={200}
        height={160}
        alt={'현재 이미지'}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{ width: '100%' }}
      />

      <DiaryContent
        diaryContent={dummyContent}
        emotions={dummyEmotion as PhotoEmotionData}
        emotionList={[1, 101, 301]}
        className="absolute z-[999] top-[400px] bg-white rounded-t-[15px]"
      />
    </div>
  );
}
