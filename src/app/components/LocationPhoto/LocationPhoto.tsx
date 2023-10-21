import { LatestLocationPhoto } from '@/types';

const LocationPhoto = ({ photo }: { photo: LatestLocationPhoto }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, black), url(${photo.thumbnailUrl})`,
      }}
      className="h-[200px] w-[190px] h-[190px] bg-cover bg-center flex flex-col justify-end items-center rounded-lg"
    >
      <div className=" text-white text-[24px] mb-[8px]">{photo.city}</div>
    </div>
  );
};

export default LocationPhoto;
