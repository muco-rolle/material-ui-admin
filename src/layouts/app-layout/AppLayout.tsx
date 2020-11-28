import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from './components';

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header className={classes.header} />
            <div className={classes.container}>
                <h1>Sidebar</h1>
                <main className={classes.content}>{children}</main>
            </div>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },

    header: {
        zIndex: 2,
        position: 'relative',
    },

    container: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },

    sidebar: {
        zIndex: 3,
        width: 256,
        minWidth: 256,
        flex: '0 0 auto',
    },

    content: {
        overflowY: 'auto',
        flex: '1 1 auto',
    },
}));
