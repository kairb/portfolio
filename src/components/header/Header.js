import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';
import HeaderUnderline from './HeaderUnderline';
import theme from '../../theme';
import links from './links.json';
import MobilePopup from './MobilePopup';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
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
  },
  activeLink: {
    '& h1': {
      color: 'black',
    },
  },
  mobile: {
    display: 'flex',
    justifyContent: 'flex-end',
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

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const menuInteraction = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className={classes.desktop}>
        {links.links.map(link => (
          <Link to={`${link.slug}`} activeClassName={classes.activeLink}>
            <h1>{link.name}</h1>
            <HeaderUnderline route={`${link.slug}`} />
          </Link>
        ))}
      </header>
      <header className={classes.mobile}>
        <MenuIcon onClick={menuInteraction} />
      </header>
      {open && <MobilePopup setOpen={setOpen} links={links.links} />}
    </>
  );
};

export default Header;
