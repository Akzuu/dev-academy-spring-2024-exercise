import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Station {
    id: ID!
    name: String!
    address: String!
    coordinate_x: String!
    coordinate_y: String!
  }

  type Query {
    stations: [Station!]!
    station(id: ID!): Station
  }
`;
