'use client';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useModal } from '@/hooks';
import { EmotionModalContent, ModalDialog } from '@/components';
import { EmotionId, Emotion, EmotionData } from '@/types';
import { getOpenAIResponse, useMakeDiary, useSaveEmotion } from '@/api';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { EmotionDataMap } from '@/model';
import { useRouter } from 'next/navigation';

interface AddEmotionButtonProps {
  emotionList: Emotion[];
  photoId: number;
  caption: string;
  onLoadingChange: (isLoading: boolean) => void;
  setEmotions: Dispatch<SetStateAction<EmotionData>>;
  setDiary: Dispatch<SetStateAction<string>>;
}

const AddEmotionButton = ({
  emotionList,
  photoId,
  caption,
  onLoadingChange,
  setEmotions,
  setDiary,
}: AddEmotionButtonProps) => {
  const saveEmotion = useSaveEmotion();
  const makeDiary = useMakeDiary();
  const router = useRouter();

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

    setIsLoading(true); // 로딩 시작

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

      // 감정을 main, sub 형태로 변환
      const emotionObject = photoEmotionIds.reduce(
        (acc, id) => {
          const emotionData = {
            emotionId: id,
            name: EmotionDataMap.get(id) as string,
          };

          if ([1, 2, 3].includes(id)) {
            acc.main.push(emotionData);
          } else {
            acc.sub.push(emotionData);
          }

          return acc;
        },
        { main: [] as Emotion[], sub: [] as Emotion[] }
      );

      setEmotions(emotionObject);

      // 2. openAI를 통해 일기장 내용 만들기
      onLoadingChange(true); // 로딩 시작 알림

      const openAiRes = await getOpenAIResponse(emotions as string[], caption);
      const diaryContent = openAiRes.choices[0].message.content;

      // 3. 일기장 추가 API 보내고
      const { data } = await makeDiary.mutateAsync({
        photoId,
        content: diaryContent,
      });

      toast('일기장 저장 완료!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      setDiary(diaryContent);
      onLoadingChange(false); // 로딩 완료 알림
    } catch (error) {
      toast.error('네트워크에 문제가 생겼습니다.');
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="btn btn-outline btn-primary" onClick={openDialog}>
        <span className="text-[24px]">
          <AiOutlinePlusCircle />
        </span>
        <span className="text-[16px]">감정 추가하기</span>
      </button>

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

export default AddEmotionButton;
