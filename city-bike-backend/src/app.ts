/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const PORT = process.env.PORT ?? 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = (async () => {
  console.log('Starting server...');
  await server.listen({ port: PORT });
  console.log('Server running');
})();
