import { rest } from 'msw';
const API_END_POINT = process.env.NEXT_PUBLIC_MOCKING_URL;

export const diaryHandlers = [
  rest.post(
    `${API_END_POINT}/api/v1/photos/:photoId/diaries`,
    (req, res, ctx) => {
      const { content } = req.body as { content: string };

      if (!content) {
        return res(
          ctx.status(400),
          ctx.json({
            message: '일기장 내용이 없습니다',
            status: 400,
          })
        );
      }

      // 새로운 diary 생성 로직 등을 작성 (임시로 하드 코딩한 형태 사용)
      return res(
        ctx.status(201),
        ctx.json({
          message: '일기장 생성 완료',
          status: 201,
          data: {
            diaryId: 1,
          },
        })
      );
    }
  ),
];
