import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationContent from '../NavigationContent';

const useStyles = makeStyles({
  desktopNav: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '25vw',
    padding: '20px',
    backgroundColor: 'white',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const DesktopNav = ({person}) => {
  const classes = useStyles();

  return (
    <div className={classes.desktopNav}>
      <NavigationContent person={person} />
    </div>
  );
};

export default DesktopNav;
