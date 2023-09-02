// 테스트에 사용되는 유틸 함수

export const randomDelay = () => {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000; // 1~3초 사이의 랜덤 딜레이
    setTimeout(resolve, delay);
  });
};
