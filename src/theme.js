import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ColorsManager } from './resources/ColorsManager';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: ColorsManager.primary,
    },
    secondary: {
      main: ColorsManager.secondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
