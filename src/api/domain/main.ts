import { basicFetch, mutateFetch } from '../fetchFunctions';

const END_POINT = './main';

// TODO: 명세에 맞는 타입 작성 후, Promise<리턴타입> 추가하기

export const fetchMain = async () => {
  const result = await basicFetch(END_POINT);
  return result;
};

export const fetchMainKey = ['main', '-'];

export const mutateMain = async (
  method: 'post' | 'put' | 'patch' | 'delete',
  data?: Object
) => {
  const result = await mutateFetch(END_POINT, method, data);
  return result;
};
