'use client';

import { AiOutlineCloudUpload } from 'react-icons/ai';

interface FloatingButtonProps {
  handleFileChange: (files: File[]) => void;
}

const FloatingButton = ({ handleFileChange }: FloatingButtonProps) => {
  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFileChange(files);
    }
  };

  return (
    <>
      <label
        htmlFor="fileInput"
        className="fixed bottom-4 ml-[380px] p-2 rounded-full z-10 w-[65px] h-[65px] bg-primary cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:scale-110 active:scale-100"
      >
        <div className="tooltip tooltip-top" data-tip="사진 업로드">
          <AiOutlineCloudUpload className="text-white text-[48px] animate-pulse" />
        </div>
      </label>
      <input
        id="fileInput"
        type="file"
        className=" hidden"
        multiple
        accept="image/*"
        onChange={handleOnFileChange}
      />
    </>
  );
};

export default FloatingButton;
