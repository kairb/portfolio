import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles/';
import theme from './src/theme';
import Layout from './src/components/layout';
import CssBaseline from '@material-ui/core/CssBaseline';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>{element}</Layout>
  </ThemeProvider>
);
