const MainPhotoPreviewSkeleton = () => {
  return (
    <div className="mb-[24px]">
      <div className=" mb-[16px] animate-pulse bg-gray-300 h-5 w-[180px] rounded"></div>
      <ul className=" grid grid-cols-3 gap-[2px]">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={`main/skeleton/${index}`}
            className="animate-pulse bg-gray-300 w-[145px] h-[145px]"
          ></div>
        ))}
      </ul>
    </div>
  );
};

export default MainPhotoPreviewSkeleton;
