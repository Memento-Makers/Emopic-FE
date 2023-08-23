import { CategoryData } from '@/types';

export interface ImageUploadTitleProps {
  date: Date;
  isFetching: boolean; // 데이터 준비 중 여부
  results: string[] | null; // 분류 결과, 아직
}

export const ImageUploadTitle = ({
  date,
  isFetching,
  results,
}: ImageUploadTitleProps) => {
  return (
    <>
      {isFetching && (
        <p className=" text-gray-400 animate-pulse font-bold text-[32px]">
          이미지 분류 중...
        </p>
      )}

      <div className=" flex gap-[10px]">
        {!isFetching &&
          results &&
          results.map(result => (
            <span className="text-[32px] font-bold" key={result}>
              {result}
            </span>
          ))}
      </div>
    </>
  );
};
