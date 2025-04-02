import { createTheme, virtualColor, AppShell } from '@mantine/core';
import { redpink, orange, lavender, lightblue, } from './colors';

export const theme = createTheme({
  
  colors: {
    redpink, // use 5
    orange, // use 4
    lavender, // use 3
    lightblue, // use 2

    text: virtualColor({
      name: 'text',
      dark: 'blue',
      light: 'dark',
    }),
  },

  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Fira Code, monospace',
  
  autoContrast: true,
  cursorType: 'pointer',

  // defaultGradient:{ from: "redpink", to: "orange", deg: 45 },
  
  components: {
    AppShell: AppShell.extend({
      styles: (theme) => ({
        main: {
          backgroundColor: theme.colors.text[0],
        },
        header: {
          backgroundColor: theme.colors.text[0],
          color: theme.colors.text[5],
        },
        navbar: {
          backgroundColor: theme.colors.text[0],
          color: theme.colors.text[5],
        },
      }),

    }),
  },
});
