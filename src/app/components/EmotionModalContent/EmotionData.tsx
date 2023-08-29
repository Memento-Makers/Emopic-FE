import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from 'react-icons/ci';
import { GiGlassCelebration, GiNightSleep } from 'react-icons/gi';
import { BiJoystick } from 'react-icons/bi';
import { IoMdFlower } from 'react-icons/io';
import { BsHouseHeartFill, BsBalloonHeart } from 'react-icons/bs';
import { FaRegTired } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { PiEyeClosedLight } from 'react-icons/pi';

import { EmotionId } from '@/types';

interface EmotionData {
  icon: JSX.Element;
  label: string;
}

export const emotionData: Record<EmotionId, EmotionData> = {
  1: { icon: <CiFaceSmile />, label: '좋음' },
  2: { icon: <CiFaceMeh />, label: '보통' },
  3: { icon: <CiFaceFrown />, label: '나쁨' },
  101: { icon: <GiGlassCelebration />, label: '자랑스러운' },
  102: { icon: <IoMdFlower />, label: '감사한' },
  103: { icon: <BiJoystick />, label: '즐거운' },
  104: { icon: <BsHouseHeartFill />, label: '편안한' },
  105: { icon: <BsBalloonHeart />, label: '들뜬' },
  301: { icon: <PiEyeClosedLight />, label: '슬픈' },
  302: { icon: <AiFillFire />, label: '화난' },
  303: { icon: <FaRegTired />, label: '부끄러운' },
  304: { icon: <GiNightSleep />, label: '피곤한' },
  305: { icon: <BsClockHistory />, label: '초조한' },
};
