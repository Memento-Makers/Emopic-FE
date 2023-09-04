export interface PreviewHeaderProps {
  title: string;
  count: number;
}

export const PreviewHeader = ({ title, count }: PreviewHeaderProps) => {
  return (
    <h3 className=" text-[24px] font-bold mb-[15px]">
      {title} ({count})
    </h3>
  );
};
