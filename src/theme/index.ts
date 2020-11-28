import { createMuiTheme } from '@material-ui/core';

// import overrides from './overrides';

export const theme = createMuiTheme({
    palette: {
        primary: {
            '50': '#ffe8fd',
            '100': '#efc3eb',
            '200': '#e29ddc',
            '300': '#d676cc',
            '400': '#c950bd',
            '500': '#af36a3',
            '600': '#892980',
            '700': '#631d5c',
            '800': '#3d1039',
            '900': '#190316',
        },

        text: {
            primary: '#2D3748',
        },

        grey: {
            '50': '#F7FAFC',
            '100': '#EDF2F7',
            '200': '#E2E8F0',
            '300': '#CBD5E0',
            '400': '#A0AEC0',
            '500': '#718096',
            '600': '#4A5568',
            '700': '#2D3748',
            '800': '#1A202C',
            '900': '#171923',
        },
    },
    typography: {
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        h1: {
            fontWeight: 700,
            fontSize: '4.209rem',
            letterSpacing: '-0.24px',
        },
        h2: {
            fontWeight: 700,
            fontSize: '3.157rem',
            letterSpacing: '-0.24px',
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.369rem',
            letterSpacing: '-0.06px',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.777rem',
            letterSpacing: '-0.06px',
        },
        h5: {
            fontWeight: 700,
            fontSize: '1.333rem',
            letterSpacing: '-0.05px',
        },
        h6: {
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '-0.05px',
        },
        subtitle1: {
            fontSize: '1rem',
            letterSpacing: '-0.05px',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: '0.071rem',
            letterSpacing: '-0.05px',
        },
        body1: {
            fontSize: '1rem',
            letterSpacing: '-0.05px',
        },
        body2: {
            fontSize: '0.071rem',
            letterSpacing: '-0.04px',
        },
        button: {
            textTransform: 'none',
        },
        caption: {
            fontSize: '11px',
            letterSpacing: '0.33px',
        },
    },
    // overrides,
});
