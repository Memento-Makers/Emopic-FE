import { ThumbnailPhotoData } from '@/types';
import dayjs from 'dayjs';

export interface DateGroup {
  date: string;
  photos: ThumbnailPhotoData[];
}

export const groupByDate = (photos: ThumbnailPhotoData[]): DateGroup[] => {
  const groupedMap: { [key: string]: ThumbnailPhotoData[] } = {};
  const groupedArray: DateGroup[] = [];

  photos.forEach(photo => {
    const date = dayjs(photo.uploadDateTime).format('YYYY년 M월 D일');

    if (!groupedMap[date]) {
      groupedMap[date] = [];
    }

    groupedMap[date].push(photo);
  });

  for (const date in groupedMap) {
    groupedArray.push({ date, photos: groupedMap[date] });
  }

  return groupedArray;
};
