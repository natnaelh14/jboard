import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Auth from "./utils/auth";
//setContext is function that is used to authenticate request made to the backend while user is logged in.
import { setContext } from "@apollo/client/link/context";
import Forgot from "./pages/forgot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/reset";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import JobsDashboard from "./components/JobsDashboard";

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


const connectToDevTools = process.env.REACT_APP_PRODUCTION === 'false' //enable apollo devtools if  production is set to false
//ApolloClient gives us access to the database.
const client = new ApolloClient({
  //new instance of ApolloClient
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), //new instance of InMemoryCache
  connectToDevTools
});

function Routes() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Switch>        
        <Route exact path="/">
          {Auth.loggedIn() ? <Redirect to="/dashboard" /> : <Home /> }
        </Route>
        <Route exact path="/dashboard">
          {Auth.loggedIn() ? <JobsDashboard /> : <Redirect to="/" /> }
        </Route>
        <Route exact path="/login">
          {Auth.loggedIn() ? <Redirect to="/dashboard" /> : <Login /> }
        </Route>
        <Route exact path="/signup">
          {Auth.loggedIn() ? <Redirect to="/dashboard" /> : <Signup /> }
        </Route>
        <Route exact path="/forgot">
          {Auth.loggedIn() ? <Redirect to="/dashboard" /> : <Forgot /> }
        </Route>
        <Route exact path="/reset">
          {Auth.loggedIn() ? <Reset /> : <Redirect to="/" /> } 
        </Route>
      </Switch>
      <Footer />
    </ApolloProvider>
  );
}

export default Routes;
