import createServer from './loaders/server';

const server = createServer();

server.start(
  {
    bodyParserOptions: {
      limit: '100mb',
      type: 'application/json',
    },
    port: process.env.API_PORT,
    cors: {
      credentials: true,
      origin: process.env.DASHBOARD_URL,
    },
    debug: true,
  },
  (listener) => {
    console.log(`Server is listening on port ${listener.port}`);
  }
);
