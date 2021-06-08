import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { LinkedIn, GitHub } from '@material-ui/icons';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h1': {
      fontWeight: '400',
      color: 'grey',
      marginBottom: '5px',
      '&:hover': {
        color: 'black',
      },
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
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
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      padding: '5px',
      color: 'black',
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
    },
  },
  link: {
    '&:hover': { cursor: 'pointer' },
  },
}));

const NavigationContent = ({ person, close, links }) => {
  const classes = useStyles();
  const {
    name,
    jobTitle,
    image: {
      fields: {
        file: {
          url,
          details: { image },
        },
      },
    },
  } = person;

  const {
    links: { links: linkArray },
  } = links;
  const imageWidth = 300;
  const imageHeight = image.height / (image.width / imageWidth);
  return (
    <header className={classes.root}>
      <div className={classes.profile}>
        <div>
          <Image
            className={classes.profileImage}
            src={`https:${url}`}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
        <div className={classes.socialLinks}>
          <a href="https://github.com/kairb">
            <GitHub fontSize="default" />
          </a>
          <a href="https://www.linkedin.com/in/kai-roper-blackman/">
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
      <div className={classes.links}>
        {linkArray.map(({ name, slug }) => (
          <Link key={name} href={slug}>
            <h1 className={classes.link} onClick={() => close(false)}>
              {name}
            </h1>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavigationContent;
