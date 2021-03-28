import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import Header from './header/Header';
import theme from '../theme';
import './layout.css';


const useStyles = makeStyles({
  app: {
    backgroundColor: '#E9EDEE',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Poppins, sans-serif',
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      padding: '0 150px',
    },
    '& h1': {
      fontSize: '32px',
      fontWeight: 400,
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
      fontWeight: 400,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
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
      <Header />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        {`${data.contentfulPerson.name} ${new Date().getFullYear()}`}
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
