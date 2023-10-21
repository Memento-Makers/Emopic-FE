'use client';

import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { DEFAULT_LAT, DEFAULT_LNG } from '@/constants';
import { useCurrentLocationPhoto } from '@/api';

type MyState = {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: string | null;
  isLoading: boolean;
  isError: boolean;
};

const CurrentLocationPhoto = () => {
  const [state, setState] = useState<MyState>({
    center: {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    isError: false,
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          position => {
            setState(prev => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }));
          },
          err => {
            setState(prev => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
              isError: true,
            }));
          }
        );
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        setState(prev => ({
          ...prev,
          errMsg: 'geolocation을 사용할수 없어요..',
          isLoading: false,
        }));
      }
    }
  }, []);

  const { data, isLoading: isPhotoLoading } = useCurrentLocationPhoto(
    state.center.lat,
    state.center.lng
  );

  return (
    <>
      {state.isError && (
        <div className=" rounded-lg w-[190px] h-[190px] bg-primary text-white flex items-center justify-center">
          현재 위치를 알 수 없어요..
        </div>
      )}

      {!state.isError && (
        <Map
          center={state.center}
          className=" rounded-lg w-[190px] h-[190px]"
          level={4}
        >
          {!state.isLoading && (
            <div>
              <MapMarker position={state.center}></MapMarker>
              {!isPhotoLoading && (
                <CustomOverlayMap position={state.center}>
                  <div className=" relative w-fit h-fit border-[3px] border-white rounded-lg shadow-md">
                    <img
                      src={data?.thumbnailUrl as string}
                      alt={'썸네일 이미지'}
                      width={95}
                      height={95}
                      className="rounded-lg"
                    />
                    <div className="absolute rounded-full w-[30px] h-[30px] bg-primary flex items-center justify-center bottom-[4px] right-[4px] text-white">
                      {data?.count}
                    </div>
                  </div>
                </CustomOverlayMap>
              )}
            </div>
          )}
        </Map>
      )}
    </>
  );
};

export default CurrentLocationPhoto;
