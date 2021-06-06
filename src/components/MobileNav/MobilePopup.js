import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import NavigationContent from '../NavigationContent';

const useStyles = makeStyles({
  root: {
    zIndex: '9999',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: '0',
    left: '0',
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const MobilePopup = ({ setOpen }) => {
  const classes = useStyles();
  const close = () => setOpen(false);
  return (
    <div className={classes.root}>
      <div className={classes.close}>
        <CloseIcon onClick={close} />
      </div>
      <NavigationContent />
    </div>
  );
};

export default MobilePopup;
