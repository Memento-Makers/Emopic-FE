'use client';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useModal } from '@/hooks';
import { EmotionModalContent, ModalDialog } from '@/components';
import { EmotionId } from '@/types';

const AddEmotionButton: React.FC = () => {
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
      <button className="btn btn-outline btn-primary" onClick={openDialog}>
        <span className="text-[24px]">
          <AiOutlinePlusCircle />
        </span>
        <span className="text-[16px]">감정 추가하기</span>
      </button>

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
          <EmotionModalContent emotionList={[]} handleSubmit={handleSubmit} />
        </div>
      </ModalDialog>
    </>
  );
};

export default AddEmotionButton;
