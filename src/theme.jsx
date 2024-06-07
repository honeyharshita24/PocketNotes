import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '35px',
      fontWeight: 500,
      color: '#263238',
    },
    h2: {
      fontSize: '24px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '32.04px',
    },
    h4: {
      fontSize: '29px',
      fontWeight: 500,
      lineHeight: '46.45px',
      color: '#000000'
    },
    h5: {
      fontSize: '27.31px',
      fontWeight: 400,
      lineHeight: '43.75px',
      color: '#000000',
    },
  },
});

export default theme;
