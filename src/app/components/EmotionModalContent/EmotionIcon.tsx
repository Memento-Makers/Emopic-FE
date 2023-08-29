'use client';

import { emotionData } from './EmotionData';
import { EmotionId } from '@/types';

export interface EmotionsProps {
  emotionId: EmotionId; // 감정
  isRecommend: boolean; // 활성화 여부
  isChecked: boolean; // 선택 여부
  handleEmotionId: (id: number) => void; // 윗 쪽 컴포넌트에 넘기기 위한 콜백
}

export const EmotionIcon = ({
  emotionId,
  isRecommend,
  handleEmotionId,
  isChecked,
}: EmotionsProps) => {
  return (
    <button
      className={`flex flex-col items-center relative ${
        isChecked && 'text-primary'
      }`}
      onClick={event => {
        event.preventDefault();
        handleEmotionId(emotionId);
      }}
    >
      {isRecommend && (
        <div className="badge badge-accent absolute top-[-5px] left-[-2px]">
          추천
        </div>
      )}

      <div
        className={
          isChecked ? 'border-primary' : 'text-gray-400 border-gray-300'
        }
      >
        {emotionData[emotionId]?.icon}
      </div>

      <p className="mt-2 text-[18px]">{emotionData[emotionId]?.label}</p>
    </button>
  );
};
