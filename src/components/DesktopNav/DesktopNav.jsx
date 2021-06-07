import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationContent from '../NavigationContent';

const useStyles = makeStyles(theme => ({
  desktopNav: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '320px',
    padding: '20px',
    backgroundColor: 'white',
    height: '100vh',
  },
}));

const DesktopNav = ({ person }) => {
  const classes = useStyles();

  return (
    <div className={classes.desktopNav}>
      <NavigationContent person={person} close={() => {}} />
    </div>
  );
};

export default DesktopNav;
