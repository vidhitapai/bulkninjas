
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    test :{
        color: "inherit",
        backgroundColor: "transparent",
    },
    palette: {
        type: 'light',
        primary: {
          main: '',
        },
        secondary: {
          main: '#FF5A5F',
        },
        background: {
          default: '#EBF0FA',
        },
      },
      typography: {
        h1: {
          fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        },
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
      },
      props: {
        MuiAppBar: {
          color: 'transparent',
        },
      },
      overrides: {
        MuiSwitch: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + $track': {
                opacity: 1,
                border: 'none',
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 13,
            border: '1px solid #bdbdbd',
            backgroundColor: '#fafafa',
            opacity: 1,
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        },
      },
      shape: {
        borderRadius: 4,
      },
    });
        
export default theme;