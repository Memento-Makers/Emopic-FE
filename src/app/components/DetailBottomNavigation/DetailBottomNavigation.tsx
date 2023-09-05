'use client';

import { HiOutlinePhoto } from 'react-icons/hi2';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import {
  NavigationButton,
  ModalDialog,
  EmotionModalContent,
} from '@/components';
import { useModal } from '@/hooks';
import { useRouter } from 'next/navigation';
import { Emotion, EmotionId } from '@/types';
import useSaveEmotion from '@/api/queries/domain/photo/hooks/useSaveEmotion';
import { useEffect, useState } from 'react';

interface DetailBottomNavigationProps {
  photoId: number;
  photoUrl: string; // 사진 url
  emotionList: Emotion[]; // 선택되어 있는 감정 리스트
}

const DetailBottomNavigation = ({
  photoId,
  photoUrl,
  emotionList,
}: DetailBottomNavigationProps) => {
  const router = useRouter();

  const saveEmotion = useSaveEmotion();

  const emotionIdList = emotionList.map(({ emotionId }) => emotionId);

  // 초기 상태를 저장할 state
  const [initialMap, setInitialMap] = useState(new Map<EmotionId, boolean>());

  // emotionMap 상태
  const [emotionMap, setEmotionMap] = useState(new Map<EmotionId, boolean>());

  const { dialogRef, openDialog, closeDialog } = useModal({
    closeCallback: () => {
      setEmotionMap(initialMap);
    },
  });

  useEffect(() => {
    const newInitialMap = new Map();
    emotionList.forEach(({ emotionId }) => newInitialMap.set(emotionId, true));
    setInitialMap(new Map(newInitialMap));
    setEmotionMap(new Map(newInitialMap)); // 초기 상태를 emotionMap에도 설정
  }, [emotionList]);

  const handleSubmit = async ({
    mainEmotion,
    subEmotion,
  }: {
    mainEmotion: EmotionId;
    subEmotion: EmotionId[];
  }) => {
    const { photoEmotionIds } = await saveEmotion.mutateAsync({
      photoId,
      emotion: { emotionId: mainEmotion, childEmotions: [...subEmotion] },
    });

    // 콜백 실행 안함
    closeDialog(false);

    // 해당 데이터로 map을 초기화 한다.
    const newInitialMap = new Map();
    photoEmotionIds.forEach(emotionId => newInitialMap.set(emotionId, true));
    setInitialMap(new Map(newInitialMap));
    setEmotionMap(new Map(newInitialMap)); // 초기 상태를 emotionMap에도 설정
  };

  return (
    <>
      <div className="btm-nav absolute bottom-0 ">
        <NavigationButton
          Icon={HiOutlinePhoto}
          label="원본 사진 보기"
          handleOnClick={() => window.open(photoUrl)}
        />

        <NavigationButton
          Icon={BsFillJournalBookmarkFill}
          label="일기장 확인하기"
          handleOnClick={() => router.push(`/diary/${photoId}`)}
        />

        <NavigationButton
          Icon={RiEmotionHappyLine}
          label="감정 추가하기"
          handleOnClick={() => {
            openDialog();
          }}
        />
      </div>

      <ModalDialog
        ref={dialogRef}
        closeCallback={() => {
          closeDialog(true);
        }}
      >
        <div className="modal-action w-fit h-fit absolute right-[10px] top-[5px]">
          <button
            onClick={() => {
              closeDialog(true);
            }}
            className="btn bg-transparent border-none text-[30px] text-gray-400"
          >
            <GrClose />
          </button>
        </div>
        <div>
          <EmotionModalContent
            handleSubmit={handleSubmit}
            emotionMap={emotionMap}
            setEmotionMap={setEmotionMap}
          />
        </div>
      </ModalDialog>
    </>
  );
};

export default DetailBottomNavigation;
