'use client';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import { useEffect, useRef, useState } from 'react';

import { EmotionModalContent } from '@/components';
import { EmotionId } from '@/types';

export const AddEmotionButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button className="btn btn-outline btn-primary" onClick={openDialog}>
        <span className=" text-[24px]">
          <AiOutlinePlusCircle />
        </span>
        <span className=" text-[16px]">감정 추가하기</span>
      </button>

      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box relative">
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
              emotionList={[]}
              handleSubmit={function ({
                mainEmotion,
                subEmotion,
              }: {
                mainEmotion: EmotionId;
                subEmotion: EmotionId[];
              }): void {
                console.log(mainEmotion, subEmotion);
              }}
            />
          </div>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
