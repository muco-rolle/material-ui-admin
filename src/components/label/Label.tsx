import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, colors, TypographyProps, Theme } from '@material-ui/core';

interface LabelProps extends React.HTMLAttributes<HTMLElement> {
    variant?: string;
    color?: string;
    shape?: string;
    style?: any;
}

export const Label = (props: LabelProps) => {
    const {
        className,
        variant,
        color,
        shape,
        children,
        style,
        ...restProps
    } = props;

    const classes = useStyles();

    const rootClassName = clsx(
        {
            [classes.root]: true,
            [classes.rounded]: shape === 'rounded',
        },
        className
    );

    const finalStyle = { ...style };

    if (variant === 'contained') {
        finalStyle.backgroundColor = color;
        finalStyle.color = '#FFF';
    } else {
        finalStyle.border = `1px solid ${color}`;
        finalStyle.color = color;
    }

    return (
        <Typography
            {...restProps}
            className={rootClassName}
            style={finalStyle}
            variant="overline"
        >
            {children}
        </Typography>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
        flexShrink: 0,
        borderRadius: theme.shape.borderRadius,
        lineHeight: '10px',
        fontSize: '10px',
        height: 20,
        minWidth: 20,
        whiteSpace: 'nowrap',
        padding: theme.spacing(0.5, 1),
    },
    rounded: {
        borderRadius: 10,
        padding: theme.spacing(0.5),
    },
}));
