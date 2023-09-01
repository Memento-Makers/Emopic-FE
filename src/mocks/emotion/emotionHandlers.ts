import { rest } from 'msw';

const API_END_POINT = process.env.NEXT_PUBLIC_MOCKING_URL;

export const emotionHandlers = [
  // 전체 감정 조회 (GET)
  rest.get(`${API_END_POINT}/api/v1/emotion`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '전체 감정 조회 성공',
        status: 200,
        data: {
          main: [
            { emotionId: 1, name: '좋음' },
            { emotionId: 2, name: '보통' },
            { emotionId: 3, name: '나쁨' },
          ],
          sub: [
            { emotionId: 101, name: '좋음을 골랐을때 추천되는 감정1' },
            // ... 나머지 세부 감정들
          ],
        },
      })
    );
  }),

  // 감정 입력 (POST)
  rest.post(
    `${API_END_POINT}/api/v1/photos/:photoId/emotions`,
    (req, res, ctx) => {
      const { emotionId, childEmotions } = req.body as {
        emotionId: number;
        childEmotions: number[];
      };

      if (!emotionId || !childEmotions || childEmotions.length < 1) {
        return res(
          ctx.status(400),
          ctx.json({
            message: '잘못된 입력입니다',
            status: 400,
          })
        );
      }

      // TODO: 감정 데이터를 처리하는 로직을 작성
      return res(
        ctx.status(201),
        ctx.json({
          message: '감정 저장 성공',
          status: 201,
          data: {
            photoEmotionId: 1,
          },
        })
      );
    }
  ),
];
