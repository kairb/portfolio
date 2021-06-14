import React from 'react';
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
    '& h4': {
      fontSize: '12px',
      fontWeight: 200,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
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
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
      marginLeft: '320px',
    },
  },
});

const Layout = ({ children, person, links }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <div className={classes.app}>
      {!isMobile && <DesktopNav person={person} links={links} />}
      <main className={classes.main}>
        {isMobile && <MobileNav person={person} links={links} />}
        {children}
      </main>
    </div>
  );
};

export default Layout;
