import React from 'react';
import Head from 'next/head';
import App, { AppProps, AppInitialProps, AppContext } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Layout from '../components/layout';
import { getContentByID } from '../utils/contentfulAPI';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  console.log(pageProps.person)
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Kai Roper-Blackman</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout person={pageProps.person}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  const data = await getContentByID('2phncHTZHxYNFSLwpjZUuw');
  appProps.pageProps = { person: data.fields };
  return {
    ...appProps,
  };
};
