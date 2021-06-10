import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '10px 0px',
  },
  textInput: {
    height: '40px',
  },
  textarea: {
    width: '100%',
    resize: 'none',
  },
  label: {
    margin: '10px 0px', // not working
  },
  errorHighlight: {
    borderColor: theme.palette.formValidationError,
  },
  red: {
    color: 'red',
  },
}));

const Input = ({ type, register, placeholder, label, error, errorMessage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={`${classes.label} ${error ? classes.red : ''} `}>{label}</p>
      {type === 'text' && (
        <input
          className={`${classes.textInput} ${
            error ? classes.errorHighlight : ''
          }`}
          type={type}
          {...register}
          placeholder={placeholder}
        />
      )}
      {type === 'textarea' && (
        <textarea
          className={`${classes.textarea} ${
            error ? classes.errorHighlight : ''
          }`}
          {...register}
          rows="5"
        ></textarea>
      )}
      {error && <label className={classes.red}>{errorMessage}</label>}
    </div>
  );
};

export default Input;
