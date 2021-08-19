import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Forgot from './pages/forgot';
import Home from './pages/Home';
import Dashboard from './pages/dashboard'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset from   './pages/reset';


// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
//   });

function Routes() {
    return (
            <Switch>
                <Route exact path  = '/'>
                    <Home />
                </Route>
                <Route exact path = '/dashboard'>
                    <Dashboard />
                </Route>
                <Route exact path = '/login'>
                    <Login />
                </Route>
                <Route exact path = '/signup'>
                    <Signup />
                </Route>
                <Route exact path = '/forgot'>
                    <Forgot />
                </Route>
                <Route exact path = '/reset'>
                    <Reset />
                </Route>
            </Switch>
    )
}

export default Routes;