'use client';

const DetailBottomNavigationSkeleton = () => {
  return (
    <>
      <div className="btm-nav absolute bottom-0 ">
        <div className=" flex flex-col justify-center items-center gap-[5px]">
          <div className=" bg-gray-300 rounded-full dark:bg-gray-600 w-[30px] h-[30px]"></div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[50px]"></div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-[5px]">
          <div className=" bg-gray-300 rounded-full dark:bg-gray-600 w-[30px] h-[30px]"></div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[50px]"></div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-[5px]">
          <div className=" bg-gray-300 rounded-full dark:bg-gray-600 w-[30px] h-[30px]"></div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[50px]"></div>
        </div>
      </div>
    </>
  );
};

export default DetailBottomNavigationSkeleton;
