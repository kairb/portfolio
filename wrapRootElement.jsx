import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles/';
import theme from './src/theme';
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
