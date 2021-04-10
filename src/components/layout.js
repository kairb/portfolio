import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import MobileNav from './MobileNav/MobileNav';
import theme from '../theme';
import './layout.css';
import DesktopNav from './DesktopNav';

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
  desktopNav: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '20vw',
      padding: '0px',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      marginRight: '30vw',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    justifySelf: 'flex-end',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulPerson {
        id
        name
        firstName
      }
    }
  `);

  return (
    <div className={classes.app}>
      <DesktopNav />
      <main className={classes.main}>
        <MobileNav />
        {children}
        <footer className={classes.footer}>
          {`${data.contentfulPerson.name} ${new Date().getFullYear()}`}
        </footer>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
