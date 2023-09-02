import React from 'react';
import { IconType } from 'react-icons'; // react-icons의 IconType을 가져옵니다.

interface NavigationButtonProps {
  Icon: IconType;
  label: string;
  handleOnClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  Icon,
  label,
  handleOnClick,
}) => {
  return (
    <button
      className="flex flex-col justify-center items-center hover:text-primary hover:active"
      onClick={e => {
        e.preventDefault();
        handleOnClick();
      }}
    >
      <div className="flex flex-col justify-center">
        <Icon className=" text-[20px]" />
      </div>
      <span>{label}</span>
    </button>
  );
};

export default NavigationButton;
