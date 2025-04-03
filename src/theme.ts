import { createTheme, virtualColor, } from '@mantine/core';
import { redpink, orange, lavender, lightblue, } from './colors';

export const theme = createTheme({

  colors: {
    redpink,
    orange,
    lavender,
    lightblue,

    gradient1: virtualColor({
      name: 'gradient1',
      dark: 'lavender',
      light: 'redpink',
    }),

    gradient2: virtualColor({
      name: 'gradient2',
      dark: 'lightblue',
      light: 'orange',
    }),
  },

  primaryColor: 'dark',
  primaryShade: { dark: 0, light: 6 },

  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Fira Code, monospace',
  
  autoContrast: true,
  cursorType: 'default',
  
  components: {
  },
});
