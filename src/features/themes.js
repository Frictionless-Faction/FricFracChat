/*
    Light/Dark Themme with toggle and icon
*/

import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoonIcon from '@material-ui/icons/Brightness3';
import RoundSunIcon from '@material-ui/icons/WbSunnyRounded';

export default function App() {
    const [theme, setTheme] = useState(true)
    const icon = !theme ? <RoundSunIcon /> : <MoonIcon />
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