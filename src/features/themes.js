/*
    Light/Dark Themme with toggle and icon
*/

import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

export default function App() {
    const [theme, setTheme] = useState(true)
    const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />
    const appliedTheme = createTheme(theme ? light : dark)
    return (
        <ThemeProvider theme={appliedTheme}>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => setTheme(!theme)}
            >
                {icon}
            </IconButton>
        </ThemeProvider>
    );
}

export const light = {
    palette: {
        type: 'light',
    },    
}

export const dark = {
    palette: {
        type: 'dark',
    },
}