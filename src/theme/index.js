import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#e64a19',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
    },
    h2: {
      fontFamily: 'Oswald',
    },
  },
});