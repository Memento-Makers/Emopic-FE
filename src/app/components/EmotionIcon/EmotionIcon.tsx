import { emotionData } from '@/components';
import { EmotionId } from '@/types';

export interface EmotionIconProps {
  emotionId: EmotionId;
}

export const EmotionIcon = ({ emotionId }: EmotionIconProps) => {
  const emotionClass = emotionId.toString()[0];

  return (
    <div
      className={`flex flex-col items-center w-[120px] rounded-lg text-neutral p-[10px] box-border ${
        emotionClass === '1'
          ? 'bg-yellow-100'
          : emotionClass === '2'
          ? 'bg-green-200'
          : 'bg-blue-200'
      } bg-opacity-50 shadow-md`}
    >
      <div className={'text-[70px]'}>{emotionData[emotionId]?.icon}</div>
      <p className="mt-2 text-[18px]">{emotionData[emotionId]?.label}</p>
    </div>
  );
};
