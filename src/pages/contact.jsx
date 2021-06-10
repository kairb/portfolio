import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    height: '100vh',
    background: `linear-gradient(345deg, ${theme.palette.blue} 50%, ${theme.palette.background} 50%)`,
  },
  contact: {
    width: '70%',
  },
}));
const Contact = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className={classes.root}>
      {submitted ? (
        <h1>Thank you! I'll be in touch shortly</h1>
      ) : (
        <>
          <h1>Contact</h1>
          <h2>Doing something cool? Get in contact!</h2>
          <div className={classes.contact}>
            <ContactForm setSubmitted={setSubmitted} />
          </div>
        </>
      )}
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Contact;
