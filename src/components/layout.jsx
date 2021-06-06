import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import MobileNav from './MobileNav/MobileNav';
import theme from '../theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DesktopNav from './DesktopNav/DesktopNav';

const useStyles = makeStyles({
  app: {
    position: 'relative',
    backgroundColor: '#E9EDEE',
    fontFamily: 'Poppins, sans-serif',
    '& h1': {
      fontSize: '32px',
      fontWeight: 300,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '40px',
      },
    },
    '& h2': {
      fontSize: '24px',
      fontWeight: 300,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
    },
    '& h3': {
      fontSize: '16px',
      fontWeight: 200,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    '& p': {
      fontSize: '13px',
      fontWeight: 300,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '25vw',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'flex-end',
  },
});

const Layout = ({ children }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulPerson {
        name
      }
    }
  `);

  return (
    <div className={classes.app}>
      {!isMobile && <DesktopNav />}
      <main className={classes.main}>
        {isMobile && <MobileNav />}

        {children}
        <footer className={classes.footer}>
          {`${data.contentfulPerson.name} ${new Date().getFullYear()}`}
        </footer>
      </main>
    </div>
  );
};


export default Layout;
