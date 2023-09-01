'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { PhotoEmotionData } from '@/types';
import { DiaryContent } from '@/components';

interface DiaryBottomSheetProps {
  diaryContent: string;
  emotions: PhotoEmotionData;
}

export interface DiaryBottomSheetRef {
  openDialog: () => void;
  closeDialog: () => void;
}

const DiaryBottomSheet = forwardRef<DiaryBottomSheetRef, DiaryBottomSheetProps>(
  ({ diaryContent, emotions }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const internalClose = () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    };

    useImperativeHandle(ref, () => ({
      openDialog: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
      closeDialog: internalClose,
    }));

    return (
      <dialog ref={dialogRef} className="modal modal-bottom w-[480px] mx-auto">
        <form method="dialog" className="modal-box relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={internalClose}
          >
            ✕
          </button>
          <DiaryContent diaryContent={diaryContent} emotions={emotions} />
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  }
);

export default DiaryBottomSheet;
