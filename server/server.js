const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const PORT = process.env.PORT || 3001;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  await server.start();

  // Mount Apollo middleware here.
  server.applyMiddleware({ app });

  db.once('open', () => {
  new Promise(resolve => app.listen(PORT, resolve));
  console.log(`API server running on port ${PORT}!`);
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  return { server, app };
  })
}

startApolloServer()