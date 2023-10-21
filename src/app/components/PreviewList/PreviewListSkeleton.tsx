import { ImageSkeleton } from '@/components';

const PreviewSkeleton = () => {
  return (
    <section className=" mb-[24px]">
      <div className="animate-pulse bg-gray-300 h-5 w-[200px] rounded mb-[15px]"></div>
      <div className=" flex gap-[10px] overflow-hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <ImageSkeleton key={`skeleton/${index}`} width={120} height={120} />
        ))}
      </div>
    </section>
  );
};

export default PreviewSkeleton;
