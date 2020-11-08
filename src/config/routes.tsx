import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'config';
import { HomeView } from 'views/home';

export const getRoutes = () => (
    <Fragment>
        <Route path={routes.HOME} component={HomeView} />
    </Fragment>
);
