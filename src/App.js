import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import Layout from './components/organismos/Layout/view';
import { GlobalStyle } from './utils/reset';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Layout />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
