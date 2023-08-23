export interface ImageCaptionSectionProps {
  isFetching: boolean;
  content: string | null;
}

export const ImageCaptionSection = ({
  isFetching,
  content,
}: ImageCaptionSectionProps) => {
  return (
    <>
      {isFetching && (
        <div className="text-gray-400 animate-pulse ">
          <p className=" text-[24px]">일기장 데이터를 생성하는 중</p>
          <p className="w-full h-3 mt-1 bg-gray-300 rounded-lg " />
          <p className="w-full h-3 mt-3 bg-gray-300 rounded-lg " />
          <p className="w-full h-3 mt-3 bg-gray-300 rounded-lg " />
          <p className="w-[250px] h-3 mt-3 bg-gray-300 rounded-lg " />
        </div>
      )}
      {!isFetching && <p className=" text-[20px]">{content}</p>}
    </>
  );
};
