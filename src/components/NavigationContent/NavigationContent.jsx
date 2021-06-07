import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import links from '../../links.json';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    height: '100%',
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
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: '100px',
    borderRadius: '50%',
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
    },
  },
});

const NavigationContent = ({ person }) => {
  const classes = useStyles();
  const {
    name,
    jobTitle,
    image: {
      fields: {
        file: { url },
      },
    },
  } = person;
  return (
    <header className={classes.root}>
      <div className={classes.profile}>
        <div>
          <img className={classes.profileImage} src={url} />
        </div>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
      </div>
      <div>
        {links.links.map(({ name, slug }) => (
          <Link className={classes.link} key={name} href={slug}>
            <h1>{name}</h1>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavigationContent;
