// src/theme.js
import { createTheme } from '@mui/material/styles';
import { pink, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],       // default pink
      light: pink[300],      // hover / lighter shade
      dark: pink[700],       // active / darker shade
      contrastText: '#fff',  // text on primary buttons
    },
    secondary: {
      main: pink[200],       // softer accent
      light: pink[100],
      dark: pink[400],
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
        default: '#ffe4e1',  // <-- your new page background
        paper:    '#ffffff',         // card/panel background
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },
});
