import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import HeaderUnderline from './HeaderUnderline';
import theme from '../../theme';
import links from '../../links.json';
import MobilePopup from './MobilePopup';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  activeLink: {
    '& h1': {
      color: 'black',
    },
  },
  mobile: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const MobileNav = () => {
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
      {open && <MobilePopup setOpen={setOpen} links={links.links} />}
    </>
  );
};

export default MobileNav;
