import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from 'config';
import { HomeView } from 'views/home';

export const getRoutes = () => (
    <Fragment>
        <Route path={ROUTES.HOME} component={HomeView} />
    </Fragment>
);
