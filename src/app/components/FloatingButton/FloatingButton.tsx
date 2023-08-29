'use client';

import { AiOutlineCloudUpload } from 'react-icons/ai';

export const FloatingButton = () => {
  return (
    <>
      <label
        htmlFor="fileInput"
        className="absolute bottom-4 right-4 p-2 rounded-full z-10 w-[65px] h-[65px] bg-primary cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:scale-110 active:scale-100"
      >
        <div className="tooltip tooltip-bottom" data-tip="사진 업로드">
          <AiOutlineCloudUpload className="text-white text-[48px] animate-pulse" />
        </div>
      </label>
      <input
        id="fileInput"
        type="file"
        className=" hidden"
        multiple
        accept="image/*"
      />
    </>
  );
};
