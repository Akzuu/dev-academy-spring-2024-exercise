import { getEnrichedStation, getStations } from './database/stationQueries';

/**
 * Graphql resolvers. In a larger program, these should be split
 * into smaller chunks
 */
export const resolvers = {
  Station: {
    id: (parent) => parent.id,
    name: (parent) => parent.stationName,
    address: (parent) => parent.stationAddress,
    x: (parent) => parent.coordinateX,
    y: (parent) => parent.coordinateY,
  },

  EnrichedStation: {
    id: (parent) => parent.id,
    name: (parent) => parent.stationName,
    address: (parent) => parent.stationAddress,
    x: (parent) => parent.coordinateX,
    y: (parent) => parent.coordinateY,
    avgDepartureDistance: (parent) => parent.avgDepartureDistance,
    avgTripDuration: (parent) => parent.avgTripDuration,
    totalArrivals: (parent) => parent.totalArrivals,
    totalDepartures: (parent) => parent.totalDepartures,
  },

  Query: {
    station: async (_, args) => {
      const station = await getEnrichedStation(args.id);

      // It would be great to offer 404 error for this endpoint
      return station;
    },

    stations: async () => {
      const stations = await getStations();
      return stations ?? [];
    },
  },
};
