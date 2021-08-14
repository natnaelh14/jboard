import React from 'react';
import { Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Routes() {
    return (
        <Switch>
            <Routes exact path  = '/'>
                <Home />
            </Routes>
            <Routes path = '/login'>
                <Login />
            </Routes>
            <Routes path = '/signup'>
                <Signup />
            </Routes>
        </Switch>
    )
}

export default Routes;