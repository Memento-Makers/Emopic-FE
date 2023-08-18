import { BasicHeader, PreviewList, Spacer } from '@/components';

// TODO: 모킹한 데이터로 수정

// 분류 별 더미 데이터 생성 함수
function createDummy() {
  return Array.from(
    { length: 5 },
    (_, index) => `https://picsum.photos/200/${index + 1}`
  );
}

// 분류별 데이터
const categories = [
  { title: '분류1', images: createDummy() },
  { title: '분류2', images: createDummy() },
  { title: '분류3', images: createDummy() },
];

export default function Home() {
  return (
    <>
      {/* TODO: 더미 이미지 사용, 백엔드에게 더미 유저 프로필 사진 내려달라고 하기 */}
      <BasicHeader profileImage="https://picsum.photos/200" />
      <main className=" px-3">
        {categories.map((category, index) => (
          <>
            <PreviewList images={category.images} title={category.title} />
            {index < categories.length - 1 && <Spacer size={24} />}
          </>
        ))}
      </main>
    </>
  );
}
