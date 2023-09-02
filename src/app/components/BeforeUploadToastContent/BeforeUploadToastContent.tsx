interface BeforeUploadToastContentProps {
  preview: File; // 첫 번째 파일 미리보기
  fileCount: number; // 파일 갯수
}

const BeforeUploadToastContent = ({
  preview,
  fileCount,
}: BeforeUploadToastContentProps) => {
  const fileURL = URL.createObjectURL(preview);

  return (
    <div className=" flex gap-[10px] items-center">
      <div className=" w-fit h-fit relative">
        <img
          src={fileURL}
          alt={'업로드 파일 미리보기 이미지'}
          className={`w-[80px] h-[80px]`}
        />
        {fileCount > 1 && (
          <div className="badge badge-accent absolute bottom-[5px] right-[3px]">
            {fileCount}
          </div>
        )}
      </div>

      <div className=" flex gap-[10px] items-center">
        <span className="loading loading-spinner text-primary"></span>
        파일을 업로드하는 중
      </div>
    </div>
  );
};

export default BeforeUploadToastContent;
