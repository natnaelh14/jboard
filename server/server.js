require("dotenv").config();
const express = require("express");
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

  await server.start();

  // Mount Apollo middleware here.
  server.applyMiddleware({ app });

  db.once("open", () => {
    process.once("SIGINT", function (_code) {
      console.log("SIGINT received...");
      app.close();
    });

    process.once("SIGTERM", function (_code) {
      console.log("SIGTERM received...");
      app.close();
    });
    new Promise((resolve) => app.listen(PORT, resolve));
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    return { server, app };
  });
}

startApolloServer();
