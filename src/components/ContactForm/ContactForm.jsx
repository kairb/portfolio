import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import theme from '../../theme';
import Input from '../Input/Input';
import emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0px',
    '& textarea': {
      width: '100%',
      margin: '10px 0px',
      resize: 'none',
    },
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },

  button: {
    height: '60px',
    margin: '20px 50px',
    backgroundColor: theme.palette.buttonColor,
    borderRadius: '8px',
  },
});

const ContactForm = ({ setSubmitted }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = data => {
    setIsSubmitting(true);
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        process.env.GATSBY_SERVICE_ID,
        'template_dg04yxb',
        templateParams,
        process.env.GATSBY_USER_ID
      )
      .then(
        response => {
          setIsSubmitting(false);
          setSubmitted(true);
        },
        err => {
          alert('Oops- something went wrong. Please try again');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form onSubmit={validate(handleSubmit)} className={classes.form}>
      <div className={classes.row}>
        <Input
          label="Name:"
          type="text"
          register={register('name', { required: true })}
          placeholder="John Doe"
          error={errors.name}
					errorMessage="Please enter your name"
        />
        <Input
          label="Email Adress:"
          type="text"
          register={register('email', { required: true, pattern: /^\S+@\S+$/ })}
          placeholder="john.doe@email.com"
          error={errors.email}
					errorMessage="Please enter a valid email adress"

        />
      </div>
      <label>Message: </label>
      <textarea
        {...register('message', { required: true })}
        rows="7"
      ></textarea>
      <button type="submit" className={classes.button} disabled={isSubmitting}>
        {isSubmitting ? <CircularProgress /> : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
