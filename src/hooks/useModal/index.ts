import { useRef } from 'react';

interface useModalProps {
  closeCallback?: () => void;
}
const useModal = ({ closeCallback }: useModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = (reset: boolean = true) => {
    if (reset && dialogRef.current) {
      closeCallback && closeCallback();
      dialogRef.current.close();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return { dialogRef, openDialog, closeDialog };
};

export default useModal;
