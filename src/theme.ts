import { createTheme, virtualColor, Button, AppShell } from '@mantine/core';
import { redpink, orange, lavender, lightblue } from './colors';

export const theme = createTheme({
  
  colors: {
    redpink, // use 5
    orange, // use 4
    lavender, // use 3
    lightblue, // use 2

    text: virtualColor({
      name: 'text',
      dark: 'gray',
      light: 'blue',
    }),
  },

  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Fira Code, monospace',
  
  autoContrast: true,
  cursorType: 'pointer',

  defaultGradient:{ from: "redpink.5", to: "orange.4", deg: 45 },
  
  components: {
    AppShell: AppShell.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        main: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        header: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        footer: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        aside: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        navbar: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
        asideSection: {
          backgroundColor: theme.colors.text[0],
          transition: 'background-color 0.3s ease',
        },
      }),

    }),
  },
});
