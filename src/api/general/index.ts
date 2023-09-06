export const uploadFile = async (signedUrl: string, file: File) => {
  const result = await fetch(signedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
  });

  if (result.ok) {
    console.log('Upload successful');
  } else {
    console.log('Upload failed');
  }
};

export const getOpenAIResponse = async (emotion: string[], caption: string) => {
  const openAiPayload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `일기장을 작성하려고 해요. 오늘 있었던 일은 다음과 같아요: ${caption}, 오늘의 감정은 다음과 같아요 : ${emotion} \n 이 내용을 바탕으로 일기장을 작성해주실래요?`,
      },
    ],
    temperature: 0.7,
  };

  const result = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(openAiPayload),
  });

  return result.json();
};
