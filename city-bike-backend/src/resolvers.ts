import { getStation, getStations } from './database/stationQueries';

export const resolvers = {
  Station: {
    id: (parent) => parent.id,
    name: (parent) => parent.stationName,
    address: (parent) => parent.stationAddress,
    x: (parent) => parent.coordinateX,
    y: (parent) => parent.coordinateY,
  },

  Query: {
    station: async (_, args) => {
      // TODO 404 error
      const station = await getStation(args.id);
      return station;
    },

    stations: async () => {
      const stations = await getStations();
      return stations ?? [];
    },
  },
};
