interface categoryKeyType {
  requestIndividual: (userId: number, photoId: number) => readonly string[];
  requestAll: (userId: number) => readonly string[];
}

export const categoryKeys: categoryKeyType = {
  requestIndividual: (userId, photoId) =>
    ['request', userId.toString(), photoId.toString()] as const,
  requestAll: userId => ['request', 'all', userId.toString()] as const,
};
