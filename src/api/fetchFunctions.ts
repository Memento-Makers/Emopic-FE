// ref : https://github.com/travelmakers/travelmakers-nextjs-boilerplate/blob/main/api/fetchFunctions.tsx

import { BasicResponse } from '@/types';
import { signOut } from 'next-auth/react';

// TODO: Base URL 환경 변수로 등록하기, 우선 임시 주소 사용
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function errorException(response: Response) {
  const responseData = await response.json();
  if (response.status >= 400) {
    if (response.status === 401) {
      signOut();
      // throw new Error(MESSAGE_UNAUTHORIZED);
    } else {
      throw new Error(response.statusText);
    }
  }
  return responseData;
}

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<BasicResponse<returnType>> => {
  try {
    // 생략...
    const response = await fetch(`${process.env.BASE_URL}${endpoint}`);
    const responseData = (await response.json()) as BasicResponse<returnType>; // as를 사용해 타입을 명시
    if (response.ok) {
      return responseData;
    }
    throw new Error(responseData.message || 'An error occurred');
  } catch (error) {
    throw error;
  }
};

export const mutateFetch = async (
  endpoint: string,
  method?: string,
  bodyData?: Object
) => {
  try {
    // const user = await getUserServerSession();
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: method ?? 'POST',
      //   headers: user
      //     ? {
      //         Accept: 'application/json',
      //         Authorization: `Bearer ${user?.user?.accessToken}`,
      //       }
      //     : {
      //         Accept: 'application/json',
      //       },
      body: JSON.stringify({
        ...bodyData,
      }),
    });
    const responseData = await errorException(response);
    return responseData;
  } catch (error) {
    throw error;
  }
};
