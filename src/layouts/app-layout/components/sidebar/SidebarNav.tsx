import React from 'react';
import { Theme, makeStyles } from '@material-ui/core';
import { navLists } from 'utils/routes';
import { SidebarNavList } from './SidebarNavList';

export const SidebarNav = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebarNav}>
            <nav>
                {navLists.map((list, index) => {
                    return (
                        <SidebarNavList
                            component="div"
                            key={index}
                            pages={list.pages}
                            title={list.title}
                        />
                    );
                })}
            </nav>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        overflowY: 'auto',
    },
    sidebarNav: {
        padding: theme.spacing(2),
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
    },
    avatar: {
        width: 60,
        height: 60,
    },
    name: {
        marginTop: theme.spacing(1),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
    nav: {
        marginTop: theme.spacing(2),
    },
}));
