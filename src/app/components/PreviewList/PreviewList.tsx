import { PreviewListItem } from './PreviewListItem';
import { PreviewHeader } from './PreviewHeader';

export interface PreviewListProps {
  images: string[];
  title: string;
}

export const PreviewList = ({ images, title }: PreviewListProps) => {
  return (
    <section>
      <PreviewHeader title={title} />
      <div className="carousel carousel-center rounded-box gap-[10px] overflow-scroll w-[100%]">
        {images.map(image => (
          <PreviewListItem imageUrl={image} />
        ))}
      </div>
    </section>
  );
};
