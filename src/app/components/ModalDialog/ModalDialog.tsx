'use client';

import React, { forwardRef, Ref } from 'react';

interface ModalDialogProps {
  children: React.ReactNode;
  closeCallback?: () => void;
}

const ModalDialog = forwardRef<HTMLDialogElement, ModalDialogProps>(
  (props, ref: Ref<HTMLDialogElement>) => {
    const { children, closeCallback } = props;

    return (
      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box relative">
          {children}
        </form>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeCallback}>close</button>
        </form>
      </dialog>
    );
  }
);

export default ModalDialog;
