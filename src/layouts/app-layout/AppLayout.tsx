import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header, Sidebar } from './components';
import { Theme } from '@material-ui/core';

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Sidebar />
            <main className={classes.main}>{children}</main>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },

    main: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
