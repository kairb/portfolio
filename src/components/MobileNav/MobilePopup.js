import React from 'react';
import { Link } from 'gatsby';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';

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
  links: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      fontWeight: '400',
      color: 'grey',
    },
    '& a': {
      textDecoration: 'none',
      margin: '10px',
    },
  },
  activeLink: {
    '& h1': {
      color: 'black',
    },
  },
  close: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const MobilePopup = ({ setOpen, links }) => {
  const classes = useStyles();
  const close = () => setOpen(false);
  return (
    <div className={classes.root}>
      <div className={classes.close}>
        <CloseIcon onClick={close} />
      </div>
      <div className={classes.links}>
        {links.map(link => (
          <Link
            to={`${link.slug}`}
            activeClassName={classes.activeLink}
            onClick={close}
            key={`mobile${link.name}`}
          >
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobilePopup;
