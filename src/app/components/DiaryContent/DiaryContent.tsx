'use client';

import { EmotionId, Emotion, PhotoEmotionData, EmotionData } from '@/types';

import Image from 'next/image';
import { Spacer, EmotionIcon, AddEmotionButton } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

export interface DiaryContentProps {
  diaryContent: string; // caption
  emotions: PhotoEmotionData; // 주감정, 서브감정 구분
  emotionList: Emotion[]; // 선택되어 있는 감정 리스트
  className?: string;
  photoId: number;
}

const DiaryContent = ({
  diaryContent,
  emotions,
  emotionList,
  className,
  photoId,
}: DiaryContentProps) => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [currentEmotion, setCurrentEmotion] = useState<EmotionData>(emotions);

  const handleLoadingChange = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <div className={`p-[20px] ${className}`}>
      <div className=" flex items-center gap-[5px] flex-grow">
        <h3 className=" text-primary font-bold text-[24px]">
          Today's Story by
        </h3>
        <Link
          href={'https://chat.openai.com/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/assets/openai.webp"
            alt="Description"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <Spacer size={20} />

      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`diary/paragraph/skeleton/${index}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-[16px] animate-pulse"
          ></div>
        ))
      ) : (
        <p className="text-[16px] leading-7">{diaryContent}</p>
      )}

      <Spacer size={20} />

      <div>
        <div className="flex gap-[20px] items-center">
          <h3 className=" text-primary font-bold text-[24px]">오늘의 감정 </h3>
          <AddEmotionButton
            emotionList={emotionList}
            photoId={photoId}
            caption={diaryContent}
            onLoadingChange={handleLoadingChange}
            setEmotions={setCurrentEmotion}
          />
        </div>

        <Spacer size={20} />

        <div className=" flex gap-5 flex-wrap">
          {currentEmotion.main.map(emotion => (
            <EmotionIcon key={emotion.name} emotionId={emotion.emotionId} />
          ))}

          {currentEmotion.sub.map(emotion => (
            <EmotionIcon key={emotion.name} emotionId={emotion.emotionId} />
          ))}
        </div>
      </div>

      <Spacer size={20} />
    </div>
  );
};

export default DiaryContent;
