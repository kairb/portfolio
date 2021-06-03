import React from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  input: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '10px 0px',

    [theme.breakpoints.up('md')]: {
      width: '49%',
    },
    '& input': {
      height: '40px',
      margin: '10px 0px',
    },
  },
  error: {
    color: 'red',
  },
});

const Input = ({ type, register, placeholder, label, error, errorMessage }) => {
  const classes = useStyles();

  return (
    <div className={classes.input}>
      <p>{label}</p>
      <input type={type} {...register} placeholder={placeholder} />
      {error && <label className={classes.error}>{errorMessage}</label>}
    </div>
  );
};

export default Input;
