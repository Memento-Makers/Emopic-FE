import { rest } from 'msw';

const API_END_POINT = process.env.NEXT_PUBLIC_MOCKING_URL;

export const photoHandlers = [
  // 사진 업로드 (POST)
  rest.post(`${API_END_POINT}/api/v1/photos`, (req, res, ctx) => {
    const { fileName } = req.body as { fileName: string };

    if (!fileName) {
      return res(
        ctx.status(400),
        ctx.json({
          message: '파일 이름이 필요합니다.',
          status: 400,
        })
      );
    }

    // TODO: 실제 코드에서는 signedUrl을 생성하기 위한 로직을 작성
    return res(
      ctx.status(200),
      ctx.json({
        message: '이미지 업로드 signed_url 생성 성공',
        status: 200,
        data: {
          photoId: 1, // 예시 ID
          signedUrl: '이미지 업로드 경로', // 예시 URL
        },
      })
    );
  }),

  // 이미지 캡셔닝 요청 (POST)
  rest.post(`${API_END_POINT}/api/v1/photos/caption`, (req, res, ctx) => {
    const { photoId } = req.body as { photoId: number };

    if (!photoId) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'photoId가 필요합니다.',
          status: 400,
        })
      );
    }

    // 실제 코드에서는 캡셔닝을 생성하는 로직을 작성해야 합니다.
    return res(
      ctx.status(200),
      ctx.json({
        message: '캡셔닝 생성 완료',
        status: 200,
        data: {
          caption: '캡셔닝 내용', // 예시 캡션
        },
      })
    );
  }),

  // 개별 사진 조회 (GET)
  rest.get(`${API_END_POINT}/api/v1/photos/:photoId`, (req, res, ctx) => {
    const { photoId } = req.params;

    // TODO: photoId에 따른 이미지 정보를 가져오는 로직을 작성
    return res(
      ctx.status(200),
      ctx.json({
        message: '개별 사진 조회 완료',
        status: 200,
        data: {
          photoId: Number(photoId),
          signedUrl: '이미지 다운로드 경로',
          diaryId: 1,
          diaryContent: '일기장 내용',
          categories: ['분류 1', '분류 2', '분류 3'],
          emotions: [{ emotionId: 1, name: '좋음' }],
        },
      })
    );
  }),
];
