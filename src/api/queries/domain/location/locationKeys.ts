interface locationKeyType {
  getCurrentLocationPhoto: (
    latitude: number,
    longitude: number,
    userId: number
  ) => readonly string[];
  getAllLocationPhoto: (userId: number) => readonly string[];
}

export const locationKeys: locationKeyType = {
  getCurrentLocationPhoto: (latitude, longitude, userId) =>
    [
      'location',
      'current',
      latitude.toString(),
      longitude.toString(),
      userId.toString(),
    ] as const,
  getAllLocationPhoto: userId =>
    ['location', 'all', userId.toString()] as const,
};
