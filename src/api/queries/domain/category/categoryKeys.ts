interface categoryKeyType {
  requestIndividual: (userId: number, photoId: number) => readonly string[];
  requestAll: (userId: number) => readonly string[];
  requestDetail: (categoryId: number, userId: number) => readonly string[];
}

export const categoryKeys: categoryKeyType = {
  requestIndividual: (userId, photoId) =>
    ['category', userId.toString(), photoId.toString()] as const,
  requestAll: userId => ['category', 'all', userId.toString()] as const,
  requestDetail: (categoryId, userId) =>
    ['category', 'detail', categoryId.toString(), userId.toString()] as const,
};
