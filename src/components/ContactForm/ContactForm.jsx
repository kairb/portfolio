import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import theme from '../../theme';
import Input from '../Input/Input';
import emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReCAPTCHA from 'react-google-recaptcha';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0px',
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
  const [recapChecked, setRecapChecked] = useState(false);
  const [recapError, setRecapError] = useState(false);

  function recapInteraction(value) {
    setRecapChecked(value);
    setRecapError(!value);
  }
  const handleSubmit = data => {
    if (recapChecked) {
      setIsSubmitting(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          'template_dg04yxb',
          {
            name: data.name,
            email: data.email,
            message: data.message,
          },
          process.env.NEXT_PUBLIC_USER_ID
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
    } else {
      setRecapError(true);
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

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
        onChange={recapInteraction}
      />
      {recapError && <p>Are you a robot?</p>}
      <button type="submit" className={classes.button} disabled={isSubmitting}>
        {isSubmitting ? <CircularProgress /> : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
