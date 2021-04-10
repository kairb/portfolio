import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import theme from '../../theme';
import links from '../../links.json';

const useStyles = makeStyles({
  desktop: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '30vw',
    padding: '20px',
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  activeLink: {
    color: 'black',
  },
});

const DesktopNav = () => {
  const classes = useStyles();
  return (
    <header className={classes.desktop}>
      <div className={classes.links}>
        {links.links.map(link => (
          <Link to={`${link.slug}`} className={classes.activeLink}>
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default DesktopNav;
