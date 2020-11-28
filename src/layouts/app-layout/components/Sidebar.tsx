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
} from '@material-ui/core';
import { InboxRounded, MailRounded } from '@material-ui/icons';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const Sidebar = ({ className, ...restProps }: SidebarProps) => {
    const classes = useStyles();

    return (
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
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
            </div>
        </Drawer>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));
