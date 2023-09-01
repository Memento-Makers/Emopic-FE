import { LinkButton } from '@/components';

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(/assets/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">안녕하세요!</h1>
          <p className="py-6 text-white">
            당신의 추억과 감정을 사진에 담아보세요.
            <br />
            사진의 내용으로 사진을 검색해보세요.
            <br />
            사진 속 한 장면, 그 순간의 감동을 다시 느껴보세요.
          </p>
          <LinkButton
            url="/search"
            content="지금 바로 시작해보세요!"
            className="btn-primary"
          />
        </div>
      </div>
    </div>
  );
};
