import { addDecorator } from '@storybook/react';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/utils/reset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator((Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Story />
      </StylesProvider>
    </ThemeProvider>
  );
});
