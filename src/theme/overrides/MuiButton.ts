import { theme } from 'theme';
import { shadows } from 'utils';

export const MuiButton = {
    contained: {
        boxShadow: shadows.sm,
        '&:hover': {
            boxShadow: shadows.none,
        },
    },
};
