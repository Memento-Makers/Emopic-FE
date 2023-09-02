import { BsJournalBookmarkFill } from 'react-icons/bs';
import { ChatBubble } from '@/components';

export interface DiaryButtonProps {
  className?: string;
  handleOnClick?: () => void;
}

export const DiaryButton = ({ className, handleOnClick }: DiaryButtonProps) => {
  return (
    <div className="relative w-fit">
      <button
        className={`btn btn-outline btn-primary rounded-full w-[60px] h-[60px] text-primary ${className}`}
        onClick={handleOnClick}
      >
        <BsJournalBookmarkFill className="text-[30px]" />
      </button>

      <ChatBubble
        className="absolute top-[-65px] right-[150px]"
        content="버튼을 눌러, 일기장 내용을 확인하세요."
      />
    </div>
  );
};