import Link from 'next/link';

interface LocationPhotoInterface {
  location: string;
  thumbnailImage: string;
  isLatest: boolean; // 가장 최근의 이미지인가?
}

const LocationPhoto = ({
  location,
  thumbnailImage,
  isLatest = false,
}: LocationPhotoInterface) => {
  return (
    <Link href={`/city/${location}`}>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, black), url(${thumbnailImage})`,
        }}
        className=" h-[200px] w-[190px] h-[190px] bg-cover bg-center flex flex-col justify-end items-center rounded-lg"
      >
        {isLatest && (
          <div className=" text-white text-[24px] mb-[8px]">현재 위치</div>
        )}

        {!isLatest && (
          <div className=" text-white text-[24px] mb-[8px]">{location}</div>
        )}
      </div>
    </Link>
  );
};

export default LocationPhoto;
