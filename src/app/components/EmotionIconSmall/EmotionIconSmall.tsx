import { emotionData } from '@/components';
import { EmotionId } from '@/types';

export interface EmotionIconSmallProps {
  emotionId: EmotionId;
}

const EmotionIconSmall = ({ emotionId }: EmotionIconSmallProps) => {
  const emotionClass = emotionId.toString()[0];

  return (
    <div
      className={`flex items-center justify-center w-[30px] h-[30px] text-neutral rounded-full ${
        emotionClass === '1'
          ? 'bg-yellow-100'
          : emotionClass === '2'
          ? 'bg-green-200'
          : 'bg-blue-200'
      }`}
    >
      <div className={'text-[20px] flex items-center justify-center'}>
        {emotionData[emotionId]?.icon}
      </div>
    </div>
  );
};

export default EmotionIconSmall;
