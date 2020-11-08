import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { getRoutes } from 'config';

import 'typeface-inter'; // global font

export function App() {
    const routes = getRoutes();
    return (
        <Router>
            <Switch>{routes}</Switch>
        </Router>
    );
}
