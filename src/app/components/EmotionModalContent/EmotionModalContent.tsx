'use client';

import { Spacer } from '..';
import { EmotionIcon } from './EmotionIcon';
import { useState } from 'react';
import { EmotionId } from '@/types';

const mainEmotionIds: EmotionId[] = [1, 2, 3];
const subEmotionIdsGroup1: EmotionId[] = [101, 102, 103, 104, 105];
const subEmotionIdsGroup3: EmotionId[] = [301, 302, 303, 304, 305];

export interface EmotionModalContentProps {
  emotionList: EmotionId[]; // 현재 선택된 감정 리스트
}

export const EmotionModalContent = ({
  emotionList,
}: EmotionModalContentProps) => {
  const [emotionMap, setEmotionMap] = useState(new Map());

  // 초기 상태 설정 (옵션)
  useState(() => {
    if (emotionList) {
      const initialMap = new Map();
      emotionList.forEach(emotion => initialMap.set(emotion, true));
      setEmotionMap(initialMap);
    }
  });

  const handleMainEmotionId = (id: EmotionId, relatedIds: number[]) => {
    const newMap = new Map(emotionMap);

    const currentStatus = newMap.get(id);
    newMap.set(id, !currentStatus);
    relatedIds.forEach(relatedId => newMap.set(relatedId, false));

    setEmotionMap(newMap);
  };

  const handleSubEmotionId = (id: EmotionId) => {
    const newMap = new Map(emotionMap);

    const currentStatus = newMap.get(id);
    newMap.set(id, !currentStatus);

    setEmotionMap(newMap);
  };

  return (
    <div className=" bg-sky-100 p-[10px] rounded-lg ">
      <div className=" bg-white p-[20px] ">
        <p className=" text-[24px] font-bold text-center">기본 감정 선택하기</p>
        <Spacer size={30} />

        <div className="flex gap-[10px] items-center justify-between text-[80px]">
          {mainEmotionIds.map((id, index) => (
            <EmotionIcon
              emotionId={id}
              key={id}
              isRecommend={false}
              isChecked={!!emotionMap.get(id)}
              handleEmotionId={() =>
                handleMainEmotionId(
                  id,
                  mainEmotionIds.filter(e => e !== id)
                )
              }
            />
          ))}
        </div>
      </div>

      <Spacer size={30} />

      <div className=" bg-white p-[20px]">
        <p className=" text-[24px] font-bold text-center">세부 감정 선택하기</p>

        <Spacer size={30} />

        <div className="grid grid-cols-4 text-[65px] gap-x-5 gap-y-10">
          {subEmotionIdsGroup1.map(id => (
            <EmotionIcon
              emotionId={id}
              key={id}
              isRecommend={!!emotionMap.get(1)}
              isChecked={!!emotionMap.get(id)}
              handleEmotionId={() => handleSubEmotionId(id)}
            />
          ))}

          {subEmotionIdsGroup3.map(id => (
            <EmotionIcon
              emotionId={id}
              key={id}
              isRecommend={!!emotionMap.get(3)}
              isChecked={!!emotionMap.get(id)}
              handleEmotionId={() => handleSubEmotionId(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
