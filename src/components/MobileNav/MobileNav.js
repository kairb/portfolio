import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilePopup from './MobilePopup';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  mobile: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 20px 0px 0px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const MobileNav = ({ person }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const menuInteraction = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className={classes.mobile}>
        <MenuIcon onClick={menuInteraction} />
      </header>
      {open && <MobilePopup person={person} setOpen={setOpen} />}
    </>
  );
};

export default MobileNav;
