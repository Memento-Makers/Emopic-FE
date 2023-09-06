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
import { useEffect, useState } from 'react';
import { EmotionDataMap } from '@/model';
import { getOpenAIResponse, useMakeDiary, useSaveEmotion } from '@/api';
import { toast } from 'react-toastify';

interface DetailBottomNavigationProps {
  photoId: number;
  photoUrl: string; // 사진 url
  emotionList: Emotion[]; // 선택되어 있는 감정 리스트
  caption: string;
}

const DetailBottomNavigation = ({
  photoId,
  photoUrl,
  emotionList,
  caption,
}: DetailBottomNavigationProps) => {
  const router = useRouter();
  const saveEmotion = useSaveEmotion();
  const makeDiary = useMakeDiary();

  // 서버 통신 중 다시 요청이 가지 않도록 한다.
  const [isLoading, setIsLoading] = useState(false);

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
    if (isLoading) {
      toast('이미 일기장을 생성하고 있습니다. 잠시 후에 시도해주세요.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      closeDialog(true);
      return;
    }

    setIsLoading(true);

    try {
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

      toast('감정 입력 완료! 일기장 내용을 생성합니다.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      // 일기장 작성하기

      // 1. 감정을 string 으로 변환
      const emotions = photoEmotionIds.map(id => EmotionDataMap.get(id));

      // 2. openAI를 통해 일기장 내용을 만든다.
      const openAiRes = await getOpenAIResponse(emotions as string[], caption);
      const diaryContent = openAiRes.choices[0].message.content;

      // 3. 일기장 추가 API를 보낸다.
      const { data } = await makeDiary.mutateAsync({
        photoId,
        content: diaryContent,
      });

      // 4. 토스트도 하나 띄운다.
      toast(
        <div className=" max-w-[300px]">
          <p className=" font-bold">일기장 저장 완료!</p>
          <p className=" line-clamp-3">{diaryContent}</p>
        </div>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } catch (error) {
      toast.error('네트워크에 문제가 생겼습니다.');
      setIsLoading(false);
    } finally {
      setIsLoading(false); // 로딩 완료
    }
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
