import { getStations } from './database/stationQueries';

export const resolvers = {
  Station: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    address: (parent) => parent.address,
    x: (parent) => parent.x,
    y: (parent) => parent.y,
  },

  Query: {
    station: (parent) => {
      return [];
    },

    stations: async () => {
      const stations = await getStations();
      return stations ?? [];
    },
  },
};
