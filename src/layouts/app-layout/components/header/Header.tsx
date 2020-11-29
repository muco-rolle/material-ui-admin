import React from 'react';
import {
    AppBar,
    AppBarProps,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { shadows } from 'utils';

interface HeaderProps extends AppBarProps {}

export const Header = ({ className, ...restProps }: HeaderProps) => {
    const classes = useStyles();

    return (
        <AppBar
            style={{ boxShadow: shadows.lg, backgroundColor: 'white' }}
            position="fixed"
            className={classes.appBar}
            {...restProps}
        >
            <Toolbar
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Typography variant="h5">Menu</Typography>
                <Typography variant="h5">Logo</Typography>
                <Typography variant="h5">Avatar</Typography>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: shadows.lg,
        backgroundColor: 'white',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.grey['700'],
        height: '70px',
    },
}));
