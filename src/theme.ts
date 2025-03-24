import { createTheme, MantineColorsTuple, virtualColor } from '@mantine/core';

const redpink: MantineColorsTuple = [
  '#ffe7f2',
  '#ffcfde',
  '#ff9dba',
  '#fc6894',
  '#fa3b73',
  '#f91e5f', // primary
  '#f90954',
  '#df0045',
  '#c7003c',
  '#af0032'
];

const orange: MantineColorsTuple = [
  '#ffece4',
  '#ffd8cd',
  '#ffaf9c',
  '#fc8467',
  '#fa5f3a', // primary
  '#fa481d',
  '#fa3b0d',
  '#df2c02',
  '#c72400',
  '#ae1900'
];

// const white: MantineColorsTuple = [
//   '#f4f4f5', // primary
//   '#e6e6e6',
//   '#cacaca',
//   '#adadae',
//   '#949498',
//   '#85858a',
//   '#7d7d84',
//   '#6b6a72',
//   '#5e5e67',
//   '#51515c'
// ];

const lavender: MantineColorsTuple = [
  '#ebedff',
  '#d2d6fe',
  '#a3aaf8', // primary
  '#717bf2',
  '#4754ee',
  '#2c3bec',
  '#1e2eec',
  '#1121d2',
  '#081dbd',
  '#0018a6'
];

const lightblue: MantineColorsTuple = [
  '#e8f2ff',
  '#d1e1ff',
  '#a2c0f9', // primary
  '#709df4',
  '#467ff0',
  '#2c6cee',
  '#1d63ee',
  '#0e53d5',
  '#0149bf',
  '#003fa9'
];
export const theme = createTheme({
  
  colors: {
    redpink: redpink,
    orange: orange,
    lavender: lavender,
    lightblue: lightblue,
    
  },
  
});
