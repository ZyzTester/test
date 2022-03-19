import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const myTheme = merge({}, defaultTheme, {
    palette: {
        primary: yellow,
        secondary: yellow,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'yellow', // Some CSS
            },
        },
    },
});

export default myTheme