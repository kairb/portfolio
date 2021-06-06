/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

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
