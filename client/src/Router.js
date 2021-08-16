import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forgot from './pages/forgot';
import Home from './pages/Home';
import Dashboard from './pages/dashboard'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset from   './pages/reset';

function Routes() {
    return (
        <Switch>
            <Route exact path  = '/'>
                <Home />
            </Route>
            <Route exact path = '/dashboard'>
                <Dashboard />
            </Route>
            <Route path = '/login'>
                <Login />
            </Route>
            <Route path = '/signup'>
                <Signup />
            </Route>
            <Route path = '/forgot'>
                <Forgot />
            </Route>
            <Route path = '/reset'>
                <Reset />
            </Route>
        </Switch>
    )
}

export default Routes;