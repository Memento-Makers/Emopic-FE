interface AfterFileUploadToastContentProps {
  files: File[];
}

const AfterFileUploadToastContent = ({
  files,
}: AfterFileUploadToastContentProps) => {
  const imageUrls = files.map(file => URL.createObjectURL(file));
  const imageCount = imageUrls.length;

  const renderImages = () => {
    if (imageCount === 1) {
      return (
        <div className="">
          <img
            src={imageUrls[0]}
            alt="img-0"
            className=" object-cover w-200 h-100"
          />
        </div>
      );
    } else if (imageCount === 2) {
      return (
        <div className="w-200 grid grid-cols-2 gap-2">
          {imageUrls.slice(0, 2).map((url, index) => (
            <div key={index} className="relative aspect-w-1 aspect-h-1">
              <img
                src={url}
                alt={`img-${index}`}
                className="object-cover  inset-0 w-100 h-100"
              />
            </div>
          ))}
        </div>
      );
    } else if (imageCount === 3) {
      return (
        <div className="w-200 grid grid-rows-2 gap-2">
          <div className="row-span-1 relative aspect-w-1 aspect-h-1">
            <img
              src={imageUrls[0]}
              alt="img-0"
              className="object-cover inset-0 w-200 h-100"
            />
          </div>
          <div className="grid grid-cols-2 row-span-1 gap-2">
            {imageUrls.slice(1, 3).map((url, index) => (
              <div key={index} className="relative aspect-w-1 aspect-h-1">
                <img
                  src={url}
                  alt={`img-${index}`}
                  className="object-cover inset-0 w-100 h-100"
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-200 h-100 grid grid-rows-2 grid-cols-2 gap-2">
          {imageUrls.slice(0, 4).map((url, index) => (
            <div key={index} className={`relative aspect-w-1 aspect-h-1 `}>
              <img
                src={url}
                alt={`img-${index}`}
                className={`object-cover inset-0 w-full h-full ${
                  imageCount > 4 && index === 3 && 'brightness-50 relative'
                }`}
              />

              {imageCount > 4 && index === 3 && (
                <div className="absolute top-[40%] left-[45%] text-[20px] text-white">
                  {imageCount}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className=" flex flex-col justify-center gap-[10px] p-[5px]">
      <p className=" text-lg">항목 {imageCount}개 업로드 됨</p>
      {renderImages()}
    </div>
  );
};

export default AfterFileUploadToastContent;
