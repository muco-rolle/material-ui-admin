import React from 'react';
import { Drawer, makeStyles, Theme, Toolbar, Hidden } from '@material-ui/core';

import ScrollBar from 'react-perfect-scrollbar';
import { SidebarNav } from './SidebarNav';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const Sidebar = ({ className, ...restProps }: SidebarProps) => {
    const classes = useStyles();

    return (
        <Hidden smDown>
            <Drawer
                {...restProps}
                className={classes.drawer}
                variant="permanent"
                elevation={1}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <ScrollBar>
                    <div className={classes.drawerContainer}>
                        <SidebarNav />
                    </div>
                </ScrollBar>
            </Drawer>
        </Hidden>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border: 'none',
    },
    drawerPaper: {
        width: drawerWidth,
        boxShadow:
            '10px 0  15px -3px rgba(0, 0, 0, 0.1), 4px  0  6px -2px rgba(0, 0, 0, 0.05)',
    },
    drawerContainer: {
        overflow: 'auto',
    },

    sidebarNav: {
        padding: theme.spacing(2),
    },

    nav: {
        marginTop: theme.spacing(2),
    },
}));
