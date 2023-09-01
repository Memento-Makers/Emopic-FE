import { PhotoEmotionData } from '@/types';

import Image from 'next/image';
import { Spacer, EmotionIcon } from '@/components';
import Link from 'next/link';

export interface DiaryContentProps {
  diaryContent: string;
  emotions: PhotoEmotionData;
}

export const DiaryContent = ({ diaryContent, emotions }: DiaryContentProps) => {
  return (
    <div className="p-[20px]">
      <div className=" flex items-center gap-[5px]">
        <h3 className=" text-primary font-bold text-[24px]">
          Today's Story by
        </h3>
        <Link
          href={'https://chat.openai.com/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/assets/openai.webp" // 이미지 경로
            alt="Description" // 대체 텍스트
            width={50} // 너비
            height={50} // 높이
          />
        </Link>
      </div>

      <Spacer size={20} />

      <p className="text-[16px] leading-7">{diaryContent}</p>

      <Spacer size={20} />

      <div>
        <h3 className=" text-primary font-bold text-[24px]">오늘의 감정 </h3>
        <Spacer size={20} />

        <div className=" flex gap-5">
          {emotions.main.map(({ emotionId }) => (
            <EmotionIcon key={emotionId} emotionId={emotionId} />
          ))}

          {emotions.sub.map(({ emotionId }) => (
            <EmotionIcon key={emotionId} emotionId={emotionId} />
          ))}
        </div>
      </div>

      <Spacer size={20} />
    </div>
  );
};
