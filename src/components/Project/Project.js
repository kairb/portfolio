import { makeStyles } from '@material-ui/core';
import React from 'react';
import Technology from '../Technology';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 0 8px #7f7f7f',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
    },
  },
  tech: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      borderTop: '1px solid #E9EDEE',
      justifyContent: 'flex-start',
      paddingTop: '10px',
    },
  },
  techLogo: {
    width: '50px',
    height: '50px',
    marginRight: '5px',
  },
  companyLogo: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: '100px',
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '150px',
      minHeight: '150px',
      maxWidth: '150px',
      maxHeight: '150px',
      paddingRight: '10px',
      '& img': {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
      },
    },
  },
});

const convertDate = iso => {
  const date = new Date(iso);
  return `${date.toLocaleString('default', {
    month: 'short',
  })} ${date.getFullYear()}`;
};

const Project = ({ project }) => {
  const classes = useStyles();
  const {
    company,
    role,
    from,
    to,
    description,
    technologies,
    companyLogo,
  } = project;
  return (
    <div className={classes.root}>
      {companyLogo && (
        <div className={classes.companyLogo}>
          <img src={companyLogo?.file.url} />
        </div>
      )}

      <div>
        <div className={classes.title}>
          <h1>{company}</h1>
          <h2>{role}</h2>
          <h3>{`${convertDate(from)} - ${convertDate(to)}`}</h3>
        </div>
        <div className={classes.info}>
          <div className={classes.tech}>
            {technologies.map(logo => (
              <img
                className={classes.techLogo}
                src={logo.logo.file.url}
                alt={`${logo.technology} logo`}
              ></img>
            ))}
          </div>
          <p>{description.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;