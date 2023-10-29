'use client';

import { CustomOverlayMap, Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import { PhotoWithLocation } from '@/types';
import Link from 'next/link';
export interface PhotoLocationMapProps {
  photos: PhotoWithLocation[];
}

const PhotoLocationMap = ({ photos }: PhotoLocationMapProps) => {
  return (
    <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: '100%', height: '85vh' }}
      level={14}
    >
      <MarkerClusterer averageCenter={true} minLevel={10}>
        {photos.map(photo => {
          return (
            <div
              key={`${photo.photoId}/cluster/${photo.latitude}-${photo.longitude}`}
            >
              <CustomOverlayMap
                key={`${photo.photoId}/overlay/${photo.latitude}-${photo.longitude}`}
                position={{
                  lat: photo.latitude,
                  lng: photo.longitude,
                }}
              >
                <Link
                  href={`photos/${photo.photoId}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className=" w-[100px] h-[100px] border-[3px] border-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={photo.thumbnailUrl}
                      alt={'썸네일 이미지'}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                </Link>
              </CustomOverlayMap>
            </div>
          );
        })}
      </MarkerClusterer>
    </Map>
  );
};

export default PhotoLocationMap;
