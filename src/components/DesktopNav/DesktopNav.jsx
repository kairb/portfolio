import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import theme from '../../theme';
import links from '../../links.json';

const useStyles = makeStyles({
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    top: '0',
    right: '0',
    width: '20vw',
    marginLeft: '20vw',
    backgroundColor: 'pink',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& h1': {
      fontWeight: '400',
      color: 'grey',
      marginBottom: '5px',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& h1:hover': {
      color: 'black',
    },
  },
  activeLink: {
    '& h1': {
      color: 'red',
    },
  },
});

const DesktopNav = () => {
  const classes = useStyles();
  return (
    <header className={classes.desktop}>
      {links.links.map(link => (
        <Link to={`${link.slug}`} activeClassName={classes.activeLink}>
          <h1>{link.name}</h1>
        </Link>
      ))}
    </header>
  );
};

export default DesktopNav;
