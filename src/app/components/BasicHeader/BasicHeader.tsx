import { Avatar, Logo } from '@/components';

export const BasicHeader = ({ profileImage }: { profileImage: string }) => {
  return (
    <header
      data-theme="winter"
      className="flex justify-between items-center px-4 py-2"
    >
      <div className="flex items-center gap-[5px]">
        <Logo width={56} height={56} />
        <span className=" text-[24px] font-black cursor-default">Emopic</span>
      </div>

      {/* TODO: 임시 프로필 아바타, 백엔드와 상의 후 어떻게 할지 결정  */}
      <Avatar profileImage={profileImage} width={48} height={48} />
    </header>
  );
};
