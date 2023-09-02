import { EmotionId, PhotoEmotionData } from '@/types';

import Image from 'next/image';
import { Spacer, EmotionIcon, AddEmotionButton } from '@/components';
import Link from 'next/link';

export interface DiaryContentProps {
  diaryContent: string;
  emotions: PhotoEmotionData; // 주감정, 서브감정 구분
  emotionList: EmotionId[]; // 선택되어 있는 감정 리스트
  className?: string;
}

export const DiaryContent = ({
  diaryContent,
  emotions,
  emotionList,
  className,
}: DiaryContentProps) => {
  return (
    <div className={`p-[20px] ${className}`}>
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
        <div className="flex gap-[20px] items-center">
          <h3 className=" text-primary font-bold text-[24px]">오늘의 감정 </h3>
          <AddEmotionButton emotionList={emotionList} />
        </div>

        <Spacer size={20} />

        <div className=" flex gap-5">
          {emotions.main.map(emotion => (
            <EmotionIcon key={emotion} emotionId={emotion} />
          ))}

          {emotions.sub.map(emotion => (
            <EmotionIcon key={emotion} emotionId={emotion} />
          ))}
        </div>
      </div>

      <Spacer size={20} />
    </div>
  );
};
