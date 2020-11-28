import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    AppBarProps,
    colors,
    makeStyles,
    Theme,
    Toolbar,
} from '@material-ui/core';
import clsx from 'clsx';
import { ROUTES } from 'config';

interface HeaderProps extends AppBarProps {}

export const Header = ({ ...restProps }: HeaderProps) => {
    const classes = useStyles();

    return (
        <AppBar className={clsx(classes.root)} {...restProps}>
            <Toolbar>
                <RouterLink to={ROUTES.HOME}>Logo</RouterLink>
                <div className={classes.flexGrow} />
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
    },
    flexGrow: {
        flexGrow: 1,
    },
    search: {
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: 4,
        flexBasis: 300,
        height: 36,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: 'inherit',
    },
    searchInput: {
        flexGrow: 1,
        color: 'inherit',
        '& input::placeholder': {
            opacity: 1,
            color: 'inherit',
        },
    },
    searchPopper: {
        zIndex: theme.zIndex.appBar + 100,
    },
    searchPopperContent: {
        marginTop: theme.spacing(1),
    },
    trialButton: {
        marginLeft: theme.spacing(2),
        color: 'white',
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900],
        },
    },
    trialIcon: {
        marginRight: theme.spacing(1),
    },
    notificationsButton: {
        marginLeft: theme.spacing(1),
    },
    notificationsBadge: {
        backgroundColor: colors.orange[600],
    },
    logoutButton: {
        marginLeft: theme.spacing(1),
    },
    logoutIcon: {
        marginRight: theme.spacing(1),
    },
}));
