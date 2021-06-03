import React, { useState } from 'react';
import SEO from '../components/seo';
// import makeStyles from '@material-ui/core';
import ContactForm from '../components/ContactForm/ContactForm';

const SecondPage = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <SEO title="Contact" />
      {submitted ? (
        <h1>Thank you! I'll be in touch shortly</h1>
      ) : (
        <>
          <h1>Contact</h1>
          <h2>
            Doing something cool? feel free to drop me a message and I'll get back
            to you as soon as possible
          </h2>
          <ContactForm setSubmitted={setSubmitted} />
        </>
      )}
    </>
  );
};

export default SecondPage;
