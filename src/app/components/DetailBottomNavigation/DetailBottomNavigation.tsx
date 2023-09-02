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
import { EmotionId } from '@/types';

interface DetailBottomNavigationProps {
  photoId: number;
  photoUrl: string; // 사진 url
  emotionList: EmotionId[]; // 선택되어 있는 감정 리스트
}

const DetailBottomNavigation = ({
  photoId,
  photoUrl,
  emotionList,
}: DetailBottomNavigationProps) => {
  const router = useRouter();

  const { dialogRef, openDialog, closeDialog } = useModal();

  const handleSubmit = ({
    mainEmotion,
    subEmotion,
  }: {
    mainEmotion: EmotionId;
    subEmotion: EmotionId[];
  }): void => {
    console.log(mainEmotion, subEmotion);
    closeDialog();
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

      <ModalDialog ref={dialogRef}>
        <div className="modal-action w-fit h-fit absolute right-[10px] top-[5px]">
          <button
            onClick={closeDialog}
            className="btn bg-transparent border-none text-[30px] text-gray-400"
          >
            <GrClose />
          </button>
        </div>
        <div>
          <EmotionModalContent
            emotionList={emotionList}
            handleSubmit={handleSubmit}
          />
        </div>
      </ModalDialog>
    </>
  );
};

export default DetailBottomNavigation;
