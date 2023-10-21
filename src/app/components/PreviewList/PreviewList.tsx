'use client';

import { PreviewListItem } from './PreviewListItem';
import { PreviewHeader } from './PreviewHeader';
import { useCategoryDetail } from '@/api';
import { ImageSkeleton } from '@/components';

export interface PreviewListProps {
  title: string;
  categoryId: number;
  count: number;
}

const PreviewList = ({ title, categoryId, count }: PreviewListProps) => {
  const { data, isLoading } = useCategoryDetail(categoryId);

  return (
    <section>
      <PreviewHeader title={title} count={count} />

      <div className=" flex gap-[10px] overflow-hidden">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <ImageSkeleton
              key={`${categoryId}/skeleton/${index}`}
              width={120}
              height={120}
            />
          ))}
      </div>

      <div className="carousel carousel-center gap-[10px] overflow-scroll w-[100%]">
        {data &&
          data.content.map(({ signedUrl, photoId }) => (
            <PreviewListItem
              key={`${categoryId}/${photoId}`}
              imageUrl={signedUrl}
              photoId={photoId}
            />
          ))}
      </div>
    </section>
  );
};

export default PreviewList;
