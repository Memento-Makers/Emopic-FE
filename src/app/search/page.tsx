import Image from 'next/image';
import { BasicHeader, PreviewList, Spacer, FloatingButton } from '@/components';
import RootLayout from '../layout';

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
    <RootLayout>
      <div className="relative">
        <BasicHeader profileImage="https://picsum.photos/200" />
        <FloatingButton />
        <main className="px-3">
          {categories.map((category, index) => (
            <>
              <PreviewList
                key={index}
                images={category.images}
                title={category.title}
              />
              {index < categories.length - 1 && (
                <Spacer size={24} key={index} />
              )}
            </>
          ))}
        </main>
      </div>
    </RootLayout>
  );
}
