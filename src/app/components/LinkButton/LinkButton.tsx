import Link from 'next/link';

export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  url: string; // 이동할 링크
  content: string; // 버튼 내용
  className?: string; // 추가 스타일
}

export const LinkButton = ({ url, content, className }: LinkButtonProps) => {
  return (
    <Link href={url}>
      <button className={`btn ${className}`}>{content}</button>
    </Link>
  );
};
