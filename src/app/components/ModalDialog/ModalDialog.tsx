'use client';

import React, { forwardRef, Ref } from 'react';

interface ModalDialogProps {
  children: React.ReactNode;
}

const ModalDialog = forwardRef<HTMLDialogElement, ModalDialogProps>(
  (props, ref: Ref<HTMLDialogElement>) => {
    const { children } = props;

    return (
      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box relative">
          {children}
        </form>
      </dialog>
    );
  }
);

export default ModalDialog;
