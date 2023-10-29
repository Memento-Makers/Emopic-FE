interface locationKeyType {
  getCurrentLocationPhoto: (
    latitude: number,
    longitude: number,
    userId: number
  ) => readonly string[];
  getLatestLocationPhoto: (userId: number) => readonly string[];
  getAllLocationPhoto: (userId: number) => readonly string[];
  getRepresentativePhoto: (userId: number) => readonly string[];
  getCityPhoto: (userId: number, city: string) => readonly string[];
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
  getLatestLocationPhoto: userId =>
    ['location', 'latest', userId.toString()] as const,
  getAllLocationPhoto: userId =>
    ['location', 'all', userId.toString()] as const,
  getRepresentativePhoto: userId =>
    ['location', 'representative', userId.toString()] as const,
  getCityPhoto: (userId, city) =>
    ['location', 'city', city, userId.toString()] as const,
};
