import { gql } from 'apollo-server';

export const typeDefs = gql`
  scalar Time

  type Station {
    id: ID!
    name: String
    address: String
    x: String
    y: String
  }

  type EnrichedStation {
    id: ID!
    name: String
    address: String
    x: String
    y: String
    avgDepartureDistance: Float
    avgTripDuration: Time
    totalArrivals: Float
    totalDepartures: Float
  }

  type Query {
    stations: [Station!]!
    station(id: ID!): EnrichedStation!
  }
`;
