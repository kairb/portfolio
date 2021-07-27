import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import theme from '../../theme';
import Input from '../Input/Input';
import emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    textAlign: 'left',
    background: 'white',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px 0px',
    borderRadius: '10px',
    boxShadow: '0 0 8px #7f7f7f',
    '&rc-anchor-container': {
      width: '300px',
    },
    '& button': {
      height: '74px',
      width: '100%',
      // borderRadius: '8px',
      [theme.breakpoints.up('md')]: {
        // width: '304px',
        width: '50%',
      },
    },
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      '& :first-child': {
        paddingRight: '5px',
      },
      '& :nth-child(2)': {
        paddingLeft: '5px',
      },
    },
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
  const [error, setError] = useState(false);
  const recaptchaRef = useRef();

  const handleSubmit = async data => {
    try {
      const token = await recaptchaRef.current.executeAsync();
      setIsSubmitting(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          'template_dg04yxb',
          {
            name: data.name,
            email: data.email,
            message: data.message,
            'g-recaptcha-response': token,
          },
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(response => {
          setSubmitted(true);
        });
    } catch (_err) {
      setError(true);
      setIsSubmitting(false);
    }
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

      <Input
        label="Message:"
        type="textarea"
        register={register('message', { required: true })}
        placeholder="john.doe@email.com"
        error={errors.message}
        errorMessage="Please enter a message"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? <CircularProgress /> : 'Submit'}
      </Button>

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
      />
      {error && <p>Something went wrong, please try again</p>}
    </form>
  );
};

export default ContactForm;
