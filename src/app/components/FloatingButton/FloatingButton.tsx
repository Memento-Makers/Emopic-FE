import Link from 'next/link';
import { AiOutlineCloudUpload } from 'react-icons/ai';

export const FloatingButton = () => {
  return (
    <button className="btn btn-primary absolute bottom-4 right-4 p-2 rounded-full z-10 w-[65px] h-[65px] ">
      <Link href="/upload">
        <AiOutlineCloudUpload className=" text-[48px]" />
      </Link>
    </button>
  );
};
