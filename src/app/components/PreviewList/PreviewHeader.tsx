export interface PreviewHeaderProps {
  title: string;
}

export const PreviewHeader = ({ title }: PreviewHeaderProps) => {
  return <h3 className=" text-[24px] font-bold">{title}</h3>;
};
