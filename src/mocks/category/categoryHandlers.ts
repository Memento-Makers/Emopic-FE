import { rest } from 'msw';

const API_END_POINT = process.env.NEXT_PUBLIC_MOCKING_URL;

export const categoryHandlers = [
  // 이미지 분류 결과 요청 (POST)
  rest.post('/api/v1/photos/categories', (req, res, ctx) => {
    return res(
      ctx.json({
        message: '분류 결과 조회 완료',
        status: 200,
        data: {
          categories: ['분류 1', '분류 2', '분류 3'],
        },
      })
    );
  }),

  // 분류 결과 전체 조회 (GET)
  rest.get(`${API_END_POINT}/api/v1/photos/categories`, (req, res, ctx) => {
    const size = parseInt(req.url.searchParams.get('size') || '6', 10);

    return res(
      ctx.json({
        message: '분류 결과 전체 조회 완료',
        status: 200,
        data: {
          categories: Array.from({ length: size }, (_, idx) => ({
            category: 'name',
            count: 1,
            thumbnail: 'https://picsum.photos/200/300', // 임시 이미지
          })),
        },
      })
    );
  }),

  // 분류 결과 세부 조회 (GET)
  rest.get(
    `${API_END_POINT}/api/v1/photos/categories/:categoryId`,
    (req, res, ctx) => {
      const size = req.url.searchParams.get('size') || 6;
      const page = req.url.searchParams.get('page') || 3;
      const order = req.url.searchParams.get('order');

      // 우선 하드 코딩된 값을 사용
      return res(
        ctx.json({
          message: '분류 별 사진 조회 완료',
          status: 200,
          data: {
            content: [
              {
                photoId: 1,
                signedUrl: '이미지 다운로드 경로',
                emotionId: 1,
                name: '좋음',
              },
              {
                photoId: 2,
                signedUrl: '이미지 다운로드 경로',
                emotionId: 2,
                name: '나쁨',
              },
            ],
            pageable: {
              sort: {
                empty: false,
                unsorted: false,
                sorted: true,
              },
              offset: 18,
              pageNumber: 3,
              pageSize: 6,
              paged: true,
              unpaged: false,
            },
            totalPages: 4,
            totalElements: 20,
            last: true,
            size: 6,
            number: 3,
            sort: {
              empty: false,
              unsorted: false,
              sorted: true,
            },
            numberOfElements: 2,
            first: false,
            empty: false,
          },
        })
      );
    }
  ),
];
