import { photoHandlers } from './photo/photoHandlers';
import { emotionHandlers } from './emotion/emotionHandlers';
import { diaryHandlers } from './diary/diaryHandlers';
import { categoryHandlers } from './category/categoryHandlers';

export const handlers = [
  ...photoHandlers,
  ...emotionHandlers,
  ...diaryHandlers,
  ...categoryHandlers,
];
