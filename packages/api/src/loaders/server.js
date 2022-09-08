import { GraphQLServer, PubSub } from 'graphql-yoga';

import resolvers from '../resolvers';

// we need to pass this to all of our resolvers
const pubsub = new PubSub();

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: (request) => {
      return {
        ...request,
        pubsub,
      };
    },
  });
}

export default createServer;
