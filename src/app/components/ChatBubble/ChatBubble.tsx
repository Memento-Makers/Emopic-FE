'use client';

import { useEffect, useState } from 'react';

export interface ChatBubbleProps {
  className?: string;
  content: string;
}

export const ChatBubble = ({ className, content }: ChatBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-[-100px]'
      } ${className}
      z-[999]
      `}
    >
      <div className="chat chat-end rotate-[270deg]">
        <div className="chat-bubble chat-bubble-primary h-[300px]"></div>
      </div>
      <p className="absolute bottom-[44%] left-[-150%] w-[300px] text-white">
        {content}
      </p>
    </div>
  );
};
