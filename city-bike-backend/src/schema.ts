import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Station {
    id: ID!
    name: String
    address: String
    x: String
    y: String
  }

  type Query {
    stations: [Station!]!
    station(id: ID!): Station
  }
`;
