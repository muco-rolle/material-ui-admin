import React from 'react';
import {
    Drawer,
    ListItem,
    ListItemText,
    makeStyles,
    Theme,
    Toolbar,
    Divider,
    ListItemIcon,
    List,
    Hidden,
} from '@material-ui/core';
import { InboxRounded, MailRounded } from '@material-ui/icons';

import ScrollBar from 'react-perfect-scrollbar';

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
                        <List>
                            {[
                                'Dashboard',
                                'Kanban',
                                'Starred',
                                'Send email',
                                'Drafts',
                                'Settings',
                                'Projects',
                                'Mail',
                                'Chat',
                            ].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxRounded />
                                        ) : (
                                            <MailRounded />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map(
                                (text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? (
                                                <InboxRounded />
                                            ) : (
                                                <MailRounded />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                )
                            )}
                        </List>
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
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));
