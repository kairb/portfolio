import { makeStyles } from '@material-ui/core';
import React from 'react';
import Technology from '../Technology';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    // width: "100%",
    backgroundColor: 'white',
    borderRadius: '30px',
    boxShadow: '0 0 8px #7f7f7f',
    padding: '20px',
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
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
  },
  tech: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  const { company, role, from, to, description, technologies } = project;
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>{company}</h1>
        <h2>{role}</h2>
        <h3>{`${convertDate(from)} - ${convertDate(to)}`}</h3>
      </div>
      <div className={classes.info}>
        <div className={classes.tech}>
          {technologies.map(random => (
            <Technology technology={random} />
          ))}
        </div>
        <p>{description.description}</p>
      </div>
    </div>
  );
};

export default Project;
