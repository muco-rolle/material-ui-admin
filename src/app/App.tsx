import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { getRoutes } from 'config';
import { theme } from 'theme';

import 'typeface-inter'; // global font

export function App() {
    const routes = getRoutes();
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Switch>{routes}</Switch>
            </MuiThemeProvider>
        </Router>
    );
}
