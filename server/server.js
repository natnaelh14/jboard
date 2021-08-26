require("dotenv").config();
const express = require("express");
const path = require('path');
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.PORT || 3001;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  await server.start();

  // Mount Apollo middleware here.
  server.applyMiddleware({ app });

  db.once("open", () => {
    new Promise((resolve) => app.listen(PORT, resolve));
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    return { server, app };
  });
}

startApolloServer();
