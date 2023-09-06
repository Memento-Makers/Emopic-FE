import { PiCaretLeftLight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

const PhotoDetailHeaderSkeleton = () => {
  const router = useRouter();

  return (
    <header className=" top-0 flex justify-center items-center p-3 w-[100%] relative">
      <button
        className="button text-[48px] text-primary absolute left-2"
        onClick={() => router.back()}
      >
        <PiCaretLeftLight />
      </button>

      <div className=" flex justify-between items-center flex-col">
        <ul className="flex items-center gap-2 mb-3 animate-pulse">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px]"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px]"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px]"></div>
        </ul>

        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>
    </header>
  );
};

export default PhotoDetailHeaderSkeleton;
