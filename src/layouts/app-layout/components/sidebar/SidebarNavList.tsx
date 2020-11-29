import { ReactNode } from 'react';
import clsx from 'clsx';
import { List, makeStyles, Theme, Typography } from '@material-ui/core';
import { useRouter } from 'hooks';
import React from 'react';
import { matchPath } from 'react-router-dom';
import { SidebarNavItem } from './SidebarNavItem';

interface SidebarNavListProps extends React.HTMLAttributes<HTMLElement> {
    component: any;
    pages: any;
    title: string;
}

const reduceChildRoutes = (props: {
    router: any;
    items: any;
    page: any;
    depth: any;
}) => {
    const { router, items, page, depth } = props;

    if (page.children) {
        const open = matchPath(router.location.pathname, {
            path: page.href,
            exact: false,
        });

        items.push(
            <SidebarNavItem
                depth={depth}
                icon={page.icon}
                key={page.title}
                label={page.label}
                open={Boolean(open)}
                title={page.title}
            >
                <NavigationList
                    depth={depth + 1}
                    pages={page.children}
                    router={router}
                />
            </SidebarNavItem>
        );
    } else {
        items.push(
            <SidebarNavItem
                depth={depth}
                href={page.href}
                icon={page.icon}
                key={page.title}
                label={page.label}
                title={page.title}
                open={false}
            />
        );
    }

    return items;
};

const NavigationList = (props: any) => {
    const { pages, ...rest } = props;

    return (
        <List>
            {pages.reduce(
                (items: any, page: any) =>
                    reduceChildRoutes({ items, page, ...rest }),
                []
            )}
        </List>
    );
};

export const SidebarNavList = (props: SidebarNavListProps) => {
    const {
        title,
        pages,
        className,
        component: Component,
        ...restProps
    } = props;

    const classes = useStyles();
    const router = useRouter();

    return (
        <Component className={clsx(classes.root, className)} {...restProps}>
            {title && <Typography variant="overline">{title}</Typography>}

            <NavigationList depth={0} pages={pages} router={router} />
        </Component>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(3),
    },
}));
