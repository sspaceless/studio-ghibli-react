import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },

  palette: {
    primary: {
      main: '#80d7f8',
    },
    secondary: {
      main: '#00aef0',
    },
    text: {
      primary: '#004d69',
      secondary: 'rgba(0, 77, 105, 0.6)',
      disabled: 'rgba(0, 77, 105, 0.38)',
    },
    background: {
      default: '#00aef0',
    },

    action: {},
  },
});

export default defaultTheme;
