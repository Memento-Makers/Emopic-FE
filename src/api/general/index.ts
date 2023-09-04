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
