import Image from 'next/image';
import { Spacer, EmotionIconSkeleton } from '@/components';
import Link from 'next/link';

const DiaryContentSkeleton = ({ className }: { className: string }) => {
  return (
    <div className={`p-[20px] ${className}`}>
      <div className=" flex items-center gap-[5px]">
        <h3 className=" text-primary font-bold text-[24px]">
          Today's Story by
        </h3>
        <Link
          href={'https://chat.openai.com/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/assets/openai.webp"
            alt="Description"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <Spacer size={20} />

      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`diary/paragraph/skeleton/${index}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-[16px] animate-pulse"
          ></div>
        ))}
      </>

      <Spacer size={20} />

      <div>
        <h3 className=" text-primary font-bold text-[24px]">오늘의 감정 </h3>

        <Spacer size={20} />

        <div className=" flex gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <EmotionIconSkeleton key={`emotionicon/skeleton/${index}`} />
          ))}
        </div>
      </div>

      <Spacer size={20} />
    </div>
  );
};

export default DiaryContentSkeleton;
