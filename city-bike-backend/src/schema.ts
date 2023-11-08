import { gql } from 'apollo-server';

/**
 * Type definitions for graphql. Would be neat to generate typescript
 * types from these too. There probably is package for that...
 */
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
