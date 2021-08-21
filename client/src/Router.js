import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
//setContext is function that is used to authenticate request made to the backend while user is logged in.
import { setContext } from "@apollo/client/link/context";
import Forgot from "./pages/forgot";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/reset";
import Navbar from "./components/Navbar";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});
//JWT composed of three parts: the header portion, the payload portion and the signature portion.
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
//ApolloClient gives us access to the database.
const client = new ApolloClient({
  //new instance of ApolloClient
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), //new instance of InMemoryCache
});

function Routes() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        {/* <Navbar /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
        <Route exact path="/reset">
          <Reset />
        </Route>
      </Switch>
    </ApolloProvider>
  );
}

export default Routes;
